import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LogoMark from '../Logo/LogoMark.jsx'

gsap.registerPlugin(ScrollTrigger)

const EASE_OUT = 'power3.out'

const CHECK_ITEMS = [
  'Repairs',
  'Renovations',
  'Maintenance',
  'Installations',
  'Construction',
  'Exterior Projects',
  'Interior Finishing',
  'Emergency Services',
  'Preventative Maintenance',
  'Custom Solutions',
  'CCTV Installations',
]

const LEFT_COL  = CHECK_ITEMS.slice(0, 6)
const RIGHT_COL = CHECK_ITEMS.slice(6)

// Grain noise — opacity baked into the SVG rect so it can live inside background-image stacks
const _grain = encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='250' height='250'>" +
  "<filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/>" +
  "<feColorMatrix type='saturate' values='0'/></filter>" +
  "<rect width='250' height='250' filter='url(#g)'/></svg>"
)

const SCOPED_CSS = `
  /* Cream wrapper — pulls up over dark section above to create "emerging" feel */
  .ironoakServicesWrapper {
    background-color: #F4F1EA;
    padding: 52px 20px 108px;
    position: relative;
    z-index: 5;
    margin-top: 0;
  }

  /* Outer panel shell — overflow:visible so the emblem disc straddles the edge */
  .ironoakServicesPanel {
    position: relative;
    max-width: 1240px;
    width: 100%;
    margin: 0 auto;
  }

  /* Inner dark panel
     Layer order (bottom → top):
       1. background-color  #1D242C  (fallback)
       2. photo             cover
       3. dark overlay      gradient
       4. ::before          grain + edge vignette
       5. JSX children      glow, lines, content
  */
  .ironoakServicesPanelContent {
    position: relative;
    background-color: #1D242C;
    background-image:
      linear-gradient(
        180deg,
        rgba(7,17,29,0.84) 0%,
        rgba(7,17,29,0.68) 48%,
        rgba(7,17,29,0.82) 100%
      ),
      url('/panel-texture.jpg');
    background-size: auto, cover;
    background-position: center, center;
    background-repeat: no-repeat, no-repeat;
    padding: 84px 96px;
    overflow: hidden;
    border: 1px solid rgba(201,162,74,0.18);
    box-shadow:
      0 48px 110px rgba(7,17,29,0.32),
      0 16px 44px rgba(7,17,29,0.22),
      0 3px 14px rgba(7,17,29,0.16);
  }

  /* Grain texture + soft vignette — sits above photo but below content */
  .ironoakServicesPanelContent::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,${_grain}");
    background-size: 250px 250px;
    background-repeat: repeat;
    opacity: 0.09;
    pointer-events: none;
    z-index: 0;
  }

  /* Decorative blueprint lines */
  .ironoakServicesLineAccent {
    position: absolute;
    pointer-events: none;
    z-index: 0;
  }

  /* Brand emblem disc — straddles bottom-left edge of panel */
  .ironoakServicesEmblem {
    position: absolute;
    bottom: -52px;
    left: 52px;
    width: 104px;
    height: 104px;
    border-radius: 50%;
    background: linear-gradient(150deg, #252e3a 0%, #131c26 100%);
    border: 1px solid rgba(201,162,74,0.32);
    box-shadow:
      0 10px 34px rgba(7,17,29,0.52),
      inset 0 1px 0 rgba(201,162,74,0.14),
      0 0 0 4px rgba(201,162,74,0.07);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    z-index: 10;
  }

  /* Tablet */
  @media (max-width: 1080px) {
    .ironoakServicesPanelContent {
      padding: 64px 56px;
    }
    .ironoakServicesEmblem {
      width: 88px;
      height: 88px;
      bottom: -44px;
      left: 44px;
      padding: 13px;
    }
  }

  /* Mobile */
  @media (max-width: 640px) {
    .ironoakServicesWrapper {
      padding: 32px 12px 80px;
      margin-top: 0;
    }
    .ironoakServicesPanelContent {
      padding: 40px 22px;
    }
    .ironoakServicesEmblem {
      width: 72px;
      height: 72px;
      bottom: -36px;
      left: 24px;
      padding: 11px;
    }
    .ironoakServicesLineAccentTR {
      opacity: 0.22;
    }
    .ironoakServicesLineAccentBL {
      display: none;
    }
  }

  @media (max-width: 400px) {
    .ironoakServicesLineAccentTR {
      display: none;
    }
  }
`

