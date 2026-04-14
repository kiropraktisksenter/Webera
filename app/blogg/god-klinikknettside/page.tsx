import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hva skiller en god klinikknettside fra en dårlig? En kiropraktor forteller | Webera',
  description: 'Jeg driver selv klinikk. Her er hva jeg ser når jeg besøker andre klinikkers nettsider – og hva som faktisk fungerer.',
  keywords: 'god klinikknettside, dårlig nettside klinikk, kiropraktor nettside tips, hva fungerer klinikknettside',
  alternates: { canonical: 'https://webera.no/blogg/god-klinikknettside' },
  openGraph: {
    title: 'Hva skiller en god klinikknettside fra en dårlig? En kiropraktor forteller',
    description: 'Jeg driver selv klinikk. Her er hva jeg ser når jeg besøker andre klinikkers nettsider – og hva som faktisk fungerer.',
    url: 'https://webera.no/blogg/god-klinikknettside',
    images: [{ url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1200&q=80' }],
  },
};

export default function Article5() {
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
            Innsikt
          </span>
          <h1 className="font-bold leading-tight mb-5" style={{ fontSize: '2.2rem', color: '#0D1B2A', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Hva skiller en god klinikknettside fra en dårlig? En kiropraktor forteller
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>Webera</span>
            <span>·</span>
            <span>6 min lesing</span>
            <span>·</span>
            <span>April 2025</span>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden mb-12" style={{ height: '360px' }}>
          <img
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1200&q=80"
            alt="Kiropraktor vurderer behandlingsalternativer"
            className="w-full h-full object-cover"
          />
        </div>

        <div style={{ color: '#1A1A2E', lineHeight: '1.8', fontSize: '1.05rem' }}>
          <p className="mb-8" style={{ color: '#4A5568', fontSize: '1.15rem', lineHeight: '1.75' }}>
            Jeg driver selv klinikk. Her er hva jeg ser når jeg besøker andre klinikkers nettsider – og hva som faktisk fungerer.
          </p>
          <p className="mb-10" style={{ color: '#4A5568' }}>
            Jeg har besøkt hundrevis av norske klinikksider de siste årene – dels som forskning, dels fordi jeg selv har vært pasient. Mønsteret er alltid det samme: de fleste nettsidene gjør de samme feilene. Og en liten håndfull skiller seg ut på en måte som tydelig gir dem flere bestillinger. Her er forskjellene.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>Det første jeg sjekker: lastetid og mobilvisning</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            Jeg åpner siden på telefonen. Laster den raskt? Er teksten lesbar uten å zoome? Er bookingknappen synlig uten å scrolle? Svarer jeg nei på noen av disse, lukker jeg fanen. Det gjør pasientene dine også.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Jeg ser dette altfor ofte: sider som ser OK ut på desktop, men som på mobil har for liten tekst, knapper som sitter for tett eller et kontaktskjema som er nesten umulig å fylle ut. Det er ikke et designproblem – det er et inntektsproblem. Klinikken mister pasienter stille, uten å vite om det.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>Tillitssignaler – det som avgjør om pasienten booker</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            Når en pasient besøker nettsiden din, tar de en avgjørelse på noen sekunder: «kan jeg stole på denne personen med kroppen min?» Den avgjørelsen tas ikke på bakgrunn av tekst – den tas på bakgrunn av inntrykk.
          </p>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            Gode tillitssignaler: ekte portrettbilde av behandler, tydelig presentasjon av utdanning og antall år erfaring, synlige Google-anmeldelser med gjennomsnittsskår og ekte tilbakemeldinger. Dårlige tillitssignaler: stockfoto av «noen i hvit frakk», ingen informasjon om hvem som jobber der, og ingen anmeldelser – eller enda verre, anmeldelser det ikke er svart på.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Jeg husker én gang jeg besøkte en klinikk jeg ikke kjente til. Siden hadde ekte bilde av behandleren, kort tekst om ham som person – hva han spesielt interesserte seg for faglig, og én pasienthistorie. Jeg booket umiddelbart. Det er tillit i praksis.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>Booking: tre klikk eller ring oss</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            Nettsider som gjør det lett å booke, vinner. Det er så enkelt. Og likevel ser jeg stadig sider som skjuler bookingknappen i footeren, bak en kontaktside, eller som ikke har nettbooking i det hele tatt.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Den beste løsningen er direkte integrasjon mot et bookingsystem – Clinico, Zuite, Physio Manager – der pasienten ser ledig tid og bekrefter med to klikk. Sekundærløsningen er et enkelt kontaktskjema som ser ut til å faktisk bli besvart. «Send oss en e-post» som ikke engang er klikkbar, er ikke en løsning.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>Innhold som faktisk konverterer</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            De beste klinikksidene jeg har sett, har én ting til felles: de snakker til pasientens problem, ikke om klinikkens tjenester. Forskjellen er subtil, men avgjørende.
          </p>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            «Vi tilbyr kiropraktisk behandling» sier ingenting. «Har du smerter i rygg, nakke eller skulder etter jobb?» treffer. Det første er beskrivende. Det andre er gjenkjennelig. Pasienter booker når de kjenner seg igjen i det de leser.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Skriv om problemene pasientene dine faktisk møter opp med. Beskriv forløpet av en behandling slik at de vet hva de går til. Forklar hva som skjer i første time. Det reduserer terskelen for å booke enormt.
          </p>

          <h2 className="font-bold mt-12 mb-4" style={{ fontSize: '1.4rem', color: '#0D1B2A' }}>Det jeg ser altfor sjelden</h2>
          <p className="mb-4" style={{ color: '#4A5568' }}>
            Lokal SEO-struktur som faktisk er gjennomtenkt. De fleste klinikker har en nettside, men få har en nettside som er bygget for å rangere i lokale søk. Det betyr schema markup, geografisk målrettede landingssider, en fullstendig og aktiv Google Business-profil – og en side som laster fort nok til at Google faktisk vil vise den.
          </p>
          <p className="mb-6" style={{ color: '#4A5568' }}>
            Jeg ser dette som en stor mulighet. I de fleste norske byer er konkurransen om de øverste plasseringene i Google lavere enn folk tror. En klinikk som investerer i riktig teknisk fundament, kan relativt raskt ta de øverste plassene – og holde dem.
          </p>

          <div className="rounded-2xl p-8 my-12" style={{ backgroundColor: '#EEF9F6', border: '1px solid #C6EAE0' }}>
            <p className="font-semibold mb-2" style={{ color: '#0D1B2A', fontSize: '1.1rem' }}>Vil du vite hvordan klinikksiden din faktisk fremstår?</p>
            <p className="mb-5" style={{ color: '#4A5568' }}>Vi gjennomgår siden din og gir deg en ærlig vurdering – gratis, uten forpliktelser.</p>
            <Link
              href="/#kontakt"
              className="inline-block px-6 py-3 rounded-lg text-white font-semibold text-sm transition"
              style={{ background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)' }}
            >
              Få gratis vurdering →
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
