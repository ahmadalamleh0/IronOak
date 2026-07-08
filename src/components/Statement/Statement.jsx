import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Each word gets an overflow:hidden mask + inner animated span
const WordMask = ({ children, innerRef }) => (
  <span
    style={{
      display: 'inline-block',
      overflow: 'hidden',
      verticalAlign: 'bottom',
      paddingBottom: '0.08em',
    }}
  >
    <span ref={innerRef} style={{ display: 'inline-block' }}>
      {children}
    </span>
  </span>
)

const Statement = () => {
  const sectionRef  = useRef(null)
  const headlineRef = useRef(null)
  const ruleRef     = useRef(null)
  const paraRef     = useRef(null)
  // 4 word refs: [One, Team., Every, Trade.]
  const w = useRef([null, null, null, null])

  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      const words = w.current.filter(Boolean)

      // Gold rule draws in from center
      gsap.from(ruleRef.current, {
        scaleX: 0,
        duration: 0.7,
        ease: 'power2.out',
        transformOrigin: 'center center',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' },
      })

      if (rm) {
        gsap.from([...words, paraRef.current], {
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: { trigger: headlineRef.current, start: 'top 85%' },
        })
        return
      }

      // Word-by-word mask reveal — each word slides up independently
      gsap.from(words, {
        yPercent: 110,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: headlineRef.current,
          start: 'top 84%',
        },
      })

      // Paragraph fades up after all words have started
      gsap.from(paraRef.current, {
        opacity: 0,
        y: 16,
        duration: 0.75,
        ease: 'power2.out',
        delay: 0.55,
        scrollTrigger: {
          trigger: paraRef.current,
          start: 'top 89%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#F4F1EA',
        padding: 'clamp(88px, 12vw, 128px) 24px clamp(72px, 10vw, 108px)',
      }}
    >
      <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>

        {/* Gold rule */}
        <div
          ref={ruleRef}
          aria-hidden="true"
          style={{
            width: '44px',
            height: '2px',
            borderRadius: '1px',
            background: 'linear-gradient(90deg, #C9A24A, #D8B866)',
            margin: '0 auto 44px',
          }}
        />

        {/* Headline — word by word */}
        <h2
          ref={headlineRef}
          style={{
            margin: '0 0 36px',
            fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(3rem, 9vw, 7.8rem)',
            letterSpacing: '-0.04em',
            lineHeight: 0.91,
            color: '#07111D',
          }}
        >
          {/* Line 1 */}
          <span style={{ display: 'block' }}>
            <WordMask innerRef={(el) => { w.current[0] = el }}>One</WordMask>
            {' '}
            <WordMask innerRef={(el) => { w.current[1] = el }}>Team.</WordMask>
          </span>

          {/* Line 2 */}
          <span style={{ display: 'block' }}>
            <WordMask innerRef={(el) => { w.current[2] = el }}>Every</WordMask>
            {' '}
            <WordMask innerRef={(el) => { w.current[3] = el }}>Trade.</WordMask>
          </span>
        </h2>

        {/* Supporting paragraph */}
        <p
          ref={paraRef}
          style={{
            fontFamily: '"Manrope", system-ui, sans-serif',
            fontSize: 'clamp(0.975rem, 1.8vw, 1.125rem)',
            lineHeight: 1.76,
            color: '#6F7478',
            maxWidth: '540px',
            margin: '0 auto',
          }}
        >
          Whether it&apos;s a quick repair, a complete renovation, or ongoing
          property maintenance, IronOak delivers skilled professionals for
          virtually every aspect of residential and commercial properties.
        </p>

      </div>
    </section>
  )
}

export default Statement
