import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { GUIDER } from '@/lib/guide-tekster';
import { ARTIKLER } from '@/lib/artikler';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Spørsmål og svar om apper, nettsider og AI',
  description:
    'Ærlige svar på spørsmål om å lage en app, en nettside, en AI-assistent eller å automatisere rutiner – og når det lønner seg å få hjelp.',
  alternates: { canonical: '/hvordan' },
};

export default function Hvordan() {
  return (
    <>
      <Header />
      <main id="innhold" className="underside">
        <div className="ramme tekstkolonne">
          <h1>Spørsmål og svar</h1>
          <p className="ingress">
            Ærlige svar på det folk ofte spør ChatGPT og Claude om: hvordan du går fram, hva du kan gjøre selv, og når
            det lønner seg å få hjelp.
          </p>
          <ul className="guide-oversikt">
            {GUIDER.map((g) => (
              <li key={g.sti}>
                <Link href={g.sti}>{g.tittel}</Link>
                <p>{g.beskrivelse}</p>
              </li>
            ))}
          </ul>
          <h2>Pris, valg og bransjer</h2>
          <ul className="guide-oversikt">
            {ARTIKLER.filter((a) => a.sti.startsWith('/hvordan/')).map((a) => (
              <li key={a.sti}>
                <Link href={a.sti}>{a.tittel}</Link>
              </li>
            ))}
          </ul>
          <p>
            Holder du til i Vestfold? Se <Link href="/tonsberg">Webera i Tønsberg og Vestfold</Link>.
          </p>
          <p>
            Har du allerede fått et svar fra en AI? <Link href="/fra-chatgpt">Lim det inn her</Link>, så sier vi hva det
            koster å få det laget.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
