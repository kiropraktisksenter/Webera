import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://webera.no';
  return [
    { url: base, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/send-ide`, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/personvern`, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
