import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  metadataBase: new URL('https://certificationwork.com'),
  title: {
    default: 'Certificate Services in Hyderabad & Across India | Certification Work',
    template: '%s | Certification Work',
  },
  description:
    'Certification Work provides reliable doorstep certificate assistance in Hyderabad and across India, helping individuals with Birth, Caste, Income, EWS, and Residence certificates.',
  keywords: [
    'Certification Work',
    'CertificationWork.com',
    'certificate services Hyderabad',
    'certificate services India',
    'birth certificate assistance Hyderabad',
    'caste certificate Telangana',
    'income certificate assistance',
    'ews certificate Hyderabad',
    'residence certificate India',
    'doorstep document services Hyderabad',
    'aadhaar card update assistance',
    'pan card assistance India',
  ],
  alternates: {
    canonical: 'https://certificationwork.com/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Certificate Services in Hyderabad & Across India | Certification Work',
    description:
      'Certification Work provides reliable doorstep certificate assistance in Hyderabad and across India, helping individuals with Birth, Caste, Income, EWS, and Residence certificates.',
    url: 'https://certificationwork.com',
    siteName: 'Certification Work',
    images: [
      {
        url: '/official-logo.png',
        width: 1200,
        height: 630,
        alt: 'Certification Work Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certificate Services in Hyderabad & Across India | Certification Work',
    description:
      'Certification Work provides reliable doorstep certificate assistance in Hyderabad and across India, helping individuals with Birth, Caste, Income, EWS, and Residence certificates.',
    images: ['/official-logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: 'Certification Work',
    url: 'https://certificationwork.com',
    logo: 'https://certificationwork.com/official-logo.png',
    description:
      'Certification Work provides reliable doorstep certificate and document assistance services in Hyderabad, Telangana, and across India.',
    telephone: '+91-8639135520',
    email: 'support@certificationwork.com',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Hyderabad',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Telangana',
      },
      {
        '@type': 'Country',
        name: 'India',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-8639135520',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Telugu'],
    },
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Certification Work',
    url: 'https://certificationwork.com',
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-white text-[#1F2937] selection:bg-[#1769E0] selection:text-white">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </Providers>
      </body>
    </html>
  );
}
