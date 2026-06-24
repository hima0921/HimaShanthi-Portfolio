"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState("home")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "EDUCATION", href: "#education" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "RESEARCH", href: "#research" },
    { name: "PROJECTS", href: "#projects" },
    { name: "ESSAYS", href: "#essays" },
    { name: "SKILLS", href: "#skills" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      let current = "home"
      navItems.forEach((item) => {
        const id = item.href.replace("#", "")
        const el = document.getElementById(id)
        if (!el) return
        const rect = el.getBoundingClientRect()
        if (rect.top <= 140) current = id
      })
      setActiveId(current)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-950 border-b-2 border-black dark:border-gray-700 transition-colors">
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-xl font-black tracking-tight text-black dark:text-white">
          HIMA
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const id = item.href.replace("#", "")
            const isActive = activeId === id
            return (
              <a
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-xs font-bold uppercase tracking-wide rounded-md transition-all duration-200 ${
                  isActive
                    ? "bg-yellow-400 text-black"
                    : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {item.name}
              </a>
            )
          })}
        </nav>

        {/* Right side: socials + contact (desktop) */}
         <div className="hidden lg:flex items-center gap-3">
          
            <a
              href="#contact"
            className="border-2 border-black dark:border-white text-black dark:text-white font-bold py-2 px-4 text-xs uppercase rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            CV
          </a>
          
            href="https://github.com/hima0921"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="w-8 h-8 border border-black dark:border-white text-black dark:text-white flex items-center justify-center rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/himarayapati"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="w-8 h-8 border border-black dark:border-white text-black dark:text-white flex items-center justify-center rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:hrayapa1@asu.edu"
            aria-label="Email"
            title="Email"
            className="w-8 h-8 border border-black dark:border-white text-black dark:text-white flex items-center justify-center rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="bg-yellow-400 text-black font-bold py-2 px-4 text-xs uppercase rounded-md border-2 border-black hover:bg-black hover:text-white transition-colors"
          >
            Contact
          </a>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle dark mode"
              title="Toggle dark mode"
              className="w-8 h-8 border border-black dark:border-white flex items-center justify-center rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden bg-black text-white p-2 rounded">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="lg:hidden border-t-2 border-black dark:border-gray-700 bg-white dark:bg-gray-950 px-6 py-4 space-y-1">
          {navItems.map((item) => {
            const id = item.href.replace("#", "")
            const isActive = activeId === id
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-sm font-bold uppercase tracking-wide rounded-md ${
                  isActive ? "bg-yellow-400 text-black" : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {item.name}
              </a>
            )
          })}
          <a
           href="#contact"
            onClick={() => setIsOpen(false)}
            className="block mt-3 bg-yellow-400 text-black font-bold py-2.5 px-4 text-center text-sm uppercase rounded-md border-2 border-black"
          >
            Contact
          </a>
          
            <a
              href="#contact"
            onClick={() => setIsOpen(false)}
            className="block mt-2 text-black dark:text-white font-bold py-2.5 px-4 text-center text-sm uppercase rounded-md border-2 border-black dark:border-white"
          >
            CV
          </a>
          <div className="flex gap-3 justify-center pt-4">
            <a
              href="https://github.com/hima0921"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="w-8 h-8 border border-black dark:border-white text-black dark:text-white flex items-center justify-center rounded-full"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/himarayapati"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="w-8 h-8 border border-black dark:border-white text-black dark:text-white flex items-center justify-center rounded-full"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:hrayapa1@asu.edu" aria-label="Email" title="Email" className="w-8 h-8 border border-black dark:border-white text-black dark:text-white flex items-center justify-center rounded-full">
              <Mail className="w-4 h-4" />
            </a>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle dark mode"
                title="Toggle dark mode"
                className="w-8 h-8 border border-black dark:border-white flex items-center justify-center rounded-full"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
