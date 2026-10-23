import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import IdeSkjema from '@/components/IdeSkjema';

export const metadata: Metadata = {
  title: 'Send idé',
  description: 'Fortell Lars om idéen din til en app, et verktøy eller en AI-løsning. Gratis første samtale.',
  alternates: { canonical: '/send-ide' },
};

export default function SendIde() {
  return (
    <>
      <Header />
      <main id="innhold" className="underside">
        <div className="ramme tekstkolonne">
          <h1>Fortell meg om idéen din</h1>
          <p className="ingress dempet">Jeg svarer innen to virkedager. Første samtale er gratis.</p>
          <div data-ikke-dekk>
            <IdeSkjema visAlt />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
