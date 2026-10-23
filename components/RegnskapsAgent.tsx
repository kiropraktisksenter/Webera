// Hero-motiv: idéen skrives med merkepenn, og blir til figuren Regnskap-Roar.
// Ren CSS-animasjon, spilles én gang (ca. 3 s) når den kommer til syne. Dekorativ.

const IDE = 'Lag en AI-agent som er god på regnskap';

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

      <div className="agent-resultat">
        <Roar />
        <div className="agent-hode-tekst">
          <div className="agent-navn">Regnskap‑Roar</div>
          <div className="agent-boble">Jeg er spesialist på regnskap</div>
        </div>
      </div>
    </div>
  );
}

// Regnskap-Roar: vennlig robot med briller, slips og kalkulator
function Roar() {
  return (
    <svg className="roar" viewBox="0 0 120 150" width="120" height="150">
      {/* Antenne med lyspære: idéen */}
      <line x1="60" y1="10" x2="60" y2="24" stroke="#F1F5F2" strokeWidth="3" strokeLinecap="round" />
      <circle className="roar-paere" cx="60" cy="8" r="6" fill="#FFD84D" />

      {/* Kropp med skjortekrage og slips */}
      <rect x="30" y="86" width="60" height="50" rx="16" fill="#9FD8C2" />
      <path d="M48 86l12 10 12-10z" fill="#F1F5F2" />
      <path d="M60 94l-6 7 6 26 6-26z" fill="#FFD84D" />

      {/* Venstre arm med kalkulator */}
      <path d="M32 98l-10 14" stroke="#9FD8C2" strokeWidth="9" strokeLinecap="round" />
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

      {/* Høyre arm som vinker */}
      <g className="roar-arm">
        <path d="M88 98l16-20" stroke="#9FD8C2" strokeWidth="9" strokeLinecap="round" />
        <circle cx="107" cy="73" r="8" fill="#E5F0EA" />
      </g>

      {/* Hode med briller og smil */}
      <rect x="22" y="24" width="76" height="60" rx="22" fill="#E5F0EA" />
      <circle cx="34" cy="66" r="4" fill="#9FD8C2" />
      <circle cx="86" cy="66" r="4" fill="#9FD8C2" />
      <g className="roar-oyne" fill="#1B2A2A">
        <circle cx="45" cy="52" r="4.5" />
        <circle cx="75" cy="52" r="4.5" />
      </g>
      <g fill="none" stroke="#1B2A2A" strokeWidth="3">
        <circle cx="45" cy="52" r="11" />
        <circle cx="75" cy="52" r="11" />
        <path d="M56 52h8" />
      </g>
      <path d="M48 69q12 9 24 0" fill="none" stroke="#1B2A2A" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
