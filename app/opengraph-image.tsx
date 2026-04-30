import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Rise Education — Vertical educación de WeRise';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0a0e14',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.6, letterSpacing: 2, textTransform: 'uppercase' }}>
          Rise Education
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.05 }}>
            Tu institución ya es excelente enseñando.
          </div>
          <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.05 }}>
            Ahora merece ser excelente creciendo.
          </div>
        </div>
        <div style={{ fontSize: 24, color: '#C5F048' /* approx wr-lime */ }}>
          werise.education
        </div>
      </div>
    ),
    size,
  );
}