// ── Sub-components ─────────────────────────────────────────────────────────────

const GoldCheck = () => (
  <svg
    viewBox="0 0 16 16"
    width="16"
    height="16"
    fill="none"
    stroke="#D8B866"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ flexShrink: 0, marginTop: '1px' }}
  >
    <path d="M2.5 8.5l3.5 3.5L13.5 4" />
  </svg>
)

const CheckItem = ({ label, innerRef }) => (
  <li
    ref={innerRef}
    style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '7px 0' }}
  >
    <GoldCheck />
    <span
      style={{
        fontFamily: '"Manrope", "Inter", system-ui, sans-serif',
        fontSize: '0.9rem',
        fontWeight: 500,
        color: 'rgba(244,241,234,0.90)',
        lineHeight: 1.4,
      }}
    >
      {label}
    </span>
  </li>
)

// Architectural lines — clipped by overflow:hidden on inner panel
const TopRightAccent = ({ innerRef }) => (
  <div
    ref={innerRef}
    className="ironoakServicesLineAccent ironoakServicesLineAccentTR"
    style={{ top: 0, right: 0, width: 'min(400px, 36%)' }}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      <path d="M382 10 L396 10" stroke="rgba(201,162,74,0.22)" strokeWidth="1" strokeLinecap="round"/>
      <path d="M396 10 L396 22" stroke="rgba(201,162,74,0.22)" strokeWidth="1" strokeLinecap="round"/>
      <line x1="400" y1="0" x2="0"   y2="300" stroke="rgba(201,162,74,0.07)"  strokeWidth="0.75"/>
      <line x1="400" y1="0" x2="0"   y2="228" stroke="rgba(201,162,74,0.055)" strokeWidth="0.65"/>
      <line x1="400" y1="0" x2="0"   y2="164" stroke="rgba(201,162,74,0.042)" strokeWidth="0.55"/>
      <line x1="400" y1="0" x2="72"  y2="300" stroke="rgba(201,162,74,0.032)" strokeWidth="0.5"/>
      <line x1="144" y1="44" x2="382" y2="44" stroke="rgba(201,162,74,0.11)" strokeWidth="0.65"/>
      <line x1="144" y1="39" x2="144" y2="49" stroke="rgba(201,162,74,0.15)" strokeWidth="0.8"/>
      <line x1="382" y1="39" x2="382" y2="49" stroke="rgba(201,162,74,0.15)" strokeWidth="0.8"/>
      <line x1="396" y1="30"  x2="396" y2="154" stroke="rgba(201,162,74,0.10)" strokeWidth="0.65"/>
      <line x1="391" y1="30"  x2="401" y2="30"  stroke="rgba(201,162,74,0.15)" strokeWidth="0.8"/>
      <line x1="391" y1="154" x2="401" y2="154" stroke="rgba(201,162,74,0.15)" strokeWidth="0.8"/>
      <circle cx="338" cy="70" r="3.5" stroke="rgba(201,162,74,0.14)" strokeWidth="0.75" fill="none"/>
      <line x1="332" y1="70" x2="328" y2="70" stroke="rgba(201,162,74,0.14)" strokeWidth="0.75"/>
      <line x1="344" y1="70" x2="348" y2="70" stroke="rgba(201,162,74,0.14)" strokeWidth="0.75"/>
      <line x1="338" y1="64" x2="338" y2="60" stroke="rgba(201,162,74,0.14)" strokeWidth="0.75"/>
      <line x1="338" y1="76" x2="338" y2="80" stroke="rgba(201,162,74,0.14)" strokeWidth="0.75"/>
    </svg>
  </div>
)

