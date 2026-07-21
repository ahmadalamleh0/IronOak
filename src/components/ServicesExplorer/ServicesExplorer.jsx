import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ILLUSTRATION_COMPONENTS, SVG_ANIM_CSS } from '../ServicesIllustrations/index.jsx'

gsap.registerPlugin(ScrollTrigger)

const N          = 7
const SCROLL_PER = 680   // px per service; (N-1) × 680 = 4080px total pin

/* ─────────────────────────────────────────────────────────────────
   Service data
───────────────────────────────────────────────────────────────── */
const SERVICES = [
  {
    id:          'property-maintenance-repairs',
    num:         '01',
    category:    'Property Maintenance',
    title:       'Property Maintenance & Repairs',
    slug:        '/services/property-maintenance-repairs',
    description: 'Reliable repairs, preventative maintenance, and ongoing property support to keep residential, commercial, and condominium spaces performing at their best.',
  },
  {
    id:          'renovations-remodeling',
    num:         '02',
    category:    'Renovations',
    title:       'Renovations & Remodeling',
    slug:        '/services/renovations-remodeling',
    description: 'Thoughtfully managed renovation work for suites, guest rooms, interior upgrades, and property improvement projects of every scale.',
  },
  {
    id:          'interior-finishing',
    num:         '03',
    category:    'Interior Finishing',
    title:       'Interior Finishing',
    slug:        '/services/interior-finishing',
    description: 'Professional finishing work for flooring, carpet replacement, wallcoverings, painting, and complete interior refreshes.',
  },
  {
    id:          'capital-project-management',
    num:         '04',
    category:    'Capital Projects',
    title:       'Capital Projects & Project Management',
    slug:        '/services/capital-project-management',
    description: 'Structured planning, multi-trade coordination, and dependable delivery for commercial, condominium, hospitality, and multi-site property improvements.',
  },
  {
    id:          'installations-property-systems',
    num:         '05',
    category:    'Property Systems',
    title:       'Installations & Property Systems',
    slug:        '/services/installations-property-systems',
    description: 'Clean, dependable installation of CCTV systems, retrofit lighting, fixtures, equipment, and essential property upgrades.',
  },
  {
    id:          'exterior-outdoor-improvements',
    num:         '06',
    category:    'Exterior Improvements',
    title:       'Exterior & Outdoor Improvements',
    slug:        '/services/exterior-outdoor-improvements',
    description: 'Exterior upgrades and outdoor property improvements designed to improve function, appearance, and long-term value.',
  },
  {
    id:          'specialty-custom-projects',
    num:         '07',
    category:    'Custom Projects',
    title:       'Specialty & Custom Projects',
    slug:        '/services/specialty-custom-projects',
    description: 'Custom-scoped solutions for unique commercial, condominium, multi-site, and operational property requirements.',
  },
]

/* SVG illustrations sourced from ServicesIllustrations — swap components there for final artwork */
const ILLUSTRATIONS = ILLUSTRATION_COMPONENTS.map((Comp, i) => <Comp key={i} />)

const DotGrid = ({ id }) => (
  <>
    <defs>
      <pattern id={id} width="32" height="32" patternUnits="userSpaceOnUse">
        <circle cx="16" cy="16" r="1.1" fill="rgba(244,241,234,0.07)" />
      </pattern>
    </defs>
    <rect width="480" height="360" fill={`url(#${id})`} />
  </>
)

/* 01 — Property Maintenance & Repairs */
const IllustrationMaintenance = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg"
       style={{ width: '100%', height: 'auto', display: 'block' }} aria-hidden="true">
    <DotGrid id="io-g1" />
    <rect x="120" y="180" width="220" height="145" rx="2"
          stroke="rgba(244,241,234,0.18)" strokeWidth="1.3"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.05s' }} />
    <polyline points="100,182 230,72 360,182"
              stroke="rgba(244,241,234,0.22)" strokeWidth="1.5"
              className="io-svc-svg-secondary" style={{ animationDelay: '0.10s' }} />
    <rect x="200" y="255" width="60" height="70" rx="2"
          stroke="rgba(244,241,234,0.14)" strokeWidth="1.1"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.15s' }} />
    <rect x="138" y="202" width="46" height="38" rx="1"
          stroke="rgba(244,241,234,0.13)" strokeWidth="1"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.18s' }} />
    <rect x="276" y="202" width="46" height="38" rx="1"
          stroke="rgba(244,241,234,0.13)" strokeWidth="1"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.20s' }} />
    {/* Hammer — gold */}
    <line x1="388" y1="310" x2="408" y2="248"
          stroke="#C9A24A" strokeWidth="5" strokeLinecap="round"
          className="io-svc-svg-primary" style={{ animationDelay: '0.40s' }} />
    <rect x="396" y="226" width="50" height="26" rx="5"
          stroke="#C9A24A" strokeWidth="1.8"
          className="io-svc-svg-primary" style={{ animationDelay: '0.48s' }} />
    <path d="M 396,226 L 386,218" stroke="#C9A24A" strokeWidth="1.5" strokeLinecap="round"
          className="io-svc-svg-primary" style={{ animationDelay: '0.55s' }} />
    {/* Gear — muted gold */}
    <circle cx="112" cy="256" r="22"
            stroke="rgba(201,162,74,0.40)" strokeWidth="1.2"
            className="io-svc-svg-secondary" style={{ animationDelay: '0.60s' }} />
    <circle cx="112" cy="256" r="9"
            stroke="rgba(201,162,74,0.40)" strokeWidth="1.2"
            className="io-svc-svg-secondary" style={{ animationDelay: '0.65s' }} />
    {[0,45,90,135,180,225,270,315].map((deg, i) => {
      const r = 22, tr = 28, a = (deg * Math.PI) / 180
      return <line key={i}
               x1={112 + r * Math.cos(a)} y1={256 + r * Math.sin(a)}
               x2={112 + tr * Math.cos(a)} y2={256 + tr * Math.sin(a)}
               stroke="rgba(201,162,74,0.30)" strokeWidth="3.5" strokeLinecap="round"
               className="io-svc-svg-secondary" style={{ animationDelay: `${0.65 + i * 0.03}s` }} />
    })}
  </svg>
)

