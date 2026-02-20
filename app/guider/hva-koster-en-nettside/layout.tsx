import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nettside – hva koster det egentlig? | Webera',
  description: 'Hva koster det å ha en nettside som faktisk fungerer over tid? Lær om prisnivåer i Norge, skjulte kostnader og hva du bør spørre om før du velger leverandør.',
  keywords: ['nettside pris', 'hva koster nettside', 'pris nettside bedrift', 'webdesign pris', 'nettside kostnader'],
  authors: [{ name: 'Webera' }],
  alternates: {
    canonical: 'https://webera.no/guider/hva-koster-en-nettside',
  },
  openGraph: {
    title: 'Nettside – hva koster det egentlig, og hvorfor prisen ofte misforstås',
    description: 'Hva koster det å ha en nettside som faktisk fungerer over tid? Lær om prisnivåer, skjulte kostnader og hva du bør spørre om.',
    type: 'article',
    locale: 'nb_NO',
    publishedTime: '2025-01-11',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
