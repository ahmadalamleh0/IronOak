import {
  IconShieldCheck,
  IconHomeBuilding,
  IconFileContract,
  IconClock,
  IconAward,
} from '../icons/index.jsx'

const items = [
  { icon: IconShieldCheck, label: 'Licensed & Insured' },
  { icon: IconHomeBuilding, label: 'Residential & Commercial' },
  { icon: IconFileContract, label: 'Flexible Service Plans' },
  { icon: IconClock, label: 'Fast, Reliable Response' },
  { icon: IconAward, label: '10+ Years Experience' },
]

// doubled so a -50% translateX loops seamlessly with no visible seam
const loopItems = [...items, ...items]

const TrustStrip = () => (
  <section className="relative overflow-hidden border-y border-gold-400/10 bg-ink-900 py-6">
    <div className="trust-marquee-viewport">
      <div className="trust-marquee-track flex items-center">
        {loopItems.map(({ icon: Icon, label }, i) => (
          <div key={`${label}-${i}`} className="flex items-center">
            <div className="flex items-center gap-3 px-7 sm:px-9">
              <Icon className="h-5 w-5 shrink-0 text-gold-300" />
              <span className="whitespace-nowrap text-xs font-medium tracking-[0.14em] text-gold-100/80 sm:text-sm">
                {label}
              </span>
            </div>
            <span aria-hidden="true" className="text-gold-400/40">
              &#10022;
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default TrustStrip
