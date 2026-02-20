import Navigation from '@/components/Navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guider om nettsider | Webera',
  description: 'Praktiske guider som hjelper deg å ta bedre valg når det gjelder nettside for din bedrift. Lær om design, priser og best practices.',
  alternates: {
    canonical: 'https://webera.no/guider',
  },
  openGraph: {
    title: 'Guider om nettsider | Webera',
    description: 'Praktiske guider som hjelper deg å ta bedre valg når det gjelder nettside for din bedrift.',
    type: 'website',
    locale: 'nb_NO',
  },
};

export default function GuiderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
