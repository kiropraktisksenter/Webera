import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettsidetrender i 2025 – hva er verdt å følge | Webera',
  description: 'Hvert år dukker det opp nye nettsidetrender. Denne guiden hjelper deg å skille mellom trender som gir verdi, og trender som fort blir et problem.',
  keywords: ['nettsidetrender', 'webdesign trender', 'moderne nettsider', 'design trender 2025', 'nettside utvikling'],
  authors: [{ name: 'Webera' }],
  openGraph: {
    title: 'Nettsidetrender i 2025 – hva er verdt å følge, og hva bør du styre unna?',
    description: 'Skille mellom trender som gir verdi og trender som fort blir et problem for din bedrift.',
    type: 'article',
    locale: 'nb_NO',
    publishedTime: '2025-01-07',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
