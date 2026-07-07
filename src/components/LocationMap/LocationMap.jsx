import { useEffect, useRef, useState } from 'react'

const RM =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const EASE = 'cubic-bezier(0.16,1,0.3,1)'

const useRevealOnScroll = (threshold = 0.1) => {
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

const ADDRESS     = '2233 Argentia Rd, Unit 302, Mississauga, Ontario, L5N 2X7'
const MAP_EMBED   = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`

const LocationMap = () => {
  const [headRef, headInView] = useRevealOnScroll(0.15)
  const [mapRef,  mapInView]  = useRevealOnScroll(0.08)

  return (
    <section className="relative bg-ink-950 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">

        {/* Heading — mask reveal */}
        <div
          ref={headRef}
          style={{
            overflow: 'hidden',
            paddingBottom: '0.06em',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              transform:  RM || headInView ? 'translateY(0)' : 'translateY(110%)',
              transition: RM ? 'none' : `transform 800ms ${EASE}`,
            }}
            className="text-gold-engraved text-4xl font-normal leading-tight tracking-wide sm:text-5xl"
          >
            Our Location
          </h2>
        </div>

        {/* Map iframe */}
        <div
          ref={mapRef}
          style={{
            opacity:    RM || mapInView ? 1 : 0,
            transform:  RM || mapInView ? 'translateY(0)' : 'translateY(20px)',
            transition: RM ? 'none' : `opacity 800ms ${EASE} 120ms, transform 800ms ${EASE} 120ms`,
          }}
          className="mt-10 overflow-hidden rounded-md border border-gold-400/15"
        >
          <iframe
            title="IronOak Property Services Inc. location map"
            src={MAP_EMBED}
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[420px] w-full grayscale-[15%] invert-[92%] contrast-[1.05] hue-rotate-180 sm:h-[520px]"
          />
        </div>

      </div>
    </section>
  )
}

export default LocationMap
