import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '5 ting en god nettside for helseklinikker må ha | Webera',
  description: 'Hva skiller en nettside som gir deg nye pasienter fra en som bare «er der»? Her er de fem elementene vi alltid prioriterer for helseklinikker.',
  keywords: 'nettside helseklinikk, nettside kiropraktor, nettside fysioterapeut, hva bør en klinikknettside ha',
  alternates: { canonical: 'https://webera.no/innsikt/nettside-helseklinikk' },
  openGraph: {
    title: '5 ting en god nettside for helseklinikker må ha',
    description: 'Hva skiller en nettside som gir deg nye pasienter fra en som bare «er der»?',
    url: 'https://webera.no/innsikt/nettside-helseklinikk',
    images: [{ url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80' }],
  },
};

export default function Article1() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple nav */}
      <nav className="border-b px-6 py-4 flex items-center justify-between sticky top-0 bg-white z-10" style={{ borderColor: '#EEF2F7' }}>
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/Webera Logo.svg" alt="Webera" style={{ height: '48px', width: 'auto', clipPath: 'inset(0 0 38% 0)' }} />
        </Link>
        <Link href="/innsikt" className="text-sm text-gray-500 hover:text-gray-800 transition flex items-center gap-1">
          ← Alle artikler
        </Link>
      </nav>

      <article className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5" style={{ backgroundColor: '#EEF9F6', color: '#0891B2' }}>
            Nettsider
          </span>
          <h1 className="font-bold leading-tight mb-5" style={{ fontSize: '2.2rem', color: '#0D1B2A', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            5 ting en god nettside for helseklinikker må ha
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>Lars Holthe, Webera</span>
            <span>·</span>
            <span>5 min lesing</span>
            <span>·</span>
            <span>April 2025</span>
          </div>
        </div>

        {/* Hero image */}
        <div className="rounded-2xl overflow-hidden mb-12" style={{ height: '360px' }}>
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
            alt="Nettside for helseklinikk på laptop"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose-content" style={{ color: '#1A1A2E', lineHeight: '1.8', fontSize: '1.05rem' }}>
          <p className="mb-8" style={{ color: '#4A5568', fontSize: '1.15rem', lineHeight: '1.75' }}>
            En nettside for helseklinikk er ikke som en vanlig bedriftsside. Pasientene dine søker etter deg i en sårbar situasjon – de har vondt, de er usikre, og de tar en beslutning om hvem de skal stole kroppen sin til. Første inntrykk er avgjørende.
          </p>

          <p className="mb-10" style={{ color: '#4A5568' }}>
            Vi har bygget nettsider for klinikker fra Tromsø til Kristiansand, og driver selv klinikk til daglig. Her er de fem tingene vi aldri kutter på.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>1. Tydelig timebestilling – synlig umiddelbart</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            Den viktigste funksjonen på en klinikknettside er bestillingsknappen. Den skal ikke gjemmes i menyen eller dukke opp etter tre scrolls. Den skal være synlig med en gang siden lastes – både på mobil og desktop.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Integrasjon mot bestillingssystemer som Clinico, Zuite eller Timely gjør at pasienten kan booke direkte uten å ringe. I 2025 er dette ikke en bonus – det er forventet. Klinikker som tvinger pasienter til å ringe, mister dem til konkurrenten som ikke gjør det.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>2. Mobiloptimalisert design – ikke bare «responsivt»</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            Over 70 % av alle søk etter helsetjenester skjer på mobiltelefon. Google rangerer i tillegg mobilvennlige sider høyere – det kalles Mobile-First Indexing. Det betyr at det er mobilversjonen av siden din Google primært bruker for å bestemme din plassering i søkeresultatene.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            «Responsivt design» er ikke nok. En nettside som ser bra ut på PC men er klønete å bruke på mobil, konverterer dårlig. Vi designer alltid mobil-first og sørger for at knapper er store nok, tekst er lesbar og booking fungerer gnisfritt på alle enheter.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>3. Lokal SEO-struktur innebygd fra start</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            Å dukke opp når noen søker «kiropraktor Tønsberg» eller «fysioterapeut Oslo sentrum» er ikke tilfeldigheter – det er resultatet av bevisst SEO-arbeid. Det starter med riktig teknisk struktur i nettsiden, ikke etterpå som en tilleggstjeneste.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Vi bygger alle klinikksider med schema markup for LocalBusiness og HealthcareBusiness, geografisk målrettede landingssider og optimaliserte meta-titler. Kombinert med en oppdatert Google Business-profil er dette grunnmuren for lokal synlighet.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>4. Tillit og troverdighet – pasienten bestemmer på sekunder</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            Studier viser at folk bruker under 3 sekunder på å avgjøre om de stoler på en nettside. For helseklinikker er tillit alt. Elementer som bygger tillit: ekte bilde av behandleren (ikke stockfoto), tydelig presentasjon av utdanning og erfaring, pasientanmeldelser, og informasjon om behandlingsforløpet.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Vi anbefaler alltid en «Meet the team»-seksjon og at behandlerne presenteres som mennesker, ikke bare fagpersoner. Folk booker et møte med en person, ikke et firma.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>5. Lynrask lastetid – Google belønner det</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            Google har gjort lastetid til en rangeringsfaktor. Siden vår måles på Core Web Vitals – tre målinger som sier noe om brukeropplevelsen: lastetid, interaksjonstid og visuell stabilitet. En side som laster på over 3 sekunder mister 53 % av mobilbrukerne før de i det hele tatt ser innholdet.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Nettsider bygget med moderne teknologi som Next.js laster typisk under 0,5 sekunder – langt raskere enn de fleste WordPress-sider med plugins. Det gir deg bedre plassering i Google og flere pasienter som faktisk ser siden din.
          </p>

          {/* Inline CTA */}
          <div className="rounded-2xl p-8 my-12" style={{ backgroundColor: '#EEF9F6', border: '1px solid #C6EAE0' }}>
            <p className="font-semibold mb-2" style={{ color: '#0D1B2A', fontSize: '1.1rem' }}>Mangler klinikksiden din et av disse elementene?</p>
            <p className="mb-5" style={{ color: '#4A5568' }}>Book en gratis 30-minutters samtale – vi ser på din nåværende nettside og hva som skal til.</p>
            <Link
              href="/#kontakt"
              className="inline-block px-6 py-3 rounded-lg text-white font-semibold text-sm transition"
              style={{ background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)' }}
            >
              Book gratis gjennomgang →
            </Link>
          </div>
        </div>

        {/* Back */}
        <div className="border-t pt-8 mt-4" style={{ borderColor: '#EEF2F7' }}>
          <Link href="/innsikt" className="text-sm hover:underline" style={{ color: '#0891B2' }}>
            ← Tilbake til alle artikler
          </Link>
        </div>
      </article>

      <footer className="py-8 px-6 text-center border-t" style={{ borderColor: '#EEF2F7', backgroundColor: '#F7F9FC' }}>
        <p className="text-sm text-gray-400">© 2025 Webera – Nettsider eksklusivt for helsebedrifter · <Link href="/" className="hover:underline" style={{ color: '#0891B2' }}>webera.no</Link></p>
      </footer>
    </div>
  );
}
