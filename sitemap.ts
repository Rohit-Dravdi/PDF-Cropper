import type { MetadataRoute } from 'next';
import { SITE, tools } from '@/lib/tools';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', ...tools.map((t) => t.slug), 'privacy', 'terms'].map((p) => ({ url: `${SITE.url}/${p}`.replace(/\/$/, '') || SITE.url }));
}
