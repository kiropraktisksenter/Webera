'use client';

import { useState, useEffect, useRef } from 'react';

const demos = [
  { label: 'Nordlys Helse', tag: 'Helseklinikk', url: '/previews/klinikk/index.html' },
  { label: 'Veksthuset Fysio', tag: 'Fysioterapi', url: '/previews/fysio/index.html' },
  { label: 'Stille Rom', tag: 'Psykolog', url: '/previews/psykolog/index.html' },
];

const IFRAME_W = 1440;
const IFRAME_H = 900;

export default function ShowcaseCarousel() {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>([false, false, false]);
  const [scale, setScale] = useState(0.38);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % demos.length), 6000);
    return () => clearInterval(timer);
  }, []);

  // Measure container width and compute scale
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new ResizeObserver(entries => {
      const w = entries[0].contentRect.width;
      setScale(w / IFRAME_W);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const viewportH = Math.round(IFRAME_H * scale);

  return (
    <div ref={wrapperRef} style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* macOS chrome */}
      <div style={{
        background: 'var(--ink-2)',
        borderRadius: '14px 14px 0 0',
        padding: '11px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        flexShrink: 0,
      }}>
        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56', flexShrink: 0 }} />
        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e', flexShrink: 0 }} />
        <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f', flexShrink: 0 }} />
        <div style={{
          flex: 1,
          minWidth: 0,
          marginLeft: '8px',
          background: 'rgba(255,255,255,0.06)',
          borderRadius: '6px',
          padding: '3px 10px',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '10px',
          color: 'rgba(251,248,242,0.35)',
          letterSpacing: '0.04em',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>
          webera.no/demo/{demos[active].label.toLowerCase().replace(/ /g, '-')}
        </div>
      </div>

      {/* Viewport */}
      <div style={{
        width: '100%',
        height: `${viewportH}px`,
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
              pointerEvents: 'none',
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
                transform: `scale(${scale})`,
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
      <div style={{ display: 'flex', gap: '8px', marginTop: '14px', flexWrap: 'wrap' }}>
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
