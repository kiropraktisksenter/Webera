import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO – hva det betyr og hvorfor det er viktig | Webera',
  description: 'SEO er et begrep mange har hørt om, men få virkelig forstår. Denne guiden forklarer hva SEO faktisk er, hvordan det fungerer i praksis, og hvorfor det bør være en del av nettsiden fra starten av.',
  keywords: ['SEO', 'søkemotoroptimalisering', 'Google ranking', 'nettside synlighet', 'organisk trafikk', 'søkeresultater'],
  authors: [{ name: 'Webera' }],
  openGraph: {
    title: 'SEO – hva det betyr, hvordan det fungerer, og hvorfor det er viktig for bedrifter',
    description: 'Lær hva SEO faktisk er og hvorfor det bør være en del av nettsiden fra starten av.',
    type: 'article',
    locale: 'nb_NO',
    publishedTime: '2025-01-05',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
