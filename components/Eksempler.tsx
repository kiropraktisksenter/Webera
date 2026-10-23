'use client';

import Image, { type StaticImageData } from 'next/image';
import { useState } from 'react';
import roarBilde from '@/public/images/figurer/roar.webp';
import kariBilde from '@/public/images/figurer/kari.webp';
import beritBilde from '@/public/images/figurer/berit.webp';
import leifBilde from '@/public/images/figurer/leif.webp';

// Hero-motiv: eksempler på hva vi kan lage. For hvert eksempel skrives idéen med
// merkepenn, temaene dukker opp, og de samles til en figur med navn og snakkeboble.
// CSS-animasjonen spilles én gang (under 5 s) per eksempel. Kunden bytter selv med pilene.

type Eksempel = {
  ide: string;
  temaer: string[];
  navn: string;
  boble: string;
  bilde: StaticImageData;
};

const EKSEMPLER: Eksempel[] = [
  {
    ide: 'Lag en AI-agent som er god på regnskap',
    temaer: ['Årsregnskap', 'Fakturering', 'Lønnskjøring', 'Avstemming', 'Regnskapsloven', 'MVA'],
    navn: 'Regnskap-Roar',
    boble: 'Jeg er spesialist på regnskap',
    bilde: roarBilde,
  },
  {
    ide: 'Lag en AI-assistent som svarer kundene våre',
    temaer: ['Åpningstider', 'Priser', 'Levering', 'Retur', 'Bestilling'],
    navn: 'Kundeservice-Kari',
    boble: 'Jeg svarer kundene dine døgnet rundt',
    bilde: kariBilde,
  },
  {
    ide: 'Lag et bookingsystem for salongen min',
    temaer: ['Kalender', 'Påminnelser', 'Betaling', 'Avbestilling', 'Ansatte'],
    navn: 'Booking-Berit',
    boble: 'Jeg holder kalenderen din full',
    bilde: beritBilde,
  },
  {
    ide: 'Lag et verktøy som holder styr på lageret',
    temaer: ['Varetelling', 'Innkjøp', 'Strekkoder', 'Leverandører', 'Rapporter'],
    navn: 'Lager-Leif',
    boble: 'Jeg sier fra før varene går tom',
    bilde: leifBilde,
  },
];

const v = (vars: Record<string, string | number>) => vars as React.CSSProperties;

export default function Eksempler() {
  const [indeks, setIndeks] = useState(0);
  const e = EKSEMPLER[indeks];
  const antall = EKSEMPLER.length;
  const ga = (steg: number) => setIndeks((i) => (i + steg + antall) % antall);

  return (
    <section className="eksempler" aria-labelledby="eksempler-tittel">
      <h2 id="eksempler-tittel" className="sr-only">
        Eksempler på hva vi kan lage
      </h2>

      {/* Data-avslor ligger på en fast ramme, så animasjonen bare venter første gang */}
      <div className="agent" data-avslor>
        {/* Ny nøkkel = nytt element, så animasjonen starter på nytt ved hvert bytte */}
        <div key={indeks} className="agent-innhold" aria-hidden="true">
          <div className="agent-ide">
            <div className="agent-etikett">Hva vil du lage?</div>
            <p className="agent-tekst">
              <span className="agent-merke">
                {[...e.ide].map((tegn, i) => (
                  <span key={i} className="agent-tegn" style={v({ '--i': i })}>
                    {tegn}
                  </span>
                ))}
              </span>
            </p>
          </div>

          <div className="agent-scene">
            <ul className="agent-temaer">
              {e.temaer.map((t, n) => (
                <li key={t} style={v({ '--n': n })}>
                  {t}
                </li>
              ))}
            </ul>

            <div className="agent-resultat">
              <div className="figur">
                <Image src={e.bilde} alt="" sizes="(min-width: 64rem) 26rem, 90vw" priority={indeks === 0} />
              </div>
              <div className="agent-hode-tekst">
                <div className="agent-navn">{e.navn}</div>
                <div className="agent-boble">{e.boble}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tekstversjon for skjermlesere; leses opp når eksempelet byttes */}
      <p className="sr-only" aria-live="polite">
        Eksempel {indeks + 1} av {antall}: «{e.ide}». Temaer: {e.temaer.join(', ')}. Resultat: {e.navn},
        som sier «{e.boble}».
      </p>

      <div className="eksempler-styring">
        <button type="button" className="eksempler-pil" onClick={() => ga(-1)} aria-label="Forrige eksempel">
          <span aria-hidden="true">←</span>
        </button>
        <span className="eksempler-teller" aria-hidden="true">
          {indeks + 1} av {antall}
        </span>
        <button type="button" className="eksempler-pil" onClick={() => ga(1)} aria-label="Neste eksempel">
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  );
}
