const BASE = "/HimaShanthi-Portfolio"

type Essay = {
  title: string
  description: string
  href: string
  linkLabel: string
}

const essays: Essay[] = [
  {
    title: "AI in UX Research: Collaboration, Not Replacement",
    description: "A public service announcement emphasizing the collaborative role of AI in UX research.",
    href: `${BASE}/essays/ai-ux-research.pdf`,
    linkLabel: "Read Full PSA",
  },
  {
    title: "International Pop Culture: Heartstopper",
    description: "A reflective essay exploring the themes and cultural impact of the series Heartstopper.",
    href: `${BASE}/essays/heartstopper-pop-culture.pdf`,
    linkLabel: "Read Full Essay",
  },
  {
    title: "Effects of Cyberbullying and Prevention",
    description: "An analysis of cyberbullying's impact on communities and strategies to prevent it, supported by research and quotes.",
    href: `${BASE}/essays/cyberbullying-prevention.pdf`,
    linkLabel: "Read Full Essay",
  },
  {
    title: "Animal Experimentation: Ethical Considerations",
    description: "My perspective on why animal experimentation should not be completely banned, balancing ethics and scientific progress.",
    href: `${BASE}/essays/animal-experimentation.pdf`,
    linkLabel: "Read Full Essay",
  },
  {
    title: "Mental Health Stigma: Impact and Importance of Reduction",
    description: "A discussion on how mental health stigma affects people and why reducing it matters.",
    href: `${BASE}/essays/mental-health-stigma.pdf`,
    linkLabel: "Read Full Essay",
  },
]

export function EssaysSection() {
  return (
    <section id="essays" className="py-16 bg-white dark:bg-gray-950 border-t-2 border-black dark:border-gray-700">
      <div className="w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="w-full max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight text-black dark:text-white">ESSAYS</h2>
          <div className="h-1 w-24 bg-yellow-400 mb-10"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {essays.map((essay, idx) => (
            <div
              key={idx}
              className="flex rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-black dark:hover:border-white"
            >
              <div className="w-1.5 bg-yellow-400 flex-shrink-0"></div>
              <div className="p-6 flex-1">
                <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">{essay.title}</h3>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{essay.description}</p>
                <a
                  href={essay.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-black dark:text-white underline underline-offset-4 hover:text-yellow-600 transition-colors duration-200"
                >
                  {essay.linkLabel} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
