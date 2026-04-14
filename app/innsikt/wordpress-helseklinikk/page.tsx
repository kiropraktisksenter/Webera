import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hvorfor WordPress ikke passer for helseklinikker | Webera',
  description: 'WordPress driver 43 % av alle nettsider. Men for helseklinikker er det sjelden det beste valget. Her er grunnene – og hva vi bruker i stedet.',
  keywords: 'WordPress helseklinikk, webbyrå helsebedrift, Next.js klinikknettside, WordPress alternativ klinikk',
  alternates: { canonical: 'https://webera.no/innsikt/wordpress-helseklinikk' },
  openGraph: {
    title: 'Hvorfor WordPress ikke passer for helseklinikker',
    description: 'WordPress driver 43 % av alle nettsider. Men for helseklinikker er det sjelden det beste valget.',
    url: 'https://webera.no/innsikt/wordpress-helseklinikk',
    images: [{ url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80' }],
  },
};

export default function Article3() {
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
            Teknologi
          </span>
          <h1 className="font-bold leading-tight mb-5" style={{ fontSize: '2.2rem', color: '#0D1B2A', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Hvorfor WordPress ikke passer for helseklinikker
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>Lars Holthe, Webera</span>
            <span>·</span>
            <span>5 min lesing</span>
            <span>·</span>
            <span>April 2025</span>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden mb-12" style={{ height: '360px' }}>
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
            alt="Webutvikling og teknologivalg for helseklinikker"
            className="w-full h-full object-cover"
          />
        </div>

        <div style={{ color: '#1A1A2E', lineHeight: '1.8', fontSize: '1.05rem' }}>
          <p className="mb-8" style={{ color: '#4A5568', fontSize: '1.15rem', lineHeight: '1.75' }}>
            WordPress driver 43 % av alle nettsider på internett. Det er imponerende – men det betyr ikke at det er riktig valg for helseklinikken din. Vi har sett altfor mange klinikker sitte igjen med trege, sårbare og generiske sider fordi noen valgte den «enkle» løsningen.
          </p>
          <p className="mb-10" style={{ color: '#4A5568' }}>
            Vi er ikke WordPress-fiendtlige. Men vi er ærlige. Her er det du bør vite.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>1. Sikkerhet: det mest angrepne CMS-et</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            WordPress er det mest hackede CMS-et på internett – ikke fordi det er dårlig bygget, men fordi det er så utbredt. Angripere målretter massevis av nettsider automatisk, og WordPress-installasjoner uten regelmessige oppdateringer er lette mål.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            For helseklinikker er dette spesielt kritisk. En nettside som viser kontaktinformasjon til pasienter, har et kontaktskjema eller behandler timebestillinger, er mål for søppelpost, phishing og omdømmeskade. De fleste WordPress-hacks oppdages ikke av eierne selv – kun av Google, som da markerer siden med «denne siden kan skade datamaskinen din».
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>2. Plugins gjør siden treg</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            En typisk WordPress-side for en klinikk har 15–30 aktive plugins: ett for SEO, ett for booking, ett for skjema, ett for hurtigbuffer, ett for sikkerhet, ett for sikkerhetskopi, ett for sosiale medier... Du skjønner poenget.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Hvert plugin legger til kode som lastes inn. Resultatet er en side som typisk lastes på 2,5–5 sekunder. Google sin grense for «god» lastetid er under 2,5 sekunder for Largest Contentful Paint – og de fleste plugin-tunge WordPress-sider sliter med å nå dette. Det koster deg synlighet.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>3. Konstant vedlikehold – noen må gjøre det</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            WordPress, dets temaer og alle plugins krever regelmessige oppdateringer. Hopper du over dem, øker sikkerhetssårbarheten. Gjennomfører du dem uten å teste, kan siden knekke. Det skjer oftere enn du tror.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Som klinikkdriver har du nok å tenke på. Å bekymre deg for om noe knakk etter en WordPress-oppdatering er ikke en god bruk av din tid. Vi har sett klinikker som ikke oppdager at kontaktskjemaet sluttet å virke, i uker.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>4. Maler ser like ut – fordi alle bruker dem</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            De mest populære WordPress-temaene for helseklinikker er lastet ned hundretusenvis av ganger. Det betyr at din nettside kan se nøyaktig ut som konkurrentens – og som klinikker i Sverige, Danmark og Tyskland.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Pasienter er vant til å se disse malene, og de signaliserer «dette er en standard nettside» – ikke «dette er en klinikk som bryr seg om detaljene». Et skreddersydd design skiller seg ut og signaliserer faglig stolthet.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>Hva vi bruker: Next.js og moderne webteknologi</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            Vi bygger alle Webera-sider med Next.js – det samme rammeverket som brukes av Netflix, TikTok og Airbnb. Det er ikke overkill for en klinikknettside; det er rett teknologi for jobben.
          </p>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            Fordelene er konkrete: sider laster typisk under 0,5 sekunder, det finnes ingen plugins som kan hackes, designet er 100 % skreddersydd, og vi trenger ikke bruke time på plugin-vedlikehold – kun på å forbedre siden din.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Du betaler litt mer enn for en mal-side. Men du slipper kostnadene (synlig og usynlig) ved en dårlig løsning: tapt synlighet, tapt tillit og tapt tid.
          </p>

          <div className="rounded-2xl p-8 my-12" style={{ backgroundColor: '#EEF9F6', border: '1px solid #C6EAE0' }}>
            <p className="font-semibold mb-2" style={{ color: '#0D1B2A', fontSize: '1.1rem' }}>Har du en WordPress-side du ikke er fornøyd med?</p>
            <p className="mb-5" style={{ color: '#4A5568' }}>Vi vurderer gjerne den nåværende siden din og forteller hva det vil koste å gjøre det ordentlig.</p>
            <Link
              href="/#kontakt"
              className="inline-block px-6 py-3 rounded-lg text-white font-semibold text-sm transition"
              style={{ background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)' }}
            >
              Få en gratis vurdering →
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
