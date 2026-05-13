import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    num: '01',
    title: 'IT Consulting',
    desc: 'Strategic technology guidance to align your IT investments with business goals. Our Toronto-based IT consulting company helps you navigate digital transformation with clarity and confidence.',
  },
  {
    num: '02',
    title: 'Software Development',
    desc: 'Custom web and mobile applications built with modern technologies. As a premier software company, we craft scalable solutions from concept to deployment that drive real results.',
  },
  {
    num: '03',
    title: 'IT Staffing',
    desc: 'Reliable talent placement for your technology needs. As a top staffing company in Canada, we connect you with skilled tech professionals who fit your culture and accelerate your goals.',
  },
]

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll('.svc-anim')
    gsap.fromTo(els, { x: 40, opacity: 0 }, {
      x: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.15,
      scrollTrigger: { trigger: ref.current, start: 'top 75%' },
    })
  }, { scope: ref })

  return (
    <section id="services" ref={ref} className="bg-parchment py-[clamp(80px,12vw,180px)] px-[clamp(24px,5vw,80px)]">
      <div className="max-w-[1200px] mx-auto">
        <p className="svc-anim font-inter text-[11px] font-semibold uppercase text-txt-dark-muted mb-6" style={{ letterSpacing: '0.06em' }}>
          WHAT WE DO
        </p>
        <h2
          className="svc-anim font-inter font-semibold text-txt-dark mb-16 md:mb-24"
          style={{ fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, letterSpacing: '-0.03em' }}
        >
          IT Consulting, Software & Staffing Services
        </h2>

        <div className="flex flex-col gap-12 md:gap-16">
          {services.map((s) => (
            <div key={s.num} className="svc-anim pb-12 md:pb-16" style={{ borderBottom: '1px solid rgba(12,12,14,0.08)' }}>
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-16">
                <span className="font-inter text-[11px] font-semibold text-terracotta uppercase shrink-0" style={{ letterSpacing: '0.06em' }}>
                  {s.num}
                </span>
                <div>
                  <h3
                    className="font-inter font-medium text-txt-dark mb-4"
                    style={{ fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
                  >
                    {s.title}
                  </h3>
                  <p className="font-inter text-[16px] text-txt-dark-muted max-w-[480px]" style={{ lineHeight: 1.65 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
