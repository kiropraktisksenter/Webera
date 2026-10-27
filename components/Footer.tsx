import Link from 'next/link';
import { GUIDER } from '@/lib/guide-tekster';

// TODO(Lars): Org.nr. for Webera AS fantes ikke i repoet eller på den gamle
// siden. Legg det inn her (f.eks. «Org.nr. 123 456 789»).
const ORGNR: string | null = null;

export default function Footer() {
  return (
    <footer className="footer band-mork">
      <div className="ramme footer-indre">
        <p>
          <strong>Webera AS</strong>
          {ORGNR ? ` · Org.nr. ${ORGNR}` : null}
        </p>
        <p>Tønsberg</p>
        <p>
          <a href="mailto:post@webera.no">post@webera.no</a>
        </p>
        <p>
          <Link href="/personvern">Personvern</Link>
        </p>
      </div>
      <nav className="ramme footer-guider" aria-label="Spørsmål og svar">
        <p>
          <Link href="/hvordan">Spørsmål og svar</Link>
        </p>
        {GUIDER.map((g) => (
          <p key={g.sti}>
            <Link href={g.sti}>{g.tittel}</Link>
          </p>
        ))}
        <p>
          <Link href="/fra-chatgpt">Har du spurt ChatGPT eller Claude?</Link>
        </p>
      </nav>
    </footer>
  );
}
