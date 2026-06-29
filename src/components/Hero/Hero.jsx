import Header from '../Header/Header.jsx'

// uniform dark navy tint + a soft radial vignette centered behind the text;
// desaturate/flatten the photo itself so warm lights stay without a neon/nightlife edge
const overlayStyle = (ready) => ({
  opacity: ready ? undefined : 0,
  animation: ready ? 'overlay-rise 1.2s cubic-bezier(0.16,1,0.3,1) forwards' : 'none',
  background: [
    'radial-gradient(ellipse 65% 55% at 50% 48%, rgba(5,9,16,0.62) 0%, rgba(5,9,16,0.38) 55%, rgba(5,9,16,0.16) 100%)',
    'linear-gradient(0deg, rgba(5,9,16,0.42) 0%, rgba(5,9,16,0.2) 100%)',
  ].join(', '),
})

const textShadow = {
  textShadow: '0 2px 20px rgba(0,0,0,0.65), 0 1px 5px rgba(0,0,0,0.9)',
}

const Hero = ({ ready = false }) => {
  const fadeStyle = (delay) => ({
    opacity: ready ? undefined : 0,
    animation: ready ? `fade-up 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s forwards` : 'none',
  })

  const headlineStyle = {
    opacity: ready ? undefined : 0,
    animation: ready ? 'headline-rise 0.9s cubic-bezier(0.16,1,0.3,1) 0.45s forwards' : 'none',
  }

  return (
    <section className="hero-svh relative flex w-full overflow-hidden bg-ink-950">
      {/* 1. hero image, full-bleed, tamed down so it reads premium/architectural not neon */}
      <div
        className="hero-bg-photo absolute inset-0 motion-safe:animate-[skyline-drift_28s_ease-in-out_infinite]"
        style={{
          backgroundImage: 'url(/images/hero-skyline.jpg)',
          filter: 'saturate(0.7) contrast(0.98) brightness(1.12)',
        }}
      />

      {/* 2. uniform dark overlay with a soft center vignette behind the text */}
      <div className="pointer-events-none absolute inset-0" style={overlayStyle(ready)} />

      {/* 3. top navigation */}
      <Header ready={ready} />

      {/* 4. centered brand statement */}
      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-center px-6 py-28 text-center">
        <span
          style={{ ...fadeStyle(0.1), ...textShadow }}
          className="text-xs font-semibold uppercase tracking-[0.38em] text-gold-300 sm:text-sm"
        >
          Property Care &amp; Maintenance
        </span>

        <h1
          style={{ ...headlineStyle, ...textShadow, fontFamily: 'var(--font-alfa)' }}
          className="mt-7 max-w-xs text-2xl font-normal leading-snug text-white sm:max-w-lg sm:text-3xl lg:max-w-2xl lg:text-4xl"
        >
          Reliable care for homes, buildings, and commercial spaces.
        </h1>

        <div style={fadeStyle(0.6)} className="mt-9">
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
