import SendIdeLenke from './SendIdeLenke';

// Enkle strekikoner (24×24), dekorative
const IKONER: Record<string, React.ReactNode> = {
  nettside: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
    </>
  ),
  agent: (
    <>
      <path d="M12 3v3M8 21h8M12 17v4" />
      <rect x="5" y="6" width="14" height="11" rx="3" />
      <path d="M9.5 11.5h.01M14.5 11.5h.01M9.5 14h5" />
    </>
  ),
  assistent: (
    <>
      <path d="M4 5h16v11H9l-5 4z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </>
  ),
  plattform: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  app: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
    </>
  ),
  verktoy: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 10h18M9 10v10" />
    </>
  ),
  automatisering: (
    <>
      <path d="M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3" />
      <path d="M18 3v4h-4M6 21v-4h4" />
    </>
  ),
  integrasjon: (
    <>
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M8.7 10.7l6.6-3.4M8.7 13.3l6.6 3.4" />
    </>
  ),
};

const TYPER: { ikon: string; tittel: string; tekst: string }[] = [
  {
    ikon: 'nettside',
    tittel: 'Nettsider og nettbutikker',
    tekst: 'Tydelige sider som er laget for å bli brukt, med booking, betaling eller noe ekstra.',
  },
  {
    ikon: 'agent',
    tittel: 'AI-agenter',
    tekst: 'Agenter som gjør oppgaver for deg: henter informasjon, fyller ut, følger opp og sier fra når noe trenger deg.',
  },
  {
    ikon: 'assistent',
    tittel: 'Digitale assistenter',
    tekst: 'En assistent på nettsiden eller internt som svarer på spørsmål døgnet rundt, med deres egne svar.',
  },
  {
    ikon: 'plattform',
    tittel: 'Plattformer og portaler',
    tekst: 'Kundeportaler, medlemsløsninger og markedsplasser der flere logger inn og jobber sammen.',
  },
  {
    ikon: 'app',
    tittel: 'Apper',
    tekst: 'Apper for mobil og nettleser, for kundene dine eller for de ansatte.',
  },
  {
    ikon: 'verktoy',
    tittel: 'Interne verktøy',
    tekst: 'Erstatter rotete regneark og lange e-posttråder med ett sted der jobben faktisk blir gjort.',
  },
  {
    ikon: 'automatisering',
    tittel: 'Automatisering',
    tekst: 'Rutiner du gjør for hånd hver uke, gjort automatisk – fra påminnelser til rapporter.',
  },
  {
    ikon: 'integrasjon',
    tittel: 'Integrasjoner',
    tekst: 'Får systemene du allerede bruker til å snakke sammen, så du slipper å taste ting to ganger.',
  },
];

export default function HvaViLager() {
  return (
    <section className="seksjon" id="hva-vi-lager" aria-labelledby="lager-tittel">
      <div className="ramme">
        <div className="seksjon-intro">
          <h2 id="lager-tittel">Hva vi kan lage</h2>
          <p>Noen eksempler. Det viktigste er problemet du vil løse, ikke hva løsningen heter.</p>
        </div>
        <ul className="typer">
          {TYPER.map((t) => (
            <li key={t.tittel}>
              <svg
                className="typer-ikon"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {IKONER[t.ikon]}
              </svg>
              <h3>{t.tittel}</h3>
              <p>{t.tekst}</p>
            </li>
          ))}
          <li className="typer-annet">
            <h3>Noe helt annet?</h3>
            <p>Mange av de beste idéene passer ikke i en boks. Fortell oss om din.</p>
            <SendIdeLenke>Send idé</SendIdeLenke>
          </li>
        </ul>
      </div>
    </section>
  );
}