const BottomLeftAccent = ({ innerRef }) => (
  <div
    ref={innerRef}
    className="ironoakServicesLineAccent ironoakServicesLineAccentBL"
    style={{ bottom: 0, left: 0, width: 'min(240px, 20%)' }}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 240 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      <path d="M14 172 L3 172" stroke="rgba(201,162,74,0.18)" strokeWidth="0.9" strokeLinecap="round"/>
      <path d="M3 172 L3 159"  stroke="rgba(201,162,74,0.18)" strokeWidth="0.9" strokeLinecap="round"/>
      <line x1="0" y1="180" x2="206" y2="0"   stroke="rgba(201,162,74,0.065)" strokeWidth="0.65"/>
      <line x1="0" y1="180" x2="142" y2="0"   stroke="rgba(201,162,74,0.05)"  strokeWidth="0.55"/>
      <line x1="0" y1="180" x2="82"  y2="0"   stroke="rgba(201,162,74,0.038)" strokeWidth="0.5"/>
      <line x1="3"   y1="148" x2="106" y2="148" stroke="rgba(201,162,74,0.09)"  strokeWidth="0.55"/>
      <line x1="106" y1="143" x2="106" y2="153" stroke="rgba(201,162,74,0.13)" strokeWidth="0.7"/>
      <circle cx="44" cy="150" r="2" stroke="rgba(201,162,74,0.12)" strokeWidth="0.65" fill="none"/>
    </svg>
  </div>
)

// ── Section ────────────────────────────────────────────────────────────────────

