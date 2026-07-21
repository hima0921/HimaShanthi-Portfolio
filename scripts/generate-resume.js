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

// --- Section builders ------------------------------------------------------

function buildEducation() {
  const parts = data.education.map((e, i) => {
    let block = `\\begin{twocolentry}{\n    ${esc(e.start)} -- ${esc(e.end)}\n}\n    \\textbf{${esc(
      e.school
    )}}, ${esc(e.degree)}\n\\end{twocolentry}`;
    if (e.notes && e.notes.length) {
      const noteLine = e.notes
        .map((n) => {
          const [label, ...rest] = n.split(":");
          return rest.length ? `\\textbf{${esc(label)}:}${esc(rest.join(":"))}` : esc(n);
        })
        .join(" \\quad ");
      block += `\n\n\\vspace{0.08 cm}\n\\begin{onecolentry}\n    \\begin{highlights}\n        \\item ${noteLine}\n    \\end{highlights}\n\\end{onecolentry}`;
    }
    return block;
  });
  return `\\section{Education}\n\n${parts.join("\n\n\\vspace{0.08 cm}\n\n")}`;
}

function buildSkills(cv) {
  const cats = [...data.skills].sort((a, b) => a.cvOrder[cv] - b.cvOrder[cv]);
  const items = cats
    .map((c) => `        \\item \\textbf{${esc(c.category)}:} ${c.items.map(esc).join(", ")}`)
    .join("\n");
  return `\\section{Skills}\n\n\\begin{onecolentry}\n    \\begin{highlights}\n${items}\n    \\end{highlights}\n\\end{onecolentry}`;
}

function buildProjects(cv) {
  const projects = data.projects
    .filter((p) => p.cvOrder && p.cvOrder[cv] !== undefined)
    .sort((a, b) => a.cvOrder[cv] - b.cvOrder[cv]);

  const blocks = projects.map((p) => {
    const link = p.resumeLink
      ? `\\href{${p.resumeLink.href}}{\\textbf{\\textit{${esc(p.resumeLink.label)}}}}`
      : "";
    return (
      `\\begin{twocolentry}{\n    ${link}\n}\n    \\textbf{${esc(p.title)}}\n\\end{twocolentry}\n\n` +
      `\\vspace{0.10 cm}\n${highlights(p.bullets)}`
    );
  });

  const footer = `\\vspace{0.10 cm}\n\\begin{onecolentry}\n    \\textit{Additional projects and full write-ups available at} \\href{${data.personal.portfolio}}{my portfolio}.\n\\end{onecolentry}`;

  return `\\section{Projects}\n\n${blocks.join("\n\n\\vspace{0.18 cm}\n\n")}\n\n\\vspace{0.18 cm}\n\n${footer}`;
}

function buildResearchExperience() {
  const blocks = data.researchExperience.map((r) => {
    return (
      `\\begin{twocolentry}{\n        ${esc(r.start)} -- ${esc(r.end)}\n    }\n` +
      `    \\textbf{${esc(r.role)}}, \\textit{${esc(r.lab)}}, ${esc(r.org)}\n\\end{twocolentry}\n\n` +
      `\\vspace{0.10 cm}\n${highlights(r.bullets)}`
    );
  });
  return `\\section{Research Experience}\n\n${blocks.join("\n\n\\vspace{0.18 cm}\n\n")}`;
}

function buildWorkExperience() {
  const blocks = data.workExperience.map((w) => {
    return (
      `\\begin{twocolentry}{\n        ${esc(w.start)} -- ${esc(w.end)}\n    }\n` +
      `    \\textbf{${esc(w.title)}}, ${esc(w.org)} -- ${esc(w.location)}\n\\end{twocolentry}\n\n` +
      `\\vspace{0.10 cm}\n${highlights(w.bullets)}`
    );
  });
  return `\\section{Work Experience}\n\n${blocks.join("\n\n\\vspace{0.18 cm}\n\n")}`;
}

const SECTION_BUILDERS = {
  education: () => buildEducation(),
  skills: (cv) => buildSkills(cv),
  projects: (cv) => buildProjects(cv),
  researchExperience: () => buildResearchExperience(),
  workExperience: () => buildWorkExperience(),
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
  const pdfDest = path.join(ROOT, "public", `${OUTPUT_NAME[cv]}.pdf`);
  fs.copyFileSync(pdfSrc, pdfDest);
  console.log(`✔ Generated ${pdfDest}`);
}

// --- Run ---------------------------------------------------------------------

for (const cv of Object.keys(data.cvConfig)) {
  buildCv(cv);
}
