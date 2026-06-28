import { forwardRef, useImperativeHandle, useRef } from 'react'

const MASK_URL = 'url(/ironoak-logo-mask.svg)'

const maskStyle = {
  WebkitMaskImage: MASK_URL,
  maskImage: MASK_URL,
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskSize: 'contain',
  maskSize: 'contain',
  WebkitMaskPosition: 'center',
  maskPosition: 'center',
}

/**
 * Renders the official IronOak oak tree mark (public/ironoak-logo.svg) as a
 * CSS mask so the exact, unaltered logo geometry can be lit with a soft
 * engraved bevel and a subtle metallic gold fill — without ever touching
 * the artwork itself.
 */
const LogoMark = forwardRef(({ className = '' }, ref) => {
  const rootRef = useRef(null)
  const goldRef = useRef(null)

  useImperativeHandle(ref, () => ({
    root: rootRef.current,
    gold: goldRef.current,
  }))

  return (
    <div ref={rootRef} className={`relative ${className}`} style={{ aspectRatio: '1152 / 919' }}>
      {/* engraved bevel — carved-in shadow */}
      <div
        className="absolute inset-0 translate-x-[1.5px] translate-y-[2px] opacity-40 blur-[1px]"
        style={{ ...maskStyle, background: '#000000' }}
      />
      {/* engraved bevel — carved-in highlight */}
      <div
        className="absolute inset-0 -translate-x-[1px] -translate-y-[1px] opacity-[0.12]"
        style={{ ...maskStyle, background: '#fff8e8' }}
      />
      {/* base engraved fill, visible before the gold settles in */}
      <div
        className="absolute inset-0"
        style={{
          ...maskStyle,
          background: 'linear-gradient(160deg, #1b2430 0%, #0e131a 100%)',
        }}
      />
      {/* subtle metallic gold fill */}
      <div
        ref={goldRef}
        className="absolute inset-0"
        style={{
          ...maskStyle,
          background:
            'linear-gradient(180deg, #ecdcb0 0%, #cda968 45%, #a9802f 60%, #ddc28c 100%)',
          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))',
        }}
      />
    </div>
  )
})

LogoMark.displayName = 'LogoMark'

export default LogoMark
