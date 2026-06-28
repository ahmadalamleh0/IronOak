import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import LogoMark from '../Logo/LogoMark.jsx'

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
    document.body.style.overflow = 'hidden'

    const ctx = gsap.context(() => {
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
          duration: 1.1,
          ease: 'power3.out',
        })
        .to(gold, { autoAlpha: 1, duration: 0.75, ease: 'power2.out' }, '-=0.45')
        .fromTo(
          wordmarkRef.current,
          { autoAlpha: 0, y: 14, letterSpacing: '0.1em' },
          { autoAlpha: 1, y: 0, letterSpacing: '0.01em', duration: 0.7 },
          '-=0.35',
        )
        .fromTo(
          subtextRef.current,
          { autoAlpha: 0, y: 8 },
          { autoAlpha: 1, y: 0, duration: 0.5 },
          '-=0.3',
        )
        .fromTo(
          taglineRef.current,
          { autoAlpha: 0, y: 8 },
          { autoAlpha: 1, y: 0, duration: 0.55 },
          '-=0.22',
        )
        .to({}, { duration: 0.35 })
        .to(containerRef.current, {
          yPercent: -100,
          autoAlpha: 0,
          duration: 0.8,
          ease: 'power3.inOut',
        })
    })

    return () => {
      ctx.revert()
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

        <h1
          ref={wordmarkRef}
          className="text-gold-engraved font-serif text-5xl font-bold sm:text-7xl"
        >
          {brand}
        </h1>

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
