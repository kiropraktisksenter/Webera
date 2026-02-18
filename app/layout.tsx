import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import MessengerChat from '@/components/MessengerChat';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Webera - Profesjonelle nettsider til fast pris | For små og mellomstore bedrifter",
  description: "Et lite, spesialisert webbyrå i Tønsberg. Vi leverer moderne nettsider med fokus på struktur, design og langsiktig kvalitet. Etablering fra kr 20.000,-, hosting fra kr 599,- per måned.",
  keywords: "nettsider fast pris, webbyrå små bedrifter, nettside til fast pris, webbyrå Tønsberg, profesjonelle nettsider, webutvikling, webdesign, hosting inkludert, nettsider for små bedrifter",
  authors: [{ name: "Webera" }],
  creator: "Webera",
  publisher: "Webera",
  metadataBase: new URL('https://webera.no'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Webera - Profesjonelle nettsider til fast pris | For små og mellomstore bedrifter",
    description: "Et lite, spesialisert webbyrå i Tønsberg. Etablering fra kr 20.000,-, hosting fra kr 599,- per måned.",
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
    title: "Webera - Profesjonelle nettsider til fast pris",
    description: "For små og mellomstore bedrifter. Etablering fra kr 20.000,-, hosting fra kr 599,- per måned.",
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
  verification: {
    google: 'google-site-verification-code', // Du må legge til denne senere fra Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={`${inter.className} antialiased`}>
        {children}
        <MessengerChat />
      </body>
    </html>
  );
}
