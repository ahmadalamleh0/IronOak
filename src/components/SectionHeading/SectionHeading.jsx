import { useEffect, useRef, useState } from 'react'

const EASE = 'cubic-bezier(0.16,1,0.3,1)'

const useRevealOnScroll = (threshold = 0.35) => {
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

const rise = (inView, delayMs, distance = 18) => ({
  opacity: inView ? 1 : 0,
  transform: inView ? 'translateY(0)' : `translateY(${distance}px)`,
  transition: `opacity 800ms ${EASE} ${delayMs}ms, transform 800ms ${EASE} ${delayMs}ms`,
})

const darkTitleGradient = {}

const lightTitleGradient = {
  backgroundImage: 'linear-gradient(180deg, #1D242C 0%, #07111D 50%, #1D242C 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: '#1D242C',
}

// Shared premium heading block: small gold label -> serif title -> center-expanding
// gold divider, each staggered in on scroll. Reused by every major section so the
// site reads as one designed system rather than ad-hoc centered text per section.
const SectionHeading = ({
  label,
  title,
  description,
  theme = 'light',
  className = '',
  labelFont,
}) => {
  const [ref, inView] = useRevealOnScroll()

  const labelColor = theme === 'dark' ? 'text-gold-400/85' : 'text-gold-500'
  const titleClass = theme === 'dark' ? 'text-gold-engraved' : ''
  const titleStyle = theme === 'dark' ? darkTitleGradient : lightTitleGradient
  const descColor = theme === 'dark' ? 'text-gold-100/65' : 'text-[#6F7478]'

  const labelClass = labelFont
    ? `text-3xl leading-none sm:text-4xl ${labelColor}`
    : `text-xs font-semibold uppercase tracking-[0.32em] ${labelColor}`

  return (
    <div ref={ref} className={`mx-auto max-w-2xl text-center ${className}`}>
      <span
        style={{ ...rise(inView, 0, 10), ...(labelFont ? { fontFamily: labelFont } : {}) }}
        className={`inline-block ${labelClass}`}
      >
        {label}
      </span>

      <h2
        style={{ ...rise(inView, 140, 22), ...titleStyle, fontFamily: 'var(--font-heading)' }}
        className={`mt-4 text-4xl font-normal leading-tight tracking-wide sm:text-5xl ${titleClass}`}
      >
        {title}
      </h2>

      <span
        aria-hidden="true"
        className="mx-auto mt-5 block h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent"
        style={{
          width: inView ? '56px' : '0px',
          opacity: inView ? 1 : 0,
          transition: `width 700ms ${EASE} 320ms, opacity 700ms ease 320ms`,
        }}
      />

      {description && (
        <p
          style={rise(inView, 420, 16)}
          className={`mx-auto mt-6 max-w-xl text-base leading-relaxed sm:text-lg ${descColor}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
