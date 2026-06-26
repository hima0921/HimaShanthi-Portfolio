"use client"

import { useState, useEffect } from "react"
import { Mail, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

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

         <div className="hidden lg:flex items-center gap-3">
            
              <a
              href="#contact"
            className="border-2 border-black dark:border-white text-black dark:text-white font-bold py-2 px-4 text-xs uppercase rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            CV
          </a>
            
            <a
            href="https://github.com/hima0921"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center transition-colors"
          >
            <svg viewBox="0 0 16 16" className="w-4 h-4 fill-white dark:fill-black">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </a>
          
            <a
            href="https://www.linkedin.com/in/himarayapati"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="w-8 h-8 flex items-center justify-center"
          >
            <svg viewBox="0 0 16 16" className="w-8 h-8 fill-[#0A66C2]">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
          <button
            onClick={copyEmail}
            aria-label="Copy email"
            title={emailCopied ? "Copied!" : "Copy email"}
            className="relative w-8 h-8 border border-black dark:border-white text-black dark:text-white flex items-center justify-center rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
          >
            <Mail className="w-4 h-4" />
            {emailCopied && (
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-black text-white px-2 py-1 rounded whitespace-nowrap">
                Copied!
              </span>
            )}
          </button>
          
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

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden bg-black text-white p-2 rounded">
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
              className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center"
            >
              <svg viewBox="0 0 16 16" className="w-4 h-4 fill-white dark:fill-black">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>
            
              <a
              href="https://www.linkedin.com/in/himarayapati"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="w-8 h-8 flex items-center justify-center"
            >
              <svg viewBox="0 0 16 16" className="w-8 h-8 fill-[#0A66C2]">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>
            <button
              onClick={copyEmail}
              aria-label="Copy email"
              title={emailCopied ? "Copied!" : "Copy email"}
              className="relative w-8 h-8 border border-black dark:border-white text-black dark:text-white flex items-center justify-center rounded-full"
            >
              <Mail className="w-4 h-4" />
              {emailCopied && (
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-black text-white px-2 py-1 rounded whitespace-nowrap">
                  Copied!
                </span>
              )}
            </button>
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
