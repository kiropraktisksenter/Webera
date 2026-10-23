import type { Metadata, Viewport } from 'next';
import { Schibsted_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import SporOmNoe from '@/components/SporOmNoe';
import './globals.css';

const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  display: 'swap',
  variable: '--font-schibsted',
});

const TITTEL = 'Webera – fra idé til digital løsning | Tønsberg';
const BESKRIVELSE =
  'Har du en idé til en app, et verktøy eller en AI-løsning? Fortell Lars om den. Gratis første samtale, fast pris og løsninger laget for måten du jobber på.';

export const metadata: Metadata = {
  metadataBase: new URL('https://webera.no'),
  title: { default: TITTEL, template: '%s | Webera' },
  description: BESKRIVELSE,
  authors: [{ name: 'Lars Holth' }],
  creator: 'Webera AS',
  publisher: 'Webera AS',
  alternates: { canonical: '/' },
  openGraph: {
    title: TITTEL,
    description: BESKRIVELSE,
    url: 'https://webera.no',
    siteName: 'Webera',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITTEL,
    description: BESKRIVELSE,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAF7' },
    { media: '(prefers-color-scheme: dark)', color: '#171C1B' },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nb" className={schibsted.variable}>
      <body>
        <a className="hopp-til-innhold" href="#innhold">
          Hopp til innholdet
        </a>
        {children}
        <SporOmNoe />
        <Analytics />
      </body>
    </html>
  );
}
