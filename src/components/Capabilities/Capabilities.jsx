import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const EASE_OUT = 'power3.out'

const pal = {
  navy:     '#07111D',
  graphite: '#1D242C',
  stone:    '#6F7478',
  gold:     '#C9A24A',
  warm:     '#D8B866',
  cream:    '#F4F1EA',
  sand:     '#DED4C2',
}

// ── Premium line icons (24×24 viewport, stroke 1.5) ───────────────────────────
const IcoHome = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <path d="M3 10.5L12 3l9 7.5" />
    <path d="M5 9.5V21h5.5v-5.5h3V21H19V9.5" />
  </svg>
)

const IcoOffice = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <rect x="3" y="7" width="9" height="14" />
    <rect x="12" y="3" width="9" height="18" />
    <path d="M6 11h1M6 14h1M6 17h1M15.5 7h1M15.5 10h1M15.5 13h1M15.5 16h1" />
  </svg>
)

const IcoWrench = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <path d="M14.7 6.3a3.5 3.5 0 1 0-5 5L3.5 17 6 19.5l6.3-6.3a3.5 3.5 0 0 0 5-5L15 10.5l-1.5-1.5L15.7 7.6 14.7 6.3z" />
  </svg>
)

const IcoUpgrade = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <rect x="8" y="2.5" width="8" height="10" rx="1.5" />
    <path d="M12 12.5V18" />
    <path d="M8.5 18h7" />
    <path d="M10 7l2-2 2 2" />
    <path d="M16.5 9.5H19a1 1 0 0 1 1 1v1.5" />
    <circle cx="20" cy="14.5" r="2" />
  </svg>
)

const IcoBuild = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <path d="M3 21h18" />
    <path d="M5 21V10l7-8 7 8v11" />
    <rect x="9" y="14" width="6" height="7" />
    <path d="M5 9h14" />
  </svg>
)

const IcoOutdoor = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
    <path d="M12 21v-9" />
    <path d="M12 12a6 6 0 0 0 6-6 6 6 0 0 0-6 6z" />
    <path d="M12 12a6 6 0 0 1-6-6 6 6 0 0 1 6 6z" />
    <path d="M5.5 21h13" />
    <path d="M8.5 17.5C9.8 16 11 15.5 12 15" />
  </svg>
)

const CAPABILITIES = [
  {
    Icon:        IcoHome,
    num:         '01',
    title:       'Residential Services',
    description: 'Complete home repairs, improvements, renovations, and maintenance for homeowners who expect dependable, professional care.',
  },
  {
    Icon:        IcoOffice,
    num:         '02',
    title:       'Commercial Services',
    description: 'Professional solutions for offices, retail spaces, industrial units, and multi-unit properties — keeping your business space running.',
  },
  {
    Icon:        IcoWrench,
    num:         '03',
    title:       'Repairs & Maintenance',
    description: 'Reliable service to keep your property safe, functional, and operating at its best — from minor fixes to scheduled upkeep.',
  },
  {
    Icon:        IcoUpgrade,
    num:         '04',
    title:       'Installations & Upgrades',
    description: 'Fixtures, finishes, CCTV, security systems, and modern property upgrades installed with precision.',
  },
  {
    Icon:        IcoBuild,
    num:         '05',
    title:       'Construction & Renovation',
    description: 'Interior and exterior transformations built with craftsmanship — from structural work through to finishing touches.',
  },
  {
    Icon:        IcoOutdoor,
    num:         '06',
    title:       'Outdoor & Property Care',
    description: 'Exterior improvements, seasonal services, landscaping, and property upkeep to protect your investment year-round.',
  },
]

// ── Capability card ────────────────────────────────────────────────────────────
const CapabilityCard = ({ Icon, num, title, description, cardRef }) => {
  const [hovered, setHovered] = useState(false)
  const touchTimer = useRef(null)

  const activate   = () => setHovered(true)
  const deactivate = () => setHovered(false)

  // Mobile: brief highlight on tap, then release
  const onTouchStart = () => { activate() }
  const onTouchEnd   = () => {
    clearTimeout(touchTimer.current)
    touchTimer.current = setTimeout(deactivate, 380)
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchCancel={deactivate}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        padding: '26px 26px 28px',
        borderRadius: '12px',
        background: hovered ? 'rgba(255,255,255,0.96)' : 'rgba(255,255,255,0.78)',
        border: `1px solid ${hovered ? 'rgba(201,162,74,0.38)' : 'rgba(29,36,44,0.1)'}`,
        boxShadow: hovered
          ? '0 14px 38px rgba(7,17,29,0.12), 0 2px 8px rgba(7,17,29,0.06)'
          : '0 1px 12px rgba(7,17,29,0.06)',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        transition:
          'transform 200ms cubic-bezier(0.16,1,0.3,1), box-shadow 200ms ease, background 160ms ease, border-color 160ms ease',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {/* Card number — top right */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '22px',
          right: '22px',
          fontFamily: '"Manrope", system-ui, sans-serif',
          fontSize: '0.68rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          color: hovered ? 'rgba(201,162,74,0.70)' : 'rgba(29,36,44,0.22)',
          transition: 'color 160ms ease',
          userSelect: 'none',
        }}
      >
        {num}
      </span>

      {/* Icon container */}
      <div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '12px',
          border: `1px solid ${hovered ? 'rgba(201,162,74,0.40)' : 'rgba(29,36,44,0.1)'}`,
          background: hovered ? 'rgba(201,162,74,0.09)' : 'rgba(29,36,44,0.04)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: hovered ? pal.gold : '#5a6068',
          marginBottom: '18px',
          transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
          transition:
            'color 160ms ease, background 160ms ease, border-color 160ms ease, transform 200ms cubic-bezier(0.16,1,0.3,1)',
          flexShrink: 0,
        }}
      >
        <Icon />
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: '"Manrope", system-ui, sans-serif',
          fontSize: '0.975rem',
          fontWeight: 700,
          letterSpacing: '-0.01em',
          lineHeight: 1.3,
          color: pal.graphite,
          marginBottom: '10px',
        }}
      >
        {title}
      </h3>

      {/* Gold accent line — expands on hover via scaleX */}
      <div
        style={{
          height: '2px',
          width: '26px',
          borderRadius: '1px',
          background: `linear-gradient(90deg, ${pal.gold}, ${pal.warm})`,
          marginBottom: '13px',
          transformOrigin: 'left center',
          transform: hovered ? 'scaleX(1.5)' : 'scaleX(1)',
          transition: 'transform 200ms cubic-bezier(0.16,1,0.3,1)',
        }}
      />

      {/* Description */}
      <p
        style={{
          fontFamily: '"Manrope", system-ui, sans-serif',
          fontSize: '0.835rem',
          lineHeight: 1.68,
          color: pal.stone,
          flex: 1,
          marginBottom: 0,
        }}
      >
        {description}
      </p>
    </div>
  )
}

