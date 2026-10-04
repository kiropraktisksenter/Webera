import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettsider for helseklinikker – kunder og demoer | Webera',
  description: 'Se eksempler på nettsider vi har designet for helseklinikker – kiropraktor, fysioterapi og psykolog. Alt skreddersydd, ingen maler.',
};

const demos = [
  {
    id: 'klinikk',
    name: 'Nordlys Helse',
    tag: 'Demo · Helseklinikk',
    url: '/previews/klinikk/index.html',
    bg: 'url(/images/screenshot-klinikk.png) top center / cover',
    tagStyle: { border: '1px solid rgba(251,248,242,0.5)', background: 'rgba(251,248,242,0.15)', color: 'var(--paper)' },
    nameColor: 'var(--paper)',
    metaColor: 'var(--paper)',
    caption: 'Demo-design',
    span: 7,
    ratio: '4/3',
  },
  {
    id: 'fysio',
    name: 'Veksthuset Fysio',
    tag: 'Demo · Fysioterapi',
    url: '/previews/fysio/index.html',
    bg: 'url(/images/screenshot-fysio.png) top center / cover',
    tagStyle: { border: '1px solid rgba(251,248,242,0.5)', background: 'rgba(251,248,242,0.15)', color: 'var(--paper)' },
    nameColor: 'var(--paper)',
    metaColor: 'var(--paper)',
    caption: 'Demo-design',
    span: 5,
    ratio: '4/3',
  },
  {
    id: 'psykolog',
    name: 'Stille Rom',
    tag: 'Demo · Psykolog',
    url: '/previews/psykolog/index.html',
    bg: 'url(/images/screenshot-psykolog.png) top center / cover',
    tagStyle: { border: '1px solid rgba(251,248,242,0.5)', background: 'rgba(251,248,242,0.15)', color: 'var(--paper)' },
    nameColor: 'var(--paper)',
    metaColor: 'var(--paper)',
    caption: 'Demo-design',
    span: 5,
    ratio: '4/3',
  },
  {
    id: 'helhetlig',
    name: 'Helhetlig Kiropraktor',
    tag: 'Live · Kiropraktor',
    url: 'https://helhetligkiropraktor.no',
    bg: 'url(/images/screenshot-helhetlig.png) top center / cover',
    tagStyle: { border: '1px solid rgba(251,248,242,0.5)', background: 'rgba(251,248,242,0.15)', color: 'var(--paper)' },
    nameColor: 'var(--paper)',
    metaColor: 'var(--paper)',
    caption: 'Kunde',
    span: 6,
    ratio: '16/11',
  },
  {
    id: 'kiropraktisksenter',
    name: 'Kiropraktisk Senter',
    tag: 'Live · Kiropraktor',
    url: 'https://kiropraktisksenter.no',
    bg: 'url(/images/screenshot-kiropraktisk.png) top center / cover',
    tagStyle: { border: '1px solid rgba(251,248,242,0.5)', background: 'rgba(251,248,242,0.15)', color: 'var(--paper)' },
    nameColor: 'var(--paper)',
    metaColor: 'var(--paper)',
    caption: 'Kunde',
    span: 7,
    ratio: '16/11',
  },
];

export default function DemosPage() {
  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      <Nav />

      {/* Hero */}
      <section style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Kunder og demoer</span>
            <h1 className="h-display" style={{ marginTop: '24px', maxWidth: '900px' }}>
              Slik kan din klinikks <em>nettside</em> se ut.
            </h1>
            <p className="lede" style={{ marginTop: '32px' }}>
              Her er nettsider vi nylig har levert til kunder – og demo-nettsider vi har bygget for ulike klinikktyper, så du kan se kvaliteten og stilen før du tar kontakt.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Demos grid */}
      <section style={{ paddingBottom: '120px' }}>
        <div className="container">
          <Reveal>
            {/* Live client sites */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px', marginBottom: '16px' }}>
              {demos.filter(d => d.caption === 'Kunde').map(d => (
                <a
                  key={d.id}
                  href={d.url}
                  target="_blank"
                  rel="noreferrer"
                  className="demo-tile"
                  style={{
                    background: d.bg,
                    aspectRatio: d.ratio,
                    display: 'block',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    position: 'relative',
                    textDecoration: 'none',
                  }}
                >
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,24,31,0.75) 0%, transparent 60%)' }} />
                  <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '12px' }}>
                    <div>
                      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.08em', opacity: 0.6, marginBottom: '8px', color: d.metaColor }}>{d.caption}</div>
                      <h3 style={{ fontFamily: 'Instrument Serif, serif', fontSize: '28px', color: d.nameColor, lineHeight: 1.1 }}>{d.name}</h3>
                    </div>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.06em', padding: '6px 12px', borderRadius: '999px', whiteSpace: 'nowrap', ...d.tagStyle }}>{d.tag}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Demo designs */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
              {demos.filter(d => d.caption !== 'Kunde').map(d => (
                <a
                  key={d.id}
                  href={d.url}
                  target="_blank"
                  rel="noreferrer"
                  className="demo-tile"
                  style={{
                    background: d.bg,
                    aspectRatio: d.ratio,
                    display: 'block',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    position: 'relative',
                    textDecoration: 'none',
                  }}
                >
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,24,31,0.75) 0%, transparent 60%)' }} />
                  <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '12px' }}>
                    <div>
                      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.08em', opacity: 0.6, marginBottom: '8px', color: d.metaColor }}>{d.caption}</div>
                      <h3 style={{ fontFamily: 'Instrument Serif, serif', fontSize: '28px', color: d.nameColor, lineHeight: 1.1 }}>{d.name}</h3>
                    </div>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.06em', padding: '6px 12px', borderRadius: '999px', whiteSpace: 'nowrap', ...d.tagStyle }}>{d.tag}</span>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: '1px solid var(--line)', padding: '120px 0' }}>
        <div className="container">
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '40px' }}>
              <div>
                <span className="eyebrow">Klar til å starte?</span>
                <h2 className="h-section" style={{ marginTop: '16px', maxWidth: '640px' }}>
                  La oss bygge din klinikks <em>nettside.</em>
                </h2>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/kontakt" className="btn btn-primary">
                  Book gratis konsultasjon <span className="arrow">→</span>
                </Link>
                <a href="mailto:post@webera.no" className="btn btn-ghost">post@webera.no</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
