import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wix vs Squarespace vs webbyrå – Hva passer for deg? | Webera',
  description: 'Sammenligning av Wix, Squarespace og profesjonelt webbyrå. Lær fordeler, ulemper og hva som passer best for din bedrift.',
  keywords: ['Wix vs Squarespace', 'webbyrå vs Wix', 'nettside bygger', 'DIY nettside', 'profesjonell nettside'],
  authors: [{ name: 'Webera' }],
  alternates: {
    canonical: 'https://webera.no/guider/wix-squarespace-webbyra',
  },
  openGraph: {
    title: 'Wix vs Squarespace vs webbyrå – Hva passer for deg? | Webera',
    description: 'Sammenligning av Wix, Squarespace og profesjonelt webbyrå.',
    type: 'article',
    locale: 'nb_NO',
    publishedTime: '2025-01-28',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
