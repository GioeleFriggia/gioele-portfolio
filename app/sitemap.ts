import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://gioelefriggia.com';
  return ['', '/profile', '/contact', ...projects.map(p => '/project/' + p.slug)].map(path => ({
    url: base + (path || '/'), changeFrequency: 'monthly' as const, priority: path === '' ? 1 : path.startsWith('/project/') ? 0.8 : 0.7
  }));
}
