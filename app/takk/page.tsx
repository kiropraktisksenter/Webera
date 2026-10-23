import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Idéen er sendt',
  robots: { index: false, follow: false },
};

export default function Takk() {
  return (
    <>
      <Header />
      <main id="innhold" className="underside">
        <div className="ramme tekstkolonne">
          <h1>Idéen er sendt</h1>
          <p className="ingress">
            Vi leser den og svarer deg på e-post innen to virkedager. Har du noe å legge til, svarer du bare på
            bekreftelsen du fikk.
          </p>
          <p>
            <Link href="/">Tilbake til forsiden</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
