import Link from 'next/link';
import Footer from './Footer';
import Header from './Header';
import { GUIDER } from '@/lib/guide-tekster';

// Felles mal for svarsidene under /hvordan. Sidene svarer på spørsmål folk stiller
// ChatGPT, Claude og Google, med korte, siterbare avsnitt og FAQ-oppmerking.

export type GuideInnhold = {
  sti: string;
  sporsmal: string;
  kortSvar: string;
  steg: [string, string][];
  selv: string[];
  hjelp: string[];
  faq: [string, string][];
};


export default function Guide({ innhold }: { innhold: GuideInnhold }) {
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: innhold.sporsmal, acceptedAnswer: { '@type': 'Answer', text: innhold.kortSvar } },
      ...innhold.faq.map(([sporsmal, svar]) => ({
        '@type': 'Question',
        name: sporsmal,
        acceptedAnswer: { '@type': 'Answer', text: svar },
      })),
    ],
  };
  const andre = GUIDER.filter((g) => g.sti !== innhold.sti);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <Header />
      <main id="innhold" className="underside guide">
        <div className="ramme tekstkolonne">
          <p className="guide-sti">
            <Link href="/hvordan">Spørsmål og svar</Link>
          </p>
          <h1>{innhold.sporsmal}</h1>

          <section className="guide-kort-svar" aria-labelledby="kort-svar">
            <h2 id="kort-svar">Kort svar</h2>
            <p>{innhold.kortSvar}</p>
          </section>

          <h2>Slik gjør du det</h2>
          <ol className="guide-steg">
            {innhold.steg.map(([tittel, tekst]) => (
              <li key={tittel}>
                <strong>{tittel}</strong> {tekst}
              </li>
            ))}
          </ol>

          <h2>Kan du gjøre det selv?</h2>
          {innhold.selv.map((avsnitt) => (
            <p key={avsnitt}>{avsnitt}</p>
          ))}

          <h2>Når lønner det seg å få hjelp?</h2>
          <ul>
            {innhold.hjelp.map((punkt) => (
              <li key={punkt}>{punkt}</li>
            ))}
          </ul>

          <section className="guide-cta" aria-labelledby="guide-cta-tittel">
            <h2 id="guide-cta-tittel">Har du allerede spurt ChatGPT eller Claude?</h2>
            <p>
              Lim inn svaret du fikk, så leser vi det og sier hva det koster å få det laget. Første samtale er gratis, og
              prosjekter har fast pris.
            </p>
            <p className="guide-cta-knapper">
              <Link href="/fra-chatgpt" className="knapp">
                Lim inn svaret
              </Link>
              <Link href="/send-ide" className="knapp knapp-sekundar">
                Beskriv idéen selv
              </Link>
            </p>
          </section>

          <h2>Vanlige spørsmål</h2>
          <div className="faq">
            {innhold.faq.map(([sporsmal, svar]) => (
              <details key={sporsmal}>
                <summary>{sporsmal}</summary>
                <p>{svar}</p>
              </details>
            ))}
          </div>

          <h2>Andre spørsmål</h2>
          <ul className="guide-andre">
            {andre.map((g) => (
              <li key={g.sti}>
                <Link href={g.sti}>{g.tittel}</Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
