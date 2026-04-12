import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import MessengerChat from '@/components/MessengerChat';
import "./globals.css";

export const metadata: Metadata = {
  title: "Nettsider for helseklinikker | Webera",
  description: "Webera lager profesjonelle nettsider og digitale løsninger for helseklinikker. Vi driver selv klinikk – vi forstår bransjen innenfra.",
  keywords: "nettside kiropraktor, nettside fysioterapeut, webbyrå helsebedrift, nettside helseklinikk, lokal SEO klinikk, nettside naprapat, webbyrå Tønsberg, nettsider for helsebedrifter",
  authors: [{ name: "Webera" }],
  creator: "Webera",
  publisher: "Webera",
  metadataBase: new URL('https://webera.no'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Nettsider for helseklinikker | Webera",
    description: "Webera lager profesjonelle nettsider og digitale løsninger for helseklinikker. Vi driver selv klinikk – vi forstår bransjen innenfra.",
    url: 'https://webera.no',
    siteName: 'Webera',
    locale: 'nb_NO',
    type: 'website',
    images: [
      {
        url: '/images/Webera Logo.png',
        width: 1200,
        height: 630,
        alt: 'Webera - Webbyrå i Tønsberg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nettsider for helseklinikker | Webera",
    description: "Webera lager profesjonelle nettsider eksklusivt for helsebedrifter. Vi driver selv klinikk – vi forstår bransjen innenfra.",
    images: ['/images/Webera Logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: 'LEGG_TIL_DIN_KODE_FRA_GOOGLE_SEARCH_CONSOLE',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className="antialiased">
        {children}
        <Analytics />
        <MessengerChat />
      </body>
    </html>
  );
}
