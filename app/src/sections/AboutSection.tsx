import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { num: '50+', label: 'Projects Delivered' },
  { num: '6', label: 'Live Platforms' },
  { num: '100%', label: 'Client-First' },
]

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll('.about-anim')
    gsap.fromTo(els, { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.15,
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })
  }, { scope: ref })

  return (
    <section id="about" ref={ref} className="bg-ink py-[clamp(80px,12vw,180px)] px-[clamp(24px,5vw,80px)]">
      <div className="max-w-[1200px] mx-auto">
        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 md:mb-28">
          <div>
            <p className="about-anim font-inter text-[11px] font-semibold uppercase mb-6" style={{ color: '#8A8884', letterSpacing: '0.06em' }}>
              ABOUT
            </p>
            <h2
              className="about-anim font-inter font-semibold mb-6"
              style={{ color: '#F7F3EE', fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
            >
              MINDRICH: A Leading IT Consulting Company in Toronto, Canada
            </h2>
            <p
              className="about-anim font-inter text-[20px]"
              style={{ color: '#8A8884', lineHeight: 1.6, letterSpacing: '-0.01em' }}
            >
              MINDRICH is a premier software company and staffing firm. We're a team of engineers, strategists, and designers who believe technology should serve people. Based in Toronto, we partner with businesses across Canada to deliver top-tier custom software and connect them with exceptional tech talent.
            </p>
          </div>
          <div className="about-anim">
            <img
              src="/about-office.jpg"
              alt="MINDRICH - IT Consulting and Software Company in Toronto, Canada"
              className="w-full h-full object-cover rounded-m"
              style={{ maxHeight: 500 }}
            />
          </div>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 pt-12 md:pt-16"
          style={{ borderTop: '1px solid rgba(247,243,238,0.1)' }}
        >
          {stats.map((s) => (
            <div key={s.label} className="about-anim">
              <p
                className="font-inter font-medium mb-1"
                style={{ color: '#D4663C', fontSize: 'clamp(28px, 3vw, 40px)', letterSpacing: '-0.02em' }}
              >
                {s.num}
              </p>
              <p className="font-inter text-[11px] font-semibold uppercase" style={{ color: '#8A8884', letterSpacing: '0.06em' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
