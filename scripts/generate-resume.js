// generate-resume.js
// Reads resume-data.json, builds LaTeX for each CV version, fills the shared
// template, compiles to PDF via pdflatex, and drops the result into public/.
//
// Usage:  node scripts/generate-resume.js

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const data = JSON.parse(fs.readFileSync(path.join(ROOT, "resume-data.json"), "utf8"));
const template = fs.readFileSync(path.join(ROOT, "templates", "resume-template.tex"), "utf8");

const OUTPUT_NAME = {
  industry: "CV_Industry",
  research: "CV_AI_and_Research",
  full: "CV_Full",
};

// --- LaTeX escaping -------------------------------------------------------
// Escapes characters that are special in LaTeX so plain-English JSON text
// (with things like "&", "%", "$") doesn't break compilation.
function esc(str) {
  if (!str) return "";
  return str
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/&/g, "\\&")
    .replace(/%/g, "\\%")
    .replace(/\$/g, "\\$")
    .replace(/#/g, "\\#")
    .replace(/_/g, "\\_")
    .replace(/\{/g, "\\{")
    .replace(/\}/g, "\\}")
    .replace(/~/g, "\\textasciitilde{}")
    .replace(/\^/g, "\\textasciicircum{}")
    .replace(/--/g, "\u0000DASH\u0000") // protect intentional en-dashes first
    .replace(/\u0000DASH\u0000/g, "--");
}

function highlights(bullets) {
  return (
    "\\begin{onecolentry}\n    \\begin{highlights}\n" +
    bullets.map((b) => `        \\item ${esc(b)}`).join("\n") +
    "\n    \\end{highlights}\n\\end{onecolentry}"
  );
}

// Keep only the items that have a cvOrder for this CV, sorted by it.
function forCv(items, cv) {
  return items
    .filter((x) => x.cvOrder && x.cvOrder[cv] !== undefined)
    .sort((a, b) => a.cvOrder[cv] - b.cvOrder[cv]);
}

// Any entry (project or role) can give a shorter bullet list for one CV with
// "cvBullets": { "industry": [...] }. Otherwise it uses its normal "bullets".
function bulletsFor(item, cv) {
  return (item.cvBullets && item.cvBullets[cv]) || item.bullets;
}

// Roles: current ones first, then ended ones by end date, newest first.
// (cvOrder still decides which roles appear in which CV.)
function monthKey(d) {
  if (!d || d === "Present") return Infinity;
  const [m, y] = d.split("/").map(Number);
  return y * 12 + m;
}
function byRecency(items) {
  return [...items].sort(
    (a, b) => monthKey(b.end) - monthKey(a.end) || monthKey(b.start) - monthKey(a.start)
  );
}

// --- Keeping entries together ----------------------------------------------
// Each entry is wrapped in the template's "keeptogether" environment, which
// forbids page breaks inside it. A title is never split from its bullets, and
// the section heading already stays with the first entry (titlesec adds no
// break after a heading).
function keepTogether(body) {
  // LaTeX can still break a page at a \vspace, so put \nopagebreak in front of
  // every \vspace inside the entry (e.g. between the title and the bullets).
  const glued = body.split("\\vspace{").join("\\nopagebreak\\vspace{");
  return "\\begin{keeptogether}\n" + glued + "\n\\end{keeptogether}";
}
function sectionWithEntries(name, blocks, gap) {
  return "\\section{" + name + "}\n\n" + blocks.map(keepTogether).join("\n\n\\vspace{" + gap + "}\n\n");
}

// --- Section builders ------------------------------------------------------

function buildEducation() {
  const parts = data.education.map((e, i) => {
    let block = `\\begin{entrytitle}{\n    ${esc(e.start)} -- ${esc(e.end)}\n}\n    \\textbf{${esc(
      e.school
    )}}, ${esc(e.degree)}\n\\end{entrytitle}`;
    if (e.notes && e.notes.length) {
      const noteLine = e.notes
        .map((n) => {
          const [label, ...rest] = n.split(":");
          return rest.length ? `\\textbf{${esc(label)}:}${esc(rest.join(":"))}` : esc(n);
        })
        .join(" \\enspace\\textbar\\enspace ");
      block += `\n\n\\vspace{0.08 cm}\n\\begin{onecolentry}\n    \\begin{highlights}\n        \\item ${noteLine}\n    \\end{highlights}\n\\end{onecolentry}`;
    }
    return block;
  });
  return `\\section{Education}\n\n${parts.join("\n\n\\vspace{0.08 cm}\n\n")}`;
}

function buildSkills(cv) {
  // Skill groups without a cvOrder for this CV are left out (same rule as other sections).
  const cats = forCv(data.skills, cv);
  const items = cats
    .map((c) => `        \\item \\textbf{${esc(c.category)}:} ${c.items.map(esc).join(", ")}`)
    .join("\n");
  return `\\section{Skills}\n\n\\begin{onecolentry}\n    \\begin{highlights}\n${items}\n    \\end{highlights}\n\\end{onecolentry}`;
}

