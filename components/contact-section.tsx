export function ContactSection() {
  const items = [
    { label: "Email", value: "hrayapa1@asu.edu", href: "mailto:hrayapa1@asu.edu" },
    { label: "Phone", value: "(623) 444-0816", href: "tel:+16234440816" },
    { label: "LinkedIn", value: "LinkedIn Profile", href: "https://www.linkedin.com/in/himarayapati", external: true },
    { label: "Location", value: "Tempe, Arizona" },
  ]
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-950 border-t-2 border-black dark:border-gray-700">
      <div className="w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight text-black dark:text-white">CONTACT</h2>
        <div className="h-1 w-32 bg-yellow-400 mb-12"></div>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl border-2 border-black dark:border-gray-600 bg-white dark:bg-gray-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:border-black"
            >
              <p className="font-bold uppercase text-xs tracking-wide text-gray-500 dark:text-gray-400 mb-2 group-hover:text-black/70">
                {item.label}
              </p>
              {item.href ? (
                
                  <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-lg font-semibold text-black dark:text-white group-hover:text-black"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-lg font-semibold text-black dark:text-white group-hover:text-black">{item.value}</p>
              )}
            </div>
          ))}
        </div>
        <div className="bg-yellow-400 p-8 text-center mt-12 rounded-2xl border-2 border-black">
          <p className="font-bold uppercase text-sm mb-4">Download CV</p>
          <div className="flex flex-wrap gap-4 justify-center">
            
              <a
              href="/HimaShanthi-Portfolio/CV_Academia.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white font-bold px-6 py-3 uppercase text-sm hover:bg-gray-800 transition-colors"
            >
              Research / Academia CV
            </a>
            
              <a
              href="/HimaShanthi-Portfolio/CV_Industry.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white font-bold px-6 py-3 uppercase text-sm hover:bg-gray-800 transition-colors"
            >
              Industry / Data Science CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
