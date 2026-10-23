// Dekorativ kollasj av små app-kort i hero: viser hva en idé kan bli.
// Bare CSS-animasjon ved innlasting (under 5 sekunder), ingenting som går i loop.
export default function HeroKollasj() {
  return (
    <div className="kollasj" aria-hidden="true">
      <div className="kort kort-chat" style={{ '--i': 0 } as React.CSSProperties}>
        <div className="kort-hode">Spør oss</div>
        <div className="boble boble-kunde">Kan dere levere neste uke?</div>
        <div className="boble boble-svar">Ja! Vil du sende en forespørsel?</div>
      </div>

      <div className="kort kort-graf" style={{ '--i': 1 } as React.CSSProperties}>
        <div className="kort-tittel">Bestillinger</div>
        <div className="soyler">
          {[38, 52, 46, 70, 64, 88, 96].map((h, n) => (
            <span key={n} style={{ '--h': `${h}%`, '--n': n } as React.CSSProperties} />
          ))}
        </div>
      </div>

      <div className="kort kort-kalender" style={{ '--i': 2 } as React.CSSProperties}>
        <div className="kort-tittel">Neste uke</div>
        <div className="dager">
          {['M', 'T', 'O', 'T', 'F'].map((d, n) => (
            <span key={n} className={n === 2 ? 'valgt' : undefined}>
              {d}
            </span>
          ))}
        </div>
      </div>

      <div className="kort kort-auto" style={{ '--i': 3 } as React.CSSProperties}>
        <span className="hake">✓</span>
        <div>
          <div className="kort-tittel">Påminnelse sendt</div>
          <div className="kort-under">Automatisk, kl. 08.00</div>
        </div>
      </div>
    </div>
  );
}
