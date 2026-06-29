const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const IconWrench = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M14.7 6.3a3.5 3.5 0 1 0-4.9 4.9L4 17l3 3 5.8-5.8a3.5 3.5 0 0 0 4.9-4.9l-2.3 2.3-2-2 2.3-2.3z" />
  </svg>
)

export const IconBuilding = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="4" y="3" width="11" height="18" />
    <path d="M15 21h5V9l-5-2" />
    <path d="M7.5 7h1M7.5 10.5h1M7.5 14h1M11 7h1M11 10.5h1M11 14h1" />
    <path d="M9 21v-3.5h2V21" />
  </svg>
)

export const IconSpray = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M9 8V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3" />
    <rect x="6" y="8" width="11" height="13" rx="1.5" />
    <path d="M18 11l3-1.5M19 14.5l3.3-.5M18 18l2.8 1.3" />
    <path d="M9.5 12.5h5M9.5 15.5h5" />
  </svg>
)

export const IconPlumbing = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4 5h6v4a3 3 0 0 0 3 3h2" />
    <path d="M19 5v4a3 3 0 0 1-3 3" />
    <path d="M15 12v3" />
    <path d="M15 19.5a2.5 2.5 0 1 1-2.5-2.5c1 0 1.6-.6 2.5-1.5.9.9 1.5 1.5 2.5 1.5a2.5 2.5 0 0 1-2.5 2.5z" />
  </svg>
)

export const IconSparkle = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M7 21l-1.4-3.6L2 16l3.6-1.4L7 11l1.4 3.6L12 16l-3.6 1.4L7 21z" />
    <path d="M17 11l-1-2.6L13.4 7l2.6-1L17 3.4 18 6l2.6 1-2.6 1L17 11z" />
  </svg>
)

export const IconClipboard = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="5" y="4" width="14" height="17" rx="1.5" />
    <path d="M9 4V3h6v1" />
    <path d="M8.5 10.5l1.6 1.6L13 9" />
    <path d="M8.5 16h7" />
  </svg>
)

export const IconShieldCheck = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 3l7 3v5c0 5-3.2 8-7 10-3.8-2-7-5-7-10V6l7-3z" />
    <path d="M9 12l2.2 2.2L15 10" />
  </svg>
)

export const IconClock = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
)

export const IconHomeBuilding = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M3 11l6-5 6 5" />
    <path d="M5 10v9.5h8V10" />
    <path d="M15 21V7l6 3v11h-6" />
  </svg>
)

export const IconFileContract = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
    <path d="M14 3v4h4" />
    <path d="M9 12.5h6M9 15.5h6" />
  </svg>
)

export const IconUser = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="8" r="3.3" />
    <path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6" />
  </svg>
)

export const IconKey = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="8" cy="15" r="4" />
    <path d="M11 12l8-8M16 7l2 2M19 4l2 2" />
  </svg>
)

export const IconChart = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4 20V10M11 20V4M18 20v-7" />
    <path d="M3 20h18" />
  </svg>
)

export const IconOffice = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="3" y="7" width="9" height="14" />
    <rect x="12" y="3" width="9" height="18" />
    <path d="M6 11h.01M6 14h.01M6 17h.01M16 7h.01M16 10h.01M16 13h.01M16 16h.01" />
  </svg>
)

export const IconResidential = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M3 9.5L12 3l9 6.5" />
    <rect x="5.5" y="9.5" width="13" height="11" />
    <path d="M10 20.5v-5h4v5" />
  </svg>
)

export const IconWarehouse = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M3 10.5L12 4l9 6.5" />
    <path d="M4.5 10v10h15V10" />
    <path d="M9 20v-6h6v6" />
    <path d="M4.5 14.5h15" />
  </svg>
)

export const IconPin = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.3" />
  </svg>
)

export const IconMail = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="M3.5 6l8.5 7 8.5-7" />
  </svg>
)

export const IconAward = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="9" r="5.5" />
    <path d="M9 13.5l-1.5 7L12 18l4.5 2.5-1.5-7" />
  </svg>
)

export const IconPhone = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M5 4h3.2l1.3 4-2 1.4a12 12 0 0 0 5.1 5.1l1.4-2 4 1.3V17a2 2 0 0 1-2 2C10.6 19 5 13.4 5 6a2 2 0 0 1 0-2z" />
  </svg>
)
