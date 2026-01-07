import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Webera - Webbyrå i Tønsberg | Moderne nettsider for hele Norge",
  description: "Profesjonelt webbyrå i Tønsberg som leverer moderne nettsider til hele Norge. Fast pris, inkludert hosting og vedlikehold. Fra kr 15.000,-",
  keywords: "webbyrå Tønsberg, nettside Tønsberg, webutvikling, webdesign, hosting, nettsider, moderne nettsider",
  authors: [{ name: "Webera" }],
  creator: "Webera",
  publisher: "Webera",
  metadataBase: new URL('https://webera.no'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Webera - Webbyrå i Tønsberg | Moderne nettsider",
    description: "Profesjonelt webbyrå i Tønsberg som leverer moderne nettsider til hele Norge. Fast pris, inkludert hosting og vedlikehold.",
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
    title: "Webera - Webbyrå i Tønsberg",
    description: "Profesjonelt webbyrå som leverer moderne nettsider til hele Norge",
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
      </body>
    </html>
  );
}
