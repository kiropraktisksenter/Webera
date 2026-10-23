import Link from 'next/link';

// TODO(Lars): Org.nr. for Webera AS fantes ikke i repoet eller på den gamle
// siden. Legg det inn her (f.eks. «Org.nr. 123 456 789»).
const ORGNR: string | null = null;

export default function Footer() {
  return (
    <footer className="footer">
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
    </footer>
  );
}
