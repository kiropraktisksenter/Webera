import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nettside for naprapat – hva trenger du? | Webera',
  description: 'Naprapati er mindre kjent enn fysioterapi. Nettsiden din må derfor jobbe ekstra hardt for å forklare hva du gjør – og hvorfor pasienten skal velge deg.',
  keywords: 'nettside naprapat, naprapat nettside innhold, webbyrå naprapat, naprapatklinikk nettside',
  alternates: { canonical: 'https://webera.no/blogg/nettside-for-naprapat' },
  openGraph: {
    title: 'Nettside for naprapat – hva trenger du?',
    description: 'Naprapati er mindre kjent enn fysioterapi. Nettsiden din må jobbe ekstra hardt for å forklare hva du gjør.',
    url: 'https://webera.no/blogg/nettside-for-naprapat',
    images: [{ url: 'https://images.unsplash.com/photo-1544991936-9464fa57a54a?w=1200&q=80' }],
  },
};

export default function Article6() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b px-6 py-4 flex items-center justify-between sticky top-0 bg-white z-10" style={{ borderColor: '#EEF2F7' }}>
        <Link href="/">
          <img src="/images/Webera Logo.svg" alt="Webera" style={{ height: '48px', width: 'auto', clipPath: 'inset(0 0 38% 0)' }} />
        </Link>
        <Link href="/innsikt" className="text-sm text-gray-500 hover:text-gray-800 transition">
          ← Alle artikler
        </Link>
      </nav>

      <article className="max-w-2xl mx-auto px-6 py-16">
        <div className="mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5" style={{ backgroundColor: '#EEF9F6', color: '#0891B2' }}>
            Nettsider
          </span>
          <h1 className="font-bold leading-tight mb-5" style={{ fontSize: '2.2rem', color: '#0D1B2A', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Nettside for naprapat – hva trenger du?
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>Webera</span>
            <span>·</span>
            <span>5 min lesing</span>
            <span>·</span>
            <span>April 2025</span>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden mb-12" style={{ height: '360px' }}>
          <img
            src="https://images.unsplash.com/photo-1544991936-9464fa57a54a?w=1200&q=80"
            alt="Naprapat behandler pasient med manuell terapi"
            className="w-full h-full object-cover"
          />
        </div>

        <div style={{ color: '#1A1A2E', lineHeight: '1.8', fontSize: '1.05rem' }}>
          <p className="mb-8" style={{ color: '#4A5568', fontSize: '1.15rem', lineHeight: '1.75' }}>
            Naprapati er mindre kjent enn fysioterapi. Nettsiden din må derfor jobbe ekstra hardt for å forklare hva du gjør – og hvorfor pasienten skal velge deg.
          </p>
          <p className="mb-10" style={{ color: '#4A5568' }}>
            Som naprapat møter du en utfordring de fleste kiropraktorer og fysioterapeuter slipper unna: du må først overbevise pasienten om hva naprapati i det hele tatt er, og deretter overbevise dem om at det er riktig for nettopp dem. Nettsiden er der dette arbeidet begynner.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>1. Forklar naprapati – anta ikke at folk vet</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            En stor andel av de som lander på nettsiden din, vet ikke nøyaktig hva naprapati er. De har kanskje hørt om det, fått en anbefaling, eller dukket opp i et Google-søk. Det første siden din må gjøre, er å svare på det uuttalte spørsmålet: «hva er dette, og er det noe for meg?»
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Hold det enkelt: naprapati er manuell behandling av smerter og stivhet i muskler, bindevev og ledd – særlig i rygg, nakke og skuldre. Forklar hva en behandling innebærer, hvor lenge den varer, og hva du faktisk gjør. En pasient som forstår hva de går til, booker time. En som er usikker, gjør det ikke.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>2. Vær tydelig på hvem du hjelper</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            Naprapati er spesielt effektivt for bestemte pasientgrupper – kontorarbeidere med nakkespenninger, folk med ryggproblemer, idrettsutøvere med muskelskader, eller pasienter som ikke er blitt friske av andre behandlinger. Si det eksplisitt.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            En seksjon som heter «Hvem hjelper vi?» eller «Passer naprapati for deg?» gjør to ting: den hjelper riktig pasient å kjenne seg igjen, og den kvalifiserer besøkende slik at de som faktisk booker, er pasienter du kan hjelpe. Det er god markedsføring og god pasientbehandling på én gang.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>3. Bygge tillit i en mindre kjent bransje</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            Fordi naprapati er mindre etablert i folks bevissthet enn fysioterapi, er tillitsbygging ekstra viktig. Autorisasjon, utdanning og faglig tilknytning bør fremgå tydelig – ikke gjemt i en «Om oss»-side, men synlig på forsiden.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Pasientuttalelser er ekstra verdifulle her. En pasient som forteller at de var skeptiske, men nå er smertefrie etter tre behandlinger, gjør mer for konverteringen enn noen markedsføringsteori. Be fornøyde pasienter om å legge igjen en Google-anmeldelse – og vis disse fremtredende på siden.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>4. Lokal SEO: slik rangerer naprapater i Google</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            Søkevolumet for «naprapat» er lavere enn for «fysioterapeut», men det betyr også at konkurransen er lavere. Med riktig SEO-struktur kan du relativt raskt ta topplasseringer for «naprapat [by]» – og disse søkene har høy intensjon: folk som søker, ønsker å bestille time.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Nøkkelkomponentene: en fullstendig Google Business-profil med riktig kategori («Naprapat»), NAP-data (navn, adresse, telefon) som er identiske overalt på nett, og en nettside med schema markup for HealthcareBusiness med korrekte tjenestebeskrivelser. Vi bygger alt dette inn i klinikksidene vi lager.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>5. Timebestilling: gjør det enkelt å si ja</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            En pasient som har lest om naprapati, forstått hva det er, og blitt overbevist – men så møter et tungvint bookingsystem, faller fra. Bookingknappen skal være synlig, bookingprosessen skal ta under to minutter, og bekreftelsen skal komme umiddelbart.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Direkte integrasjon mot bookingsystemet du allerede bruker, er den beste løsningen. Pasienten velger dag og tid selv, betaler egenandel om nødvendig, og får en automatisk bekreftelse og påminnelse. Det reduserer no-shows og frigjør tid i resepsjonen.
          </p>

          <div className="rounded-2xl p-8 my-12" style={{ backgroundColor: '#EEF9F6', border: '1px solid #C6EAE0' }}>
            <p className="font-semibold mb-2" style={{ color: '#0D1B2A', fontSize: '1.1rem' }}>Driver du naprapatklinikk og vil ha en nettside som faktisk gir deg pasienter?</p>
            <p className="mb-5" style={{ color: '#4A5568' }}>Vi kjenner utfordringene i bransjen og bygger sider som forklarer, overtaler og konverterer.</p>
            <Link
              href="/#kontakt"
              className="inline-block px-6 py-3 rounded-lg text-white font-semibold text-sm transition"
              style={{ background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)' }}
            >
              Book gratis konsultasjon →
            </Link>
          </div>
        </div>

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
