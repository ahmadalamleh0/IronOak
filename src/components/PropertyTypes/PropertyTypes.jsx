import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PROPERTIES = [
  { label: 'Commercial Buildings',              image: '/images/property-commercial.webp'  },
  { label: 'Condos & Apartments',               image: '/images/property-condos.webp'      },
  { label: 'Residential Homes',                 image: '/images/property-residential.webp' },
  { label: 'Industrial & Mixed-Use Properties', image: '/images/property-industrial.webp'  },
]

const SCOPED_CSS = `
  .io-pt-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  @media (max-width: 600px) {
    .io-pt-grid { grid-template-columns: 1fr; gap: 20px; }
  }

  /* Each slot: image block + gap + label bar as separate elements */
  .io-pt-slot {
    display: flex;
    flex-direction: column;
    gap: 8px;
    cursor: default;
  }

  /* Image block — standalone, not attached to label */
  .io-pt-img-block {
    overflow: hidden;
    border-radius: 6px;
    aspect-ratio: 16 / 10;
    background: #1D242C;
    box-shadow: 0 2px 12px rgba(7,17,29,0.10);
  }
  .io-pt-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 580ms cubic-bezier(0.25,0.46,0.45,0.94);
    will-change: transform;
  }
  .io-pt-slot:hover .io-pt-img {
    transform: scale(1.04);
  }

  /* Label bar — glossy dark block below the image */
  .io-pt-bar {
    border-radius: 5px;
    background:
      linear-gradient(180deg,
        rgba(255,255,255,0.10) 0%,
        rgba(255,255,255,0.03) 45%,
        rgba(0,0,0,0.10) 100%
      ),
      #07111D;
    border: 1px solid rgba(255,255,255,0.07);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.10), 0 2px 8px rgba(0,0,0,0.18);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px 18px;
    position: relative;
    overflow: hidden;
  }
  /* Gold sweep line on hover */
  .io-pt-bar::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(to right, #C9A24A, #D8B866);
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 360ms cubic-bezier(0.16,1,0.3,1);
  }
  .io-pt-slot:hover .io-pt-bar::before {
    transform: scaleX(1);
  }

  .io-pt-label {
    font-family: "Inter Tight", Inter, Arial, sans-serif;
    font-weight: 700;
    font-size: clamp(0.85rem, 1.7vw, 0.975rem);
    letter-spacing: -0.01em;
    line-height: 1.2;
    color: #F4F1EA;
    text-align: center;
  }

  @media (prefers-reduced-motion: reduce) {
    .io-pt-img,
    .io-pt-bar,
    .io-pt-bar::before { transition: none !important; }
  }
`

// ─────────────────────────────────────────────────────────────────
const PropertyTypes = () => {
  const sectionRef = useRef(null)
  const headerRef  = useRef(null)
  const cardRefs   = useRef([])

  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {

      gsap.from(headerRef.current, {
        opacity: 0, y: rm ? 0 : 14, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 86%' },
      })

      const cards = cardRefs.current.filter(Boolean)
      if (cards.length) {
        gsap.from(cards, {
          opacity: 0, y: rm ? 0 : 22, duration: 0.60, ease: 'power2.out', stagger: 0.10,
          scrollTrigger: { trigger: cards[0], start: 'top 87%' },
        })
      }

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ background: '#F4F1EA', padding: 'clamp(80px, 10vw, 120px) 24px' }}
    >
      <style>{SCOPED_CSS}</style>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* ── Header ── */}
        <div ref={headerRef} style={{ maxWidth: '540px', margin: '0 auto 44px', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(1.85rem, 4vw, 2.8rem)',
            letterSpacing: '-0.035em', lineHeight: 1.07,
            color: '#07111D', margin: '0 0 16px',
          }}>
            Property Types We Serve
          </h2>

        </div>

        {/* ── 2×2 Card grid ── */}
        <div className="io-pt-grid">
          {PROPERTIES.map(({ label, image }, i) => (
            <div
              key={label}
              ref={(el) => { cardRefs.current[i] = el }}
              className="io-pt-slot"
            >
              {/* Image — standalone block */}
              <div className="io-pt-img-block">
                <img
                  src={image}
                  alt={label}
                  className="io-pt-img"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
              </div>

              {/* Glass label bar — separate element below */}
              <div className="io-pt-bar">
                <span className="io-pt-label">{label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default PropertyTypes
