import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../../data/services.js'

const palette = {
  navy: '#07111D',
  graphite: '#1D242C',
  stoneGray: '#6F7478',
  softGray: '#A8A59E',
  gold: '#C9A24A',
  warmGold: '#D8B866',
  offWhite: '#F4F1EA',
  sectionBg: '#DED4C2',
}

const headingGradient = {
  backgroundImage: `linear-gradient(180deg, ${palette.graphite} 0%, ${palette.navy} 50%, ${palette.graphite} 100%)`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: palette.graphite,
}

const useRevealOnScroll = () => {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}

// mobile: VYPR-style full-bleed clickable slides — no card, no grid, no padding
const MobileServiceSlide = ({ label, title, image, slug }) => {
  const [ref, inView] = useRevealOnScroll()

  return (
    <Link
      ref={ref}
      to={`/services/${slug}`}
      className="service-mobile-slide"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <div className="service-mobile-image-wrap">
        <img src={image} alt={title} />
      </div>
      <div className="service-mobile-content">
        <p className="service-mobile-label">{label}</p>
        <h3 className="service-mobile-title">{title}</h3>
        <span className="service-mobile-link">
          Learn More <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </Link>
  )
}

// desktop: editorial grid card (one featured + 2x2 supporting)
const ServicePanel = ({ label, title, description, image, slug, featured }) => {
  const [hovered, setHovered] = useState(false)
  const [ref, inView] = useRevealOnScroll()

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`service-panel relative w-full overflow-hidden rounded-lg ${featured ? 'sm:col-span-2' : ''}`}
      style={{
        '--panel-desktop-min-h': featured ? '460px' : '380px',
        boxShadow: hovered
          ? '0 32px 60px -22px rgba(7,11,17,0.45)'
          : '0 18px 38px -18px rgba(7,11,17,0.3)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transitionProperty: 'opacity, transform, box-shadow',
        transitionDuration: '700ms, 700ms, 350ms',
        transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {/* one unified image — fills the entire panel */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          backgroundColor: palette.navy,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'saturate(0.92) contrast(1.04)',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
        }}
      />

      {/* subtle navy tint so every panel feels like one consistent system */}
      <div className="pointer-events-none absolute inset-0" style={{ backgroundColor: `${palette.navy}26` }} />

      {/* strong bottom-to-top gradient for legible text */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to top, ${palette.navy}f2 0%, ${palette.navy}b8 28%, ${palette.navy}3d 58%, transparent 82%)`,
        }}
      />

      <div className="relative flex h-full w-full items-end p-8">
        <div className="max-w-md">
          <span
            className="text-[0.65rem] font-semibold uppercase tracking-[0.3em]"
            style={{ color: palette.warmGold }}
          >
            {label}
          </span>

          <h3
            className={`mt-3 font-serif font-bold leading-tight ${
              featured ? 'text-3xl lg:text-[2.25rem]' : 'text-2xl'
            }`}
            style={{ color: palette.offWhite }}
          >
            {title}
          </h3>

          <p className="mt-3 text-base leading-relaxed" style={{ color: `${palette.offWhite}c2` }}>
            {description}
          </p>

          <Link
            to={`/services/${slug}`}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold tracking-wide"
            style={{ color: hovered ? palette.warmGold : palette.gold }}
          >
            Learn More
            <span
              aria-hidden="true"
              className="transition-transform duration-300"
              style={{ transform: hovered ? 'translateX(4px)' : 'translateX(0)' }}
            >
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

const Services = () => (
  <section id="services" className="relative py-24 sm:py-28" style={{ backgroundColor: palette.sectionBg }}>
    <div className="mx-auto max-w-6xl px-4 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-2xl px-2 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: palette.gold }}>
          What We Do
        </span>
        <h2
          className="mt-4 font-serif text-4xl font-extrabold leading-tight sm:text-5xl"
          style={headingGradient}
        >
          Our Services
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: palette.stoneGray }}>
          Reliable property care services designed to keep homes, buildings,
          and commercial spaces clean, functional, and professionally
          maintained.
        </p>
      </div>

      {/* mobile: cinematic full-bleed stacked slides, no card/grid styling at all */}
      <div className="mt-10 sm:hidden">
        {services.map((service) => (
          <MobileServiceSlide key={service.slug} {...service} />
        ))}
      </div>

      {/* desktop/tablet: editorial card grid */}
      <div className="hidden sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-6">
        {services.map((service) => (
          <ServicePanel key={service.slug} {...service} />
        ))}
      </div>
    </div>
  </section>
)

export default Services
