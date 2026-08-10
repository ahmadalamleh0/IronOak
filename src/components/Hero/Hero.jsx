import Header from '../Header/Header.jsx'

// Mobile gets a separately downscaled source (not the desktop file shrunk by
// CSS) so phones don't pay for pixels they never render.
const HERO_BG_CSS = `
  .hero-bg-img {
    background-image: url(/images/hero-bg-mobile.webp);
  }
  @media (min-width: 769px) {
    .hero-bg-img { background-image: url(/images/hero-bg.webp); }
  }
`

const RM =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Mask reveal — content slides up from beneath the fold line
const maskReveal = (ready, delay, dur = 940) =>
  RM
    ? {
        outer: {},
        inner: {
          opacity: ready ? 1 : 0,
          transition: ready ? `opacity 500ms ease ${delay}ms` : 'none',
        },
      }
    : {
        outer: { overflow: 'hidden', paddingBottom: '0.09em', paddingTop: '0.02em' },
        inner: {
          display: 'block',
          transform: ready ? 'translateY(0)' : 'translateY(108%)',
          transition: ready
            ? `transform ${dur}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`
            : 'none',
          willChange: 'transform',
        },
      }

// Simple fade-up
const fade = (ready, delay, dur = 680) => ({
  opacity: ready ? 1 : 0,
  transform: RM ? 'none' : ready ? 'translateY(0)' : 'translateY(12px)',
  transition: ready
    ? `opacity ${dur}ms ease ${delay}ms${RM ? '' : `, transform ${dur}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`}`
    : 'none',
})

const ts = { textShadow: '0 2px 24px rgba(0,0,0,0.85), 0 1px 5px rgba(0,0,0,0.95)' }

const DOT = (
  <span
    aria-hidden="true"
    style={{
      display: 'inline-block',
      width: '3px',
      height: '3px',
      borderRadius: '50%',
      background: 'rgba(201,162,74,0.55)',
      flexShrink: 0,
      margin: '0 2px',
    }}
  />
)

