// Hero-motiv: en idé skrives, fagdelene en regnskapsekspert trenger dukker opp,
// og de smelter sammen til en AI-spesialist i regnskap.
// Ren CSS-animasjon, spilles én gang (under 5 s) når den kommer til syne. Dekorativ.

const IDE = 'Lag en AI-agent som er god på regnskap';

// Fagdelene, med plassering i «skyen» (prosent av området)
const DELER: { tekst: string; x: number; y: number }[] = [
  { tekst: 'Bokføringsloven', x: 0, y: 2 },
  { tekst: 'MVA', x: 64, y: 0 },
  { tekst: 'Kontoplan', x: 38, y: 20 },
  { tekst: 'Bilag', x: 74, y: 30 },
  { tekst: 'Avstemming', x: 2, y: 42 },
  { tekst: 'Lønn og A-melding', x: 36, y: 56 },
  { tekst: 'Årsoppgjør', x: 6, y: 76 },
  { tekst: 'Regnskapsloven', x: 46, y: 84 },
];

const v = (vars: Record<string, string | number>) => vars as React.CSSProperties;

export default function RegnskapsAgent() {
  return (
    <div className="agent" aria-hidden="true" data-avslor>
      <div className="agent-ide">
        <div className="agent-etikett">Hva vil du lage?</div>
        <p className="agent-tekst">
          <span className="agent-merke">
            {[...IDE].map((tegn, i) => (
              <span key={i} className="agent-tegn" style={v({ '--i': i })}>
                {tegn}
              </span>
            ))}
          </span>
        </p>
      </div>

      <div className="agent-flate">
        {DELER.map((d, i) => (
          <span key={d.tekst} className="agent-del" style={v({ '--n': i, left: `${d.x}%`, top: `${d.y}%` })}>
            {d.tekst}
          </span>
        ))}

        <div className="agent-resultat">
          <div className="agent-hode">
            <span className="agent-ikon">AI</span>
            <div>
              <div className="agent-navn">AI-spesialist i regnskap</div>
              <div className="agent-under">Kjenner reglene og rutinene, og svarer på norsk</div>
            </div>
          </div>
          <ul className="agent-merker">
            {DELER.map((d, i) => (
              <li key={d.tekst} style={v({ '--n': i })}>
                {d.tekst}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
