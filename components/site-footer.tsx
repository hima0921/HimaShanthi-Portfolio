export function SiteFooter() {
  return (
    <footer className="border-t-2 border-black dark:border-gray-700 bg-[#FAF6ED] dark:bg-gray-950">
      <div className="w-full max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-6 flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-black tracking-tight text-black dark:text-white">HIMA SHANTHI RAYAPATI</p>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Built with Next.js and Tailwind CSS. Resume PDFs are generated from one data file with GitHub Actions.
        </p>
      </div>
    </footer>
  )
}
