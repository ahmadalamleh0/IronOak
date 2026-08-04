import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { end: 5, suffix: '+', label: 'Years Experience' },
  { end: 50, suffix: '+', label: 'Professional Services' },
  { end: 6,  suffix: '',  label: 'Core Capabilities' },
  { end: 1,  suffix: '',  label: 'Trusted Team' },
]

const SCOPED_CSS = `
  .io-wio-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid rgba(255,255,255,0.08);
    border-bottom: 1px solid rgba(255,255,255,0.08);
    margin: 56px 0 52px;
  }
  .io-wio-stat {
    padding: 42px 20px;
    text-align: center;
    border-right: 1px solid rgba(255,255,255,0.08);
  }
  .io-wio-stat:last-child { border-right: none; }

  @media (max-width: 700px) {
    .io-wio-stats { grid-template-columns: repeat(2, 1fr); }
    .io-wio-stat { padding: 32px 16px; }
    .io-wio-stat:nth-child(even) { border-right: none; }
    .io-wio-stat:nth-child(3),
    .io-wio-stat:nth-child(4) { border-top: 1px solid rgba(255,255,255,0.08); }
  }

`

const WhyIronOak = () => {
  const sectionRef  = useRef(null)
  const headerRef   = useRef(null)
  const statsRef    = useRef(null)
  const numRefs     = useRef([])
  const suffixRefs  = useRef([])

  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {

      // Header
      gsap.from(headerRef.current, {
        opacity: 0, y: rm ? 0 : 16, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
      })

      // Count-up — single ScrollTrigger fires all counters at once
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 80%',
        once: true,
        onEnter() {
          STATS.forEach(({ end, suffix }, i) => {
            const numEl    = numRefs.current[i]
            const suffixEl = suffixRefs.current[i]

            if (rm) {
              if (numEl) numEl.textContent = end
              if (suffixEl && suffix) suffixEl.style.opacity = '1'
              return
            }

            const proxy = { val: 0 }
            gsap.to(proxy, {
              val: end,
              duration: end >= 20 ? 2.0 : 1.5,
              ease: 'power2.out',
              delay: i * 0.10,
              onUpdate() {
                if (numEl) numEl.textContent = Math.round(proxy.val)
              },
              onComplete() {
                if (numEl) numEl.textContent = end
                if (suffixEl && suffix) {
                  gsap.to(suffixEl, { opacity: 1, duration: 0.28, ease: 'power1.out' })
                }
              },
            })

            // Fade the stat cell in as the number starts
            const cell = numEl?.closest('.io-wio-stat')
            if (cell) {
              gsap.from(cell, {
                opacity: 0, y: 18, duration: 0.55, ease: 'power2.out',
                delay: i * 0.10,
              })
            }
          })
        },
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="why-ironoak"
      data-navbar="invert"
      style={{ background: '#07111D', padding: 'clamp(80px, 10vw, 120px) 24px' }}
    >
      <style>{SCOPED_CSS}</style>
      <div style={{ maxWidth: '1120px', margin: '0 auto' }}>

        {/* ── Header ── */}
        <div ref={headerRef} style={{ maxWidth: '580px' }}>
          <p style={{
            fontFamily: '"Manrope", system-ui, sans-serif',
            fontSize: '0.62rem', fontWeight: 700,
            letterSpacing: '0.30em', textTransform: 'uppercase',
            color: '#C9A24A', margin: '0 0 16px',
          }}>
            Why IronOak
          </p>

          <h2 style={{
            fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(1.9rem, 4.2vw, 3rem)',
            letterSpacing: '-0.035em', lineHeight: 1.07,
            color: '#F4F1EA', margin: '0 0 18px',
          }}>
            Built for reliable<br />property care.
          </h2>

          <p style={{
            fontFamily: '"Manrope", system-ui, sans-serif',
            fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
            lineHeight: 1.74,
            color: 'rgba(244,241,234,0.48)',
            margin: 0,
          }}>
            From quick repairs to full-scale property improvements, IronOak brings dependable service, skilled trades, and organized execution to every project.
          </p>
        </div>

        {/* ── Stats ── */}
        <div ref={statsRef} className="io-wio-stats">
          {STATS.map(({ end, suffix, label }, i) => (
            <div key={label} className="io-wio-stat">
              {/* Number row */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                lineHeight: 1,
                marginBottom: '10px',
              }}>
                <span
                  ref={(el) => { numRefs.current[i] = el }}
                  style={{
                    fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
                    fontWeight: 900,
                    fontSize: 'clamp(3.2rem, 7vw, 5.2rem)',
                    letterSpacing: '-0.05em',
                    color: '#F4F1EA',
                    lineHeight: 1,
                  }}
                >
                  0
                </span>

                {suffix && (
                  <span
                    ref={(el) => { suffixRefs.current[i] = el }}
                    aria-hidden="true"
                    style={{
                      fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
                      fontWeight: 900,
                      fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                      color: '#C9A24A',
                      lineHeight: 1,
                      marginTop: '0.1em',
                      opacity: 0,
                    }}
                  >
                    {suffix}
                  </span>
                )}
              </div>

              {/* Label */}
              <p style={{
                fontFamily: '"Manrope", system-ui, sans-serif',
                fontSize: '0.65rem', fontWeight: 600,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'rgba(244,241,234,0.38)',
                margin: 0,
              }}>
                {label}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}

export default WhyIronOak
