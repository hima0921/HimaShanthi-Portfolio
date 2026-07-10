export function HeroSection() {
  const badges = ["Summa Cum Laude", "4.0 GPA", "ASU MS Psychology (CBI)"]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 pt-8 pb-8">
      <div className="w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight text-black dark:text-white">HIMA SHANTHI RAYAPATI</h1>
              <div className="h-1.5 w-32 bg-yellow-400 mb-6"></div>
              <p className="text-lg font-semibold">Cognitive Science · Statistics · Human-AI Interaction</p>
            </div>

            <p className="text-xl leading-relaxed italic text-gray-700 dark:text-gray-300">
              "Finding certainty in numbers, wonder in people, and stories in everything."
            </p>

            <ul className="text-base leading-relaxed text-gray-700 dark:text-gray-300 max-w-sm space-y-2">
              <li className="flex gap-2">
                <span className="text-yellow-500 font-black">▸</span>
                <span>Incoming MS student in Psychology (Cognition, Behavior, and Information), Arizona State University</span>
              </li>
              <li className="flex gap-2">
                <span className="text-yellow-500 font-black">▸</span>
                <span>Dual BS degrees in Mathematics (Statistics) and Psychology, Philosophy minor</span>
              </li>
              <li className="flex gap-2">
                <span className="text-yellow-500 font-black">▸</span>
                <span>Focused on research, quantitative methods, and human-AI interaction</span>
              </li>
            </ul>

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

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-block bg-yellow-400 text-black font-bold px-8 py-3 uppercase text-sm hover:bg-yellow-300 transition-colors border-2 border-black"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Image */}
            <div className="flex justify-center">
            <div className="relative w-full max-w-xs">
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