/* 02 — Renovations & Remodeling */
const IllustrationRenovations = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg"
       style={{ width: '100%', height: 'auto', display: 'block' }} aria-hidden="true">
    <DotGrid id="io-g2" />
    <path d="M 60,310 L 240,200 L 420,310 Z"
          stroke="rgba(244,241,234,0.15)" strokeWidth="1.2"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.05s' }} />
    <path d="M 60,310 L 60,60 L 240,200"
          stroke="rgba(244,241,234,0.18)" strokeWidth="1.3"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.10s' }} />
    <path d="M 420,310 L 420,60 L 240,200"
          stroke="rgba(244,241,234,0.18)" strokeWidth="1.3"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.13s' }} />
    <path d="M 60,60 L 240,50 L 420,60"
          stroke="rgba(244,241,234,0.12)" strokeWidth="1"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.16s' }} />
    <rect x="298" y="98" width="88" height="72" rx="2"
          stroke="rgba(244,241,234,0.16)" strokeWidth="1.1"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.20s' }} />
    <line x1="342" y1="98" x2="342" y2="170"
          stroke="rgba(244,241,234,0.10)" strokeWidth="1"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.22s' }} />
    {/* Paint roller — gold */}
    <rect x="84" y="198" width="58" height="18" rx="4"
          stroke="#C9A24A" strokeWidth="1.8"
          className="io-svc-svg-primary" style={{ animationDelay: '0.38s' }} />
    <rect x="88" y="192" width="50" height="10" rx="4"
          stroke="#C9A24A" strokeWidth="1.6"
          className="io-svc-svg-primary" style={{ animationDelay: '0.44s' }} />
    <line x1="142" y1="194" x2="164" y2="148"
          stroke="#C9A24A" strokeWidth="2" strokeLinecap="round"
          className="io-svc-svg-primary" style={{ animationDelay: '0.50s' }} />
    <rect x="64" y="124" width="152" height="60" rx="2"
          stroke="rgba(201,162,74,0.30)" strokeWidth="1" strokeDasharray="6 3"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.55s' }} />
    {[136, 155, 174].map((y, i) => (
      <line key={y} x1="68" y1={y} x2="210" y2={y}
            stroke="rgba(201,162,74,0.22)" strokeWidth="1"
            className="io-svc-svg-secondary" style={{ animationDelay: `${0.60 + i * 0.03}s` }} />
    ))}
  </svg>
)

