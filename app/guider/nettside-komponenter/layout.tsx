import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alle komponentene i en nettside – hva de betyr | Webera',
  description: 'En nettside består av mange små komponenter som må spille sammen. Denne guiden forklarer de viktigste delene, og hvorfor helhet er avgjørende.',
  keywords: ['nettside komponenter', 'webdesign elementer', 'nettside struktur', 'hero section', 'CTA', 'navigasjon'],
  authors: [{ name: 'Webera' }],
  openGraph: {
    title: 'Alle komponentene i en nettside – hva de betyr, og hvorfor helheten er avgjørende',
    description: 'Lær om de viktigste komponentene i en nettside og hvorfor ansvar for helheten er avgjørende.',
    type: 'article',
    locale: 'nb_NO',
    publishedTime: '2025-01-06',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
