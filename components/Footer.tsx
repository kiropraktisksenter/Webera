import Link from 'next/link';

const menuLinks = [
  { href: '/', label: 'Hjem' },
  { href: '/demos', label: 'Demoer' },
  { href: '/om-oss', label: 'Om oss' },
  { href: '/kontakt', label: 'Kontakt' },
  { href: '/innsikt', label: 'Innsikt' },
  { href: '/priser', label: 'Priser' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--paper)', paddingTop: '80px' }}>
      {/* Big headline */}
      <div className="container" style={{ borderBottom: '1px solid rgba(251,248,242,0.10)', paddingBottom: '80px' }}>
        <p style={{
          fontFamily: 'Instrument Serif, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(36px, 6vw, 80px)',
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          color: 'var(--paper)',
          maxWidth: '800px',
          marginBottom: '40px',
        }}>
          La oss bygge noe varig.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a
            href="https://calendly.com/holthekiropraktikk/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sage"
          >
            Book gratis konsultasjon →
          </a>
          <a href="mailto:post@webera.no" className="btn btn-ghost" style={{ borderColor: 'rgba(251,248,242,0.24)', color: 'var(--paper)' }}>
            post@webera.no
          </a>
        </div>
      </div>

      {/* 4-column grid */}
      <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '48px' }}>
          {/* Logo + tagline */}
          <div>
            <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: '22px', marginBottom: '16px', letterSpacing: '-0.01em' }}>
              Webera<span style={{ color: 'var(--sage)' }}>.</span>
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(251,248,242,0.5)', lineHeight: 1.6, maxWidth: '200px' }}>
              Webbyrå eksklusivt for helseklinikker. Vi forstår bransjen fordi vi driver klinikk selv.
            </p>
          </div>

          {/* Menu */}
          <div>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(251,248,242,0.4)', marginBottom: '20px' }}>
              Meny
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {menuLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="footer-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(251,248,242,0.4)', marginBottom: '20px' }}>
              Kontakt
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a href="mailto:post@webera.no" style={{ fontSize: '14px', color: 'rgba(251,248,242,0.65)', textDecoration: 'none' }}>
                  post@webera.no
                </a>
              </li>
              <li style={{ fontSize: '14px', color: 'rgba(251,248,242,0.4)' }}>Svar innen 24 timer</li>
              <li style={{ fontSize: '14px', color: 'rgba(251,248,242,0.4)' }}>Tønsberg, Norge</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(251,248,242,0.4)', marginBottom: '20px' }}>
              Sosiale medier
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a href="https://www.facebook.com/webera" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: 'rgba(251,248,242,0.65)', textDecoration: 'none' }}>
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/webera" target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: 'rgba(251,248,242,0.65)', textDecoration: 'none' }}>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container" style={{ borderTop: '1px solid rgba(251,248,242,0.08)', padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <p style={{ fontSize: '12px', color: 'rgba(251,248,242,0.35)' }}>
          © 2026 Webera. Alle rettigheter reservert.
        </p>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'rgba(251,248,242,0.25)' }}>
          v2.0 · Spesialisert webbyrå for helseklinikker
        </p>
      </div>
    </footer>
  );
}
