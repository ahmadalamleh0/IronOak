import { useEffect, useRef, useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading.jsx'

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

const AreasWeServe = () => {
  const [imgRef, imgInView]   = useRevealOnScroll(0.08)
  const [mapRef, mapInView]   = useRevealOnScroll(0.1)
  const [textRef, textInView] = useRevealOnScroll(0.1)

  const revealImg = {
    opacity:    RM || imgInView ? 1 : 0,
    transform:  RM || imgInView ? 'scale(1) translateY(0)' : 'scale(0.97) translateY(16px)',
    transition: RM ? 'none' : `opacity 900ms ${EASE}, transform 900ms ${EASE}`,
  }

  const revealMap = {
    opacity:    RM || mapInView ? 1 : 0,
    transform:  RM || mapInView ? 'translateY(0)' : 'translateY(18px)',
    transition: RM ? 'none' : `opacity 800ms ${EASE}, transform 800ms ${EASE}`,
  }

  const revealText = {
    opacity:    RM || textInView ? 1 : 0,
    transform:  RM || textInView ? 'translateY(0)' : 'translateY(22px)',
    transition: RM ? 'none' : `opacity 800ms ${EASE} 140ms, transform 800ms ${EASE} 140ms`,
  }

  return (
    <section className="relative w-full bg-ink-950">
      {/* Desktop: full combined graphic */}
      <div ref={imgRef} style={revealImg}>
        <img
          src="/images/areas-we-serve.png"
          alt="Areas IronOak Property Services serves across the GTA: Peel, York, Durham, Halton, and the City of Toronto"
          className="hidden w-full sm:block"
        />
      </div>

      {/* Mobile: map image + copy as real HTML */}
      <div className="block sm:hidden">
        <div ref={mapRef} style={revealMap}>
          <img
            src="/images/areas-we-serve-map.png"
            alt="Map of the GTA regions IronOak serves: Peel, York, Durham, Halton, and the City of Toronto"
            className="block w-full"
          />
        </div>

        <div ref={textRef} style={{ ...revealText, padding: '56px 24px' }}>
          <SectionHeading
            label="Service Area"
            title="Areas We Serve"
            description="Serving Toronto, Peel, York, Durham, and Halton, IronOak provides dependable property care for residential buildings, commercial spaces, and everyday maintenance needs across the GTA."
            theme="dark"
          />
        </div>
      </div>
    </section>
  )
}

export default AreasWeServe
