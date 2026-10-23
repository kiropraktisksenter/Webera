'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type Melding = { role: 'user' | 'assistant'; content: string };

const START: Melding = {
  role: 'assistant',
  content:
    'Hei! Jeg kan svare på hvordan Webera fungerer, eller hjelpe deg å sette ord på idéen din før du sender den til Lars.',
};

const SMAL_SKJERM = '(max-width: 40rem)';

export default function SporOmNoe() {
  const [apen, setApen] = useState(false);
  const [meldinger, setMeldinger] = useState<Melding[]>([START]);
  const [tekst, setTekst] = useState('');
  const [laster, setLaster] = useState(false);
  const [skjult, setSkjult] = useState(false);

  const loggRef = useRef<HTMLDivElement>(null);
  const inndataRef = useRef<HTMLInputElement>(null);
  const apneRef = useRef<HTMLButtonElement>(null);

  // På mobil skal knappen ikke ligge over idéskjemaet.
  useEffect(() => {
    const omrader = document.querySelectorAll('[data-ikke-dekk]');
    if (!omrader.length || !('IntersectionObserver' in window)) return;
    const smal = window.matchMedia(SMAL_SKJERM);
    const synlige = new Set<Element>();
    const oppdater = () => setSkjult(smal.matches && synlige.size > 0);
    const observator = new IntersectionObserver((oppforinger) => {
      for (const o of oppforinger) {
        if (o.isIntersecting) synlige.add(o.target);
        else synlige.delete(o.target);
      }
      oppdater();
    });
    omrader.forEach((el) => observator.observe(el));
    smal.addEventListener('change', oppdater);
    return () => {
      observator.disconnect();
      smal.removeEventListener('change', oppdater);
    };
  }, []);

  useEffect(() => {
    if (!apen) return;
    loggRef.current?.scrollTo({ top: loggRef.current.scrollHeight });
  }, [apen, meldinger, laster]);

  useEffect(() => {
    if (!apen) return;
    inndataRef.current?.focus();
    function vedTast(e: KeyboardEvent) {
      if (e.key === 'Escape') lukk();
    }
    document.addEventListener('keydown', vedTast);
    return () => document.removeEventListener('keydown', vedTast);
  }, [apen]);

  function lukk() {
    setApen(false);
    requestAnimationFrame(() => apneRef.current?.focus());
  }

  async function send(e: React.FormEvent) {
    e.preventDefault();
    const innhold = tekst.trim();
    if (!innhold || laster) return;
    const nye: Melding[] = [...meldinger, { role: 'user', content: innhold }];
    setMeldinger(nye);
    setTekst('');
    setLaster(true);
    try {
      const svar = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Startmeldingen er vår egen og sendes ikke til modellen.
        body: JSON.stringify({ messages: nye.slice(1) }),
      });
      const data = (await svar.json()) as { message?: string };
      setMeldinger((m) => [
        ...m,
        { role: 'assistant', content: data.message || 'Jeg fikk ikke svart nå. Prøv igjen, eller send idéen i skjemaet.' },
      ]);
    } catch {
      setMeldinger((m) => [
        ...m,
        { role: 'assistant', content: 'Svaret kom ikke fram. Sjekk nettet og prøv igjen.' },
      ]);
    } finally {
      setLaster(false);
    }
  }

  return (
    <div className="chat" data-apen={apen ? 'true' : 'false'}>
      {apen && (
        <div className="chat-panel" role="dialog" aria-labelledby="chat-tittel" aria-describedby="chat-merknad">
          <div className="chat-hode">
            <div>
              <h2 id="chat-tittel">Spør om noe</h2>
              <p id="chat-merknad">AI-assistent – svarene kan være unøyaktige. Lars leser alle idéer selv.</p>
            </div>
            <button type="button" className="chat-lukk" onClick={lukk}>
              Lukk
            </button>
          </div>

          <div className="chat-logg" ref={loggRef} role="log" aria-live="polite" aria-busy={laster}>
            {meldinger.map((m, i) => (
              <p key={i} className="chat-melding" data-rolle={m.role}>
                <span className="sr-only">{m.role === 'user' ? 'Du: ' : 'Assistenten: '}</span>
                {m.content}
              </p>
            ))}
            {laster && (
              <p className="chat-melding dempet" data-rolle="assistant">
                Skriver …
              </p>
            )}
          </div>

          <form className="chat-skjema" onSubmit={send}>
            <label htmlFor="chat-inndata" className="sr-only">
              Skriv et spørsmål
            </label>
            <input
              ref={inndataRef}
              id="chat-inndata"
              className="inndata"
              type="text"
              autoComplete="off"
              maxLength={1000}
              value={tekst}
              onChange={(e) => setTekst(e.target.value)}
              placeholder="Skriv et spørsmål"
            />
            <button type="submit" className="knapp knapp-liten" disabled={laster || !tekst.trim()}>
              Send
            </button>
          </form>
          <p className="chat-fot dempet">
            Klar til å sende idéen? <Link href="/send-ide" onClick={() => setApen(false)}>Bruk skjemaet</Link>.
          </p>
        </div>
      )}

      <button
        ref={apneRef}
        type="button"
        className="knapp knapp-liten chat-apne"
        hidden={apen || skjult}
        aria-expanded={apen}
        onClick={() => setApen(true)}
      >
        Spør om noe
      </button>
    </div>
  );
}
