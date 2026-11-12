import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Carryover Case Study | Hima Shanthi Rayapati",
  description:
    "Case study: Carryover, a prototype app that helps autistic adults practice everyday tasks, built by Team Haven for the ASU North American AI Challenge.",
}

const REPO = "https://github.com/TeamHavenASU/Carryover"
const DEMO = "https://drive.google.com/file/d/1Sm9PGo85Vt9gKehCgRP6guK9nb9IDeWC/view"

// Source for everything on this page: the team repo's README.md and docs/partner_research.md.

function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <section className="grid md:grid-cols-[120px_1fr] gap-3 md:gap-8 py-10 border-t-2 border-black dark:border-gray-700">
      <div>
        <span className="inline-block text-xs font-black tracking-wide bg-black text-yellow-400 px-2.5 py-1 rounded-full">
          {num}
        </span>
      </div>
      <div className="min-w-0">
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-black dark:text-white mb-4">{title}</h2>
        <div className="space-y-4 leading-relaxed text-gray-700 dark:text-gray-300">{children}</div>
      </div>
    </section>
  )
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span className="text-yellow-500 font-black">▸</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

const B = ({ children }: { children: React.ReactNode }) => (
  <strong className="text-black dark:text-white">{children}</strong>
)

// Example walk-through of heating a meal (from the README).
const mealSteps: React.ReactNode[] = [
  <>The app shows <B>one step at a time</B>, with short text and a picture.</>,
  <>A <B>caution line is always on screen</B> for steps that need one. The resident never has to tap to see it.</>,
  <>If they pause for a while, a calm <B>&ldquo;Want help with this step?&rdquo;</B> offer appears. Help breaks the step into smaller steps.</>,
  <>If a step needs a basic skill they aren&rsquo;t sure about, like reading the cooking time, a <B>short skill card</B> shows first.</>,
  <>As they do a step on their own, <B>help on that step fades</B>. The app <B>asks before reducing help</B> (&ldquo;Want to try with less help next time?&rdquo;).</>,
  <>If they struggle again, <B>the help comes back</B>.</>,
]

type Change = {
  title: string
  from: string
  before: string
  heard: string
  changed: string
  status: { label: string; done: boolean }
}

const changes: Change[] = [
  {
    title: "Help that changes for each person",
    from: "Nov 3 staff meeting",
    before: "At First Place, tasks are taught with the same steps for everyone. But people differ a lot in how much help they need, and where.",
    heard: "Help that adapts to each person would be useful for independent living skills.",
    changed:
      "Each person sees a different amount of help on each step. Help fades after they do a step on their own, and comes back if they struggle. We kept the task analysis approach staff already use.",
    status: { label: "Built (simulated data)", done: true },
  },
  {
    title: "Cautions you don't have to tap",
    from: "Oct 27 site visit + Nov 4 design feedback",
    before: "The stoves in residents' rooms turn off by themselves if nothing happens for a while. Staff said there is nothing like this for the microwave.",
    heard: "Show cautions without having to tap.",
    changed: "Caution lines always show, at every help level.",
    status: { label: "Built", done: true },
  },
  {
    title: "A different microwave",
    from: "Nov 4 design feedback",
    before: "A step can take for granted that the person knows the device in front of them.",
    heard: "A new or different device, like a different microwave, is hard.",
    changed:
      "The first time, the app asks “Is this a microwave you've used before?” and records the answer. The rule to start at the most help when the answer is no is written and tested, but not yet connected in the app.",
    status: { label: "Partly done", done: false },
  },
  {
    title: "Missing basic skills",
    from: "Nov 4 design feedback",
    before: "A step can take for granted a basic skill the person doesn't have yet.",
    heard: "Problem solving is a big hurdle. Clear steps don't help if someone doesn't have the basic skill a step assumes.",
    changed: "Each step lists the skills it needs. If someone isn't sure, a short skill card shows first.",
    status: { label: "Built", done: true },
  },
  {
    title: "Much more detail when needed",
    from: "Nov 4 design feedback",
    before: "Some people need a step broken down much further than the standard small steps.",
    heard:
      "Some people need much more detail. For example, when making a peanut butter sandwich: which hand holds the jar, and which way to turn the lid.",
    changed:
      "On the Staff page, “Ask AI for more detail” breaks a step down further (which hand, which way). A person approves the new steps before any resident sees them. For now, approved detail replaces the standard small steps for everyone doing that task. Saving it per person is planned.",
    status: { label: "Built, with a limit", done: true },
  },
]

