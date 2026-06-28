import {
  IconWrench,
  IconBuilding,
  IconSpray,
  IconPlumbing,
  IconSparkle,
  IconClipboard,
} from '../icons/index.jsx'

const services = [
  {
    icon: IconWrench,
    title: 'Property Maintenance',
    description: 'Hands-on repairs and upkeep that keep your property running smoothly.',
    bullets: ['Handyman services', 'Repairs & maintenance', 'Small renovations', 'Preventative maintenance'],
  },
  {
    icon: IconBuilding,
    title: 'Building & Common Area Services',
    description: 'Dependable support for lobbies, common areas, and everyday building operations.',
    bullets: [
      'Lobby & common area support',
      'Building upkeep',
      'Property manager support',
      'Commercial & residential service plans',
    ],
  },
  {
    icon: IconSpray,
    title: 'Exterior & Garage Services',
    description: 'Keep entrances, driveways, and garages clean and presentable year-round.',
    bullets: ['Garage power washing', 'Driveway & walkway cleaning', 'Exterior pressure washing', 'Seasonal maintenance'],
  },
  {
    icon: IconPlumbing,
    title: 'Plumbing Support',
    description: 'Responsive plumbing support for everyday issues and unexpected repairs.',
    bullets: ['Garage & basement plumbing', 'Leak detection & repairs', 'Fixture installations', 'Emergency plumbing support'],
  },
  {
    icon: IconSparkle,
    title: 'Cleaning & Property Care',
    description: 'Detail-focused cleaning that keeps properties looking their best.',
    bullets: ['Window cleaning', 'Gutter cleaning', 'Junk removal', 'Light landscaping'],
  },
  {
    icon: IconClipboard,
    title: 'Custom Service Plans',
    description: 'Flexible plans built around how your property actually operates.',
    bullets: ['Tailored service plans', 'One-time service calls', 'Ongoing service contracts', 'Residential & commercial support'],
  },
]

const palette = {
  navy: '#07111D',
  deepBlue: '#0B1826',
  graphite: '#1D242C',
  stoneGray: '#6F7478',
  softGray: '#A8A59E',
  gold: '#C9A24A',
  warmGold: '#D8B866',
  offWhite: '#F4F1EA',
  sectionBg: '#DED4C2',
}

const headingGradient = {
  backgroundImage: `linear-gradient(180deg, ${palette.graphite} 0%, ${palette.navy} 50%, ${palette.deepBlue} 75%, ${palette.graphite} 100%)`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: palette.graphite,
}

const Services = () => (
  <section
    id="services"
    className="relative py-24 sm:py-28"
    style={{ backgroundColor: palette.sectionBg }}
  >
    <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
      <div className="max-w-2xl">
        <span
          className="text-xs font-semibold uppercase tracking-[0.3em]"
          style={{ color: palette.gold }}
        >
          Our Services
        </span>
        <h2
          className="mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl"
          style={headingGradient}
        >
          Property care, organized into clear service categories
        </h2>
        <p className="mt-5 text-base leading-relaxed sm:text-lg" style={{ color: palette.stoneGray }}>
          From everyday maintenance to ongoing service plans — one partner for
          every property need.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, description, bullets }) => (
          <div
            key={title}
            className="group relative flex flex-col rounded-md p-7 transition-all duration-300 hover:-translate-y-1"
            style={{
              backgroundColor: palette.graphite,
              border: `1px solid ${palette.stoneGray}33`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${palette.warmGold}80`
              e.currentTarget.style.backgroundColor = palette.deepBlue
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${palette.stoneGray}33`
              e.currentTarget.style.backgroundColor = palette.graphite
            }}
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-sm transition-colors duration-300"
              style={{ border: `1px solid ${palette.gold}66` }}
            >
              <Icon className="h-6 w-6 text-[#C9A24A]" />
            </div>

            <h3 className="mt-6 font-serif text-lg font-bold" style={{ color: palette.offWhite }}>
              {title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: palette.softGray }}>
              {description}
            </p>

            <ul
              className="mt-5 space-y-2 pt-5"
              style={{ borderTop: `1px solid ${palette.stoneGray}26` }}
            >
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 text-sm"
                  style={{ color: palette.softGray }}
                >
                  <span
                    className="mt-2 h-px w-2.5 shrink-0"
                    style={{ backgroundColor: palette.warmGold }}
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Services
