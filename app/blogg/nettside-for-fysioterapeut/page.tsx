import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nettside for fysioterapeut – hva bør den inneholde? | Webera',
  description: 'Alt en fysioterapeut trenger på nettsiden – og hva som får pasienter til å faktisk booke time.',
  keywords: 'nettside fysioterapeut, nettside fysioterapiklinikk, fysioterapi nettside innhold, webbyrå fysioterapeut',
  alternates: { canonical: 'https://webera.no/blogg/nettside-for-fysioterapeut' },
  openGraph: {
    title: 'Nettside for fysioterapeut – hva bør den inneholde?',
    description: 'Alt en fysioterapeut trenger på nettsiden – og hva som får pasienter til å faktisk booke time.',
    url: 'https://webera.no/blogg/nettside-for-fysioterapeut',
    images: [{ url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80' }],
  },
};

export default function Article4() {
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
            Nettside for fysioterapeut – hva bør den inneholde?
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
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80"
            alt="Fysioterapeut behandler pasient"
            className="w-full h-full object-cover"
          />
        </div>

        <div style={{ color: '#1A1A2E', lineHeight: '1.8', fontSize: '1.05rem' }}>
          <p className="mb-8" style={{ color: '#4A5568', fontSize: '1.15rem', lineHeight: '1.75' }}>
            Alt en fysioterapeut trenger på nettsiden – og hva som får pasienter til å faktisk booke time.
          </p>
          <p className="mb-10" style={{ color: '#4A5568' }}>
            En fysioterapinettside gjør mye mer enn å fortelle at du eksisterer. Den skal overbevise en pasient som allerede har vondt om at du er riktig person å oppsøke – og gjøre det enkelt å ta kontakt. Her er hva som ikke kan mangle.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>1. Spesialiseringsområder – vær konkret</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            «Vi behandler alle muskel- og skjelettplager» sier ingenting. Pasienter søker etter løsningen på sitt spesifikke problem – de googler «fysioterapeut idrettsskade Oslo» eller «fysioterapi ryggproblemer Stavanger». Nettsiden din må speile det de faktisk leter etter.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            List opp spesialiseringsområder eksplisitt: sportsrehabilitering, rygg- og nakkebehandling, idrettsskader, post-operativ rehabilitering, hodepine og TMJ, eller hva du faktisk er god på. Jo mer spesifikk du er, desto mer relevant fremstår du – og desto bedre rangerer du i Google.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>2. HELFO-informasjon – pasienter lurer alltid på dette</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            Et av de hyppigste spørsmålene pasienter stiller seg før de booker time hos en fysioterapeut: «kan jeg få refusjon fra HELFO?» Hvis du har driftstilskudd og pasienten kan få dekket deler av timen, si det tydelig på nettsiden.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Det holder med én linje: «Vi har driftstilskudd – du betaler egenandel og får refusjon fra HELFO.» Denne informasjonen øker konverteringen fordi den fjerner en vanlig bekymring. Pasienter som er usikre på pris, dropper ofte å booke. Gjør det tydelig.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>3. Presentasjon av behandlerne – mennesker booker mennesker</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            Fysioterapi er personlig. Pasienten skal stole kroppen sin til deg – og det starter med at de kjenner hvem du er. Et ekte portrettbilde, en kort presentasjon av utdanning, erfaring og hva du brenner for faglig, gjør mer for konverteringen enn noe annet innholdsgrep.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Unngå stockfoto av «en eller annen terapeut». Ekte bilder skaper mer tillit enn perfekte bilder. Legg gjerne til en linje om deg som person – det gir pasienten noe å forholde seg til allerede før første time.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>4. Booking som faktisk fungerer på mobil</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            Over 70 % av helserelaterte søk skjer på mobil. Bookingknappen må være synlig uten å scrolle – både på desktop og på en 6-tommers skjerm. Integrasjon mot systemer som Clinico, Zuite eller Physio Manager lar pasienten booke direkte uten å måtte ringe.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Klinikker som krever at pasienten ringer for å bestille time, mister konsekvent pasienter til konkurrenter som ikke gjør det. I 2025 er direkte nettbooking en forventning – ikke et ekstra gode.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>5. Lokal SEO: slik finner pasienter deg på Google</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            En veldesignet nettside som ingen finner, hjelper ikke. Fysioterapiklinikker konkurrerer lokalt – og lokal SEO avgjør om du havner øverst eller på side 3. Det krever riktig teknisk struktur: schema markup for HealthcareBusiness, geografisk målrettede landingssider og en fullstendig Google Business-profil.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Vi bygger alle klinikksider med dette innebygd fra start – ikke som en etterpåklokskap. Resultatet er at nettsiden jobber for deg døgnet rundt, og at nye pasienter finner deg uten at du betaler for annonser.
          </p>

          <div className="rounded-2xl p-8 my-12" style={{ backgroundColor: '#EEF9F6', border: '1px solid #C6EAE0' }}>
            <p className="font-semibold mb-2" style={{ color: '#0D1B2A', fontSize: '1.1rem' }}>Driver du fysioterapiklinikk og trenger ny nettside?</p>
            <p className="mb-5" style={{ color: '#4A5568' }}>Vi gjennomgår din nåværende løsning gratis og forteller deg hva som skal til for å få flere pasienter.</p>
            <Link
              href="/#kontakt"
              className="inline-block px-6 py-3 rounded-lg text-white font-semibold text-sm transition"
              style={{ background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)' }}
            >
              Få gratis gjennomgang →
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
