import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES_DATA, ServiceData } from '@/lib/servicesData';
import { getServiceWhatsAppUrl } from '@/lib/whatsapp';
import { MessageCircle, CheckCircle2, HelpCircle, ArrowRight, FileCheck, Shield } from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES_DATA[params.slug];
  if (!service) return {};

  const canonicalUrl = `https://certificationwork.com/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: canonicalUrl,
      siteName: 'Certification Work',
      images: [
        {
          url: '/official-logo.png',
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: ['/official-logo.png'],
    },
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = SERVICES_DATA[params.slug];
  if (!service) {
    notFound();
  }

  const whatsappUrl = getServiceWhatsAppUrl(service.title);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription,
    provider: {
      '@type': 'Organization',
      name: 'Certification Work',
      url: 'https://certificationwork.com',
      logo: 'https://certificationwork.com/official-logo.png',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    serviceType: service.category,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://certificationwork.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://certificationwork.com/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `https://certificationwork.com/services/${service.slug}`,
      },
    ],
  };

  return (
    <div className="space-y-12 py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-white text-[#1F2937]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="text-xs font-semibold text-[#667085] flex items-center gap-2">
        <Link href="/" className="hover:text-[#1769E0] transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/services" className="hover:text-[#1769E0] transition-colors">
          Services
        </Link>
        <span>/</span>
        <span className="text-[#0B2850] font-bold truncate">{service.title}</span>
      </nav>

      {/* Header Section */}
      <div className="space-y-4 text-left border-b border-[#E5E7EB] pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF6FF] text-[#1769E0] text-xs font-extrabold tracking-wide uppercase">
          <Shield className="w-3.5 h-3.5" />
          <span>{service.category}</span>
        </div>

        {/* Single H1 Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2850] tracking-tight leading-tight">
          {service.title}
        </h1>

        <p className="text-base sm:text-lg text-[#667085] font-medium leading-relaxed">
          {service.shortDescription}
        </p>

        {/* WhatsApp Direct CTA */}
        <div className="pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-[#1769E0] hover:bg-[#1256b8] text-white font-bold text-sm shadow-md transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Chat on WhatsApp for {service.title} →</span>
          </a>
        </div>
      </div>

      {/* Overview Section */}
      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-[#0B2850] tracking-tight">
          Service Overview
        </h2>
        <p className="text-sm text-[#4B5563] leading-relaxed font-normal">
          {service.fullDescription}
        </p>
      </section>

      {/* Required Documents Checklist */}
      <section className="bg-[#EEF6FF] border border-[#CBD5E1] rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <FileCheck className="w-6 h-6 text-[#1769E0]" />
          <h2 className="text-xl font-bold text-[#0B2850]">
            Required Documents Checklist
          </h2>
        </div>
        <p className="text-xs text-[#667085]">
          Make sure you have copies or details of the following documents available:
        </p>
        <ul className="space-y-2.5 pt-2">
          {service.requiredDocuments.map((doc, idx) => (
            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-medium text-[#1F2937]">
              <CheckCircle2 className="w-4.5 h-4.5 text-[#1769E0] shrink-0 mt-0.5" />
              <span>{doc}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Step-by-Step Process */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-[#0B2850] tracking-tight">
          How The Application Process Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.processSteps.map((stepItem, idx) => (
            <div key={idx} className="bg-white border border-[#E5E7EB] rounded-xl p-5 space-y-1.5 text-left">
              <span className="text-xs font-black text-[#1769E0]">{stepItem.step}</span>
              <p className="text-xs text-[#667085] leading-relaxed font-medium">
                {stepItem.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="space-y-6 pt-4">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-[#1769E0]" />
            <h2 className="text-2xl font-bold text-[#0B2850] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-[#E5E7EB] pb-4 space-y-1">
                <h3 className="text-sm font-bold text-[#0B2850]">
                  {faq.question}
                </h3>
                <p className="text-xs text-[#667085] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Internal Links to Related Services */}
      {service.relatedSlugs && service.relatedSlugs.length > 0 && (
        <section className="pt-6 border-t border-[#E5E7EB] space-y-4">
          <h3 className="text-base font-bold text-[#0B2850]">
            Related Certificate &amp; Document Services
          </h3>
          <div className="flex flex-wrap gap-2">
            {service.relatedSlugs.map((relSlug) => {
              const relService = SERVICES_DATA[relSlug];
              if (!relService) return null;
              return (
                <Link
                  key={relSlug}
                  href={`/services/${relSlug}`}
                  className="px-3.5 py-2 rounded-lg bg-[#F3F4F6] hover:bg-[#EEF6FF] text-[#0B2850] hover:text-[#1769E0] text-xs font-semibold transition-colors flex items-center gap-1"
                >
                  <span>{relService.title}</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Bottom CTA Card */}
      <div className="bg-[#EEF6FF] border border-[#CBD5E1] rounded-2xl p-8 text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-[#0B2850]">
          Ready to apply for {service.title}?
        </h3>
        <p className="text-xs text-[#667085]">
          Chat with our documentation specialists directly on WhatsApp for guidance.
        </p>
        <div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#1769E0] hover:bg-[#1256b8] text-white font-bold text-sm shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp →</span>
          </a>
        </div>
      </div>

    </div>
  );
}
