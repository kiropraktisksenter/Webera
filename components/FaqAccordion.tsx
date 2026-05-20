'use client';

import { useState } from 'react';

const faqs = [
  { q: 'Hvem eier nettsiden når den er ferdig?', a: 'Du. Du eier all kode, alle bilder og innholdet på siden. Vi gir deg full tilgang til kildekoden og dokumentasjon. Skulle du ønske å bytte leverandør senere, kan du gjøre det uten å starte på nytt.' },
  { q: 'Hva om jeg ikke er fornøyd med designet?', a: 'Vi går ikke videre før du er fornøyd. Etter første designutkast har du minst to runder med justeringer inkludert. Hvis vi etter det fortsatt ikke har truffet, refunderer vi 50% – uten diskusjon.' },
  { q: 'Kan jeg si opp drift-abonnementet når jeg vil?', a: 'Ja. Én måneds oppsigelsestid. Du tar med deg hele siden – vi hjelper deg å flytte til en annen leverandør hvis du ønsker.' },
  { q: 'Hva skjer hvis Webera legger ned?', a: 'Nettsiden din kjører videre. Den er bygget på åpne teknologier (Next.js, Vercel) som enhver utvikler kan ta over. Du har all kildekoden i ditt eget GitHub-repo fra dag én.' },
  { q: 'Hvor lang tid tar det å lage nettsiden?', a: 'Fra signert kontrakt til ferdig lansering: 4–6 uker for Klinikkstart, 6–8 uker for Klinikkpro, 8–10 uker for Klinikk+. Vi setter konkrete milepæler du kan følge.' },
  { q: 'Kan jeg gjøre endringer selv etterpå?', a: 'Ja, du får tilgang til et enkelt CMS for tekstendringer og bildebytte. For større ting (nye sider, ny tjenestestruktur) hjelper vi for kr 1.300,-/time.' },
  { q: 'Hva er forskjellen på dere og en frilanser?', a: 'En frilanser er ofte god teknisk, men du må selv vite hva du vil ha. Vi spesialiserer oss på én bransje (helse) og kommer med strategi og pasientreise-tenking inkludert. I tillegg er vi en bedrift – ikke én person som blir syk.' },
  { q: 'Tar dere imot kunder over hele Norge?', a: 'Ja. Vi har klinikker fra Tønsberg til Tromsø. Det meste foregår digitalt – men vi tar gjerne en kaffe hos deg om du er innen rimelig avstand fra Tønsberg.' },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 80px' }}>
      {faqs.map((item, i) => (
        <div key={i} style={{ borderTop: '1px solid var(--line)' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '16px',
              padding: '24px 0',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            <span style={{
              fontFamily: 'Instrument Serif, serif',
              fontSize: '19px',
              color: 'var(--ink)',
              lineHeight: 1.35,
              letterSpacing: '-0.01em',
            }}>
              {item.q}
            </span>
            <span style={{
              flexShrink: 0,
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              border: '1px solid var(--line-strong)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              lineHeight: 1,
              transition: 'transform 0.25s ease, background 0.2s, color 0.2s',
              transform: open === i ? 'rotate(45deg)' : 'none',
              background: open === i ? 'var(--ink)' : 'transparent',
              color: open === i ? 'var(--paper)' : 'var(--muted)',
            } as React.CSSProperties}>
              +
            </span>
          </button>
          <div style={{
            overflow: 'hidden',
            maxHeight: open === i ? '300px' : '0',
            transition: 'max-height 0.35s cubic-bezier(0.2,0.7,0.3,1)',
          }}>
            <p style={{
              fontSize: '15px',
              color: 'var(--ink-soft)',
              lineHeight: 1.65,
              paddingBottom: '28px',
            }}>
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
