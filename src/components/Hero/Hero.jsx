import Header from '../Header/Header.jsx'

// uniform dark navy tint + a soft radial vignette centered behind the text;
// desaturate/flatten the photo itself so warm lights stay without a neon/nightlife edge
const overlayStyle = (ready) => ({
  opacity: ready ? undefined : 0,
  animation: ready ? 'overlay-rise 1.2s cubic-bezier(0.16,1,0.3,1) forwards' : 'none',
  background: [
    'radial-gradient(ellipse 65% 55% at 50% 48%, rgba(5,9,16,0.78) 0%, rgba(5,9,16,0.5) 55%, rgba(5,9,16,0.28) 100%)',
    'linear-gradient(0deg, rgba(5,9,16,0.55) 0%, rgba(5,9,16,0.3) 100%)',
  ].join(', '),
})

const textShadow = {
  textShadow: '0 2px 18px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.85)',
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
          filter: 'saturate(0.62) contrast(0.94) brightness(0.96)',
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
          style={{ ...headlineStyle, ...textShadow }}
          className="mt-6 font-serif text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          IronOak
          <br />
          <span className="text-4xl sm:text-5xl lg:text-6xl">Property Services</span>
        </h1>

        <p
          style={{ ...fadeStyle(0.65), ...textShadow }}
          className="mt-7 max-w-md text-base leading-relaxed text-white/80 sm:text-lg"
        >
          Reliable care for homes, buildings, and commercial spaces.
        </p>

        <div style={fadeStyle(0.85)} className="mt-9">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-sm border border-gold-400/70 bg-gradient-to-b from-gold-200 to-gold-500 px-8 py-3.5 text-sm font-semibold tracking-wide text-ink-950 shadow-[0_8px_24px_-8px_rgba(169,128,47,0.6)] transition-transform duration-300 hover:scale-[1.02]"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
