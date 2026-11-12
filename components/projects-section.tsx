"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import resumeData from "@/resume-data.json"

const categoryStyles: Record<string, { bar: string; pill: string }> = {
  stats: { bar: "bg-blue-400", pill: "bg-blue-50 text-blue-700" },
  cognitive: { bar: "bg-yellow-400", pill: "bg-yellow-50 text-yellow-800" },
  ai: { bar: "bg-rose-400", pill: "bg-rose-50 text-rose-700" },
}

// Filter tabs. The keys match the "strengths" field on each project in resume-data.json.
export const PROJECT_FILTERS = [
  { key: "all", label: "All" },
  { key: "user-research", label: "User research" },
  { key: "data-modeling", label: "Data & modeling" },
  { key: "experiments", label: "Experiments" },
  { key: "apps-tools", label: "Apps & tools" },
] as const

export type ProjectFilter = (typeof PROJECT_FILTERS)[number]["key"]

// Other parts of the page (the hero) fire this event to open Projects on a tab.
export const PROJECT_FILTER_EVENT = "projects:filter"

type ProjectLink = { label: string; href: string }

type Project = {
  id: string
  title: string
  meta: string
  inst?: string
  bullets: string[]
  tags: string[]
  category: string
  links: ProjectLink[]
  strengths: string[]
  featured: boolean
  caseStudy?: string
}

// Shows every project that has portfolio info, ordered by "portfolioOrder" in resume-data.json
const projects: Project[] = resumeData.projects
  .filter((p) => p.portfolioMeta && p.portfolioCategory)
  .sort((a, b) => (a.portfolioOrder ?? 999) - (b.portfolioOrder ?? 999))
  .map((p) => ({
    id: p.id,
    title: p.title,
    meta: p.portfolioMeta ?? "",
    inst: p.portfolioInst,
    bullets: p.portfolioBullets ?? p.bullets,
    tags: p.portfolioTags ?? [],
    category: p.portfolioCategory ?? "ai",
    links: p.links ?? [],
    strengths: p.strengths ?? [],
    featured: Boolean(p.featured),
    caseStudy: p.caseStudy,
  }))

const MAX_BULLETS = 2

function ProjectCard({ project, size }: { project: Project; size: "large" | "small" }) {
  const [expanded, setExpanded] = useState(false)
  const style = categoryStyles[project.category] ?? categoryStyles.ai
  const hasMore = project.bullets.length > MAX_BULLETS
  const shown = expanded ? project.bullets : project.bullets.slice(0, MAX_BULLETS)
  const large = size === "large"

  return (
    <div
      className={`flex flex-col h-full text-left group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        large
          ? "border-2 border-black dark:border-gray-500"
          : "border border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white"
      }`}
    >
      <div className={`${large ? "h-2" : "h-1.5"} w-full ${style.bar}`}></div>

      <div className={`${large ? "p-6 md:p-7" : "p-5"} flex flex-col flex-1`}>
        <h3 className={`${large ? "text-xl" : "text-base"} font-semibold mb-1 text-black dark:text-white`}>
          {project.title}
        </h3>
        <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">{project.meta}</p>
        {project.inst && <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{project.inst}</p>}

        <ul
          className={`list-disc pl-5 ${large ? "text-base" : "text-sm"} text-gray-700 dark:text-gray-300 space-y-1 mt-2`}
        >
          {shown.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            className="self-start mt-2 text-xs font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
          >
            {expanded ? "Show less ▴" : `Show more (${project.bullets.length - MAX_BULLETS}) ▾`}
          </button>
        )}

        {/* Push tags + links to bottom for equal-height alignment */}
        <div className="mt-auto pt-4 space-y-3">
          <div className="flex flex-wrap gap-2 text-[11px] font-medium">
            {project.tags.map((tag, i) => (
              <span key={i} className={`rounded-full px-2.5 py-1 ${style.pill}`}>
                {tag}
              </span>
            ))}
          </div>
          {(project.links.length > 0 || project.caseStudy) && (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-3 border-t border-gray-100 dark:border-gray-800">
              {project.caseStudy && (
                <Link
                  href={project.caseStudy}
                  className="text-sm font-bold bg-yellow-400 text-black px-3 py-1.5 rounded-md border-2 border-black hover:bg-yellow-300 transition-colors"
                >
                  Read case study →
                </Link>
              )}
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold underline underline-offset-4 hover:text-yellow-600 transition-colors duration-200"
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
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectFilter>("all")
  const [moreOpen, setMoreOpen] = useState(false)

  const selectFilter = (key: ProjectFilter) => {
    setFilter(key)
    // When a specific tab is picked, open "More projects" so nothing matching is hidden.
    if (key !== "all") setMoreOpen(true)
  }

  useEffect(() => {
    const onFilter = (e: Event) => {
      const key = (e as CustomEvent<ProjectFilter>).detail
      if (PROJECT_FILTERS.some((f) => f.key === key)) selectFilter(key)
    }
    window.addEventListener(PROJECT_FILTER_EVENT, onFilter)
    return () => window.removeEventListener(PROJECT_FILTER_EVENT, onFilter)
  }, [])

  const matches = (p: Project) => filter === "all" || p.strengths.includes(filter)
  const featured = projects.filter((p) => p.featured && matches(p))
  const more = projects.filter((p) => !p.featured && matches(p))

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900 border-t-2 border-black dark:border-gray-700 scroll-mt-16">
      <div className="w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="w-full max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight text-black dark:text-white">PROJECTS</h2>
          <div className="h-1 w-24 bg-yellow-400 mb-8"></div>
        </div>

        {/* Filter tabs */}
        <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2 mb-10">
          {PROJECT_FILTERS.map((f) => {
            const active = filter === f.key
            return (
              <button
                key={f.key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => selectFilter(f.key)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wide rounded-md border-2 transition-colors ${
                  active
                    ? "bg-yellow-400 text-black border-black"
                    : "bg-white dark:bg-gray-900 text-black dark:text-white border-black dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {f.label}
              </button>
            )
          })}
        </div>

        {featured.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={`${filter}-${project.id}`} project={project} size="large" />
            ))}
          </div>
        )}

        {more.length > 0 && (
          <div className={featured.length > 0 ? "mt-12" : ""}>
            <button
              type="button"
              onClick={() => setMoreOpen(!moreOpen)}
              aria-expanded={moreOpen}
              className="w-full flex items-center justify-between gap-4 text-left border-b-2 border-black dark:border-gray-600 pb-3"
            >
              <span className="text-xl md:text-2xl font-black tracking-tight text-black dark:text-white">
                MORE PROJECTS <span className="text-gray-500 font-bold text-base">({more.length})</span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wide bg-black text-yellow-400 px-3 py-1.5 rounded-full whitespace-nowrap">
                {moreOpen ? "Hide ▴" : "Show ▾"}
              </span>
            </button>
            {moreOpen && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
                {more.map((project) => (
                  <ProjectCard key={`${filter}-${project.id}`} project={project} size="small" />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
