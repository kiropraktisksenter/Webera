import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Webera - Moderne nettsider som faktisk fungerer",
  description: "Vi designer og leverer raske, profesjonelle nettsider – og tar oss av drift, hosting og vedlikehold, slik at du slipper. Webutvikling & Hosting.",
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
