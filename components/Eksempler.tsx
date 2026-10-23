'use client';

import { useState } from 'react';

// Hero-motiv: eksempler på hva vi kan lage. For hvert eksempel skrives idéen med
// merkepenn, temaene dukker opp, og de samles til en figur med navn og snakkeboble.
// CSS-animasjonen spilles én gang (under 5 s) per eksempel. Kunden bytter selv med pilene.

type Tilbehor = 'kalkulator' | 'headset' | 'kalender' | 'eske';

type Eksempel = {
  ide: string;
  temaer: string[];
  navn: string;
  boble: string;
  tilbehor: Tilbehor;
};

const EKSEMPLER: Eksempel[] = [
  {
    ide: 'Lag en AI-agent som er god på regnskap',
    temaer: ['Årsregnskap', 'Fakturering', 'Lønnskjøring', 'Avstemming', 'Regnskapsloven', 'MVA'],
    navn: 'Regnskap-Roar',
    boble: 'Jeg er spesialist på regnskap',
    tilbehor: 'kalkulator',
  },
  {
    ide: 'Lag en AI-assistent som svarer kundene våre',
    temaer: ['Åpningstider', 'Priser', 'Levering', 'Retur', 'Bestilling'],
    navn: 'Kundeservice-Kari',
    boble: 'Jeg svarer kundene dine døgnet rundt',
    tilbehor: 'headset',
  },
  {
    ide: 'Lag et bookingsystem for salongen min',
    temaer: ['Kalender', 'Påminnelser', 'Betaling', 'Avbestilling', 'Ansatte'],
    navn: 'Booking-Berit',
    boble: 'Jeg holder kalenderen din full',
    tilbehor: 'kalender',
  },
  {
    ide: 'Lag et verktøy som holder styr på lageret',
    temaer: ['Varetelling', 'Innkjøp', 'Strekkoder', 'Leverandører', 'Rapporter'],
    navn: 'Lager-Leif',
    boble: 'Jeg sier fra før varene går tom',
    tilbehor: 'eske',
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
              <Figur tilbehor={e.tilbehor} />
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

// Figurene: samme vennlige robot, med ulikt tilbehør
function Figur({ tilbehor }: { tilbehor: Tilbehor }) {
  return (
    <svg className="roar" viewBox="0 0 120 150" width="120" height="150">
      {/* Antenne med lyspære: idéen */}
      <line x1="60" y1="10" x2="60" y2="24" stroke="#F1F5F2" strokeWidth="3" strokeLinecap="round" />
      <circle className="roar-paere" cx="60" cy="8" r="6" fill="#FFD84D" />

      {/* Kropp med skjortekrage og slips */}
      <rect x="30" y="86" width="60" height="50" rx="16" fill="#9FD8C2" />
      <path d="M48 86l12 10 12-10z" fill="#F1F5F2" />
      <path d="M60 94l-6 7 6 26 6-26z" fill="#FFD84D" />

      {/* Venstre arm med tilbehøret */}
      <path d="M32 98l-10 14" stroke="#9FD8C2" strokeWidth="9" strokeLinecap="round" />
      {tilbehor === 'kalkulator' && (
        <>
          <rect x="4" y="104" width="26" height="32" rx="5" fill="#F1F5F2" />
          <rect x="8" y="108" width="18" height="7" rx="2" fill="#1E4A3D" />
          <g fill="#1E4A3D">
            <circle cx="11" cy="121" r="2" />
            <circle cx="17" cy="121" r="2" />
            <circle cx="23" cy="121" r="2" />
            <circle cx="11" cy="129" r="2" />
            <circle cx="17" cy="129" r="2" />
            <circle cx="23" cy="129" r="2" />
          </g>
        </>
      )}
      {tilbehor === 'kalender' && (
        <>
          <rect x="2" y="102" width="30" height="32" rx="5" fill="#F1F5F2" />
          <path d="M2 107a5 5 0 0 1 5-5h20a5 5 0 0 1 5 5v4H2z" fill="#1E4A3D" />
          <g fill="#9FB8AE">
            <rect x="6" y="115" width="5" height="5" rx="1" />
            <rect x="14" y="115" width="5" height="5" rx="1" />
            <rect x="6" y="124" width="5" height="5" rx="1" />
            <rect x="22" y="124" width="5" height="5" rx="1" />
          </g>
          <rect x="22" y="115" width="5" height="5" rx="1" fill="#FFD84D" />
          <rect x="14" y="124" width="5" height="5" rx="1" fill="#1E4A3D" />
        </>
      )}
      {tilbehor === 'eske' && (
        <>
          <rect x="1" y="106" width="32" height="28" rx="3" fill="#D9B27C" />
          <path d="M1 114h32" stroke="#B88F58" strokeWidth="2" />
          <rect x="13" y="106" width="8" height="8" fill="#F1F5F2" />
          <path d="M8 124h10M8 128h6" stroke="#8A6A3E" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
      {tilbehor === 'headset' && <circle cx="20" cy="116" r="8" fill="#E5F0EA" />}

      {/* Høyre arm som vinker */}
      <g className="roar-arm">
        <path d="M88 98l16-20" stroke="#9FD8C2" strokeWidth="9" strokeLinecap="round" />
        <circle cx="107" cy="73" r="8" fill="#E5F0EA" />
      </g>

      {/* Hode med smil */}
      <rect x="22" y="24" width="76" height="60" rx="22" fill="#E5F0EA" />
      <circle cx="34" cy="66" r="4" fill="#9FD8C2" />
      <circle cx="86" cy="66" r="4" fill="#9FD8C2" />
      <g className="roar-oyne" fill="#1B2A2A">
        <circle cx="45" cy="52" r={tilbehor === 'kalkulator' ? 4.5 : 5.5} />
        <circle cx="75" cy="52" r={tilbehor === 'kalkulator' ? 4.5 : 5.5} />
      </g>
      {/* Regnskap-Roar har briller */}
      {tilbehor === 'kalkulator' && (
        <g fill="none" stroke="#1B2A2A" strokeWidth="3">
          <circle cx="45" cy="52" r="11" />
          <circle cx="75" cy="52" r="11" />
          <path d="M56 52h8" />
        </g>
      )}
      {/* Kundeservice-Kari har headset */}
      {tilbehor === 'headset' && (
        <g fill="none" stroke="#1E4A3D" strokeLinecap="round">
          <path d="M18 54C18 30 36 18 60 18s42 12 42 36" strokeWidth="5" stroke="#9FD8C2" />
          <rect x="13" y="44" width="11" height="22" rx="5" fill="#1E4A3D" strokeWidth="0" />
          <rect x="96" y="44" width="11" height="22" rx="5" fill="#1E4A3D" strokeWidth="0" />
          <path d="M19 64c0 10 8 15 20 15" strokeWidth="3" />
          <circle cx="41" cy="79" r="3.5" fill="#1E4A3D" strokeWidth="0" />
        </g>
      )}
      <path d="M48 69q12 9 24 0" fill="none" stroke="#1B2A2A" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