const Hero = ({ ready = false }) => {
  // Animation schedule — each element gets its own timing
  const brandMask = maskReveal(ready,  80, 700)
  const descFade  = fade(ready, 220)
  const head1     = maskReveal(ready, 400, 980)
  const head2     = maskReveal(ready, 570, 980)
  const bodyFade  = fade(ready, 780)
  const btnFade   = fade(ready, 960)
  const pillFade  = fade(ready, 1180, 600)

  return (
    <section className="hero-svh relative flex w-full overflow-hidden bg-ink-950">
      <style>{HERO_BG_CSS}</style>

      {/* ── Hero background image ── */}
      <div
        aria-hidden="true"
        className="hero-bg-img"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          // Slightly cool + deepen the warm image to not fight the gold text
          filter: 'brightness(0.82) saturate(0.92)',
        }}
      />

      {/* ── Overlay — dark at top for nav, stronger at bottom to frame content ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            'linear-gradient(180deg,',
            '  rgba(5,9,16,0.68) 0%,',
            '  rgba(5,9,16,0.32) 28%,',
            '  rgba(5,9,16,0.42) 55%,',
            '  rgba(5,9,16,0.78) 100%',
            ')',
          ].join(''),
          opacity: ready ? 1 : 0,
          transition: ready ? 'opacity 1200ms ease' : 'none',
        }}
      />

      {/* ── Navigation ── */}
      <Header ready={ready} />

      {/* ── Hero content — centered ── */}
      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center px-6 py-28 text-center">

        {/* Brand wordmark — IRONOAK */}
        <div style={brandMask.outer}>
          <div
            style={{
              ...brandMask.inner,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
            }}
          >
            <span
              style={{
                width: '52px',
                height: '1px',
                background: 'rgba(201,162,74,0.75)',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                ...ts,
                fontFamily: '"Manrope", system-ui, sans-serif',
                fontSize: '1.0rem',
                fontWeight: 800,
                letterSpacing: '0.46em',
                textTransform: 'uppercase',
                color: '#C9A24A',
              }}
            >
              IRONOAK
            </span>
            <span
              style={{
                width: '52px',
                height: '1px',
                background: 'rgba(201,162,74,0.75)',
                flexShrink: 0,
              }}
            />
          </div>
        </div>

        {/* Descriptor — PROPERTY SERVICES INC. */}
        <p
          style={{
            ...descFade,
            ...ts,
            fontFamily: '"Manrope", system-ui, sans-serif',
            fontSize: '0.56rem',
            fontWeight: 600,
            letterSpacing: '0.36em',
            textTransform: 'uppercase',
            color: 'rgba(201,162,74,0.55)',
            margin: '8px 0 0',
          }}
        >
          PROPERTY SERVICES INC.
        </p>

        {/* Thin vertical breathing space */}
        <div
          aria-hidden="true"
          style={{
            width: '1px',
            height: '30px',
            background:
              'linear-gradient(180deg, transparent 0%, rgba(201,162,74,0.42) 50%, transparent 100%)',
            margin: '24px auto',
          }}
        />

        {/* ── Main headline ── */}
        <h1 style={{ margin: 0, maxWidth: '820px', width: '100%' }}>

          {/* Line 1 */}
          <div style={head1.outer}>
            <span
              style={{
                ...head1.inner,
                ...ts,
                fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(2.6rem, 6.8vw, 5.6rem)',
                letterSpacing: '-0.04em',
                lineHeight: 1.04,
                color: '#F4F1EA',
              }}
            >
              Elevating Standards
            </span>
          </div>

          {/* Line 2 — italic serif */}
          <div style={{ ...head2.outer, marginTop: '-4px', paddingBottom: '0.26em' }}>
            <span
              style={{
                ...head2.inner,
                ...ts,
                fontFamily: '"Cormorant Garamond", "Cormorant", Georgia, serif',
                fontStyle: 'italic',
                fontWeight: 600,
                fontSize: 'clamp(2.4rem, 6.2vw, 5.2rem)',
                letterSpacing: '0em',
                lineHeight: 1.0,
                color: '#F4F1EA',
              }}
            >
              in property care.
            </span>
          </div>
        </h1>

        {/* Supporting copy */}
        <p
          style={{
            ...bodyFade,
            ...ts,
            fontFamily: '"Manrope", system-ui, sans-serif',
            fontSize: 'clamp(0.875rem, 1.7vw, 1rem)',
            lineHeight: 1.74,
            color: 'rgba(244,241,234,0.82)',
            maxWidth: '460px',
            marginTop: '28px',
          }}
        >
          Property maintenance, improvements, and project services for commercial
          buildings, condominiums, and residential properties across Toronto &
          the GTA.
        </p>

        {/* CTA */}
        <div style={{ ...btnFade, marginTop: '34px' }}>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '14px 38px',
              borderRadius: '4px',
              background: 'rgba(255,255,255,0.95)',
              border: '1px solid rgba(255,255,255,0.95)',
              fontFamily: '"Manrope", system-ui, sans-serif',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#07111D',
              textDecoration: 'none',
              transition: 'background 200ms ease, box-shadow 200ms ease',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 16px rgba(0,0,0,0.22)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ffffff'
              e.currentTarget.style.boxShadow = '0 4px 28px rgba(0,0,0,0.32)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.95)'
              e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.22)'
            }}
          >
            Tell Us About Your Project
          </a>
        </div>

        {/* Trust pill */}
        <div
          style={{
            ...pillFade,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px 12px',
            marginTop: '28px',
            padding: '8px 22px',
            borderRadius: '100px',
            border: '1px solid rgba(201,162,74,0.22)',
            background: 'rgba(7,17,29,0.48)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
          }}
        >
          <span style={{ fontFamily: '"Manrope", system-ui, sans-serif', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'rgba(244,241,234,0.66)', whiteSpace: 'nowrap' }}>
            5+ Years Experience
          </span>
          {DOT}
          <span style={{ fontFamily: '"Manrope", system-ui, sans-serif', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'rgba(244,241,234,0.66)', whiteSpace: 'nowrap' }}>
            Licensed &amp; Insured
          </span>
          {DOT}
          <span style={{ fontFamily: '"Manrope", system-ui, sans-serif', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.13em', textTransform: 'uppercase', color: 'rgba(244,241,234,0.66)', whiteSpace: 'nowrap' }}>
            Residential &amp; Commercial
          </span>
        </div>

      </div>
    </section>
  )
}

export default Hero
