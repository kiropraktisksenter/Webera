'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Hjem' },
  { href: '/demos', label: 'Demoer' },
  { href: '/om-oss', label: 'Om oss' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
            Webera<span>.</span>
          </Link>

          <ul className="nav-links">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={`nav-link${pathname === href ? ' active' : ''}`}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="nav-hamburger"
            aria-label={menuOpen ? 'Lukk meny' : 'Åpne meny'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
          <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
            Webera<span style={{ color: 'var(--sage)' }}>.</span>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Lukk meny"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink)" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav style={{ flex: 1 }}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                fontFamily: 'Instrument Serif, serif',
                fontSize: '40px',
                color: pathname === href ? 'var(--sage)' : 'var(--ink)',
                textDecoration: 'none',
                padding: '14px 0',
                borderBottom: '1px solid var(--line)',
                letterSpacing: '-0.01em',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div style={{ paddingTop: '40px' }}>
          <a href="mailto:post@webera.no" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            post@webera.no
          </a>
        </div>
      </div>
    </>
  );
}
