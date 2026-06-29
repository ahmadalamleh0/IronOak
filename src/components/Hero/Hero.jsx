import Header from '../Header/Header.jsx'

const overlayStyle = (ready) => ({
  opacity: ready ? undefined : 0,
  animation: ready ? 'overlay-rise 1.2s cubic-bezier(0.16,1,0.3,1) forwards' : 'none',
  background: [
    'radial-gradient(circle at 18% 78%, rgba(5,10,16,0.92) 0%, rgba(5,10,16,0.75) 26%, rgba(5,10,16,0.38) 48%, rgba(5,10,16,0) 70%)',
    'linear-gradient(90deg, rgba(5,10,16,0.78) 0%, rgba(5,10,16,0.35) 38%, rgba(5,10,16,0) 68%)',
    'linear-gradient(0deg, rgba(5,10,16,0.72) 0%, rgba(5,10,16,0.18) 42%, rgba(5,10,16,0) 70%)',
  ].join(', '),
})

// explicit, on purpose: this wrapper must never look like a card
const noCard = {
  background: 'none',
  border: 'none',
  boxShadow: 'none',
  backdropFilter: 'none',
  borderRadius: 0,
}

const textShadow = {
  textShadow: '0 2px 16px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.8)',
}

const Hero = ({ ready = false }) => {
  const fadeStyle = (delay) => ({
    opacity: ready ? undefined : 0,
    animation: ready ? `fade-up 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s forwards` : 'none',
  })

  const headlineStyle = {
    opacity: ready ? undefined : 0,
    animation: ready ? 'headline-rise 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s forwards' : 'none',
  }

  return (
    <section className="hero-svh relative flex w-full overflow-hidden bg-ink-950">
      {/* 1. hero image, full-bleed; mobile keeps the CN Tower/skyline in frame */}
      <div
        className="hero-bg-photo absolute inset-0 motion-safe:animate-[skyline-drift_28s_ease-in-out_infinite]"
        style={{ backgroundImage: 'url(/images/hero-skyline.jpg)' }}
      />

      {/* 2. dark editorial gradient from the bottom-left, fading clear toward the skyline */}
      <div className="pointer-events-none absolute inset-0" style={overlayStyle(ready)} />

      {/* 3. top navigation */}
      <Header ready={ready} />

      {/* 4 & 5. text content + buttons, bottom-left, no card */}
      <div className="relative z-10 flex w-full flex-1 items-end px-6 pb-14 pt-28 sm:contents">
        <div
          style={noCard}
          className="max-w-[620px] sm:absolute sm:bottom-[14%] sm:left-[10%] sm:max-w-[620px]"
        >
          <h1
            style={{ ...headlineStyle, ...textShadow }}
            className="font-serif text-3xl font-bold leading-[1.22] tracking-tight text-white sm:text-4xl lg:text-[2.5rem]"
          >
            Reliable property care for homes, buildings, and commercial
            spaces.
          </h1>

          <p
            style={{ ...fadeStyle(0.68), ...textShadow }}
            className="mt-5 max-w-md text-base leading-relaxed text-white/80"
          >
            One trusted partner for everyday maintenance, repairs, cleaning,
            and ongoing property support.
          </p>

          <div style={fadeStyle(0.88)} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm border border-gold-400/70 bg-gradient-to-b from-gold-200 to-gold-500 px-7 py-3 text-sm font-semibold tracking-wide text-ink-950 shadow-[0_8px_24px_-8px_rgba(169,128,47,0.6)] transition-transform duration-300 hover:scale-[1.02]"
            >
              Request a Quote
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-sm border border-white/40 px-7 py-3 text-sm font-semibold tracking-wide text-white transition-colors duration-300 hover:border-white/70 hover:bg-white/5"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
