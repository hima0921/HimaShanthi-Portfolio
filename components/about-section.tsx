export function AboutSection() {
  const blocks = [
    {
      title: "A Little About Me",
      text: "Born and raised in Khammam, Telangana, India – a place where the biryani's rich, the culture's warm, and life smells just as good as the spices in the air. I recently graduated Summa Cum Laude from Arizona State University with dual degrees in Mathematics (Statistics) and Psychology and a minor in Philosophy, and I'm now starting my MS in Psychology (Cognition, Behavior, and Information) at ASU.",
    },
    {
      title: "My Journey",
      text: "I started out in engineering and stuck with it for two years during COVID, but something felt off. I switched to psychology, and just one semester in, realized I really missed math — the certainty, the logic, the quiet satisfaction of solving an equation. So I added Mathematics (Statistics) as a second major and a Philosophy minor, since I've always been drawn to deep questions. Psychology and philosophy are fascinating but often subjective; math grounds me and sharpens how I approach research questions.",
    },
    {
      title: "Research Interests",
      text: "I'm fascinated by how people make decisions — especially how unconscious biases shape what we choose and believe. I'm also interested in the ethics and design of AI systems: how we can build AI that makes fair, trustworthy decisions, and how cultural differences shape the way people respond to and trust those systems.",
    },
  ]

  const loves = [
    "Debating ideas and playing devil's advocate, just to test how an argument holds up",
    "Picking apart fine print and reasoning for inconsistencies",
    "Deep conversations with friends about current events and big ideas",
    "Getting lost in fantasy novels and world-building (Percy Jackson is my favorite)",
    "Learning new things just for the joy of understanding them",
    "Analyzing characters and storylines the way I'd analyze a dataset",
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950 border-t-2 border-black dark:border-gray-700">
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
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">{block.title}</h3>
                <p className="leading-relaxed text-gray-700 dark:text-gray-300">{block.text}</p>
              </div>
            </div>
          ))}

          {/* What I Love — visually distinct callout block */}
          <div className="bg-black text-white rounded-2xl p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-bold mb-6 tracking-tight text-yellow-400">
              What I Love
            </h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {loves.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-yellow-400 font-black mt-0.5">▸</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
