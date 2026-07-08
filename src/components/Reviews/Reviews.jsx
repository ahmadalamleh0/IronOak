import { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ── Update these once the Google Business Profile is live ──────────
const RATING = '4.9'
const GOOGLE_REVIEW_URL = '#' // replace with: https://g.page/r/[YOUR_ID]/review
// ──────────────────────────────────────────────────────────────────

const REVIEWS = [
  {
    name: 'Property Owner',
    initials: 'PO',
    quote: 'Professional, reliable, and easy to work with. The team handled everything properly from start to finish.',
    tag: 'Residential Property',
  },
  {
    name: 'Commercial Client',
    initials: 'CC',
    quote: 'Responsive, organized, and dependable. IronOak made the whole process simple.',
    tag: 'Commercial Property',
  },
  {
    name: 'Property Manager',
    initials: 'PM',
    quote: 'They helped us handle multiple property needs without chasing different trades.',
    tag: 'Property Management',
  },
  {
    name: 'Residential Client',
    initials: 'RC',
    quote: 'Clean work, great communication, and a team we would call again.',
    tag: 'Repairs & Maintenance',
  },
]

const SCOPED_CSS = `
  .io-rev-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
  }
  @media (max-width: 980px) {
    .io-rev-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
  }

  /* ── Mobile: horizontal swipe carousel ── */
  @media (max-width: 680px) {
    .io-rev-grid {
      display: flex;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      -ms-overflow-style: none;
      gap: 12px;
    }
    .io-rev-grid::-webkit-scrollbar { display: none; }
    .io-rev-card {
      flex: 0 0 85%;
      scroll-snap-align: start;
      min-height: 220px;
    }
  }

  /* Dots — hidden on desktop, visible on mobile */
  .io-rev-dots {
    display: none;
  }
  @media (max-width: 680px) {
    .io-rev-dots {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      margin-top: 18px;
    }
  }
  .io-rev-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgba(7,17,29,0.16);
    border: none;
    cursor: pointer;
    padding: 0;
    transition: background 220ms ease, transform 220ms ease, width 220ms ease;
    flex-shrink: 0;
  }
  .io-rev-dot-active {
    background: #C9A24A;
    transform: scale(1.25);
  }

  .io-rev-bar {
    display: flex;
    align-items: center;
    gap: 0;
    flex-wrap: nowrap;
    padding: 22px 28px;
    border-radius: 14px;
    background: #0D1520;
    border: 1px solid rgba(201,162,74,0.24);
    box-shadow: 0 8px 32px rgba(0,0,0,0.22), 0 1px 4px rgba(0,0,0,0.12);
    margin-bottom: 24px;
    overflow: hidden;
  }
  @media (max-width: 680px) {
    .io-rev-bar { flex-wrap: wrap; gap: 18px; padding: 20px; }
    .io-rev-bar-div { display: none !important; }
    .io-rev-cta { display: none !important; }
  }

  .io-rev-bar-div {
    width: 1px;
    height: 36px;
    background: rgba(255,255,255,0.09);
    flex-shrink: 0;
    margin: 0 24px;
  }

  .io-rev-card {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 20px 18px 16px;
    background: #0D1B2B;
    border: 1px solid rgba(255,255,255,0.07);
    box-shadow: 0 2px 12px rgba(0,0,0,0.18);
    transition: transform 300ms cubic-bezier(0.16,1,0.3,1),
                box-shadow 300ms ease,
                border-color 260ms ease,
                background 260ms ease;
    cursor: default;
  }
  .io-rev-card:hover {
    transform: translateY(-4px);
    background: #0F2035;
    border-color: rgba(201,162,74,0.30);
    box-shadow: 0 18px 44px rgba(0,0,0,0.30), 0 2px 8px rgba(0,0,0,0.16);
  }

  .io-rev-cta {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 10px 20px;
    border-radius: 7px;
    border: 1px solid rgba(201,162,74,0.42);
    background: rgba(201,162,74,0.07);
    font-family: "Manrope", system-ui, sans-serif;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.03em;
    color: #C9A24A;
    text-decoration: none;
    flex-shrink: 0;
    white-space: nowrap;
    transition: background 220ms ease, border-color 220ms ease;
  }
  .io-rev-cta:hover {
    background: rgba(201,162,74,0.15);
    border-color: rgba(201,162,74,0.62);
  }
`

// Full-color Google G mark
const GoogleG = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-label="Google" role="img">
    <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
    <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.32-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
    <path fill="#FBBC05" d="M11.68 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.34-5.7z"/>
    <path fill="#EA4335" d="M24 9.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 3.13 29.93 1 24 1 15.4 1 7.96 5.93 4.34 14.12l7.34 5.7c1.74-5.2 6.59-10.07 12.32-10.07z"/>
  </svg>
)

