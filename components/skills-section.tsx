export function SkillsSection() {
  const skillCategories = [
    {
      category: "Programming & Statistical Tools",
      skills: ["R", "SAS", "MATLAB", "Python", "JMP", "JASP", "SQL", "Java", "C", "Bash", "REST APIs"],
      color: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      category: "Machine Learning & NLP (Foundational)",
      skills: ["PCA", "Neural network basics", "Supervised vs. unsupervised learning", "Model evaluation", "Voyant Tools"],
      color: "bg-rose-50 text-rose-700 border-rose-200",
    },
    {
      category: "Experimental & Research Tools",
      skills: ["jsPsych", "PsychoPy", "JavaScript", "HTML", "CSS", "Qualtrics", "SurveyMonkey"],
      color: "bg-yellow-50 text-yellow-800 border-yellow-300",
    },
    {
      category: "Data Analysis & Visualization",
      skills: ["Tableau", "Excel", "Google Sheets", "Alteryx"],
      color: "bg-green-50 text-green-700 border-green-200",
    },
    {
      category: "Collaboration & Productivity",
      skills: ["Slack", "Teams", "Zoom", "Word", "PowerPoint", "OneDrive", "Dropbox"],
      color: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600",
    },
  ]

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