function ChangeCard({ c }: { c: Change }) {
  const col = "rounded-lg p-4 text-sm leading-relaxed"
  return (
    <div className="rounded-xl border-2 border-black dark:border-gray-600 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-b-2 border-black dark:border-gray-600 bg-[#FAF6ED] dark:bg-gray-950">
        <h3 className="font-black text-black dark:text-white">{c.title}</h3>
        <div className="flex flex-wrap gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wide text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-2.5 py-0.5 rounded-full">
            {c.from}
          </span>
          <span
            className={`text-[11px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full border ${
              c.status.done ? "bg-yellow-400 text-black border-black" : "bg-white text-black border-black border-dashed"
            }`}
          >
            {c.status.label}
          </span>
        </div>
      </div>
      <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-2 p-3">
        <div className={`${col} bg-gray-50 dark:bg-gray-800`}>
          <p className="text-[11px] font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">Before</p>
          <p className="text-gray-700 dark:text-gray-300">{c.before}</p>
        </div>
        <div aria-hidden="true" className="hidden md:flex items-center text-yellow-500 font-black">→</div>
        <div className={`${col} bg-gray-50 dark:bg-gray-800`}>
          <p className="text-[11px] font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">What staff told us</p>
          <p className="text-gray-700 dark:text-gray-300">{c.heard}</p>
        </div>
        <div aria-hidden="true" className="hidden md:flex items-center text-yellow-500 font-black">→</div>
        <div className={`${col} bg-yellow-50 dark:bg-gray-800 border border-yellow-300 dark:border-yellow-700`}>
          <p className="text-[11px] font-bold uppercase tracking-wide text-gray-600 dark:text-yellow-400 mb-1">What we changed</p>
          <p className="text-gray-800 dark:text-gray-200">{c.changed}</p>
        </div>
      </div>
    </div>
  )
}

