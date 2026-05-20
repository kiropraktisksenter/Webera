import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import WeberaChat from '@/components/WeberaChat';
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
        url: 'https://webera.no/images/hero-klinikk-3.jpg',
        width: 1200,
        height: 630,
        alt: 'Webera – Nettsider for helsebedrifter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nettsider for helseklinikker | Webera",
    description: "Webera lager profesjonelle nettsider eksklusivt for helsebedrifter. Vi driver selv klinikk – vi forstår bransjen innenfra.",
    images: ['https://webera.no/images/hero-klinikk-3.jpg'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
        <WeberaChat />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
