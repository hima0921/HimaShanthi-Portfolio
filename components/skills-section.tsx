import resumeData from "@/resume-data.json"

export function SkillsSection() {
  const skillCategories = [...resumeData.skills]
    .sort((a, b) => a.cvOrder.industry - b.cvOrder.industry)
    .map((cat) => ({
      category: cat.category,
      skills: cat.portfolioItems ?? cat.items,
      color: cat.portfolioColor,
    }))

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 border-t-2 border-black dark:border-gray-700">
      <div className="w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight text-black dark:text-white">SKILLS</h2>
        <div className="h-1 w-32 bg-yellow-400 mb-12"></div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-black dark:hover:border-white"
            >
              <h3 className="text-sm font-bold uppercase mb-4 tracking-wide text-gray-800 dark:text-gray-200">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`text-sm font-medium px-3 py-1.5 rounded-full border ${cat.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
