'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import SendIdeLenke from './SendIdeLenke';

const LENKER = [
  { href: '/#slik-fungerer-det', tekst: 'Slik fungerer det' },
  { href: '/#laget', tekst: 'Ting jeg har laget' },
  { href: '/#om-lars', tekst: 'Om Lars' },
];

export default function Header() {
  const [apen, setApen] = useState(false);
  const knappRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!apen) return;
    function vedTast(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setApen(false);
        knappRef.current?.focus();
      }
    }
    document.addEventListener('keydown', vedTast);
    return () => document.removeEventListener('keydown', vedTast);
  }, [apen]);

  const lukk = () => setApen(false);

  return (
    <header className="header">
      <div className="ramme header-indre">
        <Link href="/" className="ordmerke" aria-label="Webera, til forsiden">
          Webera<span>.</span>
        </Link>
        <button
          ref={knappRef}
          type="button"
          className="knapp knapp-liten knapp-sekundar meny-knapp"
          aria-expanded={apen}
          aria-controls="hovedmeny"
          onClick={() => setApen((a) => !a)}
        >
          {apen ? 'Lukk meny' : 'Meny'}
        </button>
        <nav id="hovedmeny" className="nav" aria-label="Hovedmeny" data-apen={apen ? 'true' : 'false'}>
          <ul className="nav-liste">
            {LENKER.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={lukk}>
                  {l.tekst}
                </Link>
              </li>
            ))}
            <li>
              <SendIdeLenke className="knapp knapp-liten" onNavigate={lukk} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
