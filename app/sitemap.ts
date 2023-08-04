import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://internet.dev',
      lastModified: new Date(),
    },
    {
      url: 'https://internet.dev/team',
      lastModified: new Date(),
    },
    {
      url: 'https://internet.dev/pricing',
      lastModified: new Date(),
    },
    {
      url: 'https://internet.dev/inquire',
      lastModified: new Date(),
    },
  ];
}
