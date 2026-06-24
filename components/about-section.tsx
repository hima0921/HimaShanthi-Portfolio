export function AboutSection() {
  const blocks = [
    {
      title: "A Little About Me",
      paragraphs: [
        "Born and raised in Khammam, Telangana, India – a place where the biryani's rich, the culture's warm, and life smells just as good as the spices in the air. I recently graduated Summa Cum Laude from Arizona State University with dual degrees in Mathematics (Statistics) and Psychology and a minor in Philosophy — math for the certainty and logic, psychology for the harder, messier questions about people, and philosophy because I've always been drawn to both. I'm now starting my MS in Psychology (Cognition, Behavior, and Information) at ASU.",
      ],
    },
    {
      title: "Research Interests",
      paragraphs: [
        "My research interests sit at the intersection of cognitive science and human-AI interaction — specifically how people reason, make decisions, and develop trust when working alongside AI systems, including AI-assisted decision-making. I'm also deeply interested in UX research and explainable AI — particularly how interface and explanation design shapes user cognition and behavior — and in human-centered evaluation of AI technologies more broadly.",
        "More broadly, I'm drawn to cognition itself — learning and memory, attention and perception, and the processes underlying everyday human behavior — and to building mathematical, statistical, and computational models, including predictive modeling, that capture and explain that behavior, along with time-series analysis of behavioral and movement data. My approach is grounded in research methods: experimental design, behavioral data analysis, statistical inference, and applied machine learning for behavioral and cognitive data. I'm especially interested in applying this to learning — including how people learn differently, such as those with learning disabilities — and in educational data science and learning analytics as ways to improve learning through data-driven approaches. I'm also curious about cultural differences in cognition and behavior more generally, not just in how people interact with AI.",
      ],
    },
  ]

  return (
    <section id="about" className="pt-10 pb-20 bg-white dark:bg-gray-950 border-t-2 border-black dark:border-gray-700">
      <div className="w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight text-black dark:text-white">ABOUT ME</h2>
        <div className="h-1 w-32 bg-yellow-400 mb-12"></div>

        <div className="space-y-10">
          {blocks.map((block, idx) => (
            <div key={idx} className="flex gap-5">
              <div className="flex-shrink-0 hidden sm:flex flex-col items-center pt-1">
                <span className="w-3 h-3 bg-yellow-400 border-2 border-black"></span>
                {idx !== blocks.length - 1 && <span className="w-px flex-1 bg-gray-300 mt-2"></span>}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">{block.title}</h3>
                {block.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="leading-relaxed text-gray-700 dark:text-gray-300">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
