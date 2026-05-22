import { useRef, useEffect } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    // Only show on desktop
    if (window.innerWidth < 1024) return

    let x = 0, y = 0, targetX = 0, targetY = 0
    let visible = false

    const handleMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
      if (!visible) {
        visible = true
        dot.style.opacity = '1'
      }
    }

    const handleLeave = () => {
      visible = false
      dot.style.opacity = '0'
    }

    const animate = () => {
      x += (targetX - x) * 0.15
      y += (targetY - y) * 0.15
      dot.style.transform = `translate(${x - 4}px, ${y - 4}px)`
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    document.addEventListener('mouseleave', handleLeave)
    const raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      className="hidden lg:block fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] opacity-0"
      style={{
        backgroundColor: '#D4663C',
        mixBlendMode: 'difference',
        transition: 'opacity 0.3s',
        pointerEvents: 'none',
      }}
    />
  )
}
