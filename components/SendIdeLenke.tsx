'use client';

import Link from 'next/link';

// Går til idéfeltet hvis det finnes på siden, ellers til /send-ide.
export default function SendIdeLenke({
  className = 'knapp',
  children = 'Send idé',
  onNavigate,
}: {
  className?: string;
  children?: React.ReactNode;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href="/send-ide"
      className={className}
      onClick={(e) => {
        onNavigate?.();
        const felt = document.getElementById('ide-ide');
        if (!felt) return;
        e.preventDefault();
        felt.scrollIntoView({ block: 'center' });
        felt.focus({ preventScroll: true });
      }}
    >
      {children}
    </Link>
  );
}
