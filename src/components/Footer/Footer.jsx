import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoMark from '../Logo/LogoMark.jsx'

const RM =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const EASE = 'cubic-bezier(0.16,1,0.3,1)'

const useRevealOnScroll = (threshold = 0.08) => {
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
    hrefs: ['/#services-explorer', '/#services-explorer', '/#services-explorer', '/#services-explorer', '/#services-explorer', '/#services-explorer'],
  },
  {
    title: 'Company',
    links: ['Why IronOak', 'Contact', 'Request a Quote'],
    hrefs: ['/#why-ironoak', '/#contact', '/#contact'],
  },
]

const Footer = () => {
  const [gridRef, gridInView] = useRevealOnScroll()
  const [barRef,  barInView]  = useRevealOnScroll(0.05)
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-gold-400/15 bg-ink-950" data-navbar="invert">
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-6xl px-6 py-10 sm:px-10 lg:px-16">
        {/* Grid columns with stagger */}
        <div ref={gridRef} className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div
            className="lg:col-span-1"
            style={{
              opacity:    RM || gridInView ? 1 : 0,
              transform:  RM || gridInView ? 'translateY(0)' : 'translateY(20px)',
              transition: RM ? 'none' : `opacity 700ms ${EASE}, transform 700ms ${EASE}`,
            }}
          >
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

          {/* Nav columns with stagger */}
          {columns.map((col, colIdx) => (
            <div
              key={col.title}
              style={{
                opacity:    RM || gridInView ? 1 : 0,
                transform:  RM || gridInView ? 'translateY(0)' : 'translateY(20px)',
                transition: RM ? 'none' : `opacity 700ms ${EASE} ${(colIdx + 1) * 80}ms, transform 700ms ${EASE} ${(colIdx + 1) * 80}ms`,
              }}
            >
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

          {/* Contact column */}
          <div
            style={{
              opacity:    RM || gridInView ? 1 : 0,
              transform:  RM || gridInView ? 'translateY(0)' : 'translateY(20px)',
              transition: RM ? 'none' : `opacity 700ms ${EASE} ${(columns.length + 1) * 80}ms, transform 700ms ${EASE} ${(columns.length + 1) * 80}ms`,
            }}
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300/80">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-gold-100/65">
              <li>2233 Argentia Rd, Unit 302, Mississauga, ON L5N 2X7</li>
              <li>
                <a href="tel:+14165709074" className="transition-colors duration-200 hover:text-gold-200">
                  416-570-9074
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          ref={barRef}
          className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gold-400/10 pt-8 text-xs text-gold-100/40 sm:flex-row"
          style={{
            opacity:    RM || barInView ? 1 : 0,
            transition: RM ? 'none' : `opacity 600ms ease 200ms`,
          }}
        >
          <p>&copy; {year} IronOak Property Services Inc. All rights reserved.</p>
          <p>Mississauga, Ontario</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
