const BASE = "/HimaShanthi-Portfolio"

const categoryStyles: Record<string, { bar: string; pill: string }> = {
  stats: { bar: "bg-blue-400", pill: "bg-blue-50 text-blue-700" },
  cognitive: { bar: "bg-yellow-400", pill: "bg-yellow-50 text-yellow-800" },
  ai: { bar: "bg-rose-400", pill: "bg-rose-50 text-rose-700" },
}

type ProjectLink = {
  label: string
  href: string
}

type Project = {
  title: string
  meta: string
  inst?: string
  bullets: string[]
  tags: string[]
  category: string
  links?: ProjectLink[]
}

const projects: Project[] = [
  {
    title: "Analyzing the Impact of AI on Stack Overflow Participation (NLP & Data Analysis)",
    meta: "2025",
    bullets: [
      "Analyzed large-scale Stack Overflow data using Python to study changes in user behavior after AI tool releases.",
      "Built time-series datasets and computed engagement metrics (answer rates, response time, retention) using Python.",
      "Performed statistical comparisons and visualized platform-level trends.",
      "Explored tag-based trends and basic NLP features to examine topic shifts.",
    ],
    tags: ["Python", "NLP", "Human-AI Interaction"],
    category: "ai",
    links: [{ label: "View on GitHub", href: "https://github.com/hima0921/stack-overflow-ai-project" }],
  },
  {
    title: "Stochastic Dual-Timescale Model of Learning (ODE & SDE Modeling)",
    meta: "Final Project · 2025",
    bullets: [
      "Developed differential equation model of fast and slow learning processes.",
      "Extended to stochastic framework to examine effects of noise.",
      "Verified theoretical properties via simulation.",
      "Linked model behavior to memory retention and learning variability.",
    ],
    tags: ["ODE/SDE", "Cognitive Modeling"],
    category: "cognitive",
    links: [{ label: "View on GitHub", href: "https://github.com/hima0921/stochastic-dual-timescale-learning-model" }],
  },
  {
    title: "Cultural Differences in Trust: AI vs. Human Expert Decision-Making",
    meta: "Research Proposal · 2025",
    bullets: [
      "Proposed cross-cultural study (Mexico vs. U.S.) on AI vs. human decision-making under conflict.",
      "Outlined experimental design focusing on competence and legitimacy.",
      "Formulated mixed-effects modeling approach for analysis.",
      "Synthesized literature across cognition, decision-making, and human–AI interaction.",
    ],
    tags: ["Cross-Cultural", "Human-AI Interaction"],
    category: "ai",
    links: [
      { label: "View Presentation", href: `${BASE}/projects/cultural-trust-presentation.html` },
      { label: "View Pre-Registration", href: `${BASE}/projects/cultural-trust-preregistration.pdf` },
    ],
  },
  {
    title: "Probabilistic Reward Learning Task using PsychoPy",
    meta: "2025",
    bullets: [
      "Designed probabilistic reward-learning task with informative vs. non-informative features.",
      "Examined learning under uncertainty and perceptual noise.",
      "Collected and analyzed participant data using Python.",
    ],
    tags: ["PsychoPy", "Cognitive Modeling"],
    category: "cognitive",
    links: [
      { label: "View Presentation", href: `${BASE}/projects/reward-learning-presentation.pdf` },
      { label: "Download Task File", href: `${BASE}/projects/reward-learning-task.psyexp` },
    ],
  },
  {
    title: "Trust in Advice: AI vs. Human Sources (Data Analysis & Written Report)",
    meta: "2025",
    bullets: [
      "Analyzed 30,000+ human–AI interactions to study effects of advice source.",
      "Modeled decision changes before and after advice exposure.",
      "Found advice correctness as primary driver, with modest AI-related effects.",
    ],
    tags: ["Human-AI Interaction", "Data Analysis"],
    category: "ai",
    links: [{ label: "View on GitHub", href: "https://github.com/hima0921/AI-vs-human-decision-making" }],
  },
  {
    title: "Research Proposal: Mirror Neurons, Social Synchrony, and Collaborative Learning",
    meta: "2025",
    bullets: [
      "Proposed a research framework synthesizing human and animal literature on mirror neuron systems and social synchrony.",
      "Formulated hypotheses linking coordination mechanisms to collaborative learning outcomes.",
    ],
    tags: ["Cognitive Science", "Research Proposal"],
    category: "cognitive",
    links: [{ label: "View Proposal", href: `${BASE}/projects/mirror-neurons-proposal.pdf` }],
  },
  {
    title: "ANCOVA Presentation",
    meta: "Spring 2024 · Class Project",
    inst: "Arizona State University",
    bullets: [
      "Conducted thorough research to understand and apply ANCOVA techniques.",
      "Developed a presentation on ANCOVA using R and presentation tools such as Slidy.",
      "Presented findings and insights effectively in a classroom setting.",
    ],
    tags: ["Statistics", "R"],
    category: "stats",
    links: [{ label: "View Presentation", href: `${BASE}/projects/ancova-presentation.html` }],
  },
  {
    title: "The Relationship Between University Students' Sleep and Caffeine Intake (Correlational Study)",
    meta: "Spring 2024 · Class Project",
    inst: "Arizona State University",
    bullets: [
      "Designed and distributed a survey via Google Forms to gather data from students.",
      "Conducted a literature review on the impact of caffeine intake on sleep patterns among students.",
      "Imported and cleaned data using Excel to ensure accuracy.",
      "Performed ANOVA and analyzed results using JASP and G*Power.",
      "Authored a comprehensive research paper detailing findings and insights.",
    ],
    tags: ["Survey Research", "ANOVA", "JASP"],
    category: "stats",
    links: [{ label: "View Paper", href: `${BASE}/projects/sleep-caffeine-study.pdf` }],
  },
  {
    title: "Predictive Analysis of Team Performance in Baseball using SAS",
    meta: "Fall 2024 · Class Project",
    inst: "Arizona State University",
    bullets: [
      "Developed a statistical model to predict team wins using historical baseball data.",
      "Conducted EDA and correlation analysis on Minnesota Twins batting records (1998–2024, excluding 2020).",
      "Built multiple regression models to identify key predictors of team wins, selecting runs and batting averages for a parsimonious model.",
      "Addressed multicollinearity and validated model assumptions to improve predictive accuracy.",
      "Provided data-driven insights into team performance metrics, contributing to baseball analytics research.",
    ],
    tags: ["SAS", "Regression", "Sports Analytics"],
    category: "stats",
    links: [{ label: "View Report", href: `${BASE}/projects/baseball-performance-analysis.pdf` }],
  },
  {
    title: "Predicting Daily Stock Prices of ADP using SAS",
    meta: "Fall 2024 · Class Project",
    inst: "Arizona State University",
    bullets: [
      "Created a predictive model for ADP stock prices based on financial indicators.",
      "Analyzed daily stock prices (11/01/2023–10/31/2024) in the Industrials sector of the S&P 500.",
      "Applied EDA, correlation analysis, and multiple regression (stepwise, backward, forward selection) to determine significant predictors.",
      "Developed a quadratic regression model with strong explanatory power while addressing multicollinearity.",
      "Examined sector-specific dynamics and market trends influencing ADP's stock behavior.",
    ],
    tags: ["SAS", "Regression", "Finance"],
    category: "stats",
    links: [{ label: "View Report", href: `${BASE}/projects/adp-stock-prediction.pdf` }],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900 border-t-2 border-black dark:border-gray-700">
      <div className="w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="w-full max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight text-black dark:text-white">PROJECTS</h2>
          <div className="h-1 w-24 bg-yellow-400 mb-10"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => {
            const style = categoryStyles[project.category]
            return (
              <div
                key={idx}
                className="flex flex-col h-full text-left group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-black dark:hover:border-white"
              >
                {/* Category accent bar */}
                <div className={`h-1.5 w-full ${style.bar}`}></div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold mb-1 text-black dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">
                    {project.meta}
                  </p>
                  {project.inst && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{project.inst}</p>
                  )}

                  <ul className="list-disc list-inside text-base text-gray-700 dark:text-gray-300 space-y-1 mb-4">
                    {project.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>

                  {/* Push tags + links to bottom for equal-height alignment */}
                  <div className="mt-auto pt-2 space-y-3">
                    <div className="flex flex-wrap gap-2 text-[11px] font-medium">
                      {project.tags.map((tag, i) => (
                        <span key={i} className={`rounded-full px-2.5 py-1 ${style.pill}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.links && project.links.length > 0 && (
                      <div className="flex flex-wrap gap-4 pt-1 border-t border-gray-100">
                        {project.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold underline underline-offset-4 hover:text-yellow-600 transition-colors duration-200 mt-3"
                          >
                            {link.label} →
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
