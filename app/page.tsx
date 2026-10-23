import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SkisseTilApp from '@/components/SkisseTilApp';
import HvaViLager from '@/components/HvaViLager';
import Avslor from '@/components/Avslor';
import IdeSkjema from '@/components/IdeSkjema';
import IdeVideo from '@/components/IdeVideo';
import Inspirasjon from '@/components/Inspirasjon';
import SendIdeLenke from '@/components/SendIdeLenke';
import kiropraktiskBilde from '@/public/images/screenshot-kiropraktisk.png';
import helhetligBilde from '@/public/images/screenshot-helhetlig.png';

const strukturertData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Webera AS',
  url: 'https://webera.no',
  email: 'post@webera.no',
  description:
    'Webera tar imot idéer fra bedrifter og privatpersoner og bygger digitale løsninger: apper, interne verktøy, AI-assistenter, automatisering og nettsider.',
  address: { '@type': 'PostalAddress', addressLocality: 'Tønsberg', addressCountry: 'NO' },
  areaServed: { '@type': 'Country', name: 'Norge' },
  knowsLanguage: 'nb',
};

const STEG = [
  ['Du sender idéen', 'Beskriv problemet med dine egne ord. Det trenger ikke være ferdig tenkt.'],
  ['Vi tar en prat', 'Gratis og uforpliktende. Vi spør om det vi trenger for å forstå behovet.'],
  ['Du får et fast pristilbud', 'Med hva som lages, hva det koster og når det er klart.'],
  ['Vi bygger, du følger med', 'Du ser løsningen underveis og kan si fra tidlig.'],
  ['Levering', 'Du får løsningen, og vi avtaler om du vil ha hjelp videre.'],
];

const PROSJEKTER: { navn: string; tekst: string; url: string; domene: string; bilde: StaticImageData }[] = [
  {
    navn: 'Kiropraktisk Senter',
    tekst: 'Nettside og AI-oppsett for en kiropraktorklinikk i Tønsberg.',
    url: 'https://kiropraktisksenter.no',
    domene: 'kiropraktisksenter.no',
    bilde: kiropraktiskBilde,
  },
  {
    navn: 'Helhetlig Kiropraktor',
    tekst: 'Nettside.',
    url: 'https://helhetligkiropraktor.no',
    domene: 'helhetligkiropraktor.no',
    bilde: helhetligBilde,
  },
];

const FAQ: [string, React.ReactNode][] = [
  ['Må idéen være ferdig tenkt?', 'Nei. Det holder å beskrive problemet.'],
  [
    'Hva skjer med idéen jeg sender?',
    <>
      Den leses bare av oss og brukes ikke til noe annet. Se <Link href="/personvern">personvern</Link>.
    </>,
  ],
  ['Hvor lang tid tar det?', 'Avhenger av hva som skal lages. Du får et anslag i tilbudet.'],
  ['Jobber dere med bedrifter utenfor Tønsberg?', 'Ja, det meste foregår digitalt.'],
];

