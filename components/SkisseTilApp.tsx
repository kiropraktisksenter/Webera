// Hero-motiv: en blyantskisse tegnes, lyspæren tennes, og skissen blir en ferdig app.
// Ren CSS-animasjon som spilles én gang (ca. 3 s) når den kommer til syne. Dekorativ.
export default function SkisseTilApp() {
  const d = (n: number) => ({ '--d': `${n}ms` }) as React.CSSProperties;

  return (
    <svg className="skisse" viewBox="0 0 400 440" aria-hidden="true" focusable="false" data-avslor>
      <g transform="translate(0 60)">
      {/* Arket */}
      <rect className="skisse-ark" x="30" y="50" width="340" height="310" rx="24" />

      {/* Skissen: tynne blyantstreker som tegnes opp */}
      <g className="skisse-strek">
        <rect pathLength={1} style={d(200)} x="56" y="78" width="288" height="46" rx="12" />
        <path pathLength={1} style={d(350)} d="M74 101c14-3 30 2 46-1" />
        <rect pathLength={1} style={d(500)} x="150" y="146" width="174" height="46" rx="16" />
        <path pathLength={1} style={d(620)} d="M168 169c22-3 48 2 72-1 14-1 28 1 38 0" />
        <rect pathLength={1} style={d(760)} x="76" y="208" width="252" height="62" rx="16" />
        <path pathLength={1} style={d(880)} d="M94 230c26-2 52 2 80-1 20-1 46 1 64 0M94 250c30-2 60 1 96 0 20-1 32 1 44 0" />
        <rect pathLength={1} style={d(1020)} x="76" y="292" width="184" height="44" rx="22" />
        <path pathLength={1} style={d(1140)} d="M98 314c34-3 74 2 116-1" />
      </g>

      {/* Den ferdige appen, som tones inn over skissen */}
      <g className="skisse-ferdig">
        <g style={d(2150)}>
          <rect className="f-gran" x="56" y="78" width="288" height="46" rx="12" />
          <text className="f-tekst-lys f-fet" x="76" y="107">
            Spør oss
          </text>
        </g>
        <g style={d(2300)}>
          <rect className="f-mynte" x="150" y="146" width="174" height="46" rx="16" />
          <text className="f-tekst" x="168" y="175">
            Kan dere levere?
          </text>
        </g>
        <g style={d(2450)}>
          <rect className="f-papir" x="76" y="208" width="252" height="62" rx="16" />
          <text className="f-tekst" x="94" y="234">
            Ja, det går fint!
          </text>
          <text className="f-tekst f-dempet" x="94" y="256">
            Vil du sende en forespørsel?
          </text>
        </g>
        <g style={d(2600)}>
          <rect className="f-gran" x="76" y="292" width="184" height="44" rx="22" />
          <text className="f-tekst-lys f-fet" x="98" y="319">
            Send forespørsel
          </text>
        </g>
      </g>
      </g>

      {/* Lyspæren */}
      <g className="lyspaere">
        <g className="lys-straaler">
          <path d="M318 6v14M352 20l-10 10M284 20l10 10M366 52h-14M270 52h14" />
        </g>
        <path
          className="lys-glass"
          pathLength={1}
          d="M318 26c-15 0-26 11-26 25 0 9 5 16 11 21 3 3 4 6 4 9v4h22v-4c0-3 1-6 4-9 6-5 11-12 11-21 0-14-11-25-26-25z"
        />
        <path className="lys-sokkel" pathLength={1} d="M307 92h22M309 99h18" />
      </g>
    </svg>
  );
}
