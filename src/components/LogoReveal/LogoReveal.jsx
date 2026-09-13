import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import LogoMark from '../Logo/LogoMark.jsx'

// Must match the media query in Hero.jsx's .hero-bg-img rule exactly.
const HERO_IMG_MOBILE = '/images/hero-bg-mobile.webp'
const HERO_IMG_DESKTOP = '/images/hero-bg.webp'
// Cap on how long the reveal will wait for the hero image — a slow
// connection gets a head start on the fetch, not an indefinite hold.
const HERO_IMG_TIMEOUT = 2500

// Removes the closed-curtain div painted in index.html, once our own
// overlay is opaque and has taken over (or immediately, on the skip path).
const hideStaticCurtain = () => {
  const el = document.getElementById('io-curtain')
  if (el) el.style.display = 'none'
}

// Starts fetching the hero background now, behind the closed curtain, so
// it's ready the instant the curtain opens instead of popping in.
const preloadHeroImage = () =>
  new Promise((resolve) => {
    const src = window.matchMedia('(max-width: 768px)').matches
      ? HERO_IMG_MOBILE
      : HERO_IMG_DESKTOP
    const img = new Image()
    img.onload = resolve
    img.onerror = resolve
    img.src = src
    if (img.complete) resolve()
  })

const withTimeout = (promise, ms) =>
  Promise.race([promise, new Promise((resolve) => setTimeout(resolve, ms))])

const LogoReveal = ({
  brand = 'IronOak',
  subtext = 'Property Services Inc.',
  tagline = 'Elevating Standards in Property Care',
  onComplete,
}) => {
  const containerRef = useRef(null)
  const markWrapRef = useRef(null)
  const logoRef = useRef(null)
  const wordmarkRef = useRef(null)
  const subtextRef = useRef(null)
  const taglineRef = useRef(null)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    // Already played this session, or the visitor prefers reduced motion —
    // fire onComplete immediately without animating the splash sequence
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (sessionStorage.getItem('io-intro-done') === '1' || rm) {
      hideStaticCurtain()
      onCompleteRef.current?.()
      return
    }

    document.body.style.overflow = 'hidden'

    let cancelled = false
    let ctx = null

    // The static curtain from index.html stays up the whole time this is
    // pending, so there's nothing to reveal prematurely while we wait.
    withTimeout(preloadHeroImage(), HERO_IMG_TIMEOUT).then(() => {
      if (cancelled) return

      try {
        ctx = gsap.context(() => {
          const { root, gold } = logoRef.current

          const tl = gsap.timeline({
            defaults: { ease: 'power2.out' },
            onComplete: () => {
              document.body.style.overflow = ''
              onCompleteRef.current?.()
            },
          })

          // the mark is engraved/hidden in the surface, then uncovers top-down,
          // settling forward in scale and focus as the gold catches the light
          tl.set(containerRef.current, { autoAlpha: 1 })
            .set(gold, { autoAlpha: 0 })
            .set(root, {
              clipPath: 'inset(0% 0% 100% 0%)',
              scale: 1.08,
              filter: 'blur(11px)',
              transformOrigin: '50% 100%',
            })
            .set(markWrapRef.current, { autoAlpha: 1 })
            .to(root, {
              clipPath: 'inset(0% 0% 0% 0%)',
              scale: 1,
              filter: 'blur(0px)',
              duration: 0.9,
              ease: 'power3.out',
            })
            .to(gold, { autoAlpha: 1, duration: 0.6, ease: 'power2.out' }, '-=0.40')
            .fromTo(
              wordmarkRef.current,
              { autoAlpha: 0, y: 14, letterSpacing: '0.1em' },
              { autoAlpha: 1, y: 0, letterSpacing: '0.01em', duration: 0.55 },
              '-=0.30',
            )
            .fromTo(
              subtextRef.current,
              { autoAlpha: 0, y: 8 },
              { autoAlpha: 1, y: 0, duration: 0.4 },
              '-=0.25',
            )
            .fromTo(
              taglineRef.current,
              { autoAlpha: 0, y: 8 },
              { autoAlpha: 1, y: 0, duration: 0.4 },
              '-=0.18',
            )
            .to({}, { duration: 0.6 })
            .to(containerRef.current, {
              yPercent: -100,
              autoAlpha: 0,
              duration: 0.65,
              ease: 'power3.inOut',
            })

          // Our own curtain is now opaque and in control — drop the static
          // one painted in index.html before this bundle ever loaded.
          hideStaticCurtain()
        })
      } catch (_err) {
        // Animation setup failed — don't strand visitors behind the curtain.
        document.body.style.overflow = ''
        hideStaticCurtain()
        onCompleteRef.current?.()
      }
    })

    return () => {
      cancelled = true
      ctx?.revert()
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="invisible fixed inset-0 z-[100] flex h-dvh w-full items-center justify-center overflow-hidden bg-ink-950"
    >
      <div className="bg-grain pointer-events-none absolute inset-0" />
      {/* premium engraved-surface depth: soft center lift, dark vignette at the edges */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            'radial-gradient(ellipse 60% 50% at 50% 42%, rgba(255,255,255,0.03), transparent 70%)',
            'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 55%, rgba(0,0,0,0.4) 100%)',
          ].join(', '),
        }}
      />

      <div className="relative flex flex-col items-center px-6 text-center">
        <div
          ref={markWrapRef}
          className="invisible relative mb-8 w-60 sm:mb-10 sm:w-80 md:w-[22rem]"
        >
          <LogoMark ref={logoRef} className="w-full" />
        </div>

        {/* Decorative brand wordmark in the intro splash — not a heading; the
            page's real <h1> lives in the section this reveal uncovers. */}
        <p
          ref={wordmarkRef}
          className="text-gold-engraved font-serif text-5xl font-bold sm:text-7xl"
        >
          {brand}
        </p>

        <p
          ref={subtextRef}
          className="mt-3 text-[0.65rem] font-medium tracking-[0.4em] text-gold-300/80 sm:mt-4 sm:text-xs"
        >
          {subtext.toUpperCase()}
        </p>

        <p
          ref={taglineRef}
          className="font-display mt-5 text-base italic tracking-wide text-gold-200/65 sm:mt-6 sm:text-lg"
        >
          {tagline}
        </p>
      </div>
    </div>
  )
}

export default LogoReveal
