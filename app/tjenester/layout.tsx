import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tjenester – Moderne nettsider og hosting | Webera',
  description: 'Se hva Webera tilbyr: webutvikling, design, hosting og drift. Skreddersydde løsninger for små og mellomstore bedrifter i Tønsberg og omegn.',
  alternates: {
    canonical: 'https://webera.no/tjenester',
  },
  openGraph: {
    title: 'Tjenester – Moderne nettsider og hosting | Webera',
    description: 'Se hva Webera tilbyr: webutvikling, design, hosting og drift for små og mellomstore bedrifter.',
    url: 'https://webera.no/tjenester',
    type: 'website',
    locale: 'nb_NO',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
