import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/', '/takk'] },
    sitemap: 'https://webera.no/sitemap.xml',
  };
}
