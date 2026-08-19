import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.certificationwork.com';
  const currentDate = new Date().toISOString();

  const services = [
    'birth-certificate',
    'caste-certificate',
    'income-certificate',
    'ews-certificate',
    'residence-certificate',
    'aadhaar-services',
    'pan-card',
    'passport-services',
    'marriage-certificate',
    'driving-licence',
    'property-search',
    'gst-services',
  ];

  const serviceUrls: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...serviceUrls,
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
