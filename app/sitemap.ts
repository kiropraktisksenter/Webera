import type { MetadataRoute } from 'next';
import { GUIDER } from '@/lib/guide-tekster';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://webera.no';
  return [
    { url: base, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/send-ide`, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/fra-chatgpt`, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/hvordan`, changeFrequency: 'monthly', priority: 0.7 },
    ...GUIDER.map((g) => ({ url: `${base}${g.sti}`, changeFrequency: 'monthly' as const, priority: 0.7 })),
    { url: `${base}/personvern`, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