// ── Section ────────────────────────────────────────────────────────────────────
const Capabilities = () => {
  const sectionRef   = useRef(null)
  const labelRef     = useRef(null)
  const titleMaskRef = useRef(null)
  const titleRef     = useRef(null)
  const dividerRef   = useRef(null)
  const descRef      = useRef(null)
  const gridRef      = useRef(null)
  const cardRefs     = useRef([])

  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (rm) return

      // ── Section label ──────────────────────────────────────────────────────────
      gsap.from(labelRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.6,
        ease: EASE_OUT,
        scrollTrigger: {
          trigger: labelRef.current,
          start: 'top 88%',
        },
      })

      // ── Title mask reveal ──────────────────────────────────────────────────────
      gsap.from(titleRef.current, {
        yPercent: 108,
        duration: 0.95,
        ease: EASE_OUT,
        scrollTrigger: {
          trigger: titleMaskRef.current,
          start: 'top 86%',
        },
      })

      // ── Divider expand (scaleX from 0) ─────────────────────────────────────────
      gsap.from(dividerRef.current, {
        scaleX: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: dividerRef.current,
          start: 'top 88%',
        },
      })

      // ── Description ────────────────────────────────────────────────────────────
      gsap.from(descRef.current, {
        opacity: 0,
        y: 16,
        duration: 0.7,
        ease: EASE_OUT,
        scrollTrigger: {
          trigger: descRef.current,
          start: 'top 87%',
        },
      })

      // ── Cards stagger ──────────────────────────────────────────────────────────
      const cards = cardRefs.current.filter(Boolean)
      if (cards.length) {
        gsap.from(cards, {
          opacity: 0,
          y: 30,
          duration: 0.65,
          ease: 'power2.out',
          stagger: {
            amount: 0.45,
            from: 'start',
          },
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const setCardRef = (i) => (el) => { cardRefs.current[i] = el }

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: pal.sand, position: 'relative', overflow: 'hidden' }}
      className="py-24 sm:py-28"
    >
      {/* Grain texture overlay */}
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">

        {/* ── Custom heading block ── */}
        <div className="mx-auto max-w-2xl text-center" style={{ marginBottom: '56px' }}>

          {/* Eyebrow label */}
          <p
            ref={labelRef}
            style={{
              fontFamily: '"Manrope", system-ui, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: pal.gold,
              marginBottom: '16px',
            }}
          >
            Our Capabilities
          </p>

          {/* Title — mask reveal */}
          <div ref={titleMaskRef} style={{ overflow: 'hidden', paddingBottom: '0.05em' }}>
            <h2
              ref={titleRef}
              style={{
                fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
                fontSize: 'clamp(2rem, 4.2vw, 2.9rem)',
                fontWeight: 900,
                letterSpacing: '-0.035em',
                lineHeight: 1.05,
                color: pal.graphite,
                display: 'block',
                margin: 0,
              }}
            >
              Built for Every Property Need
            </h2>
          </div>

          {/* Gold divider */}
          <div
            ref={dividerRef}
            style={{
              width: '44px',
              height: '2px',
              borderRadius: '1px',
              background: `linear-gradient(90deg, ${pal.gold}, ${pal.warm})`,
              margin: '20px auto 0',
              transformOrigin: 'left center',
            }}
          />

          {/* Description */}
          <p
            ref={descRef}
            style={{
              fontFamily: '"Manrope", system-ui, sans-serif',
              fontSize: '0.975rem',
              lineHeight: 1.72,
              color: pal.stone,
              marginTop: '18px',
              marginBottom: 0,
            }}
          >
            Six core service areas — delivered with the same standard of care, reliability, and professional execution.
          </p>

        </div>

        {/* ── Cards grid ── */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '16px',
          }}
          className="sm:grid-cols-2 lg:grid-cols-3"
        >
          {CAPABILITIES.map((cap, i) => (
            <CapabilityCard
              key={cap.title}
              {...cap}
              cardRef={setCardRef(i)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Capabilities