/* 03 — Capital Projects & Project Management */
const IllustrationConstruction = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg"
       style={{ width: '100%', height: 'auto', display: 'block' }} aria-hidden="true">
    <defs>
      <pattern id="io-g3a" width="32" height="32" patternUnits="userSpaceOnUse">
        <circle cx="16" cy="16" r="1.1" fill="rgba(244,241,234,0.07)" />
      </pattern>
      <pattern id="io-g3b" width="48" height="48" patternUnits="userSpaceOnUse">
        <path d="M 48,0 L 0,0 L 0,48" stroke="rgba(201,162,74,0.07)" strokeWidth="0.6" fill="none" />
      </pattern>
    </defs>
    <rect width="480" height="360" fill="url(#io-g3a)" />
    <rect width="480" height="360" fill="url(#io-g3b)" />
    <line x1="40" y1="318" x2="440" y2="318"
          stroke="rgba(244,241,234,0.20)" strokeWidth="1.5"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.05s' }} />
    {/* Building frame — gold */}
    <rect x="120" y="298" width="240" height="22" rx="2"
          stroke="#C9A24A" strokeWidth="1.6"
          className="io-svc-svg-primary" style={{ animationDelay: '0.20s' }} />
    {[148, 240, 332].map((x, i) => (
      <line key={x} x1={x} y1="298" x2={x} y2="88"
            stroke="#C9A24A" strokeWidth="2" strokeLinecap="round"
            className="io-svc-svg-primary" style={{ animationDelay: `${0.28 + i * 0.04}s` }} />
    ))}
    {[298, 232, 166, 100].map((y, i) => (
      <line key={y} x1="148" y1={y} x2="332" y2={y}
            stroke="#C9A24A" strokeWidth="1.4"
            className="io-svc-svg-primary" style={{ animationDelay: `${0.40 + i * 0.08}s` }} />
    ))}
    {/* Measurement bracket */}
    <path d="M 358,88 L 370,88 L 370,298 L 358,298"
          stroke="rgba(201,162,74,0.55)" strokeWidth="1.2" strokeLinecap="round"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.72s' }} />
    {[88, 166, 232, 298].map((y, i) => (
      <line key={y} x1="366" y1={y} x2="374" y2={y}
            stroke="rgba(201,162,74,0.55)" strokeWidth="1.2"
            className="io-svc-svg-secondary" style={{ animationDelay: `${0.75 + i * 0.04}s` }} />
    ))}
    {/* Clipboard */}
    <rect x="48" y="240" width="56" height="70" rx="3"
          stroke="rgba(244,241,234,0.16)" strokeWidth="1"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.80s' }} />
    {[258, 270, 282].map((y, i) => (
      <line key={y} x1="56" y1={y} x2={y === 270 ? 84 : y === 282 ? 90 : 96} y2={y}
            stroke="rgba(244,241,234,0.10)" strokeWidth="1"
            className="io-svc-svg-secondary" style={{ animationDelay: `${0.82 + i * 0.02}s` }} />
    ))}
  </svg>
)

/* 04 — Interior Finishing */
const IllustrationInterior = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg"
       style={{ width: '100%', height: 'auto', display: 'block' }} aria-hidden="true">
    <DotGrid id="io-g4" />
    <path d="M 50,320 L 240,180 L 430,320"
          stroke="rgba(244,241,234,0.14)" strokeWidth="1.2"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.05s' }} />
    <path d="M 50,320 L 50,40 L 240,180"
          stroke="rgba(244,241,234,0.16)" strokeWidth="1.2"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.08s' }} />
    <path d="M 430,320 L 430,40 L 240,180"
          stroke="rgba(244,241,234,0.16)" strokeWidth="1.2"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.10s' }} />
    <path d="M 50,308 L 240,194" stroke="rgba(244,241,234,0.18)" strokeWidth="2" strokeLinecap="round"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.14s' }} />
    <path d="M 430,308 L 240,194" stroke="rgba(244,241,234,0.18)" strokeWidth="2" strokeLinecap="round"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.16s' }} />
    {/* Paint roller — gold */}
    <line x1="240" y1="138" x2="240" y2="80"
          stroke="#C9A24A" strokeWidth="2.5" strokeLinecap="round"
          className="io-svc-svg-primary" style={{ animationDelay: '0.35s' }} />
    <path d="M 240,138 L 270,148" stroke="#C9A24A" strokeWidth="2" strokeLinecap="round"
          className="io-svc-svg-primary" style={{ animationDelay: '0.40s' }} />
    <line x1="270" y1="136" x2="270" y2="160"
          stroke="#C9A24A" strokeWidth="1.6" strokeLinecap="round"
          className="io-svc-svg-primary" style={{ animationDelay: '0.44s' }} />
    <rect x="260" y="140" width="58" height="16" rx="8"
          stroke="#C9A24A" strokeWidth="1.8"
          className="io-svc-svg-primary" style={{ animationDelay: '0.48s' }} />
    <path d="M 160,148 C 200,136 280,136 320,148"
          stroke="rgba(201,162,74,0.28)" strokeWidth="10" strokeLinecap="round"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.52s' }} />
    <path d="M 148,162 C 194,150 286,150 332,162"
          stroke="rgba(201,162,74,0.18)" strokeWidth="8" strokeLinecap="round"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.56s' }} />
    {/* Floor samples */}
    {[90, 118, 146].map((x, i) => (
      <rect key={x} x={x} y="286" width="22" height="22" rx="2"
            stroke={`rgba(201,162,74,${0.32 - i * 0.08})`} strokeWidth="1"
            className="io-svc-svg-secondary" style={{ animationDelay: `${0.70 + i * 0.04}s` }} />
    ))}
  </svg>
)

