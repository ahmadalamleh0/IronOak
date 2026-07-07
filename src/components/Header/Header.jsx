import { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoMark from '../Logo/LogoMark.jsx'

const SCOPED_CSS = `
  @keyframes ironhawkNavIn {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(-16px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  @keyframes ironhawkDropIn {
    from {
      opacity: 0;
      transform: translateX(-50%) scaleY(0.94) translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) scaleY(1) translateY(0);
    }
  }

  /* ── Pill ─────────────────────────────────────────────────── */
  .ironhawkPillNav {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 50;
    width: calc(100% - 40px);
    max-width: 940px;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 0 8px 0 22px;
    height: 58px;
    border-radius: 999px;
    background: rgba(10, 13, 18, 0.84);
    backdrop-filter: blur(22px) saturate(1.5);
    -webkit-backdrop-filter: blur(22px) saturate(1.5);
    border: 1px solid rgba(255, 255, 255, 0.075);
    box-shadow:
      0 4px 36px rgba(0, 0, 0, 0.42),
      0 1px 6px rgba(0, 0, 0, 0.26),
      inset 0 1px 0 rgba(255, 255, 255, 0.04);
    animation: ironhawkNavIn 620ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  /* ── Logo ─────────────────────────────────────────────────── */
  .ironhawkNavLogo {
    display: flex;
    align-items: center;
    gap: 11px;
    text-decoration: none;
    flex-shrink: 0;
  }

  .ironhawkNavWordmark {
    display: flex;
    flex-direction: column;
    line-height: 1;
  }

  .ironhawkNavBrand {
    font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
    font-size: 1.15rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    background: linear-gradient(180deg, #f6e8c4 0%, #d9b873 45%, #a9802f 60%, #ecd49b 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 1px 0 rgba(255, 245, 214, 0.2)) drop-shadow(0 2px 3px rgba(0, 0, 0, 0.5));
  }

  .ironhawkNavSub {
    font-size: 0.48rem;
    letter-spacing: 0.36em;
    text-transform: uppercase;
    color: rgba(217, 184, 115, 0.6);
    font-weight: 600;
    margin-top: 4px;
    font-family: "Manrope", "Inter", system-ui, sans-serif;
  }

  /* ── Center links ─────────────────────────────────────────── */
  .ironhawkNavLinks {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
    justify-content: center;
  }

  .ironhawkNavLink {
    padding: 7px 15px;
    border-radius: 999px;
    font-family: "Manrope", "Inter", system-ui, sans-serif;
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    white-space: nowrap;
    transition: background 180ms ease, color 180ms ease;
  }

  .ironhawkNavLink:hover {
    color: #D8B866;
    background: rgba(255, 255, 255, 0.05);
  }

  /* ── CTA ──────────────────────────────────────────────────── */
  .ironhawkNavCta {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    padding: 0 22px;
    height: 42px;
    border-radius: 999px;
    background: linear-gradient(to bottom, #dbb96a, #a9802f);
    border: 1px solid rgba(201, 162, 74, 0.45);
    font-family: "Manrope", "Inter", system-ui, sans-serif;
    font-size: 0.69rem;
    font-weight: 700;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: #07111D;
    text-decoration: none;
    white-space: nowrap;
    box-shadow: 0 2px 14px rgba(169, 128, 47, 0.38);
    transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 200ms ease;
  }

  .ironhawkNavCta:hover {
    transform: scale(1.035);
    box-shadow: 0 4px 22px rgba(169, 128, 47, 0.54);
  }

  /* ── Hamburger (mobile only) ─────────────────────────────── */
  .ironhawkNavHamburger {
    display: none;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    flex-shrink: 0;
    transition: background 160ms ease, border-color 160ms ease;
    -webkit-tap-highlight-color: transparent;
  }

  .ironhawkNavHamburger:hover {
    background: rgba(255, 255, 255, 0.09);
    border-color: rgba(255, 255, 255, 0.22);
  }

  /* ── Mobile dropdown ─────────────────────────────────────── */
  .ironhawkNavOverlay {
    position: fixed;
    inset: 0;
    z-index: 48;
  }

  .ironhawkNavMobileMenu {
    position: fixed;
    top: 82px;
    left: 50%;
    width: calc(100% - 28px);
    max-width: 420px;
    z-index: 49;
    border-radius: 20px;
    background: rgba(10, 13, 18, 0.97);
    backdrop-filter: blur(24px) saturate(1.5);
    -webkit-backdrop-filter: blur(24px) saturate(1.5);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow:
      0 8px 48px rgba(0, 0, 0, 0.6),
      0 2px 10px rgba(0, 0, 0, 0.3);
    padding: 10px;
    transform-origin: top center;
    animation: ironhawkDropIn 260ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .ironhawkNavMobileLink {
    display: flex;
    align-items: center;
    padding: 13px 18px;
    border-radius: 12px;
    font-family: "Manrope", "Inter", system-ui, sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.01em;
    color: rgba(255, 255, 255, 0.78);
    text-decoration: none;
    transition: background 160ms ease, color 160ms ease;
  }

  .ironhawkNavMobileLink:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #D8B866;
  }

  .ironhawkNavMobileDivider {
    height: 1px;
    background: rgba(255, 255, 255, 0.07);
    margin: 6px 4px;
  }

  .ironhawkNavMobileCta {
    display: block;
    margin-top: 2px;
    padding: 14px 18px;
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(201, 162, 74, 0.14), rgba(201, 162, 74, 0.07));
    border: 1px solid rgba(201, 162, 74, 0.2);
    font-family: "Manrope", "Inter", system-ui, sans-serif;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #D8B866;
    text-decoration: none;
    text-align: center;
    transition: background 160ms ease;
  }

  .ironhawkNavMobileCta:hover {
    background: linear-gradient(135deg, rgba(201, 162, 74, 0.2), rgba(201, 162, 74, 0.11));
  }

  /* ── Responsive ──────────────────────────────────────────── */
  @media (max-width: 680px) {
    .ironhawkPillNav {
      top: 14px;
      width: calc(100% - 28px);
      height: 52px;
      padding: 0 8px 0 16px;
      gap: 10px;
    }

    .ironhawkNavLinks {
      display: none;
    }

    .ironhawkNavCta {
      display: none;
    }

    .ironhawkNavHamburger {
      display: flex;
    }

    .ironhawkNavMobileMenu {
      top: 76px;
    }
  }

  /* hide subtext at mid-width to avoid crowding */
  @media (max-width: 820px) and (min-width: 681px) {
    .ironhawkNavSub {
      display: none;
    }
  }
`

const NAV_LINKS = [
  { label: 'Services',    href: '/#services'    },
  { label: 'Why IronOak', href: '/#why-ironoak' },
  { label: 'Contact',     href: '/#contact'     },
]

const Header = ({ ready = false }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  if (!ready) return null

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <style>{SCOPED_CSS}</style>

      <nav aria-label="Main navigation">
        {/* ── Pill bar ── */}
        <div className="ironhawkPillNav">
          {/* Logo */}
          <Link to="/" className="ironhawkNavLogo" onClick={closeMenu}>
            <LogoMark className="h-auto w-8" />
            <div className="ironhawkNavWordmark">
              <span className="ironhawkNavBrand">IronOak</span>
              <span className="ironhawkNavSub">Property Services Inc.</span>
            </div>
          </Link>

          {/* Desktop center links */}
          <div className="ironhawkNavLinks">
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={label} to={href} className="ironhawkNavLink">
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link to="/#contact" className="ironhawkNavCta">
            Get a Quote
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="ironhawkNavHamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              <svg viewBox="0 0 18 18" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
                <path d="M4 4l10 10M14 4L4 14" />
              </svg>
            ) : (
              <svg viewBox="0 0 18 14" width="17" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="0" y1="1" x2="18" y2="1" />
                <line x1="0" y1="7" x2="18" y2="7" />
                <line x1="0" y1="13" x2="18" y2="13" />
              </svg>
            )}
          </button>
        </div>

        {/* ── Mobile dropdown ── */}
        {menuOpen && (
          <>
            {/* click-outside to dismiss */}
            <div className="ironhawkNavOverlay" onClick={closeMenu} aria-hidden="true" />

            <div className="ironhawkNavMobileMenu" role="menu">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  to={href}
                  className="ironhawkNavMobileLink"
                  role="menuitem"
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              ))}
              <div className="ironhawkNavMobileDivider" />
              <Link
                to="/#contact"
                className="ironhawkNavMobileCta"
                role="menuitem"
                onClick={closeMenu}
              >
                Get a Quote
              </Link>
            </div>
          </>
        )}
      </nav>
    </>
  )
}

export default Header
