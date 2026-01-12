import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jeg trenger ny nettside – hva bør du gjøre? | Webera',
  description: 'De fleste som sier "jeg trenger ny nettside" har allerede forsøkt å forbedre den gamle. Denne guiden viser hva du bør gjøre – og hva du bør styre unna.',
  keywords: ['ny nettside', 'nettside leverandør', 'velge webbyrå', 'nettside sjekkliste', 'webdesign valg'],
  authors: [{ name: 'Webera' }],
  openGraph: {
    title: '«Jeg trenger ny nettside» – hva bør du gjøre, og hva bør du unngå?',
    description: 'Praktisk guide til hva du bør gjøre når du trenger ny nettside, og fallgruver du bør unngå.',
    type: 'article',
    locale: 'nb_NO',
    publishedTime: '2025-01-11',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
