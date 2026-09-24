import { useState } from 'react'
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
  /* Question bar button */
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
  .io-faqn-qbtn:hover {
    background: #F0EDE5;
  }
  .io-faqn-qbtn:focus-visible {
    outline: 2px solid rgba(201,162,74,0.65);
    outline-offset: 2px;
    border-radius: 14px;
  }

  /* Answer panel */
  .io-faqn-apanel {
    flex: 1;
    background: #F7F4EC;
    border-radius: 14px;
    border: 1px solid rgba(9,19,31,0.09);
    padding: 16px 20px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
    box-sizing: border-box;
  }

  /* Avatar circle */
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

  /* Mobile */
  @media (max-width: 600px) {
    .io-faqn-qbtn   { min-height: 54px; padding: 12px 14px; border-radius: 12px; gap: 10px; }
    .io-faqn-apanel { padding: 14px 16px; border-radius: 12px; }
    .io-faqn-avatar { width: 36px; height: 36px; padding: 7px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .io-faqn-qbtn { transition: none; }
  }
`

// ── Avatar: IronOak tree emblem ───────────────────────────────────────────────
const Avatar = () => (
  <div className="io-faqn-avatar" aria-hidden="true">
    <div style={{ width: '20px' }}>
      <LogoMark />
    </div>
  </div>
)

// ── Plus → × rotation icon ────────────────────────────────────────────────────
const ToggleIcon = ({ open, reduceMotion }) => (
  <motion.span
    animate={{ rotate: open ? 45 : 0 }}
    transition={{ duration: reduceMotion ? 0 : 0.22, ease: 'easeOut' }}
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: 26, height: 26,
      borderRadius: '50%',
      background: open ? 'rgba(201,162,74,0.12)' : 'rgba(9,19,31,0.07)',
      border: `1.5px solid ${open ? 'rgba(201,162,74,0.38)' : 'rgba(9,19,31,0.12)'}`,
      fontSize: '1rem',
      lineHeight: 1,
      color: open ? '#C9A24A' : '#4A5568',
      transition: 'background 200ms ease, border-color 200ms ease, color 200ms ease',
    }}
    aria-hidden="true"
  >
    +
  </motion.span>
)

// ── Component ─────────────────────────────────────────────────────────────────
const AVATAR_W = 42   // matches .io-faqn-avatar desktop width
const AVATAR_GAP = 12 // gap between avatar and question bar

export default function FAQSection() {
  const [openIdx,    setOpenIdx]    = useState(null)
  const reduceMotion                = useReducedMotion()

  const toggle = (i) => setOpenIdx(prev => prev === i ? null : i)

  return (
    <section style={{
      background: '#050B12',
      padding: 'clamp(80px,10vw,110px) 24px',
    }}>
      <style>{CSS}</style>

      {/* ── Section heading ── */}
      <div style={{
        maxWidth: 600, margin: '0 auto',
        textAlign: 'center',
        marginBottom: 'clamp(44px,6vw,60px)',
      }}>
        <p style={{
          fontFamily: '"Manrope", system-ui, sans-serif',
          fontSize: '0.62rem', fontWeight: 700,
          letterSpacing: '0.30em', textTransform: 'uppercase',
          color: '#C9A24A', margin: '0 0 14px',
        }}>
          Frequently Asked Questions
        </p>
        <h2 style={{
          fontFamily: '"Inter Tight", Inter, Arial, sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(1.85rem, 4vw, 2.8rem)',
          letterSpacing: '-0.035em', lineHeight: 1.07,
          color: '#F4F1EA', margin: '0 0 16px',
        }}>
          Questions before we get started?
        </h2>
        <p style={{
          fontFamily: '"Manrope", system-ui, sans-serif',
          fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
          lineHeight: 1.72, margin: 0,
          color: 'rgba(244,241,234,0.50)',
        }}>
          Everything you need to know about working with us.
        </p>
      </div>

      {/* ── Accordion ── */}
      <div style={{
        maxWidth: 820, margin: '0 auto',
        display: 'flex', flexDirection: 'column', gap: 16,
      }}>
        {FAQS.map((faq, i) => {
          const isOpen = openIdx === i

          return (
            <div key={i}>
              {/* Question row: [Avatar] [Question bar button] */}
              <div style={{ display: 'flex', alignItems: 'center', gap: AVATAR_GAP }}>
                <Avatar />
                <button
                  id={`io-faqn-q-${i}`}
                  className="io-faqn-qbtn"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`io-faqn-a-${i}`}
                >
                  <span style={{
                    flex: 1,
                    fontFamily: '"Manrope", system-ui, sans-serif',
                    fontSize: 'clamp(0.875rem, 1.4vw, 0.97rem)',
                    fontWeight: isOpen ? 700 : 500,
                    lineHeight: 1.4,
                    color: '#09131F',
                    transition: 'font-weight 0ms',
                  }}>
                    {faq.question}
                  </span>
                  <ToggleIcon open={isOpen} reduceMotion={reduceMotion} />
                </button>
              </div>

              {/* Answer row: [offset spacer] [Answer panel] [Avatar] */}
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
                      id={`io-faqn-a-${i}`}
                      role="region"
                      aria-labelledby={`io-faqn-q-${i}`}
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
                          fontSize: 'clamp(0.855rem, 1.3vw, 0.92rem)',
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
    </section>
  )
}
