import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AREAS = [
  'Toronto',      'Mississauga',   'Brampton',      'Vaughan',
  'Markham',      'Richmond Hill', 'North York',    'Scarborough',
  'Etobicoke',    'Oakville',      'Burlington',    'Milton',
  'Hamilton',     'Pickering',     'Ajax',          'Whitby',
  'Oshawa',       'Newmarket',     'Aurora',        'King City',
  'Caledon',      'Halton',        'Peel',          'York',
  'Durham',
]

// Areas with a dedicated /service-areas/:slug page — everything else in
// AREAS stays plain text (no destination to link to yet).
const AREA_SLUGS = {
  'Toronto':       'toronto',
  'Mississauga':   'mississauga',
  'Brampton':      'brampton',
  'Markham':       'markham',
  'Richmond Hill': 'richmond-hill',
  'Hamilton':      'hamilton',
  'Scarborough':   'scarborough',
  'Vaughan':       'vaughan',
  'Oakville':      'oakville',
}


const SCOPED_CSS = `
  /* ── Desktop 2-col wrapper ── */
  .io-sa-layout {
    display: grid;
    grid-template-columns: 1fr 300px;
    grid-template-rows: auto auto;
    column-gap: 60px;
  }
  .io-sa-header    { grid-column: 1; grid-row: 1; }
  .io-sa-grid-wrap { grid-column: 1; grid-row: 2; padding-top: 44px; }
  .io-sa-card      { grid-column: 2; grid-row: 1 / 3; align-self: start; }
  .io-sa-bottom    { grid-column: 1 / 3; grid-row: 3; margin-top: 60px; }

  @media (max-width: 920px) {
    /* Flexbox column so we can reorder: header → grid → map → card */
    .io-sa-layout {
      display: flex;
      flex-direction: column;
    }
    .io-sa-header    { order: 1; }
    .io-sa-grid-wrap { order: 2; padding-top: 36px; }
    .io-sa-bottom    { order: 3; margin-top: 48px; }
    .io-sa-card      { order: 4; margin-top: 40px; }
  }

  /* ── City grid ── */
  .io-sa-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    border-top: 1px solid rgba(7,17,29,0.10);
  }
  @media (max-width: 860px) {
    .io-sa-grid { grid-template-columns: repeat(4, 1fr); }
  }
  @media (max-width: 560px) {
    .io-sa-grid { grid-template-columns: repeat(3, 1fr); }
  }
  @media (max-width: 360px) {
    .io-sa-grid { grid-template-columns: repeat(2, 1fr); }
  }

  .io-sa-city {
    padding: 14px 12px;
    border-bottom: 1px solid rgba(7,17,29,0.08);
    border-right: 1px solid rgba(7,17,29,0.08);
    transition: background 200ms ease;
    cursor: default;
  }
  .io-sa-city:hover { background: rgba(201,162,74,0.07); }

  /* Remove right border on last column in each breakpoint */
  .io-sa-grid .io-sa-city:nth-child(6n) { border-right: none; }
  @media (max-width: 860px) {
    .io-sa-grid .io-sa-city:nth-child(6n) { border-right: 1px solid rgba(7,17,29,0.08); }
    .io-sa-grid .io-sa-city:nth-child(4n) { border-right: none; }
  }
  @media (max-width: 560px) {
    .io-sa-grid .io-sa-city:nth-child(4n) { border-right: 1px solid rgba(7,17,29,0.08); }
    .io-sa-grid .io-sa-city:nth-child(3n) { border-right: none; }
  }
  @media (max-width: 360px) {
    .io-sa-grid .io-sa-city:nth-child(3n) { border-right: 1px solid rgba(7,17,29,0.08); }
    .io-sa-grid .io-sa-city:nth-child(2n) { border-right: none; }
  }

  .io-sa-name {
    font-family: "Inter Tight", Inter, Arial, sans-serif;
    font-weight: 600;
    font-size: clamp(0.76rem, 1.1vw, 0.88rem);
    letter-spacing: -0.01em;
    color: #07111D;
    display: block;
    line-height: 1.2;
  }
  .io-sa-city-gold .io-sa-name {
    color: #C9A24A;
    font-weight: 700;
  }
  .io-sa-city-link { cursor: pointer; }
  .io-sa-city-link .io-sa-name {
    text-decoration: none;
    text-underline-offset: 3px;
  }
  .io-sa-city-link:hover .io-sa-name { text-decoration: underline; }

  /* ── Contact card ── */
  .io-sa-card-inner {
    background: #07111D;
    border-radius: 12px;
    padding: 32px 28px;
    border: 1px solid rgba(201,162,74,0.18);
    box-shadow: 0 8px 32px rgba(7,17,29,0.12);
  }

  .io-sa-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
    padding: 12px 24px;
    border-radius: 5px;
    background: #C9A24A;
    border: none;
    font-family: "Manrope", system-ui, sans-serif;
    font-size: 0.70rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #07111D;
    text-decoration: none;
    cursor: pointer;
    transition: background 200ms ease, transform 180ms ease;
  }
  .io-sa-cta:hover {
    background: #D8B866;
    transform: translateY(-1px);
  }

  /* ── Bottom: map ── */
  .io-sa-bottom-inner {
    padding-top: 56px;
    border-top: 1px solid rgba(7,17,29,0.09);
  }
  .io-sa-map-img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 10px;
    filter: saturate(0.92);
  }
  @media (max-width: 700px) {
    .io-sa-bottom-inner { padding-top: 40px; }
  }
`

