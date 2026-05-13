import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ParticleNetwork } from '../components/ParticleNetwork'

export function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!contentRef.current) return
    const els = contentRef.current.querySelectorAll('.hero-anim')
    gsap.fromTo(els, { y: 30, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.2, delay: 0.4,
    })
  }, { scope: contentRef })

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-end justify-center bg-ink overflow-hidden pb-[15vh]">
      <ParticleNetwork />
      <div
        ref={contentRef}
        className="relative z-10 text-center px-[clamp(24px,5vw,80px)] max-w-[900px] mx-auto pointer-events-none"
      >
        <img
          src="/logo.png"
          alt="MINDRICH CANADA INC"
          className="hero-anim mx-auto mb-8"
          style={{ height: 'clamp(90px, 14vw, 150px)', width: 'auto', filter: 'brightness(1.1)' }}
        />
        <h1
          className="hero-anim font-inter font-semibold"
          style={{
            color: '#F7F3EE',
            fontSize: 'clamp(48px, 6vw, 96px)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
          }}
        >
          MINDRICH: Leading IT Consulting & Software Company in Toronto
        </h1>
        <p
          className="hero-anim font-inter text-[20px] mx-auto mt-8"
          style={{ color: '#8A8884', lineHeight: 1.6, letterSpacing: '-0.01em', maxWidth: 600 }}
        >
          MINDRICH Canada provides expert IT consulting, custom software development, and premier tech staffing solutions.
        </p>
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="hero-anim inline-block mt-10 font-inter text-[14px] font-medium px-8 py-[14px] rounded-pill transition-all duration-250 hover:scale-[1.02] pointer-events-auto"
          style={{ backgroundColor: '#D4663C', color: '#F7F3EE' }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#B8552F' }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#D4663C' }}
        >
          Start a Project
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div
          className="w-[1px] h-10 animate-pulse"
          style={{ backgroundColor: '#8A8884' }}
        />
      </div>
    </section>
  )
}
