'use client';

import { INSPIRASJON_HENDELSE } from './IdeSkjema';

const EKSEMPLER = [
  'Et bookingsystem som passer måten du faktisk jobber på',
  'En AI-assistent som svarer kundene dine på nettsiden',
  'Et internt verktøy som erstatter et rotete regneark',
  'Automatisering av en rutine du gjør for hånd hver uke',
  'En nettside eller nettbutikk med noe ekstra',
];

export default function Inspirasjon() {
  return (
    <section className="inspirasjon" aria-labelledby="inspirasjon-tittel">
      <h2 id="inspirasjon-tittel">Usikker på hvor du skal begynne?</h2>
      <p className="sr-only">Velg et eksempel, så legges det inn i feltet som et utgangspunkt.</p>
      <ul className="inspirasjon-liste">
        {EKSEMPLER.map((tekst) => (
          <li key={tekst}>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent(INSPIRASJON_HENDELSE, { detail: `${tekst}. ` }))}
            >
              {tekst}
              <span aria-hidden="true">+</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
