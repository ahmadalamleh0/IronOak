import { useState } from 'react'
import LogoMark from '../Logo/LogoMark.jsx'

const textShadow = {
  textShadow: '0 2px 14px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.9)',
}

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why IronOak', href: '#why-ironoak' },
  { label: 'Contact', href: '#contact' },
]

const Header = ({ ready = false }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const fadeStyle = {
    opacity: ready ? undefined : 0,
    animation: ready ? 'fade-up 0.9s cubic-bezier(0.16,1,0.3,1) forwards' : 'none',
  }

  const barActive = menuOpen
    ? 'border-white/10 bg-ink-950/80 backdrop-blur-md'
    : 'border-white/10 bg-ink-950/65 backdrop-blur-md sm:border-transparent sm:bg-ink-950/0 sm:backdrop-blur-none'

  return (
    <header className="group absolute inset-x-0 top-0 z-20">
      {/* always-on subtle bar on mobile (no hover there); transparent at rest on desktop,
          becoming a dark navy glass bar on hover or while the menu is open */}
      <div
        className={`absolute inset-0 h-20 border-b transition-all duration-300 sm:h-24 ${barActive} sm:group-hover:border-white/10 sm:group-hover:bg-ink-950/80 sm:group-hover:backdrop-blur-md`}
      />

      <div
        style={{ ...fadeStyle, ...textShadow }}
        className="relative mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-3 px-6 sm:h-24 sm:px-10 lg:px-16"
      >
        <a href="#" className="flex items-center gap-3">
          <LogoMark className="h-auto w-9 sm:w-11" />
          <div className="flex flex-col leading-tight">
            <span className="text-gold-engraved font-serif text-lg font-bold tracking-wide sm:text-xl">
              IronOak
            </span>
            <span className="text-[0.55rem] tracking-[0.35em] text-gold-200 sm:text-[0.6rem]">
              PROPERTY SERVICES INC.
            </span>
          </div>
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          className="flex items-center gap-3 text-white"
        >
          <span className="hidden text-xs font-semibold uppercase tracking-[0.3em] sm:inline">
            Menu
          </span>
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition-colors duration-300 hover:border-gold-300/60">
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-4 bg-current transition-all duration-300 ${
                  menuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : ''
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-4 bg-current transition-all duration-300 ${
                  menuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : ''
                }`}
              />
            </span>
          </span>
        </button>
      </div>

      {/* dropdown nav panel */}
      <div
        className={`absolute right-6 top-20 z-30 w-56 origin-top-right rounded-md border border-white/10 bg-ink-950/90 p-2 shadow-2xl backdrop-blur-lg transition-all duration-300 sm:right-10 sm:top-24 lg:right-16 ${
          menuOpen
            ? 'visible translate-y-0 scale-100 opacity-100'
            : 'invisible -translate-y-2 scale-95 opacity-0'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="block rounded-sm px-4 py-2.5 text-sm text-white/85 transition-colors duration-200 hover:bg-white/5 hover:text-gold-200"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-1 block rounded-sm bg-gradient-to-b from-gold-200 to-gold-500 px-4 py-2.5 text-center text-sm font-semibold text-ink-950"
        >
          Request a Quote
        </a>
      </div>
    </header>
  )
}

export default Header
