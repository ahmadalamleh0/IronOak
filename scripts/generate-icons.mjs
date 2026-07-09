import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root      = path.join(__dirname, '..')
const publicDir = path.join(root, 'public')

const svgPath = path.join(publicDir, 'ironoak-logo.svg')
const svgBuf  = fs.readFileSync(svgPath)

// ── 1. Favicon PNGs ──────────────────────────────────────────────────────────
// Gold background (#C9A24A) so the dark oak tree is clearly visible
const gold  = { r: 201, g: 162, b: 74,  alpha: 1 }
const navy  = { r: 13,  g: 21,  b: 32,  alpha: 1 }

const faviconSizes = [
  { size: 16,  name: 'favicon-16x16.png'      },
  { size: 32,  name: 'favicon-32x32.png'      },
  { size: 48,  name: 'favicon-48x48.png'      },
  { size: 180, name: 'apple-touch-icon.png'   },
  { size: 192, name: 'icon-192x192.png'       },
  { size: 512, name: 'icon-512x512.png'       },
]

for (const { size, name } of faviconSizes) {
  // Pad the logo to ~80% of the tile so it doesn't bleed to the edges
  const logoSize = Math.round(size * 0.80)
  const pad      = Math.floor((size - logoSize) / 2)

  const logoBuf = await sharp(svgBuf)
    .resize(logoSize, logoSize, { fit: 'contain', background: { r: 201, g: 162, b: 74, alpha: 0 } })
    .png()
    .toBuffer()

  const base = await sharp({
    create: { width: size, height: size, channels: 4, background: gold },
  }).png().toBuffer()

  await sharp(base)
    .composite([{ input: logoBuf, top: pad, left: pad }])
    .png()
    .toFile(path.join(publicDir, name))
  console.log(`✓ ${name}`)
}

// ── 2. OG / social share image (1200×630) ───────────────────────────────────
// Logo rendered on gold square badge, centred on dark navy canvas

const logoSize    = 320
const badgeSize   = 420
const ogW         = 1200
const ogH         = 630

// Logo on gold badge
const logoBuf = await sharp(svgBuf)
  .resize(logoSize, logoSize, { fit: 'contain', background: { r: 201, g: 162, b: 74, alpha: 0 } })
  .png()
  .toBuffer()

const pad = Math.floor((badgeSize - logoSize) / 2)

const badgeBuf = await sharp({
  create: { width: badgeSize, height: badgeSize, channels: 4, background: gold },
}).png().toBuffer()

const logoPng = await sharp(badgeBuf)
  .composite([{ input: logoBuf, top: pad, left: pad }])
  .png()
  .toBuffer()

// Dark background canvas
const ogBase = await sharp({
  create: { width: ogW, height: ogH, channels: 4, background: navy },
}).png().toBuffer()

// Composite badge centred
const ogFinal = await sharp(ogBase)
  .composite([{ input: logoPng, gravity: 'centre' }])
  .jpeg({ quality: 95 })
  .toFile(path.join(publicDir, 'og-image.jpg'))

console.log('✓ og-image.jpg')
console.log('\nAll icons generated successfully.')
