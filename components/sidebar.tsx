"use client"

import { useState, useEffect } from "react"
import { Mail, Sun, Moon, Github, Linkedin } from "lucide-react"
import { useTheme } from "next-themes"
import { CvMenu } from "@/components/cv-menu"

// One look for every icon button: same size, outlined circle, black icon (white in dark mode).
const iconBtn =
  "relative w-9 h-9 flex-shrink-0 rounded-full border-2 border-black dark:border-white text-black dark:text-white flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"

// The only two text buttons: same height and border. Contact is yellow.
const textBtn =
  "h-9 inline-flex items-center justify-center gap-1.5 px-4 text-xs font-bold uppercase rounded-md border-2 transition-colors"
const cvBtn = `${textBtn} border-black dark:border-white bg-transparent text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black`
const contactBtn = `${textBtn} border-black bg-yellow-400 text-black hover:bg-black hover:text-white`

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState("home")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const [emailCopied, setEmailCopied] = useState(false)
  const copyEmail = () => {
    navigator.clipboard.writeText("hrayapa1@asu.edu")
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

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

  const iconButtons = (
    <>
      <a href="https://github.com/hima0921" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className={iconBtn}>
        <Github className="w-4 h-4" />
      </a>
      <a
        href="https://www.linkedin.com/in/himarayapati"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
        className={iconBtn}
      >
        <Linkedin className="w-4 h-4" />
      </a>
      <button onClick={copyEmail} aria-label="Copy email" title={emailCopied ? "Copied!" : "Copy email"} className={iconBtn}>
        <Mail className="w-4 h-4" />
        {emailCopied && (
          <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-black text-white px-2 py-1 rounded whitespace-nowrap">
            Copied!
          </span>
        )}
      </button>
      {mounted ? (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle dark mode"
          title="Toggle dark mode"
          className={iconBtn}
        >
          {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      ) : (
        // Placeholder of the same size so the bar doesn't shift on load.
        <span className="w-9 h-9 flex-shrink-0" aria-hidden="true" />
      )}
    </>
  )

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FAF6ED] dark:bg-gray-950 border-b-2 border-black dark:border-gray-700 transition-colors">
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 h-16 flex items-center justify-between">
        <a href="#home" className="text-xl font-black tracking-tight text-black dark:text-white">
          HIMA
        </a>

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

        <div className="hidden lg:flex items-center gap-2">
          <CvMenu buttonClassName={cvBtn} align="right" />
          {iconButtons}
          <a href="#contact" className={contactBtn}>
            Contact
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open menu"
          aria-expanded={isOpen}
          className="lg:hidden bg-black text-white p-2 rounded"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t-2 border-black dark:border-gray-700 bg-[#FAF6ED] dark:bg-gray-950 px-6 py-4 space-y-1">
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

          <div className="grid grid-cols-2 gap-2 pt-3">
            <CvMenu buttonClassName={`${cvBtn} w-full`} fullWidth onPick={() => setIsOpen(false)} />
            <a href="#contact" onClick={() => setIsOpen(false)} className={`${contactBtn} w-full`}>
              Contact
            </a>
          </div>
          <div className="flex gap-3 justify-center pt-4">{iconButtons}</div>
        </div>
      )}
    </header>
  )
}
