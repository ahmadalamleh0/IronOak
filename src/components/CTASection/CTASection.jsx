const CTASection = () => (
  <section className="relative overflow-hidden bg-ink-900 py-20 sm:py-24">
    <div
      className="pointer-events-none absolute inset-0 opacity-40"
      style={{
        background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(169,128,47,0.14), transparent 70%)',
      }}
    />
    <div className="bg-grain pointer-events-none absolute inset-0 opacity-40" />

    <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-10">
      <h2 className="text-gold-engraved font-serif text-3xl font-bold leading-tight sm:text-4xl">
        Ready for property care you can rely on?
      </h2>
      <p className="mt-5 text-base leading-relaxed text-gold-100/65 sm:text-lg">
        Request a quote for a one-time job, or set up an ongoing service plan
        for your property.
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-sm border border-gold-400/70 bg-gradient-to-b from-gold-200 to-gold-500 px-8 py-3.5 text-sm font-semibold tracking-wide text-ink-950 shadow-[0_8px_24px_-8px_rgba(169,128,47,0.6)] transition-transform duration-300 hover:scale-[1.02]"
        >
          Request a Quote
        </a>
        <a
          href="#services"
          className="inline-flex items-center justify-center rounded-sm border border-gold-300/40 px-8 py-3.5 text-sm font-semibold tracking-wide text-gold-200 transition-colors duration-300 hover:border-gold-300/80 hover:bg-gold-300/5"
        >
          View Services
        </a>
      </div>
    </div>
  </section>
)

export default CTASection