/* 05 — Installations & Property Systems */
const IllustrationInstallations = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg"
       style={{ width: '100%', height: 'auto', display: 'block' }} aria-hidden="true">
    <DotGrid id="io-g5" />
    <rect x="240" y="60" width="180" height="264" rx="3"
          stroke="rgba(244,241,234,0.16)" strokeWidth="1.3"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.05s' }} />
    {[84, 132, 180, 228, 276].map((y, row) =>
      [258, 300, 342, 384].map((x, col) => (
        <rect key={`${row}-${col}`} x={x} y={y} width="24" height="28" rx="2"
              stroke="rgba(244,241,234,0.10)" strokeWidth="0.8"
              className="io-svc-svg-secondary"
              style={{ animationDelay: `${0.08 + (row * 4 + col) * 0.02}s` }} />
      ))
    )}
    <line x1="60" y1="108" x2="250" y2="108"
          stroke="rgba(244,241,234,0.14)" strokeWidth="1"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.15s' }} />
    {/* Camera — gold */}
    <path d="M 130,108 L 130,126" stroke="#C9A24A" strokeWidth="2" strokeLinecap="round"
          className="io-svc-svg-primary" style={{ animationDelay: '0.35s' }} />
    <rect x="104" y="126" width="54" height="26" rx="6"
          stroke="#C9A24A" strokeWidth="1.8"
          className="io-svc-svg-primary" style={{ animationDelay: '0.42s' }} />
    <circle cx="168" cy="139" r="10" stroke="#C9A24A" strokeWidth="1.6"
            className="io-svc-svg-primary" style={{ animationDelay: '0.50s' }} />
    <circle cx="168" cy="139" r="4" stroke="#C9A24A" strokeWidth="1.2"
            className="io-svc-svg-primary" style={{ animationDelay: '0.54s' }} />
    <line x1="104" y1="139" x2="88" y2="139" stroke="#C9A24A" strokeWidth="1.5" strokeLinecap="round"
          className="io-svc-svg-primary" style={{ animationDelay: '0.58s' }} />
    {/* Detection arc */}
    {[-30, -15, 0, 15, 30].map((angle, i) => {
      const rad = (angle * Math.PI) / 180
      return <line key={i} x1="178" y1="139"
               x2={178 + 130 * Math.cos(rad)} y2={139 + 130 * Math.sin(rad)}
               stroke={i === 2 ? 'rgba(201,162,74,0.55)' : 'rgba(201,162,74,0.22)'}
               strokeWidth={i === 2 ? '1.2' : '0.8'} strokeLinecap="round"
               className="io-svc-svg-secondary" style={{ animationDelay: `${0.62 + i * 0.06}s` }} />
    })}
    <path d="M 178,72 A 67,67 0 0,1 178,206"
          stroke="rgba(201,162,74,0.22)" strokeWidth="1"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.90s' }} />
    {/* Light fixture */}
    <circle cx="80" cy="290" r="20" stroke="rgba(201,162,74,0.35)" strokeWidth="1.2"
            className="io-svc-svg-secondary" style={{ animationDelay: '0.95s' }} />
    {[0,45,90,135,180,225,270,315].map((deg, i) => {
      const rad = (deg * Math.PI) / 180
      return <line key={i}
               x1={80 + 22 * Math.cos(rad)} y1={290 + 22 * Math.sin(rad)}
               x2={80 + 32 * Math.cos(rad)} y2={290 + 32 * Math.sin(rad)}
               stroke="rgba(201,162,74,0.22)" strokeWidth="1.2" strokeLinecap="round"
               className="io-svc-svg-secondary" style={{ animationDelay: `${1.0 + i * 0.03}s` }} />
    })}
  </svg>
)

/* 06 — Exterior & Outdoor Improvements */
const IllustrationExterior = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg"
       style={{ width: '100%', height: 'auto', display: 'block' }} aria-hidden="true">
    <DotGrid id="io-g6" />
    <line x1="40" y1="300" x2="440" y2="300"
          stroke="rgba(244,241,234,0.20)" strokeWidth="1.5"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.05s' }} />
    {/* Building — gold */}
    <rect x="120" y="72" width="240" height="230" rx="3"
          stroke="#C9A24A" strokeWidth="1.8"
          className="io-svc-svg-primary" style={{ animationDelay: '0.18s' }} />
    <rect x="116" y="66" width="248" height="12" rx="2"
          stroke="#C9A24A" strokeWidth="1.4"
          className="io-svc-svg-primary" style={{ animationDelay: '0.24s' }} />
    {[100, 148, 196, 244].map((y, row) =>
      [138, 192, 246, 300].map((x, col) => (
        <rect key={`${row}-${col}`} x={x} y={y} width="34" height="32" rx="2"
              stroke="rgba(201,162,74,0.38)" strokeWidth="1.2"
              className="io-svc-svg-secondary"
              style={{ animationDelay: `${0.28 + (row * 4 + col) * 0.025}s` }} />
      ))
    )}
    <rect x="210" y="248" width="60" height="54" rx="2"
          stroke="#C9A24A" strokeWidth="1.6"
          className="io-svc-svg-primary" style={{ animationDelay: '0.70s' }} />
    {[300, 306].map((y, i) => (
      <line key={y} x1={198 - i * 8} y1={y} x2={282 + i * 8} y2={y}
            stroke={`rgba(201,162,74,${0.50 - i * 0.15})`} strokeWidth="2"
            className="io-svc-svg-secondary" style={{ animationDelay: `${0.75 + i * 0.03}s` }} />
    ))}
    {/* Tree */}
    <line x1="406" y1="300" x2="406" y2="220"
          stroke="rgba(244,241,234,0.22)" strokeWidth="2" strokeLinecap="round"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.82s' }} />
    <circle cx="406" cy="200" r="28" stroke="rgba(244,241,234,0.18)" strokeWidth="1.2"
            className="io-svc-svg-secondary" style={{ animationDelay: '0.86s' }} />
    <circle cx="406" cy="185" r="18" stroke="rgba(244,241,234,0.14)" strokeWidth="1"
            className="io-svc-svg-secondary" style={{ animationDelay: '0.90s' }} />
    <path d="M 68,300 C 68,278 100,272 100,300"
          stroke="rgba(244,241,234,0.18)" strokeWidth="1.2"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.92s' }} />
  </svg>
)

