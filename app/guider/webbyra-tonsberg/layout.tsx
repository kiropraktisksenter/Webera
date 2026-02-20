import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Webbyrå i Tønsberg – Lokalt og personlig | Webera',
  description: 'Leter du etter et webbyrå i Tønsberg? Webera leverer moderne nettsider med fokus på kvalitet, design og langsiktig verdi for lokale bedrifter.',
  keywords: ['webbyrå Tønsberg', 'nettside Tønsberg', 'webdesign Tønsberg', 'lokal webutvikling'],
  authors: [{ name: 'Webera' }],
  alternates: {
    canonical: 'https://webera.no/guider/webbyra-tonsberg',
  },
  openGraph: {
    title: 'Webbyrå i Tønsberg – Lokalt og personlig | Webera',
    description: 'Leter du etter et webbyrå i Tønsberg? Webera leverer moderne nettsider for lokale bedrifter.',
    type: 'article',
    locale: 'nb_NO',
    publishedTime: '2025-01-28',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
