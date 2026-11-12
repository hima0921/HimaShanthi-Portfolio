import type React from "react"

type Block = {
  title: string
  content: React.ReactNode
  tagGroups?: { label: string; tags: string[] }[]
}

const p = "leading-relaxed text-gray-700 dark:text-gray-300"

const blocks: Block[] = [
  {
    title: "A Little About Me",
    content: (
      <p className={p}>
        Born and raised in Khammam, Telangana, India, a place where the biryani's rich, the culture's warm, and life
        smells just as good as the spices in the air. I recently graduated Summa Cum Laude from Arizona State University
        with dual degrees in Mathematics (Statistics) and Psychology and a minor in Philosophy: math for the certainty and
        logic, psychology for the harder, messier questions about people, and philosophy because I've always been drawn to
        both. I'm currently an MS student in Data Science, Analytics and Engineering (Human-Centered Applications) at ASU.
      </p>
    ),
  },
  {
    title: "Research Interests",
    content: (
      <>
        <p className={p}>
          My research is about how people think, learn, and decide when they work with AI. I'm interested in three
          connected questions:
        </p>
        <ul className={`${p} space-y-2`}>
          <li className="flex gap-2">
            <span className="text-yellow-500 font-black">▸</span>
            <span>
              <strong className="text-black dark:text-white">Trust:</strong> what makes people trust AI, including
              whether an AI showing emotion changes trust and whether that differs across cultures.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-yellow-500 font-black">▸</span>
            <span>
              <strong className="text-black dark:text-white">Control:</strong> whether people notice when an AI system
              makes decisions for them, and when that feels like care versus overreach. I see this as part of AI safety:
              building systems that respect people's choices.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-yellow-500 font-black">▸</span>
            <span>
              <strong className="text-black dark:text-white">Learning:</strong> how AI can support different kinds of
              learners. Right now I'm building a multimodal AI tutor where students choose how they learn (visual, text,
              or speech).
            </span>
          </li>
        </ul>
        <p className={p}>
          My approach is quantitative: experimental design, behavioral data analysis, and statistical modeling, plus
          building working tools I can study with real people.
        </p>
      </>
    ),
    tagGroups: [
      { label: "Trust", tags: ["Trust in AI", "Emotion in AI", "Cultural Differences", "Decision-Making"] },
      { label: "Control & AI Safety", tags: ["Human Agency", "AI Safety", "Explainable AI (XAI)", "UX Research"] },
      { label: "Learning", tags: ["Learning & Memory", "AI Tutors", "Learning Disabilities", "Educational Data Science"] },
      { label: "Methods", tags: ["Experimental Design", "Behavioral Data Analysis", "Statistical Modeling", "Cognitive Science"] },
    ],
  },
  {
    title: "Outside Research",
    content: (
      <p className={p}>
        Outside of classes and research, I like building things. Some I make just because I enjoy it, like a music web
        app I made as a gift for a friend. Others I make to make my own life easier, like a resume editor. Right now I'm
        planning a tool to find and delete duplicate files on my laptop. I also read a lot and like connecting ideas from
        different fields. Mostly, I just like learning new things.
      </p>
    ),
  },
]

export function AboutSection() {
  return (
    <section id="about" className="pt-10 pb-20 bg-white dark:bg-gray-950 border-t-2 border-black dark:border-gray-700">
      <div className="w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight text-black dark:text-white">ABOUT ME</h2>
        <div className="h-1 w-32 bg-yellow-400 mb-12"></div>

        <div className="space-y-10">
          {blocks.map((block, idx) => (
            <div key={idx} className="flex gap-5">
              <div className="flex-shrink-0 hidden sm:flex flex-col items-center pt-2.5">
                <span className="w-3 h-3 bg-yellow-400 border-2 border-black"></span>
                {idx !== blocks.length - 1 && <span className="w-px flex-1 bg-gray-300 mt-2"></span>}
              </div>
              <div className="space-y-3 min-w-0">
                <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">{block.title}</h3>
                {block.content}
                {block.tagGroups && (
                  <div className="grid sm:grid-cols-2 gap-4 pt-3">
                    {block.tagGroups.map((group) => (
                      <div key={group.label}>
                        <p className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
                          {group.label}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {group.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
