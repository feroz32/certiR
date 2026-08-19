import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/vault/', '/login/'],
      },
    ],
    sitemap: 'https://www.certificationwork.com/sitemap.xml',
  };
}