function buildProjects(cv) {
  const projects = forCv(data.projects, cv);

  const blocks = projects.map((p) => {
    // A project can give a different bullet list per CV with "cvBullets".
    const bullets = bulletsFor(p, cv);
    const link = p.resumeLink
      ? `\\href{${p.resumeLink.href}}{\\textbf{\\textit{${esc(p.resumeLink.label)}}}}`
      : "";
    // One compact line under the title: tools/libraries, then key methods (for ATS keywords).
    const parts = [];
    if (p.stack && p.stack.length) parts.push(`\\textbf{Tools:} ${p.stack.map(esc).join(", ")}`);
    if (p.methods && p.methods.length) parts.push(`\\textbf{Methods:} ${p.methods.map(esc).join(", ")}`);
    const stackLine = parts.length
      ? `\\vspace{0.03 cm}\n\\begin{onecolentry}\n    \\footnotesize ${parts.join(" \\enspace$\\cdot$\\enspace ")}\n\\end{onecolentry}\n`
      : "";
    return (
      `\\begin{entrytitle}{\n    ${link}\n}\n    \\textbf{${esc(p.title)}}\n\\end{entrytitle}\n\n` +
      stackLine +
      `${stackLine ? "" : "\\vspace{0.10 cm}\n"}${highlights(bullets)}`
    );
  });

  const footer = `\\vspace{0.10 cm}\n\\begin{onecolentry}\n    \\textit{Additional projects and full write-ups available at} \\href{${data.personal.portfolio}}{my portfolio}.\n\\end{onecolentry}`;

  return `${sectionWithEntries("Projects", blocks, "0.12 cm")}\n\n\\vspace{0.12 cm}\n\n${footer}`;
}

function buildResearchExperience(cv) {
  const blocks = byRecency(forCv(data.researchExperience, cv)).map((r) => {
    return (
      `\\begin{entrytitle}{\n        ${esc(r.start)} -- ${esc(r.end)}\n    }\n` +
      `    \\textbf{${esc(r.role)}}, \\textit{${esc(r.lab)}}, ${esc(r.org)}\n\\end{entrytitle}\n\n` +
      `\\vspace{0.10 cm}\n${highlights(bulletsFor(r, cv))}`
    );
  });
  return sectionWithEntries("Research Experience", blocks, "0.18 cm");
}

function buildWorkExperience(cv) {
  const blocks = byRecency(forCv(data.workExperience, cv)).map((w) => {
    return (
      `\\begin{entrytitle}{\n        ${esc(w.start)} -- ${esc(w.end)}\n    }\n` +
      `    \\textbf{${esc(w.title)}}, ${esc(w.org)} -- ${esc(w.location)}\n\\end{entrytitle}\n\n` +
      `\\vspace{0.10 cm}\n${highlights(bulletsFor(w, cv))}`
    );
  });
  return sectionWithEntries("Work Experience", blocks, "0.18 cm");
}

const SECTION_BUILDERS = {
  education: () => buildEducation(),
  skills: (cv) => buildSkills(cv),
  projects: (cv) => buildProjects(cv),
  researchExperience: (cv) => buildResearchExperience(cv),
  workExperience: (cv) => buildWorkExperience(cv),
};

// --- Build one CV version ---------------------------------------------------

function buildCv(cv) {
  const order = data.cvConfig[cv].sectionOrder;
  const content = order.map((section) => SECTION_BUILDERS[section](cv)).join("\n\n");

  const contactLine = [
    `\\mbox{\\hrefWithoutArrow{mailto:${data.personal.email}}{${data.personal.email}}}`,
    `\\mbox{\\hrefWithoutArrow{tel:+1-${data.personal.phone}}{${data.personal.phone}}}`,
    `\\mbox{\\hrefWithoutArrow{${data.personal.linkedin}}{${data.personal.linkedinLabel}}}`,
    `\\mbox{\\hrefWithoutArrow{${data.personal.github}}{${data.personal.githubLabel}}}`,
    `\\mbox{\\hrefWithoutArrow{${data.personal.portfolio}}{${data.personal.portfolioLabel}}}`,
  ].join(" \\,|\\,\n        ");

  let tex = template
    .replace("%%NAME%%", esc(data.personal.name))
    .replace("%%CONTACT_LINE%%", contactLine)
    .replace("%%CONTENT%%", content);

  const buildDir = path.join(ROOT, ".resume-build");
  fs.mkdirSync(buildDir, { recursive: true });
  const texPath = path.join(buildDir, `${cv}.tex`);
  fs.writeFileSync(texPath, tex, "utf8");

  // Run pdflatex twice so cross-references (page counts, etc.) resolve.
  execSync(`pdflatex -interaction=nonstopmode -output-directory="${buildDir}" "${texPath}"`, {
    stdio: "inherit",
  });
  execSync(`pdflatex -interaction=nonstopmode -output-directory="${buildDir}" "${texPath}"`, {
    stdio: "inherit",
  });

  const pdfSrc = path.join(buildDir, `${cv}.pdf`);
  const outName = OUTPUT_NAME[cv] || `CV_${cv}`;
  const pdfDest = path.join(ROOT, "public", `${outName}.pdf`);
  fs.copyFileSync(pdfSrc, pdfDest);
  console.log(`✔ Generated ${pdfDest}`);
}

// --- Run ---------------------------------------------------------------------

for (const cv of Object.keys(data.cvConfig)) {
  buildCv(cv);
}
