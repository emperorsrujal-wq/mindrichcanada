import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, MapPin, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const phones = [
  { num: '+1 437-429-6355', label: 'Primary', href: 'tel:+14374296355' },
  { num: '+1 647-877-7480', label: 'Secondary', href: 'tel:+16478777480' },
]

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll('.contact-anim')
    gsap.fromTo(els, { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.15,
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })
  }, { scope: ref })

  return (
    <section id="contact" ref={ref} className="py-[clamp(80px,12vw,180px)] px-[clamp(24px,5vw,80px)]" style={{ backgroundColor: '#D4663C' }}>
      <div className="max-w-[700px] mx-auto text-center">
        <p className="contact-anim font-inter text-[11px] font-semibold uppercase mb-6" style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.06em' }}>
          LET'S TALK
        </p>
        <h2
          className="contact-anim font-inter font-semibold mb-5"
          style={{ color: '#FFFFFF', fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, letterSpacing: '-0.03em' }}
        >
          Ready when you are.
        </h2>
        <p
          className="contact-anim font-inter text-[20px] mb-12 md:mb-16"
          style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, letterSpacing: '-0.01em' }}
        >
          Tell us what you're building. We'll tell you how we can help.
        </p>

        {/* Phone cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {phones.map((p) => (
            <a
              key={p.num}
              href={p.href}
              className="contact-anim block p-8 rounded-m text-left transition-transform duration-250 hover:scale-[1.02]"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}
            >
              <Phone size={20} color="#FFFFFF" className="mb-5" />
              <p
                className="font-inter font-medium mb-1"
                style={{ color: '#FFFFFF', fontSize: 'clamp(24px, 3vw, 32px)', letterSpacing: '-0.015em' }}
              >
                {p.num}
              </p>
              <p className="font-inter text-[14px] mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {p.label}
              </p>
              <span className="inline-flex items-center gap-1 font-inter text-[14px] font-medium" style={{ color: '#FFFFFF' }}>
                Call Now <ArrowRight size={15} />
              </span>
            </a>
          ))}
        </div>

        {/* Location */}
        <div className="contact-anim flex items-center justify-center gap-2">
          <MapPin size={16} style={{ color: 'rgba(255,255,255,0.6)' }} />
          <span className="font-inter text-[16px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Toronto, Ontario, Canada
          </span>
        </div>
      </div>
    </section>
  )
}
