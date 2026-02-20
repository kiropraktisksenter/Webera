import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettsidedesign for bedrifter – hvorfor "pent" ikke er nok | Webera',
  description: 'Mange nettsider ser bra ut, men fungerer dårlig. Lær hva godt nettsidedesign faktisk er for en bedrift, og hvorfor design må sees som et verktøy – ikke pynt.',
  keywords: ['nettsidedesign', 'webdesign bedrift', 'god nettside', 'effektiv design', 'brukeropplevelse'],
  authors: [{ name: 'Webera' }],
  alternates: {
    canonical: 'https://webera.no/guider/nettsidedesign-for-bedrifter',
  },
  openGraph: {
    title: 'Nettsidedesign for bedrifter – hvorfor "pent" ikke er nok',
    description: 'Hva godt nettsidedesign faktisk er for en bedrift, og hvorfor design må sees som et verktøy – ikke pynt.',
    type: 'article',
    locale: 'nb_NO',
    publishedTime: '2025-01-11',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
