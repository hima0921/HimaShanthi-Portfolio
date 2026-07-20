import resumeData from "@/resume-data.json"

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

// Preserve the exact display order the portfolio previously used
const PORTFOLIO_ORDER = [
  "stack-overflow-ai",
  "stochastic-learning-model",
  "cultural-trust",
  "reward-learning",
  "trust-in-advice",
  "mirror-neurons",
  "ancova-presentation",
  "sleep-caffeine-study",
  "baseball-analysis",
  "adp-stock",
]

const projects: Project[] = PORTFOLIO_ORDER.map((id) => {
  const p = resumeData.projects.find((proj) => proj.id === id)!
  return {
    title: p.title,
    meta: p.portfolioMeta,
    inst: p.portfolioInst,
    bullets: p.portfolioBullets ?? p.bullets,
    tags: p.portfolioTags,
    category: p.portfolioCategory,
    links: p.links,
  }
})

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
