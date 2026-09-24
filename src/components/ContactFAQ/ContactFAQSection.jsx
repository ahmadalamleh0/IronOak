import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import LogoMark from '../Logo/LogoMark.jsx'

// ── FAQ data ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    question: 'What types of properties do you service?',
    answer:   'We work with residential, commercial, retail, office, and multi-unit properties. The exact scope is reviewed before scheduling so the right team and resources can be coordinated.',
  },
  {
    question: 'Do you handle both small repairs and larger projects?',
    answer:   'Yes. We can assist with individual repairs, ongoing maintenance, installations, upgrades, and larger renovation or construction work, depending on the project requirements.',
  },
  {
    question: 'Which areas do you serve?',
    answer:   'We serve clients throughout our primary service area and surrounding communities. Customers can submit their location through the quote form to confirm availability.',
  },
  {
    question: 'Do you provide free estimates?',
    answer:   'Yes. Begin by sharing the basic project details through the quote form, phone, or email. We will review the request and confirm whether a site visit is required before preparing the quote.',
  },
  {
    question: 'Can you coordinate multiple trades for one project?',
    answer:   "Yes. One of our key advantages is the ability to coordinate different services and trades under one project, reducing the need for customers to manage several separate contractors.",
  },
  {
    question: 'How quickly can work begin?',
    answer:   'Scheduling depends on the size, urgency, location, and requirements of the project. Once the scope and quote are approved, we will confirm the expected start date and keep the customer informed.',
  },
]

// ── Scoped CSS ────────────────────────────────────────────────────────────────
const CSS = `
  /* ── Single-column layout ── */
  .io-cfaq-wrap {
    max-width: 740px;
    margin: 0 auto;
  }

  /* ── FAQ accordion — EXACT original styles ── */
  .io-faqn-qbtn {
    display: flex;
    align-items: center;
    gap: 14px;
    width: 100%;
    min-height: 58px;
    background: #F7F4EC;
    border-radius: 14px;
    border: 1px solid rgba(9,19,31,0.09);
    padding: 14px 18px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
    cursor: pointer;
    text-align: left;
    box-sizing: border-box;
    font-family: inherit;
    -webkit-tap-highlight-color: transparent;
    transition: background 140ms ease;
  }
  .io-faqn-qbtn:hover { background: #F0EDE5; }
  .io-faqn-qbtn:focus-visible {
    outline: 2px solid rgba(201,162,74,0.65);
    outline-offset: 2px;
    border-radius: 14px;
  }

  .io-faqn-apanel {
    flex: 1;
    background: #F7F4EC;
    border-radius: 14px;
    border: 1px solid rgba(9,19,31,0.09);
    padding: 16px 20px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
    box-sizing: border-box;
  }

  .io-faqn-avatar {
    flex-shrink: 0;
    border-radius: 50%;
    background: #0E1B28;
    border: 1px solid rgba(201,162,74,0.22);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 8px;
    width: 42px;
    height: 42px;
  }

  @media (max-width: 600px) {
    .io-faqn-qbtn   { min-height: 54px; padding: 12px 14px; border-radius: 12px; gap: 10px; }
    .io-faqn-apanel { padding: 14px 16px; border-radius: 12px; }
    .io-faqn-avatar { width: 36px; height: 36px; padding: 7px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .io-faqn-qbtn { transition: none; }
  }

  /* ── Contact card ── */
  .io-cfaq-panel {
    border-radius: 22px;
    border: 1px solid rgba(201,162,74,0.16);
    background: #0A1720;
    padding: clamp(26px,3.6vw,38px) clamp(22px,3vw,34px);
    position: relative;
    overflow: hidden;
    box-shadow:
      0 1px 4px rgba(0,0,0,0.18),
      0 6px 28px rgba(0,0,0,0.26);
  }
  @media (min-width: 1024px) {
    .io-cfaq-panel-outer { position: sticky; top: 96px; }
  }

  /* ── CTA button — cream/off-white, gold accent ── */
  .io-cfaq-cta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 14px 22px;
    border-radius: 100px;
    background: #F5F2EA;
    color: #07111D;
    border: 1.5px solid rgba(201,162,74,0.30);
    font-family: "Manrope", system-ui, sans-serif;
    font-size: 0.77rem;
    font-weight: 800;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    box-sizing: border-box;
    margin-top: 26px;
    transition: background 200ms ease, border-color 200ms ease, color 200ms ease, transform 180ms ease;
    -webkit-tap-highlight-color: transparent;
  }
  .io-cfaq-cta:hover {
    background: rgba(201,162,74,0.15);
    border-color: rgba(201,162,74,0.55);
    color: #F4F1EA;
    transform: translateY(-1px);
  }
  .io-cfaq-cta:active  { transform: translateY(0); }
  .io-cfaq-cta:focus-visible {
    outline: 2px solid rgba(201,162,74,0.70);
    outline-offset: 3px;
  }

  /* ── Contact rows ── */
  .io-cfaq-contact-row {
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 15px 0;
    border-top: 1px solid rgba(244,241,234,0.07);
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    transition: opacity 160ms ease;
  }
  .io-cfaq-contact-row:hover { opacity: 0.72; }
  .io-cfaq-contact-row:focus-visible {
    outline: 2px solid rgba(201,162,74,0.65);
    border-radius: 8px;
    outline-offset: 4px;
  }

  .io-cfaq-ic {
    flex-shrink: 0;
    width: 36px; height: 36px;
    border-radius: 9px;
    background: rgba(201,162,74,0.09);
    border: 1px solid rgba(201,162,74,0.18);
    display: flex; align-items: center; justify-content: center;
  }

  @media (prefers-reduced-motion: reduce) {
    .io-cfaq-cta,
    .io-cfaq-contact-row { transition: none; }
    .io-faqn-qbtn { transition: none; }
  }
`

