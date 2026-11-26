import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from './Footer';
import Header from './Header';
import { ARTIKLER } from '@/lib/artikler';

// Mal for lengre artikler (pris, valg, bransjer). Bygget for Google og AI-søk:
// kort svar først, tabeller, FAQ og strukturert data (Article, FAQPage, BreadcrumbList).

export type ArtikkelInnhold = {
  sti: string;
  tittel: string;
  seoTittel: string;
  beskrivelse: string;
  kortSvarEtikett: string;
  kortSvar: string; // HTML
  lesetid?: number;
  brodtekst: string; // HTML
  faq: [string, string][];
  cta: { tittel: string; tekst: string };
};

const BASE = 'https://webera.no';
const PUBLISERT = '2026-11-26';
const OPPDATERT = '2026-11-26';
const OPPDATERT_TEKST = '26. november 2026';

const ORG = { '@type': 'Organization', name: 'Webera AS', url: BASE };

const utenTagger = (html: string) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

export function artikkelMetadata(a: ArtikkelInnhold): Metadata {
  return {
    title: a.seoTittel,
    description: a.beskrivelse,
    alternates: { canonical: a.sti },
    openGraph: { type: 'article', title: a.tittel, description: a.beskrivelse, url: a.sti, locale: 'nb_NO' },
  };
}

export default function Artikkel({
  innhold: a,
  ekstraData = [],
}: {
  innhold: ArtikkelInnhold;
  ekstraData?: object[];
}) {
  const erGuide = a.sti.startsWith('/hvordan/');
  const smuler = erGuide
    ? [
        { navn: 'Webera', sti: '/' },
        { navn: 'Spørsmål og svar', sti: '/hvordan' },
        { navn: a.tittel, sti: a.sti },
      ]
    : [
        { navn: 'Webera', sti: '/' },
        { navn: a.tittel, sti: a.sti },
      ];

  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: a.tittel,
        description: a.beskrivelse,
        inLanguage: 'nb-NO',
        datePublished: PUBLISERT,
        dateModified: OPPDATERT,
        author: ORG,
        publisher: ORG,
        mainEntityOfPage: `${BASE}${a.sti}`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: smuler.map((s, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: s.navn,
          item: `${BASE}${s.sti === '/' ? '' : s.sti}`,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: a.tittel, acceptedAnswer: { '@type': 'Answer', text: utenTagger(a.kortSvar) } },
          ...a.faq.map(([sporsmal, svar]) => ({
            '@type': 'Question',
            name: sporsmal,
            acceptedAnswer: { '@type': 'Answer', text: svar },
          })),
        ],
      },
      ...ekstraData,
    ],
  };

  const andre = ARTIKLER.filter((x) => x.sti !== a.sti && x.sti.startsWith('/hvordan/')).slice(0, 6);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      <Header />
      <main id="innhold" className="underside guide artikkel">
        <div className="ramme tekstkolonne">
          {erGuide && (
            <p className="guide-sti">
              <Link href="/hvordan">Spørsmål og svar</Link>
            </p>
          )}
          <h1>{a.tittel}</h1>
          <p className="artikkel-meta">
            Webera, Tønsberg · Oppdatert <time dateTime={OPPDATERT}>{OPPDATERT_TEKST}</time>
            {a.lesetid ? ` · ${a.lesetid} min lesing` : ''}
          </p>

          <section className="guide-kort-svar" aria-labelledby="kort-svar">
            <h2 id="kort-svar">{a.kortSvarEtikett}</h2>
            <p dangerouslySetInnerHTML={{ __html: a.kortSvar }} />
          </section>

          <div className="artikkel-tekst" dangerouslySetInnerHTML={{ __html: a.brodtekst }} />

          <section className="guide-cta" aria-labelledby="guide-cta-tittel">
            <h2 id="guide-cta-tittel">{a.cta.tittel}</h2>
            <p>{a.cta.tekst} Første samtale er gratis og uforpliktende.</p>
            <p className="guide-cta-knapper">
              <Link href="/send-ide" className="knapp">
                Send idéen din
              </Link>
              <Link href="/fra-chatgpt" className="knapp knapp-sekundar">
                Lim inn svar fra ChatGPT
              </Link>
            </p>
          </section>

          <h2>Vanlige spørsmål</h2>
          <div className="faq">
            {a.faq.map(([sporsmal, svar]) => (
              <details key={sporsmal}>
                <summary>{sporsmal}</summary>
                <p>{svar}</p>
              </details>
            ))}
          </div>

          <h2>Les også</h2>
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
