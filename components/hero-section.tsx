"use client"

import { CvMenu } from "@/components/cv-menu"
import { PROJECT_FILTER_EVENT, type ProjectFilter } from "@/components/projects-section"

// "What I can do" cards. Each one opens Projects on the matching tab.
const strengths: { label: string; proof: string; filter: ProjectFilter }[] = [
  { label: "User research", proof: "Carryover", filter: "user-research" },
  { label: "Data & modeling", proof: "Stack Overflow, BATADAL", filter: "data-modeling" },
  { label: "Experiments", proof: "Trust studies, PsychoPy task", filter: "experiments" },
  { label: "Apps & tools", proof: "Carryover, R Shiny app", filter: "apps-tools" },
]

function openProjects(filter: ProjectFilter) {
  window.dispatchEvent(new CustomEvent(PROJECT_FILTER_EVENT, { detail: filter }))
}

export function HeroSection() {
  const badges = ["Summa Cum Laude", "4.0 GPA", "ASU MS DSAE-HCA"]
  const outlineBtn =
    "inline-flex items-center gap-1.5 bg-white dark:bg-gray-950 text-black dark:text-white font-bold px-6 py-3 uppercase text-sm border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 pt-8 pb-8">
      <div className="w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight text-black dark:text-white">HIMA SHANTHI RAYAPATI</h1>
              <div className="h-1.5 w-32 bg-yellow-400 mb-6"></div>
              <p className="text-lg font-semibold">Human-AI Interaction · Psychology · Statistics</p>
            </div>

            <p className="text-xl leading-relaxed italic text-gray-700 dark:text-gray-300">
              "Finding certainty in numbers, wonder in people, and stories in everything."
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-block bg-yellow-400 text-black font-bold px-6 sm:px-8 py-3 uppercase text-sm hover:bg-yellow-300 transition-colors border-2 border-black"
              >
                Get In Touch
              </a>
              <a href="#projects" onClick={() => openProjects("all")} className={outlineBtn}>
                View Projects
              </a>
              <CvMenu buttonClassName={outlineBtn} />
            </div>

            {/* What I can do: 2x2 grid of small cards */}
            <div className="grid grid-cols-2 gap-3 max-w-lg">
              {strengths.map((s) => (
                <a
                  key={s.filter}
                  href="#projects"
                  onClick={() => openProjects(s.filter)}
                  className="group flex flex-col justify-between gap-2 rounded-xl border-2 border-black dark:border-gray-600 bg-white dark:bg-gray-900 p-3 sm:p-4 transition-all duration-200 hover:-translate-y-0.5 hover:bg-yellow-400 hover:border-black"
                >
                  <span className="flex items-start justify-between gap-2">
                    <span className="text-sm font-black uppercase tracking-wide text-black dark:text-white group-hover:text-black">
                      {s.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-yellow-500 font-black group-hover:text-black transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </span>
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 group-hover:text-black/80">{s.proof}</span>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {badges.map((badge, i) => (
                <span
                  key={i}
                  className="text-xs font-bold uppercase tracking-wide px-3 py-1.5 bg-black text-yellow-400 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>

          </div>

          {/* Right Image */}
            <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="border-8 border-black bg-gray-200">
                <img src="/HimaShanthi-Portfolio/Profile.jpeg" alt="Hima Shanthi" className="w-full h-auto object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-yellow-400 bg-yellow-400 opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 border-4 border-black"></div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