// ── Avatar: circular IronOak tree emblem (identical to original) ──────────────
const Avatar = () => (
  <div className="io-faqn-avatar" aria-hidden="true">
    <div style={{ width: '20px' }}>
      <LogoMark />
    </div>
  </div>
)

// ── Plus → × rotation icon (identical to original) ───────────────────────────
const AVATAR_W   = 42
const AVATAR_GAP = 12

const ToggleIcon = ({ open, reduceMotion }) => (
  <motion.span
    animate={{ rotate: open ? 45 : 0 }}
    transition={{ duration: reduceMotion ? 0 : 0.22, ease: 'easeOut' }}
    style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
      width: 26, height: 26, borderRadius: '50%',
      background: open ? 'rgba(201,162,74,0.12)' : 'rgba(9,19,31,0.07)',
      border: `1.5px solid ${open ? 'rgba(201,162,74,0.38)' : 'rgba(9,19,31,0.12)'}`,
      fontSize: '1rem', lineHeight: 1,
      color: open ? '#C9A24A' : '#4A5568',
      transition: 'background 200ms ease, border-color 200ms ease, color 200ms ease',
    }}
    aria-hidden="true"
  >
    +
  </motion.span>
)

// ── Contact panel icons ───────────────────────────────────────────────────────
const PhoneIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#C9A24A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .98h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
)

const EmailIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#C9A24A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 8l10 6 10-6"/>
  </svg>
)

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 8h8M8 4l4 4-4 4"/>
  </svg>
)

// ── Shared eyebrow style ──────────────────────────────────────────────────────
const eyebrow = {
  fontFamily: '"Manrope", system-ui, sans-serif',
  fontSize: '0.62rem', fontWeight: 700,
  letterSpacing: '0.30em', textTransform: 'uppercase',
  color: '#C9A24A', margin: '0 0 14px',
}

// ── Component ─────────────────────────────────────────────────────────────────
const RM   = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
const EASE = 'cubic-bezier(0.16,1,0.3,1)'

export default function ContactFAQSection() {
  const [openIdx, setOpenIdx] = useState(null)
  const reduceMotion          = useReducedMotion()
  const sectionRef            = useRef(null)
  const [inView, setInView]   = useState(false)

  const toggle = (i) => setOpenIdx(prev => (prev === i ? null : i))

  useEffect(() => {
    const el = sectionRef.current; if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold: 0.06 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const vis    = RM || inView
  const fadeL  = { opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(20px)', transition: RM ? 'none' : `opacity 600ms ${EASE}, transform 600ms ${EASE}` }

  return (
    <section
      ref={sectionRef}
      id="faq"
      data-navbar="invert"
      style={{ background: '#050B12', padding: 'clamp(72px,9vw,100px) 24px' }}
    >
      <style>{CSS}</style>

      <div className="io-cfaq-wrap">

        {/* ════════════════════════════════
            LEFT — FAQ (original design)
        ════════════════════════════════ */}
        <div style={fadeL}>

          {/* Heading */}
          <div style={{ marginBottom: 'clamp(28px,4vw,40px)' }}>
            <p style={eyebrow}>Frequently Asked Questions</p>
            <h2 style={{
              fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(1.7rem,3.6vw,2.45rem)',
              letterSpacing: '-0.035em', lineHeight: 1.07,
              color: '#F4F1EA', margin: '0 0 14px',
            }}>
              Questions before we<br />get started?
            </h2>
            <p style={{
              fontFamily: '"Manrope", system-ui, sans-serif',
              fontSize: 'clamp(0.865rem,1.35vw,0.96rem)',
              lineHeight: 1.74, margin: 0,
              color: 'rgba(244,241,234,0.48)',
            }}>
              Everything you need to know about working with us.
            </p>
          </div>

          {/* Accordion — exact original structure */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {FAQS.map((faq, i) => {
              const isOpen = openIdx === i
              return (
                <div key={i}>
                  {/* [Avatar] [Question button] */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: AVATAR_GAP }}>
                    <Avatar />
                    <button
                      id={`io-cfaq-q-${i}`}
                      className="io-faqn-qbtn"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={`io-cfaq-a-${i}`}
                    >
                      <span style={{
                        flex: 1,
                        fontFamily: '"Manrope", system-ui, sans-serif',
                        fontSize: 'clamp(0.875rem,1.35vw,0.96rem)',
                        fontWeight: isOpen ? 700 : 500,
                        lineHeight: 1.4,
                        color: '#09131F',
                      }}>
                        {faq.question}
                      </span>
                      <ToggleIcon open={isOpen} reduceMotion={reduceMotion} />
                    </button>
                  </div>

                  {/* Answer — exact original expand/collapse */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height:  { duration: reduceMotion ? 0 : 0.34, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: reduceMotion ? 0 : 0.22, ease: 'easeOut' },
                        }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div
                          id={`io-cfaq-a-${i}`}
                          role="region"
                          aria-labelledby={`io-cfaq-q-${i}`}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: AVATAR_GAP,
                            paddingTop: 10,
                            paddingLeft: AVATAR_W + AVATAR_GAP,
                          }}
                        >
                          <div className="io-faqn-apanel">
                            <p style={{
                              fontFamily: '"Manrope", system-ui, sans-serif',
                              fontSize: 'clamp(0.855rem,1.25vw,0.91rem)',
                              lineHeight: 1.68,
                              color: '#1A2736',
                              margin: 0,
                            }}>
                              {faq.answer}
                            </p>
                          </div>
                          <Avatar />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

        </div>


      </div>
    </section>
  )
}
