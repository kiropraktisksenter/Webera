import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import IdeSkjema from '@/components/IdeSkjema';

export const metadata: Metadata = {
  title: 'Har du spurt ChatGPT eller Claude? Ta med svaret hit',
  description:
    'Fått en plan fra ChatGPT eller Claude for en app, nettside eller AI-løsning? Lim den inn, så sier vi hva det koster å få den laget. Første samtale er gratis.',
  alternates: { canonical: '/fra-chatgpt' },
};

export default function FraChatgpt() {
  return (
    <>
      <Header />
      <main id="innhold" className="underside">
        <div className="ramme tekstkolonne">
          <h1>Har du spurt ChatGPT eller Claude? Ta med svaret hit.</h1>
          <p className="ingress">
            Mange får en god plan fra en AI, og står fast når den skal bli til noe som virker. Lim inn det du har fått,
            så leser vi det og sier hva det koster å få det laget.
          </p>
          <ul className="fra-ai-punkter">
            <li>
              <strong>Vi leser planen.</strong> Den trenger ikke være ferdig eller riktig.
            </li>
            <li>
              <strong>Vi sier ærlig hva som er lurt.</strong> Klarer du deg selv, sier vi det.
            </li>
            <li>
              <strong>Du får en fast pris.</strong> Første samtale er gratis, og vi svarer innen to virkedager.
            </li>
          </ul>
          <div data-ikke-dekk>
            <IdeSkjema visAlt medAiSvar />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
