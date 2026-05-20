'use client';

import { useState, useEffect } from 'react';

const demos = [
  { label: 'Nordlys Helse', tag: 'Helseklinikk', url: '/previews/klinikk/index.html' },
  { label: 'Veksthuset Fysio', tag: 'Fysioterapi', url: '/previews/fysio/index.html' },
  { label: 'Stille Rom', tag: 'Psykolog', url: '/previews/psykolog/index.html' },
];

const SCALE = 0.38;
const IFRAME_W = 1440;
const IFRAME_H = 900;

export default function ShowcaseCarousel() {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(a => (a + 1) % demos.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const containerH = Math.round(IFRAME_H * SCALE);
  const containerW = Math.round(IFRAME_W * SCALE);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      {/* macOS window chrome */}
      <div style={{
        background: 'var(--ink-2)',
        borderRadius: '14px 14px 0 0',
        padding: '11px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
        <div style={{
          flex: 1,
          marginLeft: '8px',
          background: 'rgba(255,255,255,0.06)',
          borderRadius: '6px',
          padding: '3px 10px',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '10px',
          color: 'rgba(251,248,242,0.35)',
          letterSpacing: '0.04em',
        }}>
          webera.no/demo/{demos[active].label.toLowerCase().replace(/ /g, '-')}
        </div>
      </div>

      {/* Viewport */}
      <div style={{
        width: `${containerW}px`,
        height: `${containerH}px`,
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '0 0 14px 14px',
        border: '1px solid rgba(255,255,255,0.06)',
        borderTop: 'none',
        background: 'var(--cream)',
      }}>
        {demos.map((demo, i) => (
          <div
            key={demo.url}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: active === i ? 1 : 0,
              transition: 'opacity 0.6s ease',
              pointerEvents: active === i ? 'auto' : 'none',
            }}
          >
            <iframe
              src={demo.url}
              title={demo.label}
              sandbox="allow-same-origin allow-scripts"
              loading="lazy"
              style={{
                width: `${IFRAME_W}px`,
                height: `${IFRAME_H}px`,
                border: 'none',
                transform: `scale(${SCALE})`,
                transformOrigin: 'top left',
                pointerEvents: 'none',
              }}
              onLoad={() => setLoaded(l => { const n = [...l]; n[i] = true; return n; })}
            />
            {!loaded[i] && (
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'var(--cream)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--sage)', animation: 'pulse 1.5s ease-in-out infinite' }} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginTop: '16px', flexWrap: 'wrap' }}>
        {demos.map((demo, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              padding: '6px 14px',
              borderRadius: '100px',
              border: '1px solid',
              borderColor: active === i ? 'var(--ink)' : 'var(--line-strong)',
              background: active === i ? 'var(--ink)' : 'transparent',
              color: active === i ? 'var(--paper)' : 'var(--ink-soft)',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              letterSpacing: '0.06em',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {demo.label}
          </button>
        ))}
      </div>
    </div>
  );
}
