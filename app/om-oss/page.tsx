import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Om Webera | Webbyrå for helseklinikker',
  description: 'Webera er bygget av en klinikkdriver, for klinikkdrivere. Vi jobber med fysioterapeuter, kiropraktorer, naprapater og andre helsefaglige aktører.',
};

const metrics = [
  { n: '120+', l: 'Pasienter behandlet ukentlig (egen klinikk)' },
  { n: '2026', l: 'Etablert · nyoppstartet byrå' },
  { n: '0.5s', l: 'Snitt lastetid på leveransene' },
  { n: '100%', l: 'Skreddersøm – aldri en mal' },
];

const values = [
  { t: 'Faglig forankring', d: 'Vi driver selv klinikk. Vi forstår pasientreisen og hva som bygger tillit – ikke bare webdesign.' },
  { t: 'Lokal synlighet', d: 'Vi optimaliserer for lokale Google-søk slik at pasienter i ditt område finner deg først.' },
  { t: 'Langsiktig partner', d: 'Vi er ikke ferdige ved lansering. Månedlig abonnement inkluderer drift, sikkerhet og prioritert support.' },
];

const steps = [
  { n: '01', t: 'Avklaring', d: 'Vi kartlegger klinikkens behov, målgruppe og tjenester – og lager en plan du kan lese på 10 minutter.' },
  { n: '02', t: 'Design & bygging', d: 'Vi designer og bygger en skreddersydd nettside. Ingen maler. Ingen WordPress. Du ser fremdriften underveis.' },
  { n: '03', t: 'Leveranse', d: 'Vi går gjennom hver detalj sammen. Nettsiden publiseres først når du er fornøyd – ikke før.' },
  { n: '04', t: 'Drift', d: 'Hosting, sikkerhet, oppdateringer og support på månedlig abonnement. Vi er en langsiktig partner.' },
];

export default function OmOss() {
  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      <Nav />

      {/* Hero */}
      <section style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Om Webera</span>
            <h1 className="h-display" style={{ marginTop: '24px', maxWidth: '960px' }}>
              Et webbyrå med <em>én</em> klar spesialitet.
            </h1>
            <p className="lede" style={{ marginTop: '32px' }}>
              Webera er bygget av en klinikkdriver, for klinikkdrivere. Vi jobber med fysioterapeuter, kiropraktorer, naprapater, osteopater, psykologer og andre helsefaglige aktører over hele landet.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Metrics */}
      <section style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '64px 0', background: 'var(--paper)' }}>
        <div className="container">
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }}>
              {metrics.map((m, i) => (
                <div key={i} style={{ padding: '32px 40px', borderRight: i < metrics.length - 1 ? '1px solid var(--line)' : 'none' }}>
                  <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: '56px', lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: '12px' }}>{m.n}</div>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.08em', color: 'var(--muted)', textTransform: 'uppercase' }}>{m.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Founder block */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'center', maxWidth: '960px' }}>
              <div style={{ borderRadius: '18px', aspectRatio: '3/4', overflow: 'hidden' }}>
                <img src="/images/lars-holth.png" alt="Lars Holth – Daglig leder, Webera" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
              </div>
              <div>
                <blockquote style={{ fontFamily: 'Instrument Serif, serif', fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.25, letterSpacing: '-0.01em', color: 'var(--ink)', marginBottom: '28px' }}>
                  "Jeg startet Webera fordi jeg ikke fant et webbyrå som faktisk forsto hva en helseklinikk trenger digitalt – så jeg bygget det selv."
                </blockquote>
                <cite style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '0.1em', color: 'var(--muted)', textTransform: 'uppercase', fontStyle: 'normal' }}>
                  Lars · Daglig leder & klinikkdriver
                </cite>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '120px 0', background: 'var(--cream-2)' }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow" style={{ marginBottom: '16px', display: 'block' }}>Verdier</span>
            <h2 className="h-section" style={{ marginBottom: '64px', maxWidth: '640px' }}>
              Hva vi <em>tror på.</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {values.map((v, i) => (
                <div key={i} style={{ background: 'var(--paper)', borderRadius: '18px', padding: '40px', border: '1px solid var(--line)' }}>
                  <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: '48px', color: 'var(--sage)', lineHeight: 1, marginBottom: '24px' }}>0{i + 1}</div>
                  <h3 style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500, fontSize: '18px', marginBottom: '12px', color: 'var(--ink)' }}>{v.t}</h3>
                  <p style={{ fontSize: '15px', color: 'var(--ink-soft)', lineHeight: 1.6 }}>{v.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow" style={{ marginBottom: '16px', display: 'block' }}>Slik jobber vi</span>
            <h2 className="h-section" style={{ marginBottom: '64px' }}>
              Fire steg. <em>Forutsigbart.</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div style={{ display: 'flex', gap: '0' }}>
              {steps.map((s, i) => (
                <div key={i} style={{
                  flex: 1,
                  padding: '40px 40px 40px 0',
                  borderRight: i < steps.length - 1 ? '1px solid var(--line)' : 'none',
                  paddingRight: i < steps.length - 1 ? '40px' : '0',
                  paddingLeft: i > 0 ? '40px' : '0',
                  minHeight: '240px',
                }}>
                  <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: '72px', color: 'var(--sage)', lineHeight: 1, marginBottom: '20px' }}>{s.n}</div>
                  <h4 style={{ fontFamily: 'Geist, sans-serif', fontWeight: 500, fontSize: '18px', marginBottom: '12px', color: 'var(--ink)' }}>{s.t}</h4>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6 }}>{s.d}</p>
                </div>
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
                <span className="eyebrow">Kom i gang</span>
                <h2 className="h-section" style={{ marginTop: '16px', maxWidth: '640px' }}>
                  Klar for en nettside som <em>gir deg flere pasienter?</em>
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
