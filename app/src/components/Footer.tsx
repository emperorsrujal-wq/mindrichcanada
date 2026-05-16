const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-ink py-10 px-[clamp(24px,5vw,80px)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="transition-opacity duration-200 hover:opacity-80"
          >
            <img src="/logo.png" alt="MINDRICH CANADA INC" className="h-[48px] w-auto" />
          </a>
          <div className="flex flex-wrap items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleClick(e, l.href)}
                className="font-inter text-[12px] transition-colors duration-200 hover:text-[#F7F3EE]"
                style={{ color: '#8A8884' }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="pt-5" style={{ borderTop: '1px solid rgba(247,243,238,0.1)' }}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
            <span className="font-inter text-[12px]" style={{ color: '#8A8884' }}>
              &copy; 2025 MINDRICH CANADA INC
            </span>
            <span className="font-inter text-[12px] text-right" style={{ color: '#8A8884' }}>
              2300 Yonge St, Suite 1600<br className="md:hidden" />
              Toronto, ON M4P 1E4, Canada
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
