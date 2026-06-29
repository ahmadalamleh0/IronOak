import { Link } from 'react-router-dom'
import LogoMark from '../Logo/LogoMark.jsx'

const columns = [
  {
    title: 'Services',
    links: [
      'Property Maintenance',
      'Building & Common Area Services',
      'Exterior & Garage Services',
      'Plumbing Support',
      'Cleaning & Property Care',
      'Custom Service Plans',
    ],
    hrefs: ['/#services', '/#services', '/#services', '/#services', '/#services', '/#services'],
  },
  {
    title: 'Company',
    links: ['Why IronOak', 'Contact', 'Request a Quote'],
    hrefs: ['/#why-ironoak', '/#contact', '/#contact'],
  },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-gold-400/15 bg-ink-950">
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <LogoMark className="h-auto w-10" />
              <div className="flex flex-col leading-tight">
                <span className="text-gold-engraved font-serif text-lg font-bold tracking-wide">
                  IronOak
                </span>
                <span className="text-[0.55rem] tracking-[0.3em] text-gold-300/70">
                  PROPERTY SERVICES INC.
                </span>
              </div>
            </div>
            <p className="font-display mt-5 max-w-xs text-sm italic leading-relaxed text-gold-200/60">
              Elevating Standards in Property Care
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300/80">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link, i) => (
                  <li key={link}>
                    <Link
                      to={col.hrefs[i]}
                      className="text-sm text-gold-100/65 transition-colors duration-200 hover:text-gold-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300/80">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-gold-100/65">
              <li>2233 Argentia Rd, Unit 302, Mississauga, ON L5N 2X7</li>
              <li>
                <a
                  href="mailto:info@ironoakpropertyservices.com"
                  className="transition-colors duration-200 hover:text-gold-200"
                >
                  info@ironoakpropertyservices.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+14165709074"
                  className="transition-colors duration-200 hover:text-gold-200"
                >
                  416-570-9074
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gold-400/10 pt-8 text-xs text-gold-100/40 sm:flex-row">
          <p>&copy; {year} IronOak Property Services Inc. All rights reserved.</p>
          <p>Mississauga, Ontario</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
