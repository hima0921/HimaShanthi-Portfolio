export function ResearchSection() {
  const research = [
    {
      title: "Research Assistant",
      period: "Aug 2025 – Present",
      inst: "Thinking Across Languages and Contexts Lab",
      bullets: [
        "Assist a graduate student with testing experiments built in jsPsych and JavaScript.",
        "Help check whether data are recorded correctly and organized for analysis.",
        "Perform exploratory data analysis and assist in interpreting experimental results under supervision.",
      ],
    },
    {
      title: "Research Assistant",
      period: "Aug 2025 – Present",
      inst: "Perception, Action, Language & Meaning Lab",
      bullets: [
        "Support participant training and assist with data collection in studies using VR, motion-capture, and eye-tracking.",
        "Work with the lab's time-series behavioral data, learning how to clean, organize, and explore it.",
        "Read papers and explore possible methods (e.g., multilevel vector autoregression) to understand which approaches might fit the lab's data.",
        "Contribute to discussions by sharing preliminary notes and observations from trial analyses.",
      ],
    },
    {
      title: "Volunteer Research Assistant",
      period: "Aug 2024 – Dec 2024",
      inst: "Longitudinal & Behavioral Data Science Lab",
      bullets: [
        "Participated in bi-weekly lab meetings, contributing to discussions and staying updated on research progress.",
      ],
    },
    {
      title: "Research Assistant",
      period: "Aug 2023 – Nov 2023",
      inst: "Evolution, Ecology, and Social Behavior Lab",
      bullets: [
        "Assisted with survey design, pilot testing, data coding, and literature reviews in social cognition research.",
        "Participated in lab meetings and contributed to discussions on study design and interpretation.",
      ],
    },
  ]

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
