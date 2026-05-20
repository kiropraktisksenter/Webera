const items = [
  'Kiropraktor',
  'Fysioterapi',
  'Naprapat',
  'Osteopati',
  'Psykolog',
  'Manuellterapi',
  'Akupunktur',
  'Helsestasjon',
];

function MarqueeItem({ text }: { text: string }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '24px', marginRight: '24px' }}>
      <span style={{
        fontFamily: 'Instrument Serif, serif',
        fontSize: '28px',
        color: 'var(--ink-soft)',
        whiteSpace: 'nowrap',
      }}>
        {text}
      </span>
      <span style={{ color: 'var(--sage)', fontSize: '18px', opacity: 0.7 }}>✦</span>
    </span>
  );
}

export default function Marquee() {
  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <MarqueeItem key={i} text={item} />
        ))}
      </div>
    </div>
  );
}
