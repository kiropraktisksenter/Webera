import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Slik finner pasienter klinikken din på Google | Webera',
  description: 'Lokal SEO for helseklinikker forklart enkelt. Lær hvordan du dukker opp når pasienter søker etter kiropraktor, fysioterapeut eller psykolog i nærheten.',
  keywords: 'lokal SEO klinikk, lokal SEO kiropraktor, Google Business helseklinikk, hvordan dukke opp på Google klinikk',
  alternates: { canonical: 'https://webera.no/innsikt/lokal-seo-klinikk' },
  openGraph: {
    title: 'Slik finner pasienter klinikken din på Google',
    description: 'Lokal SEO for helseklinikker forklart enkelt.',
    url: 'https://webera.no/innsikt/lokal-seo-klinikk',
    images: [{ url: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80' }],
  },
};

export default function Article2() {
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
            SEO & synlighet
          </span>
          <h1 className="font-bold leading-tight mb-5" style={{ fontSize: '2.2rem', color: '#0D1B2A', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Slik finner pasienter klinikken din på Google
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>Lars Holthe, Webera</span>
            <span>·</span>
            <span>6 min lesing</span>
            <span>·</span>
            <span>April 2025</span>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden mb-12" style={{ height: '360px' }}>
          <img
            src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80"
            alt="Pasienter søker etter klinikk på Google"
            className="w-full h-full object-cover"
          />
        </div>

        <div style={{ color: '#1A1A2E', lineHeight: '1.8', fontSize: '1.05rem' }}>
          <p className="mb-8" style={{ color: '#4A5568', fontSize: '1.15rem', lineHeight: '1.75' }}>
            Hvert eneste dag søker hundrevis av nordmenn etter «kiropraktor [by]», «fysioterapeut nærheten» eller «psykolog Oslo». Spørsmålet er enkelt: er det deg de finner?
          </p>
          <p className="mb-10" style={{ color: '#4A5568' }}>
            Lokal SEO handler ikke om å jukse systemet – det handler om å gi Google den informasjonen den trenger for å forstå hvem du er, hva du tilbyr, og hvem du kan hjelpe. Her er det du faktisk trenger å gjøre.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>1. Google Business Profile er grunnmuren</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            Google Business Profile (tidligere Google My Business) er den aller viktigste faktoren for lokal synlighet. Det er profilen som dukker opp i Google Maps og i det lokale søkeresultatet øverst på siden – det vi kaller «the local pack».
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Profilen skal inneholde: korrekt adresse og åpningstider, profesjonelle bilder av klinikken og behandlerne, en tydelig beskrivelse av tjenestene med relevante nøkkelord, og riktig kategori (f.eks. «Kiropraktor» eller «Fysioterapiklinikk»). En ufullstendig profil er som å ha en resepsjon med ingen i skranken.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>2. Konsistente NAP-data – navn, adresse, telefon</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            Google krysssjekker informasjonen om klinikken din på tvers av internett. Hvis adressen din er oppgitt litt ulikt på Google, på nettsiden din, i Gule Sider og på Finn.no, sender det et usikkert signal – og du rangerer lavere.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Gå gjennom alle steder klinikken din er nevnt online og sørg for at navn, adresse og telefonnummer er helt identiske overalt. Det høres kjedelig ut, men det er en av de mest effektive lokale SEO-tiltakene du kan gjøre.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>3. Anmeldelser er synlighetsmagnet</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            Google rangerer klinikker med mange og gode anmeldelser høyere. Ikke bare det – pasienter leser anmeldelser aktivt. Antall stjerner og innholdet i tilbakemeldingene påvirker direkte om de booker time hos deg eller konkurrenten.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Den mest effektive måten å få flere anmeldelser på: spør pasientene direkte etter behandling – enten muntlig i klinikken eller via en enkel SMS/e-post med direktelenke til anmeldelsessiden. En lenke gjør hele forskjellen. De fleste vil gi deg fem stjerner – de bare glemmer det.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>4. Lokale søkeord på nettsiden din</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            Nettsiden din må fortelle Google eksplisitt hva du heter, hvor du holder til, og hva du tilbyr. Dette gjøres ved å naturlig inkludere stedsnavn og tjenestetyper i titler, beskrivelser og brødtekst.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Eksempel: I stedet for bare «Tjenester», lag en seksjon som heter «Kiropraktorbehandling i Tønsberg» eller «Fysioterapi for idrettsskader – Oslo sentrum». Det hjelper Google forstå hva siden er relevant for, og for hvem.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>5. Schema markup – det Google ikke ser, teller likevel</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            Schema markup er strukturert data i koden til nettsiden som forteller Google eksakt hva virksomheten din er. For helseklinikker bruker vi <em>LocalBusiness</em> og <em>HealthcareBusiness</em>-markup med adresse, åpningstider, spesialiseringer og tjenester.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Det er usynlig for besøkende, men svært synlig for Google – og det er en av de tekniske SEO-tiltakene som raskest forbedrer lokal synlighet. Vi legger dette inn i alle nettsider vi bygger.
          </p>

          <div className="rounded-2xl p-8 my-12" style={{ backgroundColor: '#EEF9F6', border: '1px solid #C6EAE0' }}>
            <p className="font-semibold mb-2" style={{ color: '#0D1B2A', fontSize: '1.1rem' }}>Vil du vite hvor klinikken din står i Google akkurat nå?</p>
            <p className="mb-5" style={{ color: '#4A5568' }}>Vi gjør en gratis gjennomgang av din synlighet og forteller deg konkret hva som skal til.</p>
            <Link
              href="/#kontakt"
              className="inline-block px-6 py-3 rounded-lg text-white font-semibold text-sm transition"
              style={{ background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)' }}
            >
              Få gratis SEO-gjennomgang →
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
