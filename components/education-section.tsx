import resumeData from "@/resume-data.json"

export function EducationSection() {
  const [msDegree, bsDegree] = resumeData.education
  const bsExtras = bsDegree.portfolioExtras
  const { scholarships, programs = [], coursework } = resumeData.portfolioExtras
  // Heading colors for each coursework group. Groups not listed here use black.
  const courseworkColors: Record<string, string> = {
    "Graduate (Fall 2026)": "text-black dark:text-yellow-400",
    "Statistics & Quantitative Methods": "text-blue-700",
    "Cognitive Science & Psychology": "text-yellow-700",
    "Computing & Data Science": "text-green-700",
    Philosophy: "text-rose-700",
  }
  const courseworkGroups = Object.entries(coursework as Record<string, string[]>)

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900 border-t-2 border-black dark:border-gray-700">
      <div className="w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight text-black dark:text-white">EDUCATION</h2>
        <div className="h-1 w-32 bg-yellow-400 mb-12"></div>

        <div className="space-y-6">
          {/* MS Degree */}
          <div className="flex rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-black dark:hover:border-white">
            <div className="w-1.5 bg-yellow-400 flex-shrink-0"></div>
            <div className="p-6 flex-1 grid md:grid-cols-3 gap-4">
              <div>
                <p className="font-bold uppercase text-xs text-gray-500 dark:text-gray-400">Degree</p>
                <p className="text-lg font-semibold">{msDegree.degree}</p>
              </div>
              <div>
                <p className="font-bold uppercase text-xs text-gray-500 dark:text-gray-400">University</p>
                <p className="text-lg">{msDegree.school}</p>
              </div>
              <div>
                <p className="font-bold uppercase text-xs text-gray-500 dark:text-gray-400">Period</p>
                <p className="text-lg">{msDegree.start} - {msDegree.end}</p>
              </div>
            </div>
          </div>

          {/* BS Degree */}
          <div className="flex rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-black dark:hover:border-white">
            <div className="w-1.5 bg-black dark:bg-gray-400 flex-shrink-0"></div>
            <div className="p-6 flex-1">
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="font-bold uppercase text-xs text-gray-500 dark:text-gray-400">Degree</p>
                  <p className="text-lg font-semibold">Bachelor of Science</p>
                </div>
                <div>
                  <p className="font-bold uppercase text-xs text-gray-500 dark:text-gray-400">University</p>
                  <p className="text-lg">{bsDegree.school}</p>
                </div>
                <div>
                  <p className="font-bold uppercase text-xs text-gray-500 dark:text-gray-400">Period</p>
                  <p className="text-lg">{bsDegree.start} - {bsDegree.end}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-bold uppercase text-xs text-gray-500 dark:text-gray-400">Majors</p>
                  <p className="text-lg">{bsExtras?.majorsLabel}</p>
                </div>
                <div>
                  <p className="font-bold uppercase text-xs text-gray-500 dark:text-gray-400">Minor</p>
                  <p className="text-lg">{bsDegree.notes?.find((n) => n.startsWith("Minor"))?.replace("Minor: ", "")}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {bsExtras?.badges.map((badge, i) => (
                  <span
                    key={i}
                    className={
                      i === 0
                        ? "text-xs font-bold uppercase tracking-wide px-3 py-1.5 bg-yellow-400 text-black rounded-full border border-black"
                        : i === 1
                        ? "text-xs font-bold uppercase tracking-wide px-3 py-1.5 bg-black text-yellow-400 rounded-full"
                        : "text-xs font-bold uppercase tracking-wide px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                    }
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Scholarships */}
          <div className="flex rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-black dark:hover:border-white">
            <div className="w-1.5 bg-yellow-400 flex-shrink-0"></div>
            <div className="p-6 flex-1">
              <h3 className="text-lg font-bold mb-4 text-black dark:text-white">Scholarships</h3>
              <div className="flex flex-wrap gap-2">
                {scholarships.map((s, i) => (
                  <span key={i} className="text-sm px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">{s}</span>
                ))}
              </div>
                          {programs.length > 0 && (
                <>
                  <h3 className="text-lg font-bold mt-6 mb-4 text-black dark:text-white">Programs</h3>
                  <div className="flex flex-wrap gap-2">
                    {programs.map((p, i) => (
                      <span key={i} className="text-sm px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">{p}</span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Coursework */}
          <div className="flex rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-black dark:hover:border-white">
            <div className="w-1.5 bg-black dark:bg-gray-400 flex-shrink-0"></div>
            <details className="group/cw p-6 md:p-8 flex-1">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg font-bold text-black dark:text-white">Relevant Coursework</h3>
                <span className="text-xs font-bold uppercase tracking-wide bg-black text-yellow-400 px-3 py-1.5 rounded-full whitespace-nowrap">
                  <span className="group-open/cw:hidden">Show ▾</span>
                  <span className="hidden group-open/cw:inline">Hide ▴</span>
                </span>
              </summary>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                {courseworkGroups.map(([label, courses]) => (
                  <div key={label}>
                    <p className={`font-bold mb-2 text-sm uppercase tracking-wide ${courseworkColors[label] ?? "text-black dark:text-white"}`}>
                      {label}
                    </p>
                    <ul className="text-base space-y-1 text-gray-700 dark:text-gray-300">
                      {courses.map((course, i) => (
                        <li key={i}>• {course}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}
