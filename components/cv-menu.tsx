"use client"

import { useEffect, useRef, useState } from "react"

const BASE = "/HimaShanthi-Portfolio"

// The two CVs shown on the site. The Full CV is not linked here on purpose.
export const CV_OPTIONS = [
  { label: "Industry", href: `${BASE}/CV_Industry.pdf` },
  { label: "Research", href: `${BASE}/CV_AI_and_Research.pdf` },
]

type Props = {
  /** Classes for the trigger button. */
  buttonClassName: string
  /** Which side the menu lines up with. */
  align?: "left" | "right"
  /** Called after a CV is picked (e.g. to close the mobile nav). */
  onPick?: () => void
  /** Make the menu as wide as the trigger (used in the mobile nav). */
  fullWidth?: boolean
}

export function CvMenu({ buttonClassName, align = "left", onPick, fullWidth = false }: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close on outside click or Escape.
  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    document.addEventListener("mousedown", onClick)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onClick)
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <div className={`relative ${fullWidth ? "w-full" : ""}`} ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={buttonClassName}
      >
        CV <span aria-hidden="true" className="text-[10px]">{open ? "▴" : "▾"}</span>
      </button>
      {open && (
        <div
          role="menu"
          className={`absolute top-full mt-2 z-[60] border-2 border-black dark:border-white bg-white dark:bg-gray-900 shadow-[4px_4px_0_0_#000] dark:shadow-none ${
            fullWidth ? "left-0 right-0" : `w-44 ${align === "right" ? "right-0" : "left-0"}`
          }`}
        >
          {CV_OPTIONS.map((cv) => (
            <a
              key={cv.label}
              role="menuitem"
              href={cv.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setOpen(false)
                onPick?.()
              }}
              className="block px-4 py-3 text-sm font-bold uppercase tracking-wide text-black dark:text-white hover:bg-yellow-400 hover:text-black border-b border-gray-200 dark:border-gray-700 last:border-b-0"
            >
              {cv.label} CV
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
