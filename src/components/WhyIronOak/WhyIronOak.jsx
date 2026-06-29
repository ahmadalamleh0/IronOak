import { useEffect, useRef, useState } from 'react'
import { IconKey, IconClock, IconShieldCheck, IconFileContract } from '../icons/index.jsx'
import SectionHeading from '../SectionHeading/SectionHeading.jsx'

const EASE = 'cubic-bezier(0.16,1,0.3,1)'

const useRevealOnScroll = (threshold = 0.25) => {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}

const points = [
  {
    icon: IconKey,
    title: 'One Trusted Partner',
    text: 'No more juggling multiple contractors.',
  },
  {
    icon: IconClock,
    title: 'Reliable & Consistent',
    text: 'Dependable scheduling, clear communication.',
  },
  {
    icon: IconShieldCheck,
    title: 'Licensed & Professional',
    text: 'Insured service you can trust.',
  },
  {
    icon: IconFileContract,
    title: 'Flexible Service Plans',
    text: 'One-time calls or ongoing contracts.',
  },
]

const WhyIronOak = () => {
  const [gridRef, gridInView] = useRevealOnScroll()

  return (
    <section id="why-ironoak" className="relative bg-ink-900 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <SectionHeading
          label="Why IronOak"
          title="Built for Reliable Property Care"
          description="Dependable service for property owners and managers — without the hassle of multiple contractors."
          theme="dark"
          labelFont="var(--font-dreamy)"
        />

        <div ref={gridRef} className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="flex flex-col items-center text-center"
              style={{
                opacity: gridInView ? 1 : 0,
                transform: gridInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 800ms ${EASE} ${i * 110}ms, transform 800ms ${EASE} ${i * 110}ms`,
              }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-400/30">
                <Icon className="h-5 w-5 text-gold-300" />
              </div>
              <h3
                style={{ fontFamily: 'var(--font-heading)' }}
                className="mt-4 text-lg font-normal tracking-wide text-gold-100"
              >
                {title}
              </h3>
              <p className="mt-2 max-w-[200px] text-sm leading-relaxed text-gold-100/60">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyIronOak
