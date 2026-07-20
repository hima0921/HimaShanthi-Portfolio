import resumeData from "@/resume-data.json"

export function ExperienceSection() {
  const jobs = resumeData.workExperience.map((job) => ({
    title: job.title,
    company: `${job.org}, ${job.location}`,
    period: `${job.start} - ${job.end}`,
    duties: job.portfolioBullets ?? job.bullets,
  }))

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-950 border-t-2 border-black dark:border-gray-700">
      <div className="w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight text-black dark:text-white">WORK EXPERIENCE</h2>
        <div className="h-1 w-32 bg-yellow-400 mb-12"></div>

        <div className="space-y-6">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="flex gap-0 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-black dark:hover:border-white"
            >
              <div className="w-1.5 bg-black dark:bg-gray-400 flex-shrink-0"></div>
              <div className="p-6 flex-1">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                  <div>
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{job.company}</p>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-1.5 text-gray-700 dark:text-gray-300 text-base mt-3">
                  {job.duties.map((duty, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-yellow-500 font-black">▸</span>
                      <span>{duty}</span>
                    </li>
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
