import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { num: '01', title: 'Discover', desc: 'Deep-dive into your business goals and technical landscape.' },
  { num: '02', title: 'Strategize', desc: 'Craft a technology roadmap aligned with your vision.' },
  { num: '03', title: 'Execute', desc: 'Build with agile sprints, transparent communication, and zero surprises.' },
  { num: '04', title: 'Support', desc: 'Launch, monitor, and continuously improve.' },
]

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll('.proc-anim')
    gsap.fromTo(els, { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.15,
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })
  }, { scope: ref })

  return (
    <section id="process" ref={ref} className="bg-parchment py-[clamp(80px,12vw,180px)] px-[clamp(24px,5vw,80px)]">
      <div className="max-w-[1200px] mx-auto">
        <p className="proc-anim font-inter text-[11px] font-semibold uppercase text-txt-dark-muted mb-6" style={{ letterSpacing: '0.06em' }}>
          OUR PROCESS
        </p>
        <h2
          className="proc-anim font-inter font-semibold text-txt-dark mb-16 md:mb-24"
          style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, letterSpacing: '-0.03em' }}
        >
          Four steps to success
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`proc-anim relative ${i < steps.length - 1 ? 'lg:border-r' : ''}`}
              style={{ borderColor: 'rgba(12,12,14,0.08)' }}
            >
              <div className="lg:px-8 relative">
                {/* Watermark number */}
                <span
                  className="font-inter font-semibold text-txt-dark/[0.06] block leading-none select-none absolute -top-4 left-8"
                  style={{ fontSize: 'clamp(64px, 6vw, 100px)' }}
                >
                  {s.num}
                </span>
                <h3
                  className="font-inter font-medium text-txt-dark mb-3 relative z-10"
                  style={{ fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
                >
                  {s.title}
                </h3>
                <p className="font-inter text-[16px] text-txt-dark-muted relative z-10" style={{ lineHeight: 1.65 }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
