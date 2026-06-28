import { IconKey, IconClock, IconShieldCheck, IconFileContract } from '../icons/index.jsx'

const points = [
  {
    icon: IconKey,
    title: 'One Trusted Partner',
    text: 'Stop juggling multiple contractors for every small job.',
  },
  {
    icon: IconClock,
    title: 'Reliable & Consistent',
    text: 'Dependable scheduling, clear communication, and follow-through.',
  },
  {
    icon: IconShieldCheck,
    title: 'Licensed & Professional',
    text: 'Insured, professional service for residential and commercial properties.',
  },
  {
    icon: IconFileContract,
    title: 'Flexible Service Plans',
    text: 'One-time calls or ongoing contracts, built around your property.',
  },
]

const WhyIronOak = () => (
  <section id="why-ironoak" className="relative bg-ink-900 py-24 sm:py-28">
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 sm:px-10 lg:grid-cols-[0.85fr_1fr] lg:gap-16 lg:px-16">
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400/80">
          Why IronOak
        </span>
        <h2 className="text-gold-engraved mt-4 font-serif text-3xl font-bold leading-tight sm:text-4xl">
          One partner. Every property need.
        </h2>
        <p className="mt-5 max-w-md text-base leading-relaxed text-gold-100/65 sm:text-lg">
          Built for property owners and managers who need dependable service
          without chasing multiple contractors.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {points.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-400/30">
              <Icon className="h-5 w-5 text-gold-300" />
            </div>
            <div>
              <h3 className="font-serif text-base font-bold text-gold-100">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gold-100/60">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default WhyIronOak
