import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gratis nettsidesjekk – Få tilbakemelding på din nettside | Webera',
  description: 'Få en gratis analyse av nettsiden din med konkrete forbedringsforslag. Rask og uforpliktende tilbakemelding fra Webera.',
  alternates: {
    canonical: 'https://webera.no/nettside-sjekk',
  },
  openGraph: {
    title: 'Gratis nettsidesjekk – Få tilbakemelding på din nettside | Webera',
    description: 'Få en gratis analyse av nettsiden din med konkrete forbedringsforslag.',
    url: 'https://webera.no/nettside-sjekk',
    type: 'website',
    locale: 'nb_NO',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
