import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CAPABILITIES = [
  {
    num: '01',
    title: 'Multi-Trade Coordination',
    tags: ['PLANNING', 'TRADE COORDINATION', 'QUALITY CONTROL'],
  },
  {
    num: '02',
    title: 'Multi-Site Rollouts',
    tags: ['ONE POINT OF CONTACT', 'CONSISTENT STANDARDS', 'PHASED DELIVERY'],
  },
  {
    num: '03',
    title: 'Ongoing Property Support',
    tags: ['PREVENTATIVE CARE', 'RESPONSIVE SUPPORT', 'LONG-TERM VALUE'],
  },
]

const SCOPED_CSS = `
  @keyframes io-cap-scroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  /* Marquee track — animation applied directly via class */
  .io-cap-marquee {
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    flex-shrink: 0;
    animation: io-cap-scroll 18s linear infinite;
    will-change: transform;
  }

  .io-cap-row {
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }
  .io-cap-row:first-of-type {
    border-top: 1px solid rgba(255,255,255,0.07);
  }

  @media (prefers-reduced-motion: reduce) {
    .io-cap-marquee { animation-play-state: paused; }
  }
`

// Small gold dot separator between marquee tags
const Dot = () => (
  <span
    aria-hidden="true"
    style={{
      display: 'inline-block',
      width: '5px',
      height: '5px',
      borderRadius: '50%',
      background: 'rgba(201,162,74,0.65)',
      flexShrink: 0,
      margin: '0 38px',
      verticalAlign: 'middle',
    }}
  />
)

// Arrow icon
const ArrowSvg = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: '22px', height: '22px', display: 'block' }}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="13 6 19 12 13 18" />
  </svg>
)

const CapabilityRow = ({
  num, title, tags,
  isActive, isOpen, dim,
  onHoverEnter, onToggle,
  rowRef,
}) => {
  // active = hover (desktop) OR tapped (mobile)
  const active = isActive || isOpen

  // 4× copies so seamless loop at -50% works across wide viewports
  const marqueeItems = [...tags, ...tags, ...tags, ...tags]

  return (
    <div
      ref={rowRef}
      className="io-cap-row"
      onMouseEnter={onHoverEnter}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onToggle()}
      style={{
        position: 'relative',
        overflow: 'hidden',          // clips marquee to row bounds
        cursor: 'pointer',
        outline: 'none',
        background: active ? '#F4F1EA' : 'transparent',
        opacity: dim ? 0.35 : 1,
        transition: 'background 340ms ease, opacity 260ms ease',
      }}
    >

      {/* ── LAYER 1: Default title — in normal flow to define row height ── */}
      {/* Stays invisible when active but still takes up space → stable row height */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          padding: '16px 8px',
          opacity: active ? 0 : 1,
          transform: active ? 'translateY(-10px)' : 'translateY(0)',
          transition: 'opacity 260ms ease, transform 300ms cubic-bezier(0.16,1,0.3,1)',
          // keep interactive only when visible
          pointerEvents: active ? 'none' : 'auto',
          userSelect: 'none',
        }}
      >
        {/* Row number */}
        <span
          aria-hidden="true"
          style={{
            fontFamily: '"Manrope", system-ui, sans-serif',
            fontSize: '0.58rem',
            fontWeight: 700,
            letterSpacing: '0.10em',
            color: isActive ? '#C9A24A' : 'rgba(244,241,234,0.24)',
            transition: 'color 260ms ease',
            flexShrink: 0,
            width: '30px',
          }}
        >
          {num}
        </span>

        {/* Service title */}
        <h3
          style={{
            flex: 1,
            margin: 0,
            fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            color: '#F4F1EA',
          }}
        >
          {title}
        </h3>

        {/* Arrow */}
        <div
          aria-hidden="true"
          style={{
            color: isActive ? '#C9A24A' : 'rgba(244,241,234,0.22)',
            transform: isActive ? 'translateX(6px)' : 'translateX(0)',
            transition: 'color 260ms ease, transform 300ms cubic-bezier(0.16,1,0.3,1)',
            flexShrink: 0,
          }}
        >
          <ArrowSvg />
        </div>
      </div>

      {/* ── LAYER 2: Active marquee — absolutely fills the row ── */}
      {/* Fades in after title fades out; the 60ms delay creates a two-beat feel */}
      <div
        aria-hidden={!active}
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          opacity: active ? 1 : 0,
          transform: active ? 'translateY(0)' : 'translateY(12px)',
          transition: active
            ? 'opacity 340ms ease 80ms, transform 400ms cubic-bezier(0.16,1,0.3,1) 80ms'
            : 'opacity 240ms ease, transform 280ms ease',
          pointerEvents: 'none',
        }}
      >
        <div className="io-cap-marquee">
          {marqueeItems.map((tag, i) => (
            <span
              key={i}
              style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}
            >
              <span
                style={{
                  fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(1.2rem, 2.8vw, 2rem)',
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  color: '#07111D',
                  whiteSpace: 'nowrap',
                }}
              >
                {tag}
              </span>
              <Dot />
            </span>
          ))}
        </div>
      </div>

    </div>
  )
}

