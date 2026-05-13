import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Smartphone } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const liveProjects = [
  {
    name: 'pdfa2z.com',
    desc: 'PDF conversion and management platform',
    url: 'https://pdfa2z.com',
    image: '/work-1.jpg',
    type: 'website',
  },
  {
    name: 'nrihelpline.net',
    desc: 'NRI services and support portal',
    url: 'https://nrihelpline.net',
    image: '/work-2.jpg',
    type: 'website',
  },
  {
    name: 'applyevisaindia.com',
    desc: 'Indian e-Visa application system',
    url: 'https://applyevisaindia.com',
    image: '/work-3.jpg',
    type: 'website',
  },
  {
    name: 'iloveplants',
    desc: 'Plant care mobile app for iOS & Android',
    url: '#',
    image: '/work-4.jpg',
    type: 'mobile',
  },
]

const comingSoon = [
  { name: 'aswomedeals.com', desc: 'Small business advertising platform' },
  { name: 'Condo & Property Management', desc: 'Property management software suite' },
]

export function PortfolioSection() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!ref.current) return
    const items = ref.current.querySelectorAll('.work-anim')
    gsap.fromTo(items, { y: 80, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', stagger: 0.2,
      scrollTrigger: { trigger: ref.current, start: 'top 80%' },
    })
  }, { scope: ref })

  return (
    <section id="portfolio" ref={ref} className="bg-ink py-[clamp(80px,12vw,180px)] px-[clamp(24px,5vw,80px)]">
      <div className="max-w-[1200px] mx-auto">
        <p className="work-anim font-inter text-[11px] font-semibold uppercase mb-6" style={{ color: '#8A8884', letterSpacing: '0.06em' }}>
          SELECTED WORK
        </p>
        <h2
          className="work-anim font-inter font-semibold mb-16 md:mb-24"
          style={{ color: '#F7F3EE', fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.05, letterSpacing: '-0.03em' }}
        >
          Platforms we've built
        </h2>

        {/* Live projects - large cinematic cards */}
        <div className="flex flex-col gap-10 md:gap-14">
          {liveProjects.map((p) => (
            <div key={p.name} className="work-anim group relative overflow-hidden rounded-l" style={{ aspectRatio: '16/9' }}>
              <img
                src={p.image}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
              />
              <div className="absolute inset-0 bg-[rgba(12,12,14,0.45)] group-hover:bg-[rgba(12,12,14,0.35)] transition-colors duration-500" />
              <div className="absolute inset-0 p-6 md:p-10 flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3
                      className="font-inter font-medium"
                      style={{ color: '#F7F3EE', fontSize: 'clamp(20px, 3vw, 32px)', letterSpacing: '-0.015em' }}
                    >
                      {p.name}
                    </h3>
                    {p.type === 'mobile' && (
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-pill" style={{ backgroundColor: 'rgba(247,243,238,0.15)', backdropFilter: 'blur(8px)' }}>
                        <Smartphone size={12} color="#F7F3EE" />
                        <span className="font-inter text-[11px] font-medium" style={{ color: '#F7F3EE' }}>App</span>
                      </span>
                    )}
                  </div>
                  <p className="font-inter text-[14px] md:text-[16px]" style={{ color: '#8A8884' }}>
                    {p.desc}
                  </p>
                </div>
                {p.url !== '#' ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex items-center gap-2 font-inter text-[14px] font-medium transition-colors duration-200 shrink-0"
                    style={{ color: '#D4663C' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#B8552F' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#D4663C' }}
                  >
                    Visit <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <span className="hidden md:inline-flex items-center gap-1 px-3 py-1.5 rounded-pill font-inter text-[12px] font-medium shrink-0" style={{ backgroundColor: '#424245', color: '#8A8884' }}>
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon projects */}
        <div className="work-anim grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 md:mt-14">
          {comingSoon.map((p) => (
            <div
              key={p.name}
              className="p-8 rounded-m"
              style={{ backgroundColor: '#18181C', opacity: 0.6 }}
            >
              <h4 className="font-inter text-[18px] font-medium mb-2" style={{ color: '#F7F3EE' }}>
                {p.name}
              </h4>
              <p className="font-inter text-[14px]" style={{ color: '#8A8884' }}>
                {p.desc}
              </p>
              <span
                className="inline-block mt-4 font-inter text-[11px] font-semibold uppercase px-3 py-1.5 rounded-pill"
                style={{ backgroundColor: '#424245', color: '#8A8884', letterSpacing: '0.05em' }}
              >
                In Development
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
