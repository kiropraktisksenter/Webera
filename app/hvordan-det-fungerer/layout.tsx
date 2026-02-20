import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Slik jobber vi – Fra idé til ferdig nettside | Webera',
  description: 'Lær hvordan vi jobber: fra avklaring og design til ferdig nettside, testing og publisering. En enkel og oversiktlig prosess.',
  alternates: {
    canonical: 'https://webera.no/hvordan-det-fungerer',
  },
  openGraph: {
    title: 'Slik jobber vi – Fra idé til ferdig nettside | Webera',
    description: 'Lær hvordan vi jobber: fra avklaring og design til ferdig nettside.',
    url: 'https://webera.no/hvordan-det-fungerer',
    type: 'website',
    locale: 'nb_NO',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