const Star = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#C9A24A" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

const Stars = ({ size = 14, gap = 2 }) => (
  <div style={{ display: 'flex', gap: `${gap}px` }} aria-hidden="true">
    {[1,2,3,4,5].map((i) => <Star key={i} size={size} />)}
  </div>
)

const ReviewCard = ({ name, initials, quote, tag, cardRef }) => (
  <div ref={cardRef} className="io-rev-card">
    {/* Top row: avatar + name + Google icon */}
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '13px' }}>
      {/* Avatar */}
      <div
        style={{
          width: '36px', height: '36px', borderRadius: '50%',
          background: 'linear-gradient(145deg, #1D2E44, #0A1628)',
          border: '1.5px solid rgba(201,162,74,0.38)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, marginRight: '10px',
        }}
      >
        <span style={{
          fontFamily: '"Manrope", system-ui, sans-serif',
          fontSize: '0.50rem', fontWeight: 800,
          letterSpacing: '0.06em', color: '#C9A24A',
        }}>{initials}</span>
      </div>

      {/* Name */}
      <p style={{
        flex: 1,
        fontFamily: '"Manrope", system-ui, sans-serif',
        fontSize: '0.78rem', fontWeight: 700,
        color: '#F4F1EA', margin: 0, lineHeight: 1.2,
      }}>{name}</p>

      {/* Google G in top-right */}
      <div style={{ flexShrink: 0, opacity: 0.88, marginLeft: '8px' }}>
        <GoogleG size={17} />
      </div>
    </div>

    {/* Stars */}
    <Stars size={13} gap={2} />

    {/* Quote */}
    <p style={{
      flex: 1,
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontStyle: 'italic',
      fontSize: 'clamp(0.93rem, 1.45vw, 1.03rem)',
      lineHeight: 1.68,
      color: 'rgba(244,241,234,0.78)',
      margin: '12px 0 16px',
    }}>
      &ldquo;{quote}&rdquo;
    </p>

    {/* Service tag */}
    <span style={{
      alignSelf: 'flex-start',
      fontFamily: '"Manrope", system-ui, sans-serif',
      fontSize: '0.53rem', fontWeight: 700,
      letterSpacing: '0.18em', textTransform: 'uppercase',
      color: '#C9A24A',
      background: 'rgba(201,162,74,0.09)',
      border: '1px solid rgba(201,162,74,0.20)',
      borderRadius: '4px',
      padding: '4px 8px',
    }}>{tag}</span>
  </div>
)

