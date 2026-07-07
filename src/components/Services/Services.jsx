import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../../data/services.js'
import SectionHeading from '../SectionHeading/SectionHeading.jsx'

const RM =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const EASE = 'cubic-bezier(0.16,1,0.3,1)'

const palette = {
  navy:     '#07111D',
  graphite: '#1D242C',
  stoneGray:'#6F7478',
  softGray: '#A8A59E',
  gold:     '#C9A24A',
  warmGold: '#D8B866',
  offWhite: '#F4F1EA',
  sectionBg:'#DED4C2',
}

const useRevealOnScroll = (threshold = 0.12) => {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

// Mobile: cinematic full-bleed stacked slides
const MobileServiceSlide = ({ label, title, image, slug, staggerIndex = 0 }) => {
  const [ref, inView] = useRevealOnScroll()
  const delay = RM ? 0 : staggerIndex * 60

  return (
    <Link
      ref={ref}
      to={`/services/${slug}`}
      className="service-mobile-slide"
      style={{
        opacity:    RM || inView ? 1 : 0,
        transform:  RM || inView ? 'translateY(0)' : 'translateY(20px)',
        transition: RM ? 'none' : `opacity 650ms ${EASE} ${delay}ms, transform 650ms ${EASE} ${delay}ms`,
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

// Desktop: editorial card (one featured + 2×2 supporting)
const ServicePanel = ({ label, title, description, image, slug, featured, staggerIndex = 0 }) => {
  const [hovered, setHovered] = useState(false)
  const [ref, inView] = useRevealOnScroll()
  const delay = RM ? 0 : staggerIndex * 90

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`service-panel relative w-full overflow-hidden rounded-lg ${featured ? 'sm:col-span-2' : ''}`}
      style={{
        '--panel-desktop-min-h': featured ? '460px' : '380px',
        boxShadow: hovered
          ? '0 36px 64px -20px rgba(7,11,17,0.52)'
          : '0 18px 38px -18px rgba(7,11,17,0.3)',
        opacity:    RM || inView ? 1 : 0,
        transform:  RM || inView ? 'translateY(0)' : 'translateY(28px)',
        transitionProperty: 'opacity, transform, box-shadow',
        transitionDuration: `700ms, 700ms, 350ms`,
        transitionTimingFunction: EASE,
        transitionDelay: inView ? `${delay}ms, ${delay}ms, 0ms` : '0ms',
      }}
    >
      {/* image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: palette.navy,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'saturate(0.92) contrast(1.04)',
          transform: hovered ? 'scale(1.07)' : 'scale(1)',
          transition: RM ? 'none' : 'transform 700ms cubic-bezier(0.25,0.46,0.45,0.94)',
        }}
      />

      {/* navy tint */}
      <div className="pointer-events-none absolute inset-0" style={{ backgroundColor: `${palette.navy}26` }} />

      {/* gradient for text legibility */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to top, ${palette.navy}f2 0%, ${palette.navy}b8 28%, ${palette.navy}3d 58%, transparent 82%)`,
          opacity: hovered ? 0.88 : 0.75,
          transition: RM ? 'none' : 'opacity 350ms ease',
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
            className={`mt-3 font-serif font-bold leading-tight ${featured ? 'text-3xl lg:text-[2.25rem]' : 'text-2xl'}`}
            style={{
              color: palette.offWhite,
              transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
              transition: RM ? 'none' : 'transform 400ms cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            {title}
          </h3>

          <p
            className="mt-3 text-base leading-relaxed"
            style={{
              color: `${palette.offWhite}c2`,
              opacity: hovered ? 1 : 0.8,
              transition: RM ? 'none' : 'opacity 300ms ease',
            }}
          >
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
              style={{ transform: hovered ? 'translateX(5px)' : 'translateX(0)' }}
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
      <SectionHeading
        label="What We Do"
        title="Our Services"
        description="Reliable property care services designed to keep homes, buildings, and commercial spaces clean, functional, and professionally maintained."
        theme="light"
        className="px-2"
        labelFont="var(--font-dreamy)"
      />

      {/* Mobile: cinematic full-bleed stacked slides */}
      <div className="mt-10 sm:hidden">
        {services.map((service, i) => (
          <MobileServiceSlide key={service.slug} {...service} staggerIndex={i} />
        ))}
      </div>

      {/* Desktop: editorial card grid */}
      <div className="hidden sm:mt-14 sm:grid sm:grid-cols-2 sm:gap-6">
        {services.map((service, i) => (
          <ServicePanel key={service.slug} {...service} staggerIndex={i} />
        ))}
      </div>
    </div>
  </section>
)

export default Services