export default function CarryoverCaseStudy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <header className="sticky top-0 z-50 bg-[#FAF6ED] dark:bg-gray-950 border-b-2 border-black dark:border-gray-700">
        <div className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tight text-black dark:text-white">
            HIMA
          </Link>
          <Link
            href="/#projects"
            className="border-2 border-black dark:border-white text-black dark:text-white font-bold py-2 px-4 text-xs uppercase rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            ← Back to projects
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 md:px-12 pt-12 pb-16">
        <p className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">Case study</p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-black dark:text-white mb-4">CARRYOVER</h1>
        <div className="h-1.5 w-32 bg-yellow-400 mb-6"></div>
        <p className="text-xl font-semibold text-black dark:text-white mb-2">
          The right amount of help, for each person, on each step.
        </p>
        <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-8">
          ASU North American AI Challenge · Oct – Nov 2026 · Team Haven (5 people) · Partner: First Place AZ
        </p>

        <div className="rounded-xl border-2 border-black dark:border-gray-600 bg-yellow-50 dark:bg-gray-900 p-5 mb-6">
          <p className="text-sm font-bold uppercase tracking-wide text-black dark:text-white mb-2">Status</p>
          <p className="text-gray-700 dark:text-gray-300">
            This is a prototype with simulated data. There is no real resident data, and we have not tested it with
            residents. I co-built the app with my team. Below, I say which parts I built myself.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-4">
          <a
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-black font-bold px-6 py-3 uppercase text-sm border-2 border-black hover:bg-yellow-300 transition-colors"
          >
            GitHub repo →
          </a>
          <a
            href={DEMO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white dark:bg-gray-950 text-black dark:text-white font-bold px-6 py-3 uppercase text-sm border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            Demo video →
          </a>
        </div>

        <Section num="01" title="What Carryover does">
          <p>
            Carryover helps autistic adults practice everyday tasks on their own, like heating a meal or buying
            something. It learns from each person&rsquo;s own use where they get stuck. It gives the smallest help that
            works, and fades it as they improve.
          </p>
          <div className="rounded-xl border-2 border-black dark:border-gray-600 p-5 bg-gray-50 dark:bg-gray-900">
            <p className="text-sm font-bold uppercase tracking-wide text-black dark:text-white mb-3">
              Example: a resident heats a meal
            </p>
            <ol className="space-y-2">
              {mealSteps.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-400 border-2 border-black text-black text-xs font-black flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </div>
          <p>
            <B>How AI is used.</B> The decisions about help (where someone is stuck, how much help, when to fade) are
            clear rules based on the person&rsquo;s own history, so they can be explained and checked. AI is only used
            where fixed screens can&rsquo;t help: an &ldquo;I&rsquo;m stuck&rdquo; helper that gives one short step
            back, and breaking a step into more detail, which a person approves first. Risky questions (like whether
            food is cooked enough) are caught by rules in code before the AI answers.
          </p>
        </Section>

        <Section num="02" title="The problem">
          <p>
            At First Place, tasks are taught with the same steps for everyone. But people differ a lot in how much help
            they need, and where. Staff told us that help with building skills, and keeping progress going without much
            staff help, would be useful.
          </p>
          <p>
            Most people live at First Place for 2–3 years and then move out. So the skills they learn there need to
            carry over to living on their own.
          </p>
        </Section>

        <Section num="03" title="Partner research">
          <p>
            I led our user research with First Place AZ. We talked with staff, not residents, in three sessions:
          </p>
          <Bullets
            items={[
              <><B>Oct 27, site visit.</B> Staff gave us a tour of the building, the teaching kitchen and the shared spaces.</>,
              <><B>Nov 3, meeting with staff.</B> We asked how skills are taught now and what would help.</>,
              <><B>Nov 4, meeting with staff.</B> We showed our design and asked for feedback.</>,
            ]}
          />
          <p>
            Staff also suggested using task analysis and doing a literature review. I wrote the literature review, and
            every task in the app is a task analysis written in our own words.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Our notes are paraphrased, so nothing below is a direct quote.
          </p>
        </Section>

        <Section num="04" title="What changed because of it">
          <p>
            Each card shows the situation before, what staff told us, and what we changed. The label shows which
            session it came from and how finished it is.
          </p>
          <div className="space-y-5">
            {changes.map((c) => (
              <ChangeCard key={c.title} c={c} />
            ))}
          </div>
          <p className="text-sm">
            Staff also asked for a picture and a video for each step. Each step has a picture now. Videos are only
            planned.
          </p>
        </Section>

        <Section num="05" title="What I built">
          <p>
            I was <B>Role A: tasks, detection, research and docs</B>. My parts:
          </p>
          <Bullets
            items={[
              <><B>Tasks.</B> The 4 task analyses: Heat a meal, and Buy something (in store with a card, in store with a phone, and online). Each step has its text, small steps, tips, caution line, picture, base skills and timing.</>,
              <><B>Skill cards.</B> 10 skill cards, one basic skill each (like reading the cooking time), with 2–4 small steps.</>,
              <><B>The rules file.</B> <code className="text-sm">definitions.json</code> holds every rule and number the app uses, including the help levels and the fading rules. My teammates wrote the code that applies the fading rules.</>,
              <><B>Stuck detection.</B> <code className="text-sm">detect.py</code> reads a person&rsquo;s event log and finds where they get stuck: can&rsquo;t start, stuck at a step, missing a step, or rusty after a long break. A pattern has to show in their last 2 sessions before it counts, so one bad day doesn&rsquo;t change anything.</>,
              <><B>Research and docs.</B> The partner research notes, the literature review, sticking points, safety rules, UI rules and sources.</>,
            ]}
          />
          <p>I also built parts outside my role:</p>
          <Bullets
            items={[
              <>On the <B>Demo page</B>: the phone frame, the &ldquo;Why this changed&rdquo; explanations, and the &ldquo;Help over time&rdquo; grid.</>,
              <>The <B>&ldquo;Ask AI for more detail&rdquo;</B> button on the Staff page.</>,
              <>The <B>resident feedback section</B>.</>,
            ]}
          />
          <p>I also did the final code-review check before we submitted.</p>
          <p>
            <B>What the team built.</B> My teammates built the resident app, the simulated data, the code for the fading
            rules, the AI helper and its safety rules, the back end, and the Staff and Review pages. Overall, I co-built
            the app with them: a React front end, a FastAPI back end, and an AI model with safety rules written in code,
            plus automated tests. We presented it at the Scottsdale Launchpad.
          </p>
        </Section>

        <Section num="06" title="Limits">
          <Bullets
            items={[
              "We only talked with staff. We haven't heard from residents yet.",
              "It was three short sessions, and our notes are paraphrased.",
              "The app runs on simulated data: ten weeks of use for nineteen made-up residents. We have no real users.",
              "The task steps were checked with First Place staff, but not tested with residents.",
              "The numbers in the detection rules (2 sessions, 14 days, a 45-second pause) are starting points. Research supports the idea, but not those exact values. Staff can change them.",
            ]}
          />
        </Section>

        <Section num="07" title="What I'd do differently">
          <Bullets
            items={[
              "Test the pitch setup on the real equipment before presenting.",
              "Show the app working first, and explain it after.",
              "Look at existing products like MeMinder earlier. I checked them too late in the project.",
            ]}
          />
        </Section>

        <Section num="08" title="Links">
          <Bullets
            items={[
              <a key="repo" href={REPO} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4 hover:text-yellow-600">
                GitHub repo: TeamHavenASU/Carryover
              </a>,
              <a key="demo" href={DEMO} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4 hover:text-yellow-600">
                Demo video (Google Drive)
              </a>,
            ]}
          />
        </Section>
      </main>

      <SiteFooter />
    </div>
  )
}
