import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ny nettside for bedrift – hva som faktisk fungerer | Webera',
  description: 'Når man vurderer ny nettside for bedrift, handler det sjelden bare om design. Les om struktur, vedlikehold og hva som kjennetegner en nettside som gir resultater.',
  keywords: ['ny nettside', 'bedriftsnettside', 'nettside for bedrift', 'webdesign', 'vedlikehold nettside'],
  authors: [{ name: 'Webera' }],
  alternates: {
    canonical: 'https://webera.no/guider/ny-nettside-for-bedrift',
  },
  openGraph: {
    title: 'Ny nettside for bedrift – hva som faktisk fungerer',
    description: 'Når man vurderer ny nettside for bedrift, handler det sjelden bare om design. Les om struktur, vedlikehold og hva som kjennetegner en nettside som gir resultater.',
    type: 'article',
    locale: 'nb_NO',
    publishedTime: '2025-01-11',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
