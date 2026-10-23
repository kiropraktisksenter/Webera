import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import IdeSkjema from '@/components/IdeSkjema';
import Inspirasjon from '@/components/Inspirasjon';
import SendIdeLenke from '@/components/SendIdeLenke';
import larsBilde from '@/public/images/lars-holth.png';
import kiropraktiskBilde from '@/public/images/screenshot-kiropraktisk.png';
import helhetligBilde from '@/public/images/screenshot-helhetlig.png';

const strukturertData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Webera AS',
  url: 'https://webera.no',
  email: 'post@webera.no',
  description:
    'Lars Holth tar imot idéer fra bedrifter og privatpersoner og bygger digitale løsninger: apper, interne verktøy, AI-assistenter, automatisering og nettsider.',
  address: { '@type': 'PostalAddress', addressLocality: 'Tønsberg', addressCountry: 'NO' },
  areaServed: { '@type': 'Country', name: 'Norge' },
  founder: { '@type': 'Person', name: 'Lars Holth' },
  knowsLanguage: 'nb',
};

const STEG = [
  ['Du sender idéen.', 'Beskriv problemet med dine egne ord. Det trenger ikke være ferdig tenkt.'],
  ['Vi tar en prat.', 'Gratis og uforpliktende. Jeg spør om det jeg trenger for å forstå behovet.'],
  ['Du får et fast pristilbud.', 'Med hva som lages, hva det koster og når det er klart.'],
  ['Jeg bygger, du følger med.', 'Du ser løsningen underveis og kan si fra tidlig.'],
  ['Levering.', 'Du får løsningen, og vi avtaler om du vil ha hjelp videre.'],
];

const FAQ: [string, React.ReactNode][] = [
  ['Må idéen være ferdig tenkt?', 'Nei. Det holder å beskrive problemet.'],
  [
    'Hva skjer med idéen jeg sender?',
    <>
      Den leses bare av meg og brukes ikke til noe annet. Se <Link href="/personvern">personvern</Link>.
    </>,
  ],
  ['Hvor lang tid tar det?', 'Avhenger av hva som skal lages. Du får et anslag i tilbudet.'],
  ['Jobber du med bedrifter utenfor Tønsberg?', 'Ja, det meste foregår digitalt.'],
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
              <h1 id="hero-tittel">Har du en idé til noe digitalt? Fortell meg om den.</h1>
              <div data-ikke-dekk>
                <IdeSkjema />
              </div>
            </div>
            <div className="hero-aside">
              <Inspirasjon />
            </div>
          </div>
        </section>

        <section className="seksjon" id="slik-fungerer-det" aria-labelledby="steg-tittel">
          <div className="ramme tekstkolonne">
            <h2 id="steg-tittel">Slik fungerer det</h2>
            <ol className="steg">
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
            <h2 id="eierskap-tittel">Hvem eier løsningen?</h2>
            <div className="to-deler">
              <div>
                <h3>Du eier den.</h3>
                <p>Du betaler for utviklingen og eier kode og innhold. Vanligst.</p>
              </div>
              <div>
                <h3>Jeg eier den, du leier den.</h3>
                <p>Passer når løsningen kan være nyttig for flere. Lavere oppstartskostnad for deg.</p>
              </div>
            </div>
            <p style={{ marginTop: '2rem' }}>Vi avklarer dette før jeg begynner, og det står i tilbudet.</p>
          </div>
        </section>

        <section className="seksjon" id="laget" aria-labelledby="laget-tittel">
          <div className="ramme">
            <h2 id="laget-tittel">Ting jeg har laget</h2>
            <ul className="prosjekter">
              <li className="prosjekt">
                <div>
                  <h3>Kiropraktisk Senter</h3>
                  <p>Nettside og AI-oppsett for egen klinikk.</p>
                  <p>
                    <a href="https://kiropraktisksenter.no" rel="noopener">
                      kiropraktisksenter.no
                    </a>
                  </p>
                </div>
                <Image
                  src={kiropraktiskBilde}
                  alt="Skjermbilde av forsiden til kiropraktisksenter.no"
                  sizes="(min-width: 56rem) 40rem, 100vw"
                />
              </li>
              <li className="prosjekt">
                <div>
                  <h3>Helhetlig Kiropraktor</h3>
                  <p>Nettside.</p>
                  <p>
                    <a href="https://helhetligkiropraktor.no" rel="noopener">
                      helhetligkiropraktor.no
                    </a>
                  </p>
                </div>
                <Image
                  src={helhetligBilde}
                  alt="Skjermbilde av forsiden til helhetligkiropraktor.no"
                  sizes="(min-width: 56rem) 40rem, 100vw"
                />
              </li>
            </ul>
          </div>
        </section>

        <section className="seksjon" id="om-lars" aria-labelledby="om-lars-tittel">
          <div className="ramme om-lars">
            <div>
              <h2 id="om-lars-tittel">Om Lars</h2>
              <p className="ingress">
                Jeg er kiropraktor og driver min egen klinikk i Tønsberg. Der har jeg bygget det meste av det digitale
                selv – nettside, AI-assistent og verktøy som sparer meg for tid.
              </p>
              <p>
                Jeg vet hvordan det er å drive en bedrift med lite tid til overs, og jeg liker å finne enkle løsninger
                på konkrete problemer. Fordi jeg også står i klinikken, tar jeg ett prosjekt om gangen.
              </p>
            </div>
            <Image
              className="portrett"
              src={larsBilde}
              alt="Portrett av Lars Holth"
              sizes="(min-width: 56rem) 18rem, 100vw"
              style={{ maxWidth: '18rem', width: '100%' }}
            />
          </div>
        </section>

        <section className="seksjon" id="pris" aria-labelledby="pris-tittel">
          <div className="ramme">
            <h2 id="pris-tittel">Pris</h2>
            <dl className="prisliste">
              <div>
                <dt>Første samtale</dt>
                <dd>Gratis</dd>
              </div>
              <div>
                <dt>Prosjekter</dt>
                <dd>Fast pris etter at vi har avklart behovet</dd>
              </div>
              <div>
                <dt>Endringer og videre arbeid</dt>
                <dd>1 300 kr per time eks. mva.</dd>
              </div>
              <div>
                <dt>Drift og vedlikehold</dt>
                <dd>Etter avtale</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="seksjon" id="ikke" aria-labelledby="ikke-tittel">
          <div className="ramme tekstkolonne">
            <h2 id="ikke-tittel">Det jeg ikke gjør</h2>
            <p className="ingress">
              Jeg driver ikke med markedsføring eller annonsering, og jeg tar ikke flere prosjekter enn jeg rekker.
              Passer ikke idéen din for meg, sier jeg det ærlig – og tipser gjerne om hvem som kan hjelpe.
            </p>
          </div>
        </section>

        <section className="seksjon" id="sporsmal" aria-labelledby="faq-tittel">
          <div className="ramme">
            <h2 id="faq-tittel">Vanlige spørsmål</h2>
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

        <section className="seksjon" aria-labelledby="avslutning-tittel">
          <div className="ramme">
            <h2 id="avslutning-tittel">Klar til å fortelle om idéen?</h2>
            <p className="dempet">Jeg svarer innen to virkedager. Første samtale er gratis.</p>
            <SendIdeLenke />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
