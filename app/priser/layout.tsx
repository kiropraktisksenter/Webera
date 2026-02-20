import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Priser – Nettsider fra kr 20.000 | Webera',
  description: 'Tydelige, forutsigbare priser. Etablering fra kr 20.000 og hosting fra kr 599 per måned. Ingen skjulte kostnader.',
  alternates: {
    canonical: 'https://webera.no/priser',
  },
  openGraph: {
    title: 'Priser – Nettsider fra kr 20.000 | Webera',
    description: 'Tydelige, forutsigbare priser. Etablering fra kr 20.000 og hosting fra kr 599 per måned.',
    url: 'https://webera.no/priser',
    type: 'website',
    locale: 'nb_NO',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
