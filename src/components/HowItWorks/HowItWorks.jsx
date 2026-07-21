import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProcessCarousel from './ProcessCarousel.jsx'

gsap.registerPlugin(ScrollTrigger)

const N              = 4
const SCROLL_PER_STEP = 560   // px of scroll per card advance — adjust lower = faster
const RM = typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches
const EASE = 'cubic-bezier(0.16,1,0.3,1)'

const HowItWorks = () => {
  const sectionRef              = useRef(null)
  const headRef                 = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [inView,      setInView]      = useState(false)

  // Header scroll-reveal
  useEffect(() => {
    const el = headRef.current; if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Scroll-driven card advancing — pin the section, advance index on scroll
  useEffect(() => {
    const section = sectionRef.current
    if (!section || RM) return

    const totalScroll = (N - 1) * SCROLL_PER_STEP

    const st = ScrollTrigger.create({
      trigger:    section,
      start:      'top top',
      end:        `+=${totalScroll}`,
      pin:        true,
      pinSpacing: true,
      onUpdate(self) {
        const idx = Math.min(N - 1, Math.round(self.progress * (N - 1)))
        setActiveIndex(prev => (prev !== idx ? idx : prev))
      },
    })

    return () => st.kill()
  }, [])  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section
      ref={sectionRef}
      style={{
        background:     '#F3EFE6',
        minHeight:      '100dvh',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'center',
        padding:        'clamp(72px,9vw,108px) 0 clamp(80px,10vw,116px)',
        boxSizing:      'border-box',
      }}
    >
      {/* ── Section intro ── */}
      <div
        ref={headRef}
        style={{
          maxWidth:      600,
          margin:        '0 auto',
          textAlign:     'center',
          padding:       '0 24px',
          marginBottom:  'clamp(48px,6vw,64px)',
          opacity:       RM || inView ? 1 : 0,
          transform:     RM || inView ? 'none' : 'translateY(16px)',
          transition:    RM ? 'none' : `opacity 650ms ${EASE}, transform 650ms ${EASE}`,
        }}
      >
        <p style={{ fontFamily: '"Manrope",system-ui,sans-serif', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.30em', textTransform: 'uppercase', color: '#C9A24A', margin: '0 0 14px' }}>
          A Simple Process
        </p>
        <h2 style={{ fontFamily: '"Inter Tight",Inter,Arial,sans-serif', fontWeight: 900, fontSize: 'clamp(1.85rem,4vw,2.8rem)', letterSpacing: '-0.035em', lineHeight: 1.07, color: '#07111D', margin: '0 0 18px' }}>
          From first call to finished work.
        </h2>
        <p style={{ fontFamily: '"Manrope",system-ui,sans-serif', fontSize: 'clamp(0.875rem,1.5vw,1rem)', lineHeight: 1.74, color: '#6F7478', margin: 0 }}>
          A straightforward process built around clear communication, dependable scheduling, and work completed with care.
        </p>
      </div>

      {/* ── Carousel — scroll-controlled ── */}
      <ProcessCarousel activeIndex={activeIndex} onNavigate={setActiveIndex} />
    </section>
  )
}

export default HowItWorks
