import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Siden finnes ikke',
  robots: { index: false },
};

export default function IkkeFunnet() {
  return (
    <>
      <Header />
      <main id="innhold" className="underside">
        <div className="ramme tekstkolonne">
          <h1>Siden finnes ikke</h1>
          <p className="ingress">Lenken kan være gammel, eller siden er flyttet.</p>
          <p>
            <Link href="/">Gå til forsiden</Link> eller <Link href="/send-ide">send idéen din</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
