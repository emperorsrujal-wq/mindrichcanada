import { useEffect } from 'react'
import { Navigation } from './components/Navigation'
import { CustomCursor } from './components/CustomCursor'
import { Footer } from './components/Footer'
import { HeroSection } from './sections/HeroSection'
import { ServicesSection } from './sections/ServicesSection'
import { PortfolioSection } from './sections/PortfolioSection'
import { ProcessSection } from './sections/ProcessSection'
import { AboutSection } from './sections/AboutSection'
import { ContactSection } from './sections/ContactSection'

export default function App() {
  useEffect(() => {
    let lenis: any = null

    const init = async () => {
      const Lenis = (await import('lenis')).default
      lenis = new Lenis({ lerp: 0.08, smoothWheel: true })

      const raf = (time: number) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }

    init()
    return () => { if (lenis) lenis.destroy() }
  }, [])

  return (
    <div className="font-inter">
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