/* 07 — Specialty & Custom Projects */
const IllustrationSpecialty = () => (
  <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg"
       style={{ width: '100%', height: 'auto', display: 'block' }} aria-hidden="true">
    <defs>
      <pattern id="io-g7a" width="32" height="32" patternUnits="userSpaceOnUse">
        <circle cx="16" cy="16" r="1.1" fill="rgba(244,241,234,0.07)" />
      </pattern>
      <pattern id="io-g7b" width="60" height="60" patternUnits="userSpaceOnUse">
        <path d="M 60,0 L 0,0 L 0,60" stroke="rgba(201,162,74,0.07)" strokeWidth="0.6" fill="none" />
      </pattern>
    </defs>
    <rect width="480" height="360" fill="url(#io-g7a)" />
    <rect width="480" height="360" fill="url(#io-g7b)" />
    <circle cx="240" cy="182" r="120" stroke="rgba(244,241,234,0.14)" strokeWidth="1"
            className="io-svc-svg-secondary" style={{ animationDelay: '0.05s' }} />
    <circle cx="240" cy="182" r="88" stroke="rgba(244,241,234,0.10)" strokeWidth="0.8"
            className="io-svc-svg-secondary" style={{ animationDelay: '0.08s' }} />
    {/* Compass arms — gold */}
    <line x1="240" y1="94" x2="240" y2="270" stroke="#C9A24A" strokeWidth="1.2"
          className="io-svc-svg-primary" style={{ animationDelay: '0.25s' }} />
    <line x1="152" y1="182" x2="328" y2="182" stroke="#C9A24A" strokeWidth="1.2"
          className="io-svc-svg-primary" style={{ animationDelay: '0.30s' }} />
    <line x1="178" y1="120" x2="302" y2="244"
          stroke="rgba(201,162,74,0.45)" strokeWidth="0.8"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.35s' }} />
    <line x1="302" y1="120" x2="178" y2="244"
          stroke="rgba(201,162,74,0.45)" strokeWidth="0.8"
          className="io-svc-svg-secondary" style={{ animationDelay: '0.38s' }} />
    {/* Compass points */}
    <polygon points="240,94 232,120 240,108 248,120"
             stroke="#C9A24A" strokeWidth="1.5" fill="rgba(201,162,74,0.18)"
             className="io-svc-svg-primary" style={{ animationDelay: '0.45s' }} />
    {[
      [[240,270],[232,244],[240,256],[248,244]],
      [[328,182],[302,174],[316,182],[302,190]],
      [[152,182],[178,174],[164,182],[178,190]],
    ].map((pts, i) => (
      <polygon key={i} points={pts.map(p => p.join(',')).join(' ')}
               stroke="#C9A24A" strokeWidth="1.5" fill="none"
               className="io-svc-svg-primary" style={{ animationDelay: `${0.50 + i * 0.04}s` }} />
    ))}
    <circle cx="240" cy="182" r="14" stroke="#C9A24A" strokeWidth="1.6"
            className="io-svc-svg-primary" style={{ animationDelay: '0.62s' }} />
    <circle cx="240" cy="182" r="4" stroke="#C9A24A" strokeWidth="1.2"
            className="io-svc-svg-primary" style={{ animationDelay: '0.66s' }} />
    {/* Degree ticks */}
    {Array.from({ length: 24 }).map((_, i) => {
      const a = (i * 15 * Math.PI) / 180
      const r1 = 88, r2 = i % 6 === 0 ? 100 : 94
      return <line key={i}
               x1={240 + r1 * Math.sin(a)} y1={182 - r1 * Math.cos(a)}
               x2={240 + r2 * Math.sin(a)} y2={182 - r2 * Math.cos(a)}
               stroke="rgba(201,162,74,0.30)" strokeWidth="1" strokeLinecap="round"
               className="io-svc-svg-secondary" style={{ animationDelay: `${0.70 + i * 0.015}s` }} />
    })}
    {/* Hexagon */}
    {Array.from({ length: 6 }).map((_, i) => {
      const a = ((i * 60 - 30) * Math.PI) / 180
      const b = (((i + 1) * 60 - 30) * Math.PI) / 180
      const r = 36, cx = 390, cy = 300
      return <line key={i}
               x1={cx + r * Math.cos(a)} y1={cy + r * Math.sin(a)}
               x2={cx + r * Math.cos(b)} y2={cy + r * Math.sin(b)}
               stroke="rgba(201,162,74,0.35)" strokeWidth="1.2"
               className="io-svc-svg-secondary" style={{ animationDelay: `${1.05 + i * 0.05}s` }} />
    })}
  </svg>
)