// ─────────────────────────────────────────────────────────────────
const PropertySolutions = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const [openIdx, setOpenIdx]       = useState(null)

  const sectionRef = useRef(null)
  const headerRef  = useRef(null)
  const listRef    = useRef(null)
  const rowRefs    = useRef([])

  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      const rows = rowRefs.current.filter(Boolean)

      if (rm) {
        gsap.from([headerRef.current, ...rows], {
          opacity: 0, duration: 0.5, stagger: 0.06,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        })
        return
      }

      gsap.from(headerRef.current, {
        opacity: 0, y: 14, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
      })

      if (rows.length) {
        gsap.from(rows, {
          opacity: 0, y: 22, duration: 0.55, ease: 'power2.out',
          stagger: 0.09,
          scrollTrigger: { trigger: rows[0], start: 'top 85%' },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{
        background: '#07111D',
        padding: 'clamp(36px, 5vw, 64px) 24px clamp(64px, 9vw, 100px)',
      }}
    >
      <style>{SCOPED_CSS}</style>
      <div style={{ maxWidth: '1040px', margin: '0 auto' }}>

        {/* Section header */}
        <div ref={headerRef} style={{ marginBottom: '32px' }}>

          <p style={{
            fontFamily: '"Manrope", system-ui, sans-serif',
            fontSize: '0.62rem', fontWeight: 700,
            letterSpacing: '0.30em', textTransform: 'uppercase',
            color: '#C9A24A', margin: '0 0 10px',
          }}>
            Our Capabilities
          </p>

          <h2 style={{
            fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
            letterSpacing: '-0.035em', lineHeight: 1.05,
            color: '#F4F1EA', margin: '0 0 8px',
          }}>
            Built for Every Property Need
          </h2>

          <p style={{
            fontFamily: '"Manrope", system-ui, sans-serif',
            fontSize: 'clamp(0.9rem, 1.6vw, 1.05rem)',
            lineHeight: 1.70,
            color: 'rgba(244,241,234,0.48)',
            maxWidth: '460px', margin: 0,
          }}>
            One accountable partner managing the people, schedules, and moving parts your property project requires.
          </p>

        </div>

        {/* Capability rows — spotlight: mouse leaving the list clears hover */}
        <div
          ref={listRef}
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {CAPABILITIES.map((cap, i) => (
            <CapabilityRow
              key={cap.num}
              {...cap}
              isActive={hoveredIdx === i}
              isOpen={openIdx === i}
              dim={hoveredIdx !== null && hoveredIdx !== i}
              onHoverEnter={() => setHoveredIdx(i)}
              onToggle={() => setOpenIdx((prev) => (prev === i ? null : i))}
              rowRef={(el) => { rowRefs.current[i] = el }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default PropertySolutions
