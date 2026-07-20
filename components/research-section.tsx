import resumeData from "@/resume-data.json"

export function ResearchSection() {
  const research = resumeData.researchExperience.map((r) => ({
    title: r.role,
    period: `${r.start} – ${r.end}`,
    inst: r.lab,
    bullets: r.bullets,
  }))

  return (
    <section id="research" className="py-20 bg-gray-50 dark:bg-gray-900 border-t-2 border-black dark:border-gray-700">
      <div className="w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight text-black dark:text-white">RESEARCH</h2>
        <div className="h-1 w-32 bg-yellow-400 mb-12"></div>

        <div className="space-y-6">
          {research.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-0 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-black dark:hover:border-white"
            >
              <div className="w-1.5 bg-yellow-400 flex-shrink-0"></div>
              <div className="p-6 flex-1">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                  <h4 className="text-xl font-bold text-black dark:text-white">{item.title}</h4>
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">ASU · {item.inst}</p>
                <ul className="list-disc ml-4 text-gray-700 dark:text-gray-300 leading-relaxed space-y-1 text-base">
                  {item.bullets.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
