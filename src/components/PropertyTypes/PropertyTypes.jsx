import { useEffect, useRef, useState } from 'react'
import { IconOffice, IconBuilding, IconResidential, IconWarehouse } from '../icons/index.jsx'
import SectionHeading from '../SectionHeading/SectionHeading.jsx'

const RM =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const EASE = 'cubic-bezier(0.16,1,0.3,1)'

const palette = {
  navy:      '#07111D',
  graphite:  '#1D242C',
  stoneGray: '#6F7478',
  softGray:  '#A8A59E',
  gold:      '#C9A24A',
  warmGold:  '#D8B866',
  offWhite:  '#F4F1EA',
  sectionBg: '#DED4C2',
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

const PropertyCard = ({ icon: Icon, title, description, image, delay = 0 }) => {
  const [hovered, setHovered] = useState(false)
  const [ref, inView]         = useRevealOnScroll()
  // Parallax: separate div for JS-driven translateY so it doesn't fight the hover scale
  const parallaxRef = useRef(null)
  const rafRef      = useRef(null)

  useEffect(() => {
    const isMobile = window.innerWidth <= 768
    if (RM || isMobile || !ref.current || !parallaxRef.current) return

    const update = () => {
      if (!ref.current || !parallaxRef.current) return
      const rect   = ref.current.getBoundingClientRect()
      const center = rect.top + rect.height / 2 - window.innerHeight / 2
      const shift  = center * 0.07 // subtle — max ~30px at edges
      parallaxRef.current.style.transform = `translateY(${shift}px)`
    }

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const active = RM || inView

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative aspect-[4/5] overflow-hidden rounded-lg sm:aspect-[5/4]"
      style={{
        boxShadow: hovered
          ? '0 32px 58px -18px rgba(7,11,17,0.52)'
          : '0 18px 40px -18px rgba(7,11,17,0.35)',
        border: `1px solid ${palette.stoneGray}26`,
        opacity:    active ? 1 : 0,
        transform:  active ? 'translateY(0)' : 'translateY(28px)',
        transition: RM
          ? 'none'
          : `opacity 720ms ${EASE} ${delay}ms, transform 720ms ${EASE} ${delay}ms, box-shadow 300ms ease`,
      }}
    >
      {/* Parallax layer: moves with scroll (JS) — extra inset so edges never show on translate */}
      <div
        ref={parallaxRef}
        className="absolute"
        style={{ inset: '-14px', transition: 'none' }}
      >
        {/* Hover-scale layer (CSS) — independent from parallax */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: palette.navy,
            backgroundImage: `linear-gradient(155deg, ${palette.graphite}26 0%, ${palette.navy}40 100%), url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
            transition: RM ? 'none' : 'transform 700ms cubic-bezier(0.25,0.46,0.45,0.94)',
          }}
        >
          <div className="flex h-full w-full items-center justify-center">
            <Icon className="h-12 w-12 opacity-[0.14]" style={{ color: palette.offWhite }} />
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to top, ${palette.navy}eb 0%, ${palette.navy}8c 38%, transparent 72%)`,
          opacity: hovered ? 0.95 : 0.82,
          transition: RM ? 'none' : 'opacity 350ms ease',
        }}
      />

      <div className="relative flex h-full flex-col justify-end p-7 sm:p-8">
        <div
          className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300"
          style={{ borderColor: hovered ? `${palette.warmGold}90` : `${palette.warmGold}55` }}
        >
          <Icon className="h-5 w-5" style={{ color: palette.warmGold }} />
        </div>

        <h3
          className="font-serif text-xl font-bold leading-snug sm:text-2xl"
          style={{
            color: palette.offWhite,
            transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
            transition: RM ? 'none' : 'transform 450ms cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {title}
        </h3>
        <p
          className="mt-3 max-w-sm text-sm leading-relaxed"
          style={{
            color: `${palette.offWhite}b3`,
            opacity: hovered ? 1 : 0.85,
            transition: RM ? 'none' : 'opacity 300ms ease',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

const properties = [
  {
    icon: IconOffice,
    title: 'Commercial Buildings',
    description:
      'Offices, retail plazas, and mixed-use commercial properties kept presentable, functional, and professionally maintained.',
    image: '/images/property-commercial.jpg',
  },
  {
    icon: IconBuilding,
    title: 'Condos & Apartments',
    description:
      'Support for lobbies, hallways, common areas, and multi-residential spaces that need ongoing care and attention.',
    image: '/images/property-condos.jpg',
  },
  {
    icon: IconResidential,
    title: 'Residential Homes',
    description:
      'Property maintenance, repairs, cleaning, and exterior care for homeowners who value dependable support.',
    image: '/images/property-residential.jpg',
  },
  {
    icon: IconWarehouse,
    title: 'Industrial & Mixed-Use Properties',
    description:
      'Practical property care for warehouses, industrial sites, and mixed-use spaces that require reliable ongoing upkeep.',
    image: '/images/property-industrial.jpg',
  },
]

const PropertyTypes = () => (
  <section className="relative py-24 sm:py-28" style={{ backgroundColor: palette.sectionBg }}>
    <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
      <SectionHeading
        label="Who We Support"
        title="Property Types We Serve"
        description="Reliable property care across residential, commercial, multi-unit, and mixed-use spaces throughout the GTA."
        theme="light"
        labelFont="var(--font-dreamy)"
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {properties.map((property, i) => (
          <PropertyCard key={property.title} {...property} delay={RM ? 0 : i * 85} />
        ))}
      </div>
    </div>
  </section>
)

export default PropertyTypes
