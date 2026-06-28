import { useState } from 'react'
import { IconOffice, IconBuilding, IconResidential, IconWarehouse } from '../icons/index.jsx'

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

const PropertyCard = ({ icon: Icon, title, description, image }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative aspect-[4/5] overflow-hidden rounded-lg transition-shadow duration-300 sm:aspect-[5/4]"
      style={{
        boxShadow: hovered
          ? '0 28px 55px -20px rgba(7,11,17,0.45)'
          : '0 18px 40px -18px rgba(7,11,17,0.35)',
        border: `1px solid ${palette.stoneGray}26`,
      }}
    >
      {/* image area: graceful gradient now, real photo drops in automatically once present */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          backgroundColor: palette.navy,
          backgroundImage: `linear-gradient(155deg, ${palette.graphite}26 0%, ${palette.navy}40 100%), url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: hovered ? 'scale(1.07)' : 'scale(1)',
        }}
      >
        <div className="flex h-full w-full items-center justify-center">
          <Icon className="h-12 w-12 opacity-[0.14]" style={{ color: palette.offWhite }} />
        </div>
      </div>

      {/* bottom fade for legible text over any image */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to top, ${palette.navy}eb 0%, ${palette.navy}8c 38%, transparent 72%)`,
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
          className="font-serif text-xl font-bold leading-snug transition-transform duration-500 sm:text-2xl"
          style={{ color: palette.offWhite, transform: hovered ? 'translateY(-2px)' : 'translateY(0)' }}
        >
          {title}
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed" style={{ color: `${palette.offWhite}b3` }}>
          {description}
        </p>
      </div>
    </div>
  )
}

const PropertyTypes = () => (
  <section className="relative py-24 sm:py-28" style={{ backgroundColor: palette.sectionBg }}>
    <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: palette.gold }}>
          Who We Support
        </span>
        <h2 className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl" style={headingGradient}>
          Property types we serve
        </h2>
        <p className="mt-5 text-base leading-relaxed sm:text-lg" style={{ color: palette.stoneGray }}>
          Reliable property care across residential, commercial, multi-unit,
          and mixed-use spaces throughout the GTA.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {properties.map((property) => (
          <PropertyCard key={property.title} {...property} />
        ))}
      </div>
    </div>
  </section>
)

export default PropertyTypes
