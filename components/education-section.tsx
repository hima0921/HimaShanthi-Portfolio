export function EducationSection() {
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
                <p className="text-lg font-semibold">MS in Psychology (Cognition, Behavior, and Information)</p>
              </div>
              <div>
                <p className="font-bold uppercase text-xs text-gray-500 dark:text-gray-400">University</p>
                <p className="text-lg">Arizona State University</p>
              </div>
              <div>
                <p className="font-bold uppercase text-xs text-gray-500 dark:text-gray-400">Period</p>
                <p className="text-lg">Aug 2026 - Present</p>
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
                  <p className="text-lg">Arizona State University</p>
                </div>
                <div>
                  <p className="font-bold uppercase text-xs text-gray-500 dark:text-gray-400">Period</p>
                  <p className="text-lg">Jan 2023 - May 2026</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-bold uppercase text-xs text-gray-500 dark:text-gray-400">Majors</p>
                  <p className="text-lg">Mathematics (Statistics) & Psychology</p>
                </div>
                <div>
                  <p className="font-bold uppercase text-xs text-gray-500 dark:text-gray-400">Minor</p>
                  <p className="text-lg">Philosophy</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs font-bold uppercase tracking-wide px-3 py-1.5 bg-yellow-400 text-black rounded-full border border-black">
                  4.00 GPA
                </span>
                <span className="text-xs font-bold uppercase tracking-wide px-3 py-1.5 bg-black text-yellow-400 rounded-full">
                  Summa Cum Laude
                </span>
                <span className="text-xs font-bold uppercase tracking-wide px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full">
                  Dean's List (Multiple Semesters)
                </span>
              </div>
            </div>
          </div>

          {/* Scholarships */}
          <div className="flex rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-black dark:hover:border-white">
            <div className="w-1.5 bg-yellow-400 flex-shrink-0"></div>
            <div className="p-6 flex-1">
              <h3 className="text-lg font-bold mb-4 text-black dark:text-white">Scholarships</h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">New American University Scholarship</span>
                <span className="text-sm px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300">Andre Levard Mackey Scholarship</span>
              </div>
            </div>
          </div>

          {/* Coursework */}
          <div className="flex rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-black dark:hover:border-white">
            <div className="w-1.5 bg-black dark:bg-gray-400 flex-shrink-0"></div>
            <div className="p-6 md:p-8 flex-1">
            <h3 className="text-lg font-bold mb-6 text-black dark:text-white">Relevant Coursework</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-bold mb-2 text-sm uppercase tracking-wide text-blue-700">Statistics & Quantitative Methods</p>
                <ul className="text-base space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• STP 420 – Introductory Applied Statistics</li>
                  <li>• STP 421 – Probability</li>
                  <li>• STP 427 – Mathematical Statistics</li>
                  <li>• STP 429 – Applied Regression</li>
                  <li>• STP 311 – Regression & Time Series Analysis</li>
                  <li>• STP 310 – Design/Analysis of Experiments</li>
                  <li>• STP 470 – Predictive Analytics</li>
                  <li>• MAT 343 – Applied Linear Algebra</li>
                  <li>• MAT 275 – Modern Differential Equations</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2 text-sm uppercase tracking-wide text-yellow-700">Cognitive Science & Psychology</p>
                <ul className="text-base space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• PSY 324 – Memory and Cognition</li>
                  <li>• PSY 434 – Cognitive Psychology</li>
                  <li>• PSY 506 – Advanced Cognitive Science</li>
                  <li>• PSY 579 – Cross-Cultural Psychology</li>
                  <li>• PSY 290 – Research Methods</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2 text-sm uppercase tracking-wide text-green-700">Computing & Data Science</p>
                <ul className="text-base space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• CSE 110 – Principles of Programming</li>
                  <li>• CSE 205 – Object-Oriented Programming & Data</li>
                  <li>• SDS 510 – Data Wrangling</li>
                  <li>• DAT 431 – Industry Tools for Data Science</li>
                  <li>• MAT 420 – Scientific Computing</li>
                  <li>• NEU 290 / NEU 394 – Data Science & Python for Neuro Majors</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2 text-sm uppercase tracking-wide text-rose-700">Philosophy</p>
                <ul className="text-base space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• PHI 319 – Philosophy, Computing & AI</li>
                  <li>• PHI 314 – Philosophy of Science</li>
                </ul>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
