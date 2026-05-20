import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Kontakt – Webera',
  description: 'Ta kontakt med Webera for gratis konsultasjon om nettside for din helseklinikk.',
};

export default function KontaktPage() {
  return (
    <>
      <Nav />
      <main style={{ background: 'var(--cream)', paddingTop: '100px' }}>

        {/* Hero */}
        <section style={{ paddingTop: '60px', paddingBottom: '80px' }}>
          <div className="container">
            <p className="eyebrow" style={{ marginBottom: '24px' }}>Kontakt</p>
            <h1 className="h-display" style={{ marginBottom: '24px', maxWidth: '700px' }}>
              La oss <em>snakke.</em>
            </h1>
            <p className="lede" style={{ marginBottom: '0' }}>
              Vanligvis svarer vi innen 24 timer på hverdager. Vil du heller booke direkte?
              Velg et tidspunkt hos oss.
            </p>
          </div>
        </section>

        {/* Form card + info */}
        <section style={{ paddingBottom: '120px' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '24px', alignItems: 'start' }}>

              {/* Form — dark rounded card */}
              <div style={{ background: 'var(--ink)', borderRadius: '28px', padding: '56px', color: 'var(--paper)' }}>
                <ContactForm />
              </div>

              {/* Right: info tiles + booking */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { label: 'Epost', value: 'post@webera.no', href: 'mailto:post@webera.no' },
                  { label: 'Lokasjon', value: 'Tønsberg, NO', href: null },
                  { label: 'Responstid', value: 'Innen 24 timer', href: null },
                ].map((tile) => (
                  <div key={tile.label} style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '16px', padding: '24px 28px' }}>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--muted)', marginBottom: '8px' }}>
                      {tile.label}
                    </p>
                    {tile.href ? (
                      <a href={tile.href} style={{ fontSize: '16px', fontWeight: 500, color: 'var(--ink)', textDecoration: 'none' }}>
                        {tile.value}
                      </a>
                    ) : (
                      <p style={{ fontSize: '16px', fontWeight: 500, color: 'var(--ink)' }}>{tile.value}</p>
                    )}
                  </div>
                ))}

                {/* Booking card */}
                <div style={{ background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '16px', padding: '24px 28px' }}>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--muted)', marginBottom: '16px' }}>
                    Booking direkte
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--ink-soft)', marginBottom: '16px', lineHeight: 1.55 }}>
                    Book en gratis 30-minutters konsultasjon:
                  </p>
                  <a
                    href="https://calendly.com/holthekiropraktikk/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Velg tidspunkt →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .container > div[style*="grid-template-columns: 1fr 380px"] {
            grid-template-columns: 1fr !important;
          }
          .container > div > div[style*="background: var(--ink)"] {
            padding: 32px 24px !important;
          }
        }
      `}</style>
    </>
  );
}
