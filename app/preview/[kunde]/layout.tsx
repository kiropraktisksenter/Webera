import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preview | Webera',
  description: 'Preview-nettside laget av Webera',
  robots: {
    index: false, // Ikke indekser preview-sider
    follow: false,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
