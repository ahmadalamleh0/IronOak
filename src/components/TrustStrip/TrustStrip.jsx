import { IconShieldCheck, IconHomeBuilding, IconFileContract, IconClock } from '../icons/index.jsx'

const items = [
  { icon: IconShieldCheck, label: 'Licensed & Insured' },
  { icon: IconHomeBuilding, label: 'Residential & Commercial' },
  { icon: IconFileContract, label: 'Flexible Service Plans' },
  { icon: IconClock, label: 'Fast, Reliable Response' },
]

const TrustStrip = () => (
  <section className="relative border-y border-gold-400/10 bg-ink-900">
    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-6 py-10 sm:px-10 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-gold-400/10 lg:px-16 lg:py-8">
      {items.map(({ icon: Icon, label }) => (
        <div key={label} className="flex flex-col items-center gap-3 text-center lg:px-6">
          <Icon className="h-6 w-6 text-gold-300" />
          <span className="text-xs font-medium tracking-[0.12em] text-gold-100/75 sm:text-sm">
            {label}
          </span>
        </div>
      ))}
    </div>
  </section>
)

export default TrustStrip