/* ─────────────────────────────────────────────────────────────────
   CSS — scoped to io-pin-* and io-mob-* prefixes
───────────────────────────────────────────────────────────────── */
const CSS = `
/* ── Desktop sticky section ───────────────────────────────────── */
.io-pin-section {
  background: #07111D;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

/* Persistent top label */
.io-pin-topbar {
  position: absolute;
  top: 0; left: 0; right: 0;
  padding: clamp(18px,2.2vh,28px) clamp(24px,5vw,80px);
  z-index: 3;
  pointer-events: none;
}
.io-pin-toplabel {
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.58rem; font-weight: 700;
  letter-spacing: 0.30em; text-transform: uppercase;
  color: rgba(201,162,74,0.55);
}

/* Two-column body */
.io-pin-body {
  flex: 1;
  display: flex;
  align-items: center;
  gap: clamp(40px, 5vw, 72px);
  padding:
    clamp(80px, 10vh, 112px)
    clamp(24px, 5vw, 80px)
    clamp(64px, 8vh, 88px);
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}

/* Left column: all panels stacked in same grid cell */
.io-pin-left {
  flex: 0 0 46%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  align-items: center;
}
.io-pin-panel {
  grid-column: 1;
  grid-row: 1;
  will-change: opacity, transform;
  pointer-events: none;    /* hidden panels: block all events */
  position: relative;
  z-index: 1;
}
/* Active panel: re-enable pointer events so CTA is clickable */
.io-pin-panel:not([aria-hidden]) {
  pointer-events: auto;
  z-index: 2;
}
/* CTA always clickable + above any stacking context */
.io-pin-cta-wrap {
  position: relative;
  z-index: 3;
}

/* Typography */
.io-pin-cat {
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.59rem; font-weight: 700;
  letter-spacing: 0.26em; text-transform: uppercase;
  color: rgba(201,162,74,0.72); margin: 0 0 18px;
}
.io-pin-title {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: clamp(2.5rem, 5.0vw, 4.8rem);
  font-weight: 900; letter-spacing: -0.04em; line-height: 0.96;
  color: #F4F1EA; margin: 0 0 24px;
}
.io-pin-desc {
  font-family: "Manrope", system-ui, sans-serif;
  font-size: clamp(0.875rem, 1.3vw, 0.975rem);
  line-height: 1.74; color: rgba(244,241,234,0.50);
  max-width: 400px; margin: 0 0 30px;
}
.io-pin-cta {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.70rem; font-weight: 800;
  letter-spacing: 0.18em; text-transform: uppercase;
  color: rgba(201,162,74,0.80); text-decoration: none;
  border-bottom: 1.5px solid rgba(201,162,74,0.28);
  padding-bottom: 3px;
  transition: color 200ms ease, gap 220ms ease, border-color 200ms ease;
}
.io-pin-cta:hover { color: #C9A24A; gap: 14px; border-color: rgba(201,162,74,0.65); }
.io-pin-cta:focus-visible {
  outline: 2px solid rgba(201,162,74,0.60); outline-offset: 4px; border-radius: 2px;
}
.io-pin-arr { display: inline-block; transition: transform 220ms ease; }
.io-pin-cta:hover .io-pin-arr { transform: translateX(4px); }

/* Right column: all SVGs stacked in same grid cell — never intercept clicks */
.io-pin-right {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
  pointer-events: none;
}
.io-pin-illus {
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  max-width: 580px;
  will-change: opacity;
  pointer-events: none;
}

/* Progress indicator */
.io-pin-foot {
  position: absolute;
  bottom: clamp(18px, 2.2vh, 28px);
  left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 10px;
  z-index: 3; pointer-events: none;
}
.io-pin-track {
  width: 64px; height: 1.5px;
  background: rgba(244,241,234,0.09);
  border-radius: 1px; overflow: hidden;
}
.io-pin-fill {
  height: 100%; border-radius: 1px;
  background: #C9A24A;
  transition: width 320ms cubic-bezier(0.4, 0, 0.2, 1);
}
.io-pin-count {
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.58rem; font-weight: 700; letter-spacing: 0.20em;
  color: rgba(244,241,234,0.26);
  font-variant-numeric: tabular-nums;
}

/* ── Mobile: stacked editorial panels ─────────────────────────── */
.io-pin-mobile {
  display: none;
  background: #07111D;
  flex-direction: column;
}
.io-mob-eyebrow {
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.58rem; font-weight: 700;
  letter-spacing: 0.30em; text-transform: uppercase;
  color: rgba(201,162,74,0.55);
  padding: clamp(56px,8vw,80px) clamp(20px,6vw,48px) 0;
  margin: 0;
}
.io-mob-panel {
  padding: clamp(48px,7vw,72px) clamp(20px,6vw,48px);
  border-bottom: 1px solid rgba(244,241,234,0.06);
}
.io-mob-panel:last-child { border-bottom: none; }
.io-mob-cat {
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.58rem; font-weight: 700;
  letter-spacing: 0.24em; text-transform: uppercase;
  color: rgba(201,162,74,0.65); margin: 0 0 16px;
}
.io-mob-title {
  font-family: "Inter Tight", Inter, Arial, sans-serif;
  font-size: clamp(2.0rem, 7.5vw, 2.8rem);
  font-weight: 900; letter-spacing: -0.035em; line-height: 0.97;
  color: #F4F1EA; margin: 0 0 28px;
}
.io-mob-svg {
  max-width: min(340px, 80vw);
  margin-bottom: 24px;
}
.io-mob-desc {
  font-family: "Manrope", system-ui, sans-serif;
  font-size: clamp(0.875rem, 4.2vw, 1rem);
  line-height: 1.72; color: rgba(244,241,234,0.50);
  margin: 0 0 22px;
}
.io-mob-cta {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: "Manrope", system-ui, sans-serif;
  font-size: 0.68rem; font-weight: 800;
  letter-spacing: 0.18em; text-transform: uppercase;
  color: rgba(201,162,74,0.80); text-decoration: none;
  border-bottom: 1.5px solid rgba(201,162,74,0.28);
  padding-bottom: 3px;
}

/* ── Responsive breakpoints ───────────────────────────────────── */
@media (max-width: 1023px) {
  .io-pin-section { display: none; }
  .io-pin-mobile  { display: flex; }
}

}
`