// ─────────────────────────────────────────────────────────────────
const Reviews = () => {
  const sectionRef   = useRef(null)
  const introRef     = useRef(null)
  const barRef       = useRef(null)
  const cardRefs     = useRef([])
  const carouselRef  = useRef(null)
  const [activeIdx, setActiveIdx] = useState(0)

  // Scroll dot tracking
  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    const onScroll = () => {
      let closest = 0
      let minDist = Infinity
      Array.from(el.children).forEach((child, i) => {
        const dist = Math.abs(child.offsetLeft - el.scrollLeft)
        if (dist < minDist) { minDist = dist; closest = i }
      })
      setActiveIdx(closest)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToCard = useCallback((idx) => {
    const el = carouselRef.current
    if (!el) return
    const child = el.children[idx]
    if (child) el.scrollTo({ left: child.offsetLeft, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean)

      if (rm) {
        gsap.from(
          [introRef.current, barRef.current, ...cards].filter(Boolean),
          { opacity: 0, duration: 0.5, stagger: 0.07,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } },
        )
        return
      }

      gsap.from(introRef.current, {
        opacity: 0, y: 10, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: introRef.current, start: 'top 86%' },
      })

      gsap.from(barRef.current, {
        opacity: 0, y: 16, duration: 0.65, ease: 'power2.out',
        scrollTrigger: { trigger: barRef.current, start: 'top 88%' },
      })

      if (cards.length) {
        gsap.from(cards, {
          opacity: 0, y: 22, duration: 0.55, ease: 'power2.out',
          stagger: 0.10,
          scrollTrigger: { trigger: cards[0], start: 'top 88%' },
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
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* ── Intro ── */}
        <div ref={introRef} style={{ marginBottom: '20px' }}>
          <p style={{
            fontFamily: '"Manrope", system-ui, sans-serif',
            fontSize: '0.62rem', fontWeight: 700,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: '#C9A24A', margin: '0 0 8px',
          }}>Client Reviews</p>
          <p style={{
            fontFamily: '"Manrope", system-ui, sans-serif',
            fontSize: 'clamp(0.9rem, 1.6vw, 1.05rem)',
            fontWeight: 500, lineHeight: 1.5,
            color: '#07111D', margin: 0,
          }}>
            Trusted by property owners, managers, and businesses.
          </p>
        </div>

        {/* ── Google summary bar ── */}
        <div ref={barRef} className="io-rev-bar">

          {/* Google branding block */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            <div style={{
              width: '38px', height: '38px', borderRadius: '9px',
              background: '#FFFFFF',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, boxShadow: '0 1px 4px rgba(0,0,0,0.14)',
            }}>
              <GoogleG size={24} />
            </div>
            <div>
              <p style={{
                fontFamily: '"Manrope", system-ui, sans-serif',
                fontSize: '0.80rem', fontWeight: 700,
                color: '#F4F1EA', margin: 0, letterSpacing: '0.01em',
              }}>Google Reviews</p>
              <p style={{
                fontFamily: '"Manrope", system-ui, sans-serif',
                fontSize: '0.58rem', fontWeight: 500,
                color: 'rgba(244,241,234,0.38)', margin: '2px 0 0',
              }}>IronOak Property Services</p>
            </div>
          </div>

          <div className="io-rev-bar-div" />

          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1 }}>
            <span
              aria-label={`${RATING} out of 5`}
              style={{
                fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(2.6rem, 5vw, 3.5rem)',
                letterSpacing: '-0.055em', lineHeight: 1,
                color: '#F4F1EA', flexShrink: 0,
              }}
            >{RATING}</span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <Stars size={17} gap={3} />
              <p style={{
                fontFamily: '"Manrope", system-ui, sans-serif',
                fontSize: '0.58rem', fontWeight: 500,
                color: 'rgba(244,241,234,0.38)', margin: 0,
              }}>Based on client reviews</p>
            </div>
          </div>

          <div className="io-rev-bar-div" />

          {/* Write a Review CTA */}
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="io-rev-cta"
          >
            Write a Review
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="13 6 19 12 13 18"/>
            </svg>
          </a>

        </div>

        {/* ── Review cards ── */}
        <div ref={carouselRef} className="io-rev-grid">
          {REVIEWS.map((review, i) => (
            <ReviewCard
              key={i}
              {...review}
              cardRef={(el) => { cardRefs.current[i] = el }}
            />
          ))}
        </div>

        {/* ── Carousel dots (mobile only) ── */}
        <div className="io-rev-dots" aria-hidden="true">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              className={`io-rev-dot${i === activeIdx ? ' io-rev-dot-active' : ''}`}
              onClick={() => scrollToCard(i)}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Reviews
