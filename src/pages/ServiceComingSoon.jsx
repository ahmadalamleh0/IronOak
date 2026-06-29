import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import LogoMark from '../components/Logo/LogoMark.jsx'
import Footer from '../components/Footer/Footer.jsx'
import { services } from '../data/services.js'

const watermarkStyle = {
  WebkitMaskImage: 'url(/ironoak-logo-mask.svg)',
  maskImage: 'url(/ironoak-logo-mask.svg)',
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskSize: 'contain',
  maskSize: 'contain',
  WebkitMaskPosition: 'center',
  maskPosition: 'center',
  backgroundColor: '#1D242C',
  aspectRatio: '1152 / 919',
}

const ServiceComingSoon = () => {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  return (
    <>
      <div className="relative flex min-h-dvh w-full flex-col overflow-hidden bg-ink-950">
        <div
          className="pointer-events-none absolute -right-24 top-1/3 w-[420px] -translate-y-1/2 opacity-[0.06] sm:w-[560px]"
          style={watermarkStyle}
          aria-hidden="true"
        />
        <div className="bg-grain pointer-events-none absolute inset-0" />

        <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
          <Link to="/" className="flex items-center gap-3">
            <LogoMark className="h-auto w-9 sm:w-11" />
            <div className="flex flex-col leading-tight">
              <span className="text-gold-engraved font-serif text-lg font-bold tracking-wide sm:text-xl">
                IronOak
              </span>
              <span className="text-[0.55rem] tracking-[0.35em] text-gold-200 sm:text-[0.6rem]">
                PROPERTY SERVICES INC.
              </span>
            </div>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-200 transition-colors duration-200 hover:text-gold-100"
          >
            <span aria-hidden="true">&larr;</span> Back to Home
          </Link>
        </header>

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-400/80">
            {service ? service.label : 'IronOak Services'}
          </span>

          <h1 className="text-gold-engraved mt-5 font-serif text-4xl font-bold leading-tight sm:text-6xl">
            {service ? service.title : 'Service Page'}
          </h1>

          <div className="mt-7 h-px w-16 bg-gradient-to-r from-transparent via-gold-300/70 to-transparent" />

          <p className="font-script mt-7 text-5xl leading-none text-gold-300 sm:text-6xl">
            Coming Soon
          </p>

          <p className="mt-7 max-w-md text-base leading-relaxed text-gold-100/65 sm:text-lg">
            We&rsquo;re putting together a dedicated page for this service.
            In the meantime, our team is ready to help — reach out and
            we&rsquo;ll get back to you shortly.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center rounded-sm border border-gold-400/70 bg-gradient-to-b from-gold-200 to-gold-500 px-7 py-3 text-sm font-semibold tracking-wide text-ink-950 shadow-[0_8px_24px_-8px_rgba(169,128,47,0.6)] transition-transform duration-300 hover:scale-[1.02]"
            >
              Request a Quote
            </Link>
            <Link
              to="/#services"
              className="inline-flex items-center justify-center rounded-sm border border-gold-300/40 px-7 py-3 text-sm font-semibold tracking-wide text-gold-200 transition-colors duration-300 hover:border-gold-300/80 hover:bg-gold-300/5"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ServiceComingSoon
