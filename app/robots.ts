import type { MetadataRoute } from 'next';

// AI-søk (ChatGPT, Claude, Perplexity, Google) skal kunne lese og vise til sidene.
const AI_ROBOTER = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
];

export default function robots(): MetadataRoute.Robots {
  const stengt = ['/api/', '/takk'];
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: stengt },
      { userAgent: AI_ROBOTER, allow: '/', disallow: stengt },
    ],
    sitemap: 'https://webera.no/sitemap.xml',
  };
}