export default function Forside() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(strukturertData) }} />
      <Header />
      <main id="innhold">
        <section className="hero" id="ide" aria-labelledby="hero-tittel">
          <div className="ramme hero-rutenett">
            <div className="hero-hoved">
              <h1 id="hero-tittel">Har du en idé til noe digitalt? Fortell oss om den.</h1>
              <p className="hero-undertekst">
                En app, et verktøy, en AI-assistent eller en automatisering. Vi hjelper deg fra idé til ferdig løsning.
              </p>
              <div data-ikke-dekk>
                <IdeSkjema />
              </div>
              <Inspirasjon />
            </div>
            <div className="hero-aside">
              <SkisseTilApp />
            </div>
          </div>
        </section>

        <HvaViLager />

        <section className="seksjon band-mork" id="slik-fungerer-det" aria-labelledby="steg-tittel">
          <div className="ramme">
            <div className="steg-topp">
              <div className="seksjon-intro" data-avslor>
                <h2 id="steg-tittel">Slik fungerer det</h2>
                <p>Fra første tanke til ferdig løsning, i fem steg.</p>
              </div>
              <IdeVideo />
            </div>
            <ol className="steg" data-avslor>
              {STEG.map(([tittel, tekst]) => (
                <li key={tittel}>
                  <h3>{tittel}</h3>
                  <p>{tekst}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="seksjon" id="eierskap" aria-labelledby="eierskap-tittel">
          <div className="ramme">
            <div className="seksjon-intro" data-avslor>
              <h2 id="eierskap-tittel">Hvem eier løsningen?</h2>
              <p>Det finnes to modeller. Vi avklarer dette før vi begynner, og det står i tilbudet.</p>
            </div>
            <div className="paneler" data-avslor>
              <div className="panel">
                <span className="merke">Vanligst</span>
                <h3>Du eier den</h3>
                <p>Du betaler for utviklingen og eier kode og innhold.</p>
              </div>
              <div className="panel panel-mynte">
                <span className="merke merke-tom">Lavere oppstart</span>
                <h3>Vi eier den, du leier den</h3>
                <p>Passer når løsningen kan være nyttig for flere. Lavere oppstartskostnad for deg.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="seksjon band-mynte" id="laget" aria-labelledby="laget-tittel">
          <div className="ramme">
            <div className="seksjon-intro" data-avslor>
              <h2 id="laget-tittel">Ting vi har laget</h2>
            </div>
            <ul className="prosjekter">
              {PROSJEKTER.map((p) => (
                <li className="prosjekt" key={p.url} data-avslor>
                  <div className="prosjekt-tekst">
                    <h3>{p.navn}</h3>
                    <p>{p.tekst}</p>
                    <p>
                      <a href={p.url} rel="noopener">
                        Besøk {p.domene}
                      </a>
                    </p>
                  </div>
                  <div className="nettleser">
                    <div className="nettleser-topp" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                      <span>{p.domene}</span>
                    </div>
                    <Image
                      src={p.bilde}
                      alt={`Skjermbilde av forsiden til ${p.domene}`}
                      sizes="(min-width: 56rem) 44rem, 100vw"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="seksjon" id="om-oss" aria-labelledby="om-oss-tittel">
          <div className="ramme om-oss">
            <div>
              <h2 id="om-oss-tittel">Om oss</h2>
              <p className="ingress">
                Webera er et lite studio i Tønsberg. Vi lager nettsider, AI-assistenter og verktøy som sparer tid for
                bedrifter i alle bransjer.
              </p>
              <p>
                Vi vet hvordan det er å drive en bedrift med lite tid til overs, og vi liker å finne enkle løsninger på
                konkrete problemer. Derfor tar vi ett prosjekt om gangen.
              </p>
            </div>
            <ul className="fakta" data-avslor>
              <li>
                <strong>Ett</strong> prosjekt om gangen
              </li>
              <li>
                <strong>To virkedager</strong> svartid på nye idéer
              </li>
              <li>
                <strong>Tønsberg</strong> der vi holder til, men det meste foregår digitalt
              </li>
            </ul>
          </div>
        </section>

        <section className="seksjon band-mynte" id="pris" aria-labelledby="pris-tittel">
          <div className="ramme">
            <div className="seksjon-intro" data-avslor>
              <h2 id="pris-tittel">Pris</h2>
              <p>Du vet hva det koster før vi begynner.</p>
            </div>
            <dl className="prisliste" data-avslor>
              <div>
                <dt>Første samtale</dt>
                <dd>Gratis</dd>
              </div>
              <div>
                <dt>Prosjekter, etter at vi har avklart behovet</dt>
                <dd>Fast pris</dd>
              </div>
              <div>
                <dt>Endringer og videre arbeid</dt>
                <dd>
                  1 300 kr <small>per time eks. mva.</small>
                </dd>
              </div>
              <div>
                <dt>Drift og vedlikehold</dt>
                <dd>Etter avtale</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="seksjon" id="ikke" aria-labelledby="ikke-tittel">
          <div className="ramme">
            <div className="seksjon-intro" data-avslor>
              <h2 id="ikke-tittel">Det vi ikke gjør</h2>
            </div>
            <p className="utsagn" data-avslor>
              Vi driver ikke med markedsføring eller annonsering, og vi tar ikke flere prosjekter enn vi rekker. Passer
              ikke idéen din for oss, sier vi det ærlig – og tipser gjerne om hvem som kan hjelpe.
            </p>
          </div>
        </section>

        <section className="seksjon" id="sporsmal" aria-labelledby="faq-tittel" style={{ paddingTop: 0 }}>
          <div className="ramme">
            <div className="seksjon-intro" data-avslor>
              <h2 id="faq-tittel">Vanlige spørsmål</h2>
            </div>
            <div className="faq">
              {FAQ.map(([sporsmal, svar]) => (
                <details key={sporsmal}>
                  <summary>{sporsmal}</summary>
                  <p>{svar}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="seksjon band-mork avslutning" aria-labelledby="avslutning-tittel">
          <div className="ramme">
            <h2 id="avslutning-tittel">Klar til å fortelle om idéen?</h2>
            <p>Vi svarer innen to virkedager. Første samtale er gratis.</p>
            <SendIdeLenke />
          </div>
        </section>
      </main>
      <Footer />
      <Avslor />
    </>
  );
}