// ─────────────────────────────────────────────────────────────────
const AreasWeServe = () => {
  const sectionRef  = useRef(null)
  const headerRef   = useRef(null)
  const gridRef     = useRef(null)
  const cardRef     = useRef(null)
  const bottomRef   = useRef(null)

  useEffect(() => {
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {

      gsap.from(headerRef.current, {
        opacity: 0, y: rm ? 0 : 16, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 86%' },
      })

      gsap.from(cardRef.current, {
        opacity: 0, y: rm ? 0 : 14, duration: 0.65, ease: 'power2.out',
        scrollTrigger: { trigger: cardRef.current, start: 'top 88%' },
      })

      gsap.from(gridRef.current, {
        opacity: 0, y: rm ? 0 : 18, duration: 0.70, ease: 'power2.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 88%' },
      })

      gsap.from(bottomRef.current, {
        opacity: 0, y: rm ? 0 : 12, duration: 0.65, ease: 'power2.out',
        scrollTrigger: { trigger: bottomRef.current, start: 'top 90%' },
      })

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="areas-we-serve"
      style={{ background: '#F4F1EA', padding: 'clamp(80px, 10vw, 120px) 24px' }}
    >
      <style>{SCOPED_CSS}</style>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="io-sa-layout">

          {/* ═══ Col 1 Row 1: Header ═══ */}
          <div ref={headerRef} className="io-sa-header">
            <p style={{
              fontFamily: '"Manrope", system-ui, sans-serif',
              fontSize: '0.62rem', fontWeight: 700,
              letterSpacing: '0.28em', textTransform: 'uppercase',
              color: '#C9A24A', margin: '0 0 14px',
            }}>
              Where We Work
            </p>

            <h2 style={{
              fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(1.85rem, 4vw, 2.8rem)',
              letterSpacing: '-0.035em', lineHeight: 1.07,
              color: '#07111D', margin: '0 0 18px',
            }}>
              Serving Toronto &amp; the Greater Toronto Area
            </h2>

            <p style={{
              fontFamily: '"Manrope", system-ui, sans-serif',
              fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
              lineHeight: 1.74,
              color: '#6F7478',
              margin: 0,
              maxWidth: '460px',
            }}>
              We support properties across Toronto—including North York,
              Scarborough and Etobicoke—as well as Mississauga, Brampton, Vaughan,
              Markham, Richmond Hill, Oakville, Burlington, Milton and Hamilton.
            </p>
          </div>

          {/* ═══ Col 1 Row 2: City grid ═══ */}
          <div ref={gridRef} className="io-sa-grid-wrap">
            <div className="io-sa-grid">
              {AREAS.map((name) => {
                const slug = AREA_SLUGS[name]
                const className = `io-sa-city${slug ? ' io-sa-city-gold io-sa-city-link' : ''}`
                return slug ? (
                  <Link key={name} to={`/service-areas/${slug}`} className={className}>
                    <span className="io-sa-name">{name}</span>
                  </Link>
                ) : (
                  <div key={name} className={className}>
                    <span className="io-sa-name">{name}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ═══ Col 2 Rows 1–2: Contact card ═══ */}
          <div ref={cardRef} className="io-sa-card">
            <div className="io-sa-card-inner">
              <p style={{
                fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(1.05rem, 2vw, 1.30rem)',
                letterSpacing: '-0.02em', lineHeight: 1.18,
                color: '#F4F1EA', margin: '0 0 10px',
              }}>
                Need service in your area?
              </p>

              <p style={{
                fontFamily: '"Manrope", system-ui, sans-serif',
                fontSize: '0.85rem',
                lineHeight: 1.70,
                color: 'rgba(244,241,234,0.52)',
                margin: 0,
              }}>
                Request a quote and our team will confirm availability for your location.
              </p>

              <a
                href="#contact"
                className="io-sa-cta"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                Request a Quote
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="13 6 19 12 13 18"/>
                </svg>
              </a>

              <div style={{
                marginTop: '22px',
                paddingTop: '18px',
                borderTop: '1px solid rgba(244,241,234,0.07)',
              }}>
                <p style={{
                  fontFamily: '"Manrope", system-ui, sans-serif',
                  fontSize: '0.68rem',
                  color: 'rgba(244,241,234,0.55)',
                  margin: '0 0 4px',
                  letterSpacing: '0.05em',
                }}>
                  Serving Toronto &amp; the GTA
                </p>
                <p style={{
                  fontFamily: '"Manrope", system-ui, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'rgba(244,241,234,0.55)',
                  margin: 0,
                  letterSpacing: '0.02em',
                }}>
                  Residential · Commercial · Industrial
                </p>
              </div>
            </div>
          </div>

          {/* ═══ Full-width Row 3: Service area map ═══ */}
          <div ref={bottomRef} className="io-sa-bottom">
            <div className="io-sa-bottom-inner">
              <img
                src="/images/ironoak-service-areas.svg"
                alt="IronOak service area map — Greater Toronto Area"
                className="io-sa-map-img"
                loading="lazy"
                decoding="async"
                draggable="false"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AreasWeServe
