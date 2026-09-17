import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

// Placeholder Open Graph image generated at build time. To use a designed
// image instead, delete this file and add app/opengraph-image.png (1200x630).

export const alt = site.name
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'radial-gradient(ellipse at 90% 80%, #62B2FF 0%, #7FC0FF 15%, #C3E2FF 35%, #E6F3FF 55%, #FFFFFF 80%)',
          color: '#000000',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: '0.25em', fontWeight: 700, marginBottom: 30 }}>METHODIC PAINTING</div>
        <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, letterSpacing: '0.01em' }}>BACKING PAINTING COMPANIES</div>
        <div style={{ fontSize: 40, fontWeight: 500, letterSpacing: '0.08em', marginTop: 24 }}>TO GROW, TRANSITION, AND WIN</div>
      </div>
    ),
    { ...size }
  )
}
