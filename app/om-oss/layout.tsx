import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Om Webera – Kvalitet over volum | Webbyrå Tønsberg',
  description: 'Webera er et lite, spesialisert webbyrå i Tønsberg. Vi jobber med kvalitet over volum og leverer moderne nettsider med langsiktig verdi.',
  alternates: {
    canonical: 'https://webera.no/om-oss',
  },
  openGraph: {
    title: 'Om Webera – Kvalitet over volum | Webbyrå Tønsberg',
    description: 'Et lite, spesialisert webbyrå i Tønsberg. Kvalitet over volum.',
    url: 'https://webera.no/om-oss',
    type: 'website',
    locale: 'nb_NO',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
