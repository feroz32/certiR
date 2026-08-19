import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.certificationwork.com'),
  title: {
    default: 'Certification Work Services in India',
    template: '%s | Certification Work',
  },
  description:
    'Certification Work provides reliable certificate and certification services in India, helping individuals and businesses with documentation and verification.',
  keywords: [
    'Certification Work',
    'CertificationWork.com',
    'certificate services India',
    'birth certificate application',
    'caste certificate India',
    'income certificate assistance',
    'ews certificate',
    'aadhaar card update',
    'pan card assistance',
    'passport services India',
    'marriage certificate registration',
    'doorstep document services',
  ],
  alternates: {
    canonical: '/',
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
    title: 'Certification Work Services in India',
    description:
      'Certification Work provides reliable certificate and certification services in India, helping individuals and businesses with documentation and verification.',
    url: 'https://www.certificationwork.com',
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
    title: 'Certification Work Services in India',
    description:
      'Certification Work provides reliable certificate and certification services in India, helping individuals and businesses with documentation and verification.',
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
    '@type': 'Organization',
    name: 'Certification Work',
    url: 'https://www.certificationwork.com',
    logo: 'https://www.certificationwork.com/official-logo.png',
    description:
      'Certification Work provides reliable certificate and certification services in India, helping individuals and businesses with documentation and verification.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-8639135520',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Certification Work',
    url: 'https://www.certificationwork.com',
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