/* ─────────────────────────────────────────────────────────────────
   Helper: restart CSS draw animations on an SVG wrapper
   (called when a service's illustration becomes active)
───────────────────────────────────────────────────────────────── */
function restartSVGAnims(wrapper) {
  if (!wrapper) return
  wrapper.querySelectorAll('.io-svc-svg-primary, .io-svc-svg-secondary').forEach(el => {
    const delay = el.style.animationDelay
    el.style.animation = 'none'
    void el.getBoundingClientRect()  // force reflow
    el.style.animation = ''
    el.style.animationDelay = delay  // restore inline delay
  })
}

/* ─────────────────────────────────────────────────────────────────
   Main component
───────────────────────────────────────────────────────────────── */
export default function ServicesExplorer() {
  const sectionRef   = useRef(null)
  const contentRefs  = useRef([])   // 7 panel divs (left column)
  const svgRefs      = useRef([])   // 7 illus divs (right column)
  const activeRef    = useRef(0)    // avoids stale closure in onUpdate
  const [activeIdx, setActiveIdx]   = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mm = gsap.matchMedia()

    mm.add('(min-width: 1024px)', () => {
      /* ── Initialize all panels ── */
      contentRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.set(el, { opacity: i === 0 ? 1 : 0, y: 0 })
      })
      svgRefs.current.forEach((el, i) => {
        if (!el) return
        if (i === 0) {
          gsap.set(el, { opacity: 1 })
          // SVG 0 CSS animation plays normally on mount
        } else {
          gsap.set(el, { opacity: 0 })
          el.style.display = 'none'  // prevents CSS draw animation from playing early
        }
      })
      activeRef.current = 0
      setActiveIdx(0)

      /* ── ScrollTrigger pin ── */
      const st = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: `+=${(N - 1) * SCROLL_PER}`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        onUpdate(self) {
          const newIdx = Math.min(N - 1, Math.floor(self.progress * N))
          if (newIdx === activeRef.current) return

          const oldIdx = activeRef.current
          const dir    = newIdx > oldIdx ? 1 : -1
          activeRef.current = newIdx

          // Kill any in-flight tweens on the four affected elements
          gsap.killTweensOf([
            contentRefs.current[oldIdx],
            contentRefs.current[newIdx],
            svgRefs.current[oldIdx],
            svgRefs.current[newIdx],
          ].filter(Boolean))

          if (rm) {
            /* Reduced motion: instant swap */
            gsap.set(contentRefs.current[oldIdx], { opacity: 0 })
            gsap.set(svgRefs.current[oldIdx], { opacity: 0 })
            if (svgRefs.current[oldIdx]) svgRefs.current[oldIdx].style.display = 'none'

            gsap.set(contentRefs.current[newIdx], { opacity: 1, y: 0 })
            if (svgRefs.current[newIdx]) {
              svgRefs.current[newIdx].style.display = ''
              gsap.set(svgRefs.current[newIdx], { opacity: 1 })
            }
          } else {
            /* ── Outgoing ── */
            gsap.to(contentRefs.current[oldIdx], {
              opacity: 0, y: dir * -28,
              duration: 0.28, ease: 'power2.in',
            })
            gsap.to(svgRefs.current[oldIdx], {
              opacity: 0, duration: 0.22, ease: 'power1.in',
              onComplete() {
                const el = svgRefs.current[oldIdx]
                if (el) el.style.display = 'none'
              },
            })

            /* ── Incoming ── */
            const svgIn = svgRefs.current[newIdx]
            if (svgIn) {
              svgIn.style.display = ''     // removing display:none restarts CSS anims
              restartSVGAnims(svgIn)       // explicit restart for revisits
              gsap.fromTo(svgIn,
                { opacity: 0 },
                { opacity: 1, duration: 0.40, ease: 'power2.out', delay: 0.20 }
              )
            }

            gsap.set(contentRefs.current[newIdx], { y: dir * 30 })
            gsap.to(contentRefs.current[newIdx], {
              opacity: 1, y: 0,
              duration: 0.40, ease: 'power2.out', delay: 0.16,
            })
          }

          setActiveIdx(newIdx)
        },
      })

      /* ── Cleanup ── */
      return () => {
        st.kill()
        svgRefs.current.forEach(el => { if (el) el.style.display = '' })
        gsap.killTweensOf([
          ...contentRefs.current,
          ...svgRefs.current,
        ].filter(Boolean))
      }
    })

    return () => mm.revert()
  }, [])

  return (
    <>
      <style>{CSS}{SVG_ANIM_CSS}</style>

      {/* ════ DESKTOP: sticky cinematic section ════ */}
      <section
        ref={sectionRef}
        id="services-explorer"
        className="io-pin-section"
        aria-label="Services"
      >
        {/* Persistent label */}
        <div className="io-pin-topbar" aria-hidden="true">
          <span className="io-pin-toplabel">Our Services</span>
        </div>

        {/* Two-column body */}
        <div className="io-pin-body">
          {/* Left: stacked content panels */}
          <div className="io-pin-left">
            {SERVICES.map((svc, i) => (
              <div
                key={svc.id}
                ref={el => { contentRefs.current[i] = el }}
                className="io-pin-panel"
                aria-hidden={i !== activeIdx ? 'true' : undefined}
              >
                <p className="io-pin-cat">
                  {svc.num} — {svc.category.toUpperCase()}
                </p>
                <h2 className="io-pin-title">{svc.title}</h2>
                <p className="io-pin-desc">{svc.description}</p>
                <div className="io-pin-cta-wrap">
                  <Link
                    to={svc.slug}
                    className="io-pin-cta"
                    tabIndex={i !== activeIdx ? -1 : 0}
                    aria-label={`Explore ${svc.title}`}
                  >
                    Explore Service
                    <span className="io-pin-arr" aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right: stacked SVG illustrations */}
          <div className="io-pin-right" aria-hidden="true">
            {ILLUSTRATIONS.map((illus, i) => (
              <div
                key={i}
                ref={el => { svgRefs.current[i] = el }}
                className="io-pin-illus"
              >
                {illus}
              </div>
            ))}
          </div>
        </div>

        {/* Progress */}
        <div className="io-pin-foot" aria-hidden="true">
          <div className="io-pin-track">
            <div
              className="io-pin-fill"
              style={{ width: `${((activeIdx + 1) / N) * 100}%` }}
            />
          </div>
          <span className="io-pin-count">
            {String(activeIdx + 1).padStart(2, '0')}&thinsp;/&thinsp;{String(N).padStart(2, '0')}
          </span>
        </div>
      </section>

      {/* ════ MOBILE: stacked editorial panels ════ */}
      <section className="io-pin-mobile" id="services-explorer-mobile" aria-label="Services">
        <p className="io-mob-eyebrow">Our Services</p>
        {SERVICES.map((svc, i) => (
          <article key={svc.id} className="io-mob-panel">
            <p className="io-mob-cat">{svc.num} — {svc.category.toUpperCase()}</p>
            <h2 className="io-mob-title">{svc.title}</h2>
            <div className="io-mob-svg" aria-hidden="true">
              {ILLUSTRATIONS[i]}
            </div>
            <p className="io-mob-desc">{svc.description}</p>
            <Link to={svc.slug} className="io-mob-cta">
              Explore Service <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </section>
    </>
  )
}