const Services = () => {
  const sectionRef   = useRef(null)
  const panelRef     = useRef(null)
  const emblemRef    = useRef(null)
  const labelRef     = useRef(null)
  const headMaskRef  = useRef(null)
  const headInnerRef = useRef(null)
  const copyRef      = useRef(null)
  const dividerRef   = useRef(null)
  const checkRefs    = useRef([])
  const lineRefTR    = useRef(null)
  const lineRefBL    = useRef(null)

  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (rm) return

      // ── Panel entrance ───────────────────────────────────────────────────────
      gsap.from(panelRef.current, {
        opacity: 0,
        y: 32,
        duration: 1.0,
        ease: EASE_OUT,
        scrollTrigger: {
          trigger: panelRef.current,
          start: 'top 84%',
        },
      })

      // ── Emblem settles in after panel ────────────────────────────────────────
      if (emblemRef.current) {
        gsap.from(emblemRef.current, {
          opacity: 0,
          y: 16,
          duration: 0.9,
          ease: 'power2.out',
          delay: 0.22,
          scrollTrigger: {
            trigger: panelRef.current,
            start: 'top 80%',
          },
        })
      }

      // ── Architectural line accents ────────────────────────────────────────────
      const lines = [lineRefTR.current, lineRefBL.current].filter(Boolean)
      if (lines.length) {
        gsap.from(lines, {
          opacity: 0,
          duration: 1.6,
          ease: 'power2.out',
          stagger: 0.3,
          scrollTrigger: {
            trigger: panelRef.current,
            start: 'top 80%',
          },
        })
      }

      // ── Heading mask reveal ──────────────────────────────────────────────────
      gsap.from(headInnerRef.current, {
        yPercent: 108,
        duration: 1.0,
        ease: EASE_OUT,
        scrollTrigger: {
          trigger: headMaskRef.current,
          start: 'top 86%',
        },
      })

      // ── Label + divider ──────────────────────────────────────────────────────
      gsap.from([labelRef.current, dividerRef.current], {
        opacity: 0,
        y: 12,
        duration: 0.65,
        ease: EASE_OUT,
        stagger: 0.08,
        scrollTrigger: {
          trigger: labelRef.current,
          start: 'top 88%',
        },
      })

      // ── Body copy ────────────────────────────────────────────────────────────
      gsap.from(copyRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: EASE_OUT,
        scrollTrigger: {
          trigger: copyRef.current,
          start: 'top 85%',
        },
      })

      // ── Checklist stagger ────────────────────────────────────────────────────
      const items = checkRefs.current.filter(Boolean)
      if (items.length) {
        gsap.from(items, {
          opacity: 0,
          x: -14,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.045,
          scrollTrigger: {
            trigger: items[0],
            start: 'top 82%',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const setCheckRef = (i) => (el) => { checkRefs.current[i] = el }

  return (
    <section
      id="services"
      ref={sectionRef}
      className="ironoakServicesWrapper"
    >
      <style>{SCOPED_CSS}</style>

      {/* Outer shell — overflow:visible for the straddling emblem */}
      <div ref={panelRef} className="ironoakServicesPanel">

        {/* Inner dark panel — overflow:hidden clips photo, grain, lines */}
        <div className="ironoakServicesPanelContent">

          {/* Warm gold centre glow */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse 72% 64% at 50% 34%, rgba(201,162,74,0.065) 0%, transparent 68%)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {/* Edge vignette — dark perimeter for depth */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background: [
                'radial-gradient(ellipse 88% 78% at 50% 50%, transparent 46%, rgba(0,0,0,0.28) 100%)',
                'linear-gradient(180deg, rgba(0,0,0,0.16) 0%, transparent 24%)',
              ].join(', '),
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {/* Blueprint line accents */}
          <TopRightAccent innerRef={lineRefTR} />
          <BottomLeftAccent innerRef={lineRefBL} />

          {/* ── Content ── */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div
              style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }}
              className="lg:grid-cols-[5fr_6fr] lg:gap-20 xl:gap-28"
            >

              {/* Left: headline */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                <div
                  ref={labelRef}
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px' }}
                >
                  <span
                    style={{
                      fontFamily: '"Manrope", system-ui, sans-serif',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.32em',
                      textTransform: 'uppercase',
                      color: '#C9A24A',
                    }}
                  >
                    Property Solutions
                  </span>
                  <span
                    style={{
                      flex: 1,
                      height: '1px',
                      background: 'rgba(201,162,74,0.25)',
                      maxWidth: '40px',
                    }}
                  />
                </div>

                <div
                  ref={headMaskRef}
                  style={{ overflow: 'hidden', paddingBottom: '0.06em' }}
                >
                  <h2
                    ref={headInnerRef}
                    style={{
                      fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
                      fontWeight: 900,
                      fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                      letterSpacing: '-0.03em',
                      lineHeight: 1.0,
                      color: '#F4F1EA',
                      display: 'block',
                    }}
                  >
                    Everything Your Property Needs.{' '}
                    <span style={{ color: '#D8B866' }}>One Trusted Team.</span>
                  </h2>
                </div>

                <div
                  ref={dividerRef}
                  style={{
                    width: '40px',
                    height: '2px',
                    background: 'linear-gradient(90deg, #C9A24A, #D8B866)',
                    borderRadius: '1px',
                    margin: '28px 0 0',
                  }}
                />

              </div>

              {/* Right: copy + checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                <p
                  ref={copyRef}
                  style={{
                    fontFamily: '"Manrope", system-ui, sans-serif',
                    fontSize: 'clamp(0.95rem, 1.8vw, 1.075rem)',
                    lineHeight: 1.75,
                    color: 'rgba(244,241,234,0.70)',
                    marginBottom: '28px',
                  }}
                >
                  From quick repairs to large-scale renovations, Iron Oak provides
                  comprehensive property solutions for homes, businesses, commercial
                  spaces, and managed properties. Whatever the project, we bring the
                  right team to get it done properly.
                </p>

                {/* Core Service Areas label */}
                <p
                  style={{
                    fontFamily: '"Manrope", system-ui, sans-serif',
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    color: 'rgba(201,162,74,0.75)',
                    marginBottom: '10px',
                  }}
                >
                  Core Service Areas
                </p>

                {/* Two-column checklist */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '0 24px',
                    padding: '22px 28px',
                    borderRadius: '6px',
                    background: 'rgba(244,241,234,0.04)',
                    border: '1px solid rgba(201,162,74,0.15)',
                  }}
                >
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {LEFT_COL.map((item, i) => (
                      <CheckItem key={item} label={item} innerRef={setCheckRef(i)} />
                    ))}
                  </ul>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {RIGHT_COL.map((item, i) => (
                      <CheckItem
                        key={item}
                        label={item}
                        innerRef={setCheckRef(LEFT_COL.length + i)}
                      />
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Brand emblem disc — straddles bottom-left panel edge (52px in, 52px out) */}
        <div ref={emblemRef} className="ironoakServicesEmblem" aria-hidden="true">
          <LogoMark className="w-full h-auto" />
        </div>
      </div>
    </section>
  )
}

export default Services
