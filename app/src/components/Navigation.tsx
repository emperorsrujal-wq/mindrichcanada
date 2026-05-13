import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 100)
      setHidden(currentY > lastScrollY.current && currentY > 300)
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center transition-all duration-400"
        style={{
          transform: hidden && !menuOpen ? 'translateY(-80px)' : 'translateY(0)',
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          backgroundColor: scrolled ? 'rgba(12, 12, 14, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        }}
      >
        <div className="flex items-center justify-between w-full px-[clamp(24px,5vw,80px)]">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center transition-opacity duration-200 hover:opacity-80"
          >
            <img src="/logo.png" alt="MINDRICH CANADA INC" className="h-[48px] w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="font-inter text-[13px] font-medium transition-colors duration-200 hover:text-[#F7F3EE]"
                style={{ color: '#8A8884' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="hidden md:block font-inter text-[13px] font-medium px-5 py-2 rounded-pill transition-all duration-250 hover:scale-[1.02]"
            style={{
              color: '#F7F3EE',
              border: '1px solid rgba(247,243,238,0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#D4663C'
              e.currentTarget.style.borderColor = '#D4663C'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(247,243,238,0.1)'
            }}
          >
            Get Started
          </a>

          <button
            className="md:hidden p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} color="#F7F3EE" /> : <Menu size={20} color="#F7F3EE" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-ink flex flex-col items-center justify-center">
          <div className="absolute top-4 left-[clamp(24px,5vw,80px)]">
            <img src="/logo.png" alt="MINDRICH CANADA INC" className="h-[52px] w-auto" />
          </div>
          <button className="absolute top-4 right-[clamp(24px,5vw,80px)]" onClick={() => setMenuOpen(false)}>
            <X size={24} color="#F7F3EE" />
          </button>
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="font-inter text-[28px] font-semibold transition-colors duration-200 hover:text-terracotta"
                style={{ color: '#F7F3EE' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
