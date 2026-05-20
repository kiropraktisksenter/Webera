import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Marquee from '@/components/Marquee';
import Reveal from '@/components/Reveal';
import ShowcaseCarousel from '@/components/ShowcaseCarousel';
import FaqAccordion from '@/components/FaqAccordion';

// Structured data from original page
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://webera.no/#business",
      "name": "Webera",
      "description": "Webera er et spesialisert webbyrå for helsebedrifter i Norge. Vi driver selv helseklinikk og forstår bransjen innenfra. Nettsider for kiropraktorer, fysioterapeuter, naprapater og psykologer.",
      "url": "https://webera.no",
      "email": "post@webera.no",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tønsberg",
        "addressRegion": "Vestfold og Telemark",
        "addressCountry": "NO"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "59.2676",
        "longitude": "10.4074"
      },
      "areaServed": { "@type": "Country", "name": "Norge" },
      "priceRange": "kr 20000-55000",
      "image": "https://webera.no/images/hero-klinikk-3.jpg",
      "logo": "https://webera.no/images/Webera Logo.svg",
      "sameAs": [
        "https://www.facebook.com/webera",
        "https://www.linkedin.com/company/webera"
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Nettsider for helseklinikker",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Klinikkstart",
            "description": "Enkel og effektiv nettside for helseklinikker som vil komme raskt i gang.",
            "price": "20000",
            "priceCurrency": "NOK",
            "url": "https://webera.no/#priser"
          },
          {
            "@type": "Offer",
            "name": "Klinikkpro",
            "description": "Fullstendig nettside med lokal SEO-optimalisering, tjenestesider og booking-integrasjon.",
            "price": "35000",
            "priceCurrency": "NOK",
            "url": "https://webera.no/#priser"
          },
          {
            "@type": "Offer",
            "name": "Klinikk+",
            "description": "Komplett digital løsning inkludert AI-chatbot, lokal SEO og skreddersydd design.",
            "price": "55000",
            "priceCurrency": "NOK",
            "url": "https://webera.no/#priser"
          },
          {
            "@type": "Offer",
            "name": "Klinikkdrift",
            "description": "Månedlig abonnement for hosting, sikkerhet, backup og oppdateringer.",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "699",
              "priceCurrency": "NOK",
              "unitText": "per måned"
            },
            "url": "https://webera.no/#priser"
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://webera.no/#website",
      "url": "https://webera.no",
      "name": "Webera – Nettsider for helsebedrifter",
      "publisher": { "@id": "https://webera.no/#business" }
    },
    {
      "@type": "FAQPage",
      "@id": "https://webera.no/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Hva koster en nettside for helseklinikk?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Webera tilbyr tre pakker: Klinikkstart fra kr 20 000, Klinikkpro fra kr 35 000, og Klinikk+ fra kr 55 000. Drift og vedlikehold koster kr 699 per måned."
          }
        },
        {
          "@type": "Question",
          "name": "Hvilke typer helseklinikker jobber Webera med?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Webera jobber eksklusivt med helsebedrifter: kiropraktorer, fysioterapeuter, naprapater, osteopater, psykologer og andre helseklinikker i Norge."
          }
        },
        {
          "@type": "Question",
          "name": "Hva gjør Webera annerledes enn andre webbyrå?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Grunnleggeren av Webera driver selv helseklinikk til daglig. Vi forstår bransjen innenfra – timebestilling, pasientflyt, GDPR og lokal konkurranse."
          }
        }
      ]
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Nav />

      <main style={{ background: 'var(--cream)' }}>

        {/* ── HERO ────────────────────────────────────────────────── */}
        <section style={{ paddingTop: '140px', paddingBottom: '80px' }}>
          <div className="container">

            {/* Availability badge */}
            <Reveal>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: '100px', padding: '8px 16px', marginBottom: '48px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', boxShadow: '0 0 0 3px rgba(34,197,94,0.2)', animation: 'pulse 2s ease-in-out infinite' }} />
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.06em' }}>
                  Tilgjengelig for 2 nye klinikker · Q3 2026
                </span>
              </div>
            </Reveal>

            {/* 2-col layout */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '80px', alignItems: 'start' }}>

              {/* Left */}
              <div>
                <Reveal>
                  <h1 className="h-display" style={{ marginBottom: '28px' }}>
                    Nettsider bygget av folk som{' '}
                    <em style={{ fontStyle: 'italic' }}>kjenner klinikken.</em>
                  </h1>
                </Reveal>

                <Reveal delay={100}>
                  <p className="lede" style={{ marginBottom: '40px' }}>
                    Webera er et webbyrå eksklusivt for helsebedrifter. Vi driver selv klinikk – og vet hva som faktisk fungerer digitalt for deg.
                  </p>
                </Reveal>

                <Reveal delay={180}>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '56px' }}>
                    <a
                      href="https://calendly.com/holthekiropraktikk/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Få en gratis konsultasjon →
                    </a>
                    <Link href="/demos" className="btn btn-ghost">
                      Se demoer
                    </Link>
                  </div>
                </Reveal>

                {/* Meta strip */}
                <Reveal delay={240}>
                  <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', borderTop: '1px solid var(--line)', paddingTop: '28px' }}>
                    {[
                      { label: 'Spesialiserer på', value: 'Helseklinikker' },
                      { label: 'Basert i', value: 'Tønsberg, NO' },
                      { label: 'Etablert', value: '2024' },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--muted)', marginBottom: '4px' }}>{label}</p>
                        <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--ink)' }}>{value}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>

              {/* Right — showcase carousel */}
              <Reveal delay={120}>
                <ShowcaseCarousel />
              </Reveal>
            </div>

            {/* Image strip */}
            <Reveal delay={200}>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '12px', marginTop: '48px', height: '380px' }}>
                <div style={{ background: 'var(--cream-3)', borderRadius: '16px', overflow: 'hidden' }}>
                  <img src="/images/hero-klinikk-3.jpg" alt="Klinikkmiljø" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ background: 'var(--cream-3)', borderRadius: '16px', overflow: 'hidden' }}>
                  <img src="/images/hero-klinikk-2.jpg" alt="Behandlingsrom" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ background: 'var(--cream-3)', borderRadius: '16px', overflow: 'hidden' }}>
                  <img src="/images/hero-klinikk-1.jpg" alt="Behandler" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── MARQUEE ─────────────────────────────────────────────── */}
        <Marquee />

        {/* ── PROBLEM / SOLUTION ──────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: '24px' }}>02 — Problem &amp; løsning</p>
              <h2 className="h-section" style={{ marginBottom: '56px', maxWidth: '700px' }}>
                Mange klinikker sitter fast i samme situasjon.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="split-card">
                <div className="split-inner">
                  <div className="split-col">
                    <p style={{ fontFamily: 'Instrument Serif, serif', fontSize: '22px', marginBottom: '32px', color: 'var(--ink)' }}>
                      Det vi ser i bransjen
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {[
                        'Nettsider som ikke konverterer besøkende til pasienter',
                        'Manglende eller dårlig timebestillingsløsning',
                        'Ingen synlighet på Google lokalt',
                        'Leverandører som ikke forstår helsebransjen',
                        'Uklar prisstruktur og uforutsigbare kostnader',
                      ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--ink-soft)' }}>
                          <span style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }}>✗</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="split-col">
                    <p style={{ fontFamily: 'Instrument Serif, serif', fontSize: '22px', marginBottom: '32px', color: 'var(--ink)' }}>
                      Det vi leverer
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {[
                        'Skreddersydd design som bygger faglig tillit',
                        'Timebestilling og smidig pasientreise',
                        'Lokal SEO – pasienter finner deg på Google',
                        'AI-chatbot som svarer på pasientspørsmål',
                        'Én klinikk per bransje per område',
                        'Fast månedspris – ingen overraskelser',
                      ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--ink-soft)' }}>
                          <span style={{ color: 'var(--sage)', flexShrink: 0, marginTop: '2px' }}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── SERVICES (dark card) ─────────────────────────────────── */}
        <section style={{ paddingBottom: '120px' }}>
          <div className="services-dark">
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: '24px' }}>03 — Hva vi gjør</p>
              <h2 className="h-section" style={{ marginBottom: '16px', color: 'var(--paper)' }}>
                Fire tjenester, <em>én</em> spesialitet.
              </h2>
              <p className="lede" style={{ color: 'rgba(251,248,242,0.6)', marginBottom: '60px' }}>
                Alt du trenger for en profesjonell digital tilstedeværelse – under ett tak.
              </p>
            </Reveal>

            <div className="services-grid">
              {[
                {
                  tag: '01 · Nettside',
                  title: 'Klinikknettside',
                  desc: 'Skreddersydd nettside som speiler kvaliteten på klinikkens tjenester og konverterer besøkende til pasienter.',
                  bullets: ['Design og tjenestesider', 'Mobiltilpasset og rask', 'SEO-struktur fra grunnen', 'Kontaktskjema og timebestilling'],
                },
                {
                  tag: '02 · SEO',
                  title: 'Lokal synlighet',
                  desc: 'Vi sørger for at pasienter finner deg på Google når de søker etter behandling i ditt område.',
                  bullets: ['Lokal søkeordsoptimalisering', 'Teknisk SEO', 'Google Maps-synlighet', 'Strukturert data'],
                },
                {
                  tag: '03 · AI',
                  title: 'AI-chatbot',
                  desc: 'En smart assistent på nettsiden som svarer på vanlige pasientspørsmål og hjelper med timebestilling – døgnet rundt.',
                  bullets: ['Tilpasset klinikkens tjenester', 'Ingen ekstra bemanning', 'Integrert sømløst', 'Lærende og oppdaterbar'],
                },
                {
                  tag: '04 · Drift',
                  title: 'Drift & vedlikehold',
                  desc: 'Hosting, sikkerhet, oppdateringer og backup. Nettsiden din er alltid online og rask.',
                  bullets: ['Hosting og overvåking', 'Sikkerhetsoppdateringer', 'Prioritert support', 'Månedlig rapportering'],
                },
              ].map((s, i) => (
                <div key={i} className="service-item">
                  <Reveal delay={i * 80}>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(251,248,242,0.4)', marginBottom: '16px' }}>
                      {s.tag}
                    </p>
                    <h3 style={{ fontFamily: 'Instrument Serif, serif', fontSize: '32px', letterSpacing: '-0.01em', color: 'var(--paper)', marginBottom: '14px', lineHeight: 1.1 }}>
                      {s.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'rgba(251,248,242,0.55)', lineHeight: 1.6, marginBottom: '24px' }}>
                      {s.desc}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {s.bullets.map((b, j) => (
                        <li key={j} style={{ fontSize: '13px', color: 'rgba(251,248,242,0.6)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ color: 'var(--sage)', fontWeight: 600 }}>+</span> {b}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOUNDER ─────────────────────────────────────────────── */}
        <section style={{ paddingBottom: '120px' }}>
          <div className="container">
            <Reveal>
              <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '56px', alignItems: 'center', maxWidth: '900px' }}>
                {/* Image placeholder */}
                <div style={{ width: '200px', height: '260px', background: 'var(--cream-3)', borderRadius: '16px', overflow: 'hidden', flexShrink: 0 }}>
                  <img src="/images/lars-holth.png" alt="Lars Holth – Daglig leder, Webera" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
                </div>

                <div>
                  <blockquote style={{ margin: 0 }}>
                    <p style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 'clamp(22px, 3vw, 32px)', lineHeight: 1.35, letterSpacing: '-0.01em', color: 'var(--ink)', marginBottom: '24px' }}>
                      "Jeg startet Webera fordi jeg ikke fant et webbyrå som faktisk forsto hva en helseklinikk trenger digitalt – så jeg bygget det selv."
                    </p>
                    <cite style={{ fontStyle: 'normal', fontSize: '14px', color: 'var(--muted)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.06em' }}>
                      Lars · Daglig leder &amp; klinikkdriver
                    </cite>
                  </blockquote>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── EXCLUSIVITY (dark card) ──────────────────────────────── */}
        <section style={{ paddingBottom: '120px' }}>
          <div className="excl-card">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
              <div>
                <Reveal>
                  <p className="eyebrow" style={{ marginBottom: '24px', color: 'rgba(251,248,242,0.4)' }}>
                    Et løfte
                  </p>
                  <p className="eyebrow" style={{ display: 'none' }} />
                  <h2 className="h-section" style={{ color: 'var(--paper)', marginBottom: '24px' }}>
                    Vi jobber <em>aldri</em> med konkurrentene dine.
                  </h2>
                  <p style={{ fontSize: '16px', color: 'rgba(251,248,242,0.6)', lineHeight: 1.65, maxWidth: '480px' }}>
                    Webera jobber kun med én klinikk per bransje per geografisk område. Når du velger oss, er du valgt – og konkurrentene dine kan ikke jobbe med oss.
                  </p>
                </Reveal>
              </div>

              <div>
                <Reveal delay={120}>
                  {[
                    { num: '01', title: 'Én klinikk', desc: 'Per bransje per by. Vi er din, ikke alle.' },
                    { num: '02', title: 'Du eier reviret', desc: 'Geografisk eksklusivitet i kontrakten.' },
                    { num: '03', title: 'Førstemann velger', desc: 'Kom inn tidlig – området forblir ditt.' },
                  ].map((p, i) => (
                    <div key={i} className="promise-tile">
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'var(--sage)', minWidth: '32px' }}>{p.num}</span>
                      <div>
                        <p style={{ fontSize: '16px', fontWeight: 500, color: 'var(--paper)', marginBottom: '4px' }}>{p.title}</p>
                        <p style={{ fontSize: '13px', color: 'rgba(251,248,242,0.5)' }}>{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── DEMOS GRID ──────────────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: '24px' }}>04 — Demo-nettsider</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '24px' }}>
                <h2 className="h-section" style={{ maxWidth: '600px' }}>
                  Slik kan din klinikks <em>nettside</em> se ut.
                </h2>
                <div>
                  <p className="lede" style={{ marginBottom: '20px', fontSize: '16px' }}>Skreddersydd design for ulike helsefaglige aktører.</p>
                  <Link href="/demos" className="btn btn-ghost">Se alle demoer →</Link>
                </div>
              </div>
            </Reveal>

            {/* Asymmetric grid */}
            <Reveal delay={100}>
              <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '12px', marginBottom: '12px' }}>
                <a href="/previews/klinikk/index.html" target="_blank" rel="noreferrer" className="demo-tile" style={{ backgroundImage: 'url(/images/screenshot-klinikk.png)', backgroundSize: 'cover', backgroundPosition: 'top center' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,24,31,0.85) 0%, rgba(20,24,31,0.1) 60%)' }} />
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <span style={{ display: 'inline-block', background: 'var(--sage)', color: 'var(--paper)', fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', padding: '4px 10px', borderRadius: '100px', marginBottom: '10px' }}>Demo · Helseklinikk</span>
                    <p style={{ fontFamily: 'Instrument Serif, serif', fontSize: '28px', color: 'var(--paper)', letterSpacing: '-0.01em' }}>Nordlys Helse</p>
                  </div>
                </a>
                <a href="/previews/fysio/index.html" target="_blank" rel="noreferrer" className="demo-tile" style={{ backgroundImage: 'url(/images/screenshot-fysio.png)', backgroundSize: 'cover', backgroundPosition: 'top center' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,24,31,0.85) 0%, rgba(20,24,31,0.1) 60%)' }} />
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <span style={{ display: 'inline-block', background: 'var(--sage)', color: 'var(--paper)', fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', padding: '4px 10px', borderRadius: '100px', marginBottom: '10px' }}>Demo · Fysioterapi</span>
                    <p style={{ fontFamily: 'Instrument Serif, serif', fontSize: '28px', color: 'var(--paper)', letterSpacing: '-0.01em' }}>Veksthuset Fysio</p>
                  </div>
                </a>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: '12px' }}>
                <a href="/previews/psykolog/index.html" target="_blank" rel="noreferrer" className="demo-tile" style={{ backgroundImage: 'url(/images/screenshot-psykolog.png)', backgroundSize: 'cover', backgroundPosition: 'top center' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,24,31,0.85) 0%, rgba(20,24,31,0.1) 60%)' }} />
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <span style={{ display: 'inline-block', background: 'var(--sage)', color: 'var(--paper)', fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', padding: '4px 10px', borderRadius: '100px', marginBottom: '10px' }}>Demo · Psykolog</span>
                    <p style={{ fontFamily: 'Instrument Serif, serif', fontSize: '28px', color: 'var(--paper)', letterSpacing: '-0.01em' }}>Stille Rom</p>
                  </div>
                </a>
                <a href="https://kiropraktisksenter.no" target="_blank" rel="noreferrer" className="demo-tile" style={{ backgroundImage: 'url(/images/screenshot-kiropraktisk.png)', backgroundSize: 'cover', backgroundPosition: 'top center' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,24,31,0.85) 0%, rgba(20,24,31,0.2) 60%)' }} />
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <span style={{ display: 'inline-block', background: '#22c55e', color: '#fff', fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', padding: '4px 10px', borderRadius: '100px', marginBottom: '10px' }}>Live · Kiropraktor</span>
                    <p style={{ fontFamily: 'Instrument Serif, serif', fontSize: '28px', color: 'var(--paper)', letterSpacing: '-0.01em' }}>Kiropraktisk Senter</p>
                  </div>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── PROCESS ─────────────────────────────────────────────── */}
        <section style={{ paddingBottom: '120px', background: 'var(--cream-2)' }}>
          <div className="container" style={{ paddingTop: '120px' }}>
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: '24px' }}>05 — Slik jobber vi</p>
              <h2 className="h-section" style={{ marginBottom: '64px' }}>
                Fire steg. <em>Forutsigbart.</em>
              </h2>
            </Reveal>

            <div style={{ display: 'flex' }}>
              {[
                { num: '01', title: 'Avklaring', desc: 'Vi kartlegger klinikkens behov, målgruppe, tjenester og innhold – og lager en plan tilpasset deg.' },
                { num: '02', title: 'Design & bygging', desc: 'Vi designer og bygger en skreddersydd nettside. Ingen maler. Ingen WordPress. Bare det du trenger.' },
                { num: '03', title: 'Leveranse', desc: 'Nettsiden gjennomgås sammen med deg og publiseres når du er fornøyd. Vi lanserer aldri uten din godkjenning.' },
                { num: '04', title: 'Drift', desc: 'Hosting, sikkerhet og oppdateringer på månedlig abonnement. Nettsiden din er alltid online og trygg.' },
              ].map((step, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div style={{
                    flex: 1,
                    padding: '0 40px',
                    borderRight: i < 3 ? '1px solid var(--line)' : 'none',
                    minHeight: '240px',
                    paddingLeft: i === 0 ? 0 : '40px',
                  }}>
                    <p style={{ fontFamily: 'Instrument Serif, serif', fontSize: '72px', color: 'var(--sage)', lineHeight: 1, marginBottom: '16px', letterSpacing: '-0.02em' }}>
                      {step.num}
                    </p>
                    <p style={{ fontSize: '18px', fontWeight: 500, color: 'var(--ink)', marginBottom: '10px' }}>{step.title}</p>
                    <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ─────────────────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: '24px' }}>06 — Pakker</p>
              <h2 className="h-section" style={{ marginBottom: '56px' }}>
                Forutsigbare priser. <em>Ingen overraskelser.</em>
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '16px' }}>
                {/* Klinikkstart */}
                <div className="price-card">
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--muted)', marginBottom: '20px' }}>Klinikkstart</p>
                  <p style={{ fontFamily: 'Instrument Serif, serif', fontSize: '48px', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '4px' }}>kr 20.000</p>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '32px' }}>eks. mva · engangs</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                    {['Opptil 5 sider', 'Skreddersydd design', 'Mobiltilpasset', 'Kontaktskjema', 'Grunnleggende SEO', 'Publisering'].map((f, i) => (
                      <li key={i} style={{ fontSize: '14px', color: 'var(--ink-soft)', display: 'flex', gap: '10px' }}>
                        <span style={{ color: 'var(--sage)' }}>+</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/kontakt" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>Kom i gang</Link>
                </div>

                {/* Klinikkpro – featured */}
                <div className="price-card featured">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(251,248,242,0.5)' }}>Klinikkpro</p>
                    <span style={{ background: 'var(--sage)', color: 'var(--paper)', fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', padding: '4px 10px', borderRadius: '100px', letterSpacing: '0.1em' }}>ANBEFALT</span>
                  </div>
                  <p style={{ fontFamily: 'Instrument Serif, serif', fontSize: '48px', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '4px', color: 'var(--paper)' }}>kr 35.000</p>
                  <p style={{ fontSize: '13px', color: 'rgba(251,248,242,0.45)', marginBottom: '32px' }}>eks. mva · engangs</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                    {['Opptil 10–12 sider', 'Tjenestesider', 'Bedre SEO-struktur', 'CTA-optimalisert', 'Timebestilling integrert', 'Alt fra Klinikkstart'].map((f, i) => (
                      <li key={i} style={{ fontSize: '14px', color: 'rgba(251,248,242,0.7)', display: 'flex', gap: '10px' }}>
                        <span style={{ color: 'var(--sage)' }}>+</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/kontakt" className="btn btn-sage" style={{ width: '100%', justifyContent: 'center' }}>Kom i gang</Link>
                </div>

                {/* Klinikk+ */}
                <div className="price-card">
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--muted)', marginBottom: '20px' }}>Klinikk+</p>
                  <p style={{ fontFamily: 'Instrument Serif, serif', fontSize: '48px', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '4px' }}>kr 55.000</p>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '32px' }}>eks. mva · engangs</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
                    {['Alt fra Klinikkpro', 'AI-chatbot integrert', 'Lokal SEO-oppsett', 'Google Analytics', 'Prioritert support'].map((f, i) => (
                      <li key={i} style={{ fontSize: '14px', color: 'var(--ink-soft)', display: 'flex', gap: '10px' }}>
                        <span style={{ color: 'var(--sage)' }}>+</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/kontakt" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>Kom i gang</Link>
                </div>
              </div>
            </Reveal>

            {/* Add-on bar */}
            <Reveal delay={160}>
              <div style={{ background: 'var(--cream-2)', borderRadius: '16px', padding: '28px 40px', display: 'flex', gap: '48px', alignItems: 'center', flexWrap: 'wrap' }}>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--muted)' }}>Tillegg</p>
                <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
                  <div>
                    <p style={{ fontSize: '18px', fontWeight: 500, color: 'var(--ink)' }}>Klinikkdrift</p>
                    <p style={{ fontSize: '14px', color: 'var(--muted)' }}>kr 699,-/mnd · Hosting, sikkerhet, backup, support</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '18px', fontWeight: 500, color: 'var(--ink)' }}>Endringer</p>
                    <p style={{ fontSize: '14px', color: 'var(--muted)' }}>kr 1.300,-/t · Tekstendringer, nye sider, innhold</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── COMPARE TABLE ───────────────────────────────────────── */}
        <section className="section" style={{ background: 'var(--cream-2)' }}>
          <div className="container">
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: '24px' }}>07 — Sammenligning</p>
              <h2 className="h-section" style={{ marginBottom: '16px', maxWidth: '700px' }}>
                Hvorfor <em>Webera</em> og ikke noe annet?
              </h2>
              <p className="lede" style={{ marginBottom: '56px', fontSize: '18px' }}>
                Vi vet at du sannsynligvis vurderer flere alternativer. Her er en ærlig sammenligning – inkludert hvor vi taper.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--paper)', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--line)' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '20px 28px', textAlign: 'left', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', borderBottom: '1px solid var(--line)', background: 'var(--cream)', width: '24%' }}>
                        Kriterium
                      </th>
                      {['Webera', 'WordPress selv', 'Frilanser', 'Stort byrå'].map((h, i) => (
                        <th key={h} style={{ padding: '20px 24px', textAlign: 'left', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '1px solid var(--line)', background: i === 0 ? 'var(--ink)' : 'var(--cream)', color: i === 0 ? 'var(--paper)' : 'var(--muted)' }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { l: 'Pris', v: ['20–55k engangs', '5–15k + tid', '15–40k', '80–250k+'] },
                      { l: 'Leveringstid', v: ['4–10 uker', 'Måneder', '4–12 uker', '3–6 mnd'] },
                      { l: 'Eierskap til siden', v: ['Du eier 100%', 'Du eier 100%', 'Avhengig av avtale', 'Avhengig av avtale'] },
                      { l: 'Spesialisert på helse', v: ['Ja', 'Nei', 'Sjelden', 'Sjelden'] },
                      { l: 'Lokal SEO inkludert', v: ['Ja', 'Plugins, manuelt', 'Tillegg', 'Tillegg'] },
                      { l: 'Skreddersydd design', v: ['Alltid', 'Mal', 'Vanligvis', 'Alltid'] },
                      { l: 'Support etter levering', v: ['Månedlig fastpris', 'Ingen', 'Per time, varierende', 'Dyrt'] },
                      { l: 'Eksklusiv per område', v: ['Ja', '–', 'Nei', 'Nei'] },
                      { l: 'Driftes av klinikkeier', v: ['Ja', 'Nei', 'Nei', 'Nei'] },
                    ].map((row, ri) => (
                      <tr key={ri} style={{ borderBottom: ri < 8 ? '1px solid var(--line)' : 'none' }}>
                        <td style={{ padding: '18px 28px', fontSize: '14px', color: 'var(--ink-soft)', fontWeight: 500 }}>{row.l}</td>
                        {row.v.map((val, vi) => (
                          <td key={vi} style={{ padding: '18px 24px', fontSize: '14px', background: vi === 0 ? 'rgba(20,24,31,0.03)' : 'transparent', color: vi === 0 ? 'var(--sage-deep)' : 'var(--muted)', fontWeight: vi === 0 ? 500 : 400 }}>
                            {vi === 0 && <span style={{ marginRight: '6px', color: 'var(--sage)' }}>✓</span>}
                            {val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────── */}
        <section className="section">
          <div className="container">
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: '24px' }}>08 — Spørsmål</p>
              <h2 className="h-section" style={{ marginBottom: '64px', maxWidth: '600px' }}>
                Det folk lurer på <em>før de booker.</em>
              </h2>
            </Reveal>

            <FaqAccordion />
          </div>
        </section>

        {/* ── INSIGHTS ────────────────────────────────────────────── */}
        <section style={{ paddingBottom: '120px', background: 'var(--cream-2)' }}>
          <div className="container" style={{ paddingTop: '120px' }}>
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: '24px' }}>08 — For klinikkdrivere</p>
              <h2 className="h-section" style={{ marginBottom: '56px' }}>
                Praktiske artikler <em>fra bransjen.</em>
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '40px' }}>
                {[
                  { cat: 'Nettsider', time: '5 min', title: '5 ting en god nettside for helseklinikker må ha', slug: 'nettside-helseklinikk' },
                  { cat: 'SEO & synlighet', time: '6 min', title: 'Slik finner pasienter klinikken din på Google', slug: 'lokal-seo-klinikk' },
                  { cat: 'Teknologi', time: '5 min', title: 'Hvorfor WordPress ikke passer for helseklinikker', slug: 'wordpress-helseklinikk' },
                ].map((a, i) => (
                  <Link key={i} href={`/innsikt/${a.slug}`} className="article-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--sage)' }}>{a.cat}</span>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'var(--muted)' }}>{a.time}</span>
                    </div>
                    <h3 style={{ fontFamily: 'Instrument Serif, serif', fontSize: '22px', color: 'var(--ink)', lineHeight: 1.25, letterSpacing: '-0.01em', marginBottom: '16px' }}>
                      {a.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--sage)' }}>→ Les mer</p>
                  </Link>
                ))}
              </div>
            </Reveal>

            <Reveal delay={160}>
              <Link href="/innsikt" className="btn btn-ghost">Se alle artikler →</Link>
            </Reveal>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────── */}
        <section style={{ paddingBottom: '120px' }}>
          <div className="container" style={{ paddingTop: '120px', borderTop: '1px solid var(--line)' }}>
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: '24px' }}>09 — Kom i gang</p>
              <h2 className="h-section" style={{ marginBottom: '40px', maxWidth: '700px' }}>
                Klar for en nettside som <em>gir deg flere pasienter?</em>
              </h2>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a
                  href="https://calendly.com/holthekiropraktikk/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Book gratis konsultasjon →
                </a>
                <a href="mailto:post@webera.no" className="btn btn-ghost">
                  post@webera.no
                </a>
              </div>
            </Reveal>
          </div>
        </section>

      </main>

      <Footer />

      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(34,197,94,0.2); }
          50% { box-shadow: 0 0 0 6px rgba(34,197,94,0.08); }
        }

        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .service-item:nth-child(2n) {
            border-right: none !important;
          }
          .split-inner {
            grid-template-columns: 1fr !important;
          }
          .split-col:first-child {
            border-right: none !important;
            border-bottom: 1px solid var(--line) !important;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 20px;
          }
          section > .container,
          section[style] {
            padding-left: 20px;
            padding-right: 20px;
          }
          .services-dark {
            padding: 40px 24px !important;
            margin: 0 !important;
            border-radius: 0 !important;
          }
          .excl-card {
            padding: 40px 24px !important;
            margin: 0 !important;
            border-radius: 0 !important;
          }
          .excl-card > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          h1.h-display {
            font-size: clamp(40px, 10vw, 80px) !important;
          }
        }
      `}</style>
    </>
  );
}
