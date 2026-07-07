import { useState } from 'react'
import Header from '../Header/Header.jsx'

const RM =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Mask-reveal: overflow:hidden wrapper + child slides up from beneath the fold line.
// Degrades to a simple opacity fade when prefers-reduced-motion is set.
const maskReveal = (ready, delay, dur = 920) =>
  RM
    ? {
        outer: {},
        inner: { opacity: ready ? 1 : 0, transition: ready ? `opacity 500ms ease ${delay}ms` : 'none' },
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

const fadeUp = (ready, delay) => ({
  opacity: ready ? 1 : 0,
  transform: RM ? 'none' : ready ? 'translateY(0)' : 'translateY(18px)',
  transition: ready
    ? `opacity 700ms ease ${delay}ms${RM ? '' : `, transform 700ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`}`
    : 'none',
})

const textShadow = { textShadow: '0 2px 20px rgba(0,0,0,0.65), 0 1px 5px rgba(0,0,0,0.9)' }

const Hero = ({ ready = false }) => {
  const [videoLoaded, setVideoLoaded] = useState(false)

  const eyebrow = maskReveal(ready, 80, 700)
  const headline = maskReveal(ready, 300, 1000)

  return (
    <section className="hero-svh relative flex w-full overflow-hidden bg-ink-950">

      {/* ── Background image — permanent fallback ── */}
      <div
        className={`hero-bg-photo absolute inset-0${RM ? '' : ' motion-safe:animate-[skyline-drift_30s_ease-in-out_infinite]'}`}
        style={{
          backgroundImage: 'url(/images/hero-skyline.jpg)',
          filter: 'saturate(0.7) contrast(0.98) brightness(1.12)',
        }}
      />

      {/* ── Background video — fades in over image once loaded ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        onLoadedData={() => setVideoLoaded(true)}
        className={RM ? '' : 'motion-safe:animate-[skyline-drift_30s_ease-in-out_infinite]'}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'saturate(0.7) contrast(0.98) brightness(1.12)',
          opacity: videoLoaded ? 1 : 0,
          transition: 'opacity 1200ms ease',
        }}
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* ── Dark overlay ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: ready ? 1 : 0,
          transition: ready ? 'opacity 1200ms ease' : 'none',
          background: [
            'radial-gradient(ellipse 65% 55% at 50% 48%, rgba(5,9,16,0.62) 0%, rgba(5,9,16,0.38) 55%, rgba(5,9,16,0.16) 100%)',
            'linear-gradient(0deg, rgba(5,9,16,0.42) 0%, rgba(5,9,16,0.2) 100%)',
          ].join(', '),
        }}
      />

      {/* ── Navigation ── */}
      <Header ready={ready} />

      {/* ── Hero content ── */}
      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center px-6 py-28 text-center">

        {/* Eyebrow label */}
        <div style={eyebrow.outer}>
          <span
            style={{ ...eyebrow.inner, ...textShadow }}
            className="inline-block text-xs font-semibold uppercase tracking-[0.38em] text-gold-300 sm:text-sm"
          >
            Property Care &amp; Maintenance
          </span>
        </div>

        {/* Headline — mask reveal */}
        <div className="mt-7 max-w-xs sm:max-w-lg lg:max-w-2xl" style={headline.outer}>
          <h1
            style={{
              ...headline.inner,
              ...textShadow,
              fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              fontSize: 'clamp(2.1rem, 5.2vw, 3.6rem)',
            }}
            className="text-white"
          >
            <em style={{ fontStyle: 'italic', color: '#D8B866', fontWeight: 900 }}>Reliable</em>
            {' '}care for homes, buildings, and commercial spaces.
          </h1>
        </div>

        {/* CTA — fade-up after headline */}
        <div className="mt-9" style={fadeUp(ready, 640)}>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-sm border border-gold-300/40 bg-gradient-to-b from-gold-300 to-gold-400 px-7 py-2.5 text-sm font-semibold tracking-wide text-ink-950 shadow-[0_4px_14px_-8px_rgba(169,128,47,0.35)] transition-all duration-300 hover:border-gold-300/70 hover:shadow-[0_6px_18px_-8px_rgba(169,128,47,0.45)]"
          >
            Request a Quote
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero
