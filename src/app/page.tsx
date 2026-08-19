import type { Metadata } from 'next';
import Link from 'next/link';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import HeroVisual from '@/components/HeroVisual';
import { MessageCircle, HelpCircle, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Certificate Services in Hyderabad & Across India | Certification Work',
  description:
    'Certification Work provides reliable doorstep certificate assistance in Hyderabad and across India. We assist with Birth Certificate, Caste Certificate, Income Certificate, EWS Certificate, and Residence Certificate applications.',
  alternates: {
    canonical: 'https://certificationwork.com/',
  },
};

export default function HomePage() {
  const mainWhatsappUrl = getWhatsAppUrl();

  const servicesList = [
    { title: 'Birth Certificate', slug: 'birth-certificate' },
    { title: 'Caste Certificate', slug: 'caste-certificate' },
    { title: 'Income Certificate', slug: 'income-certificate' },
    { title: 'EWS Certificate', slug: 'ews-certificate' },
    { title: 'Residence Certificate', slug: 'residence-certificate' },
    { title: 'Aadhaar Services', slug: 'aadhaar-services' },
    { title: 'PAN Card', slug: 'pan-card' },
    { title: 'Passport Services', slug: 'passport-services' },
    { title: 'Marriage Certificate', slug: 'marriage-certificate' },
    { title: 'Driving Licence', slug: 'driving-licence' },
    { title: 'Property Search', slug: 'property-search' },
    { title: 'GST Services', slug: 'gst-services' },
  ];

  const faqs = [
    {
      question: 'What certificate services does Certification Work assist with?',
      answer:
        'Certification Work assists with essential state and national document services, including Birth Certificate, Caste Certificate, Income Certificate, EWS Certificate, and Residence Certificate applications, as well as Aadhaar updates, PAN card assistance, Passport guidance, Marriage Certificate registration, Driving Licence processing, Property Search, and GST registration.',
    },
    {
      question: 'Do you provide doorstep document assistance in Hyderabad?',
      answer:
        'Yes. We offer dedicated doorstep document collection, form verification, and certificate delivery services across Hyderabad and Telangana, while serving applicants across all major states in India.',
    },
    {
      question: 'How does the document assistance process work?',
      answer:
        'First, message us on WhatsApp with the certificate service you require. Our documentation specialists provide a clear checklist of supporting documents. We verify your records, draft the application submission, monitor processing status, and deliver your completed certificate to your home.',
    },
    {
      question: 'Is Certification Work an official government department?',
      answer:
        'No. Certification Work is an independent private consultancy providing professional document assistance, filing guidance, and doorstep logistics. Final approval of all certificates rests solely with the authorized government issuing departments.',
    },
    {
      question: 'What supporting documents are generally required?',
      answer:
        'Requirements vary by certificate. Typically, proof of identity (Aadhaar or Voter ID), address proof, passport-sized photographs, and specific eligibility documents (such as ration cards or previous records) are needed. Each of our service pages details the exact checklist.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="space-y-20 pb-16 bg-white text-[#1F2937]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO SECTION */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16 w-full">
          
          {/* Left Column: Text & WhatsApp CTA */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Single H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
              <span className="text-[#0B2850] block">Doorstep Certificate Services</span>
              <span className="text-[#1769E0] block mt-1.5">in Hyderabad &amp; Across India.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#667085] font-medium leading-relaxed max-w-xl">
              We collect your documents, guide you through verification, handle application submissions, and deliver your completed certificates straight to your doorstep.
            </p>

            {/* WhatsApp Main Button */}
            <div className="pt-2">
              <a
                href={mainWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#1769E0] hover:bg-[#1256b8] text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <MessageCircle className="w-5.5 h-5.5 fill-current" />
                <span>Chat with us on WhatsApp →</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Visual Graphic */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <HeroVisual />
          </div>

        </div>
      </section>

      {/* 2. SERVICES (COMPACT STRIP & DEDICATED LINKS) */}
      <section id="services" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center scroll-mt-24">
        
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B2850] tracking-tight">
            Certificate &amp; Document Services Offered
          </h2>
          <p className="text-xs text-[#667085] font-medium">
            Click any service below to view document checklists, process steps, and requirements.
          </p>
        </div>

        {/* Compact Service Strip with SEO Links */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 pt-2 sm:flex-wrap sm:justify-center no-scrollbar">
          {servicesList.map((service, idx) => (
            <Link
              key={idx}
              href={`/services/${service.slug}`}
              className="shrink-0 px-4 py-2.5 rounded-xl bg-[#EEF6FF] border border-[#CBD5E1] text-[#0B2850] hover:bg-[#1769E0] hover:text-white text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <span>{service.title}</span>
              <span className="text-[#1769E0] group-hover:text-white">→</span>
            </Link>
          ))}
          <Link
            href="/services"
            className="shrink-0 px-4 py-2.5 rounded-xl bg-[#1769E0] text-white text-xs font-bold hover:bg-[#1256b8] transition-colors"
          >
            All Services →
          </Link>
        </div>

      </section>

      {/* 3. PROCESS (HOW IT WORKS) */}
      <section id="how-it-works" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-24 text-center">
        
        <h2 className="text-2xl sm:text-3xl font-black text-[#0B2850] tracking-tight">
          How Our Doorstep Process Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 text-left space-y-2">
            <span className="text-xs font-black text-[#1769E0]">01</span>
            <h3 className="text-base font-bold text-[#0B2850]">Talk to Us</h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              WhatsApp our specialists about your required document or certificate service.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 text-left space-y-2">
            <span className="text-xs font-black text-[#1769E0]">02</span>
            <h3 className="text-base font-bold text-[#0B2850]">Share Documents</h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              We share an exact checklist of supporting proof and arrange document collection.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 text-left space-y-2">
            <span className="text-xs font-black text-[#1769E0]">03</span>
            <h3 className="text-base font-bold text-[#0B2850]">Application Handling</h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              Our team verifies, formats, and handles the application submission accurately.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 text-left space-y-2">
            <span className="text-xs font-black text-[#1769E0]">04</span>
            <h3 className="text-base font-bold text-[#0B2850]">Doorstep Delivery</h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              Once issued by authorities, we deliver your final certificate to your home.
            </p>
          </div>

        </div>

      </section>

      {/* 4. BRAND VISION & OVERVIEW */}
      <section id="about" className="max-w-4xl mx-auto px-4 py-8 space-y-6 scroll-mt-24 text-left">
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#1769E0] text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-[#1769E0]" />
              <span>Hyderabad, Telangana &amp; All-India Service Coverage</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B2850]">
              Reliable Certificate Assistance Services
            </h2>
          </div>

          <p className="text-sm text-[#4B5563] leading-relaxed font-normal">
            Certification Work is a dedicated document consultancy helping individuals and families navigate essential administrative processes without unnecessary stress. Whether you need a <Link href="/services/birth-certificate" className="text-[#1769E0] font-semibold hover:underline">Birth Certificate</Link>, <Link href="/services/caste-certificate" className="text-[#1769E0] font-semibold hover:underline">Caste Certificate</Link>, <Link href="/services/income-certificate" className="text-[#1769E0] font-semibold hover:underline">Income Certificate</Link>, <Link href="/services/ews-certificate" className="text-[#1769E0] font-semibold hover:underline">EWS Certificate</Link>, or <Link href="/services/residence-certificate" className="text-[#1769E0] font-semibold hover:underline">Residence Certificate</Link>, our team provides step-by-step guidance from document collection to doorstep delivery in Hyderabad, Telangana, and across India.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4.5 h-4.5 text-[#1769E0] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold text-[#0B2850]">Doorstep Convenience</h3>
                <p className="text-[11px] text-[#667085]">Personalized document pickup and home delivery in Hyderabad.</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4.5 h-4.5 text-[#1769E0] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold text-[#0B2850]">Transparent Checklists</h3>
                <p className="text-[11px] text-[#667085]">Clear instructions on required proofs before filing.</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4.5 h-4.5 text-[#1769E0] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold text-[#0B2850]">Data Privacy</h3>
                <p className="text-[11px] text-[#667085]">Strict confidentiality for all personal records and documents.</p>
              </div>
            </div>
          </div>

          <div className="pt-2 text-[11px] text-[#667085] border-t border-[#E2E8F0]">
            <span className="font-semibold text-[#0B2850]">Disclaimer:</span> CertificationWork.com is a private document consultancy. We are not affiliated with any government department or issuing authority. All certificate issuances remain at the sole discretion of the respective government authority.
          </div>
        </div>
      </section>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <section id="faq" className="max-w-4xl mx-auto px-4 space-y-6 scroll-mt-24">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-1.5 text-[#1769E0] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-[#1769E0]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B2850]">
            Common Questions About Our Services
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-6 text-left space-y-2 hover:border-[#CBD5E1] transition-colors"
            >
              <h3 className="text-base font-bold text-[#0B2850]">
                {faq.question}
              </h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section id="contact" className="max-w-4xl mx-auto px-4 scroll-mt-24">
        <div className="bg-[#EEF6FF] border border-[#CBD5E1] rounded-3xl p-10 sm:p-14 text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B2850]">
              Need a Certificate in Hyderabad or India?
            </h2>
            <p className="text-sm text-[#667085] font-medium max-w-md mx-auto">
              Get direct doorstep assistance from our documentation specialists today.
            </p>
          </div>

          <div>
            <a
              href={mainWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#1769E0] hover:bg-[#1256b8] text-white font-bold text-base shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Chat with us on WhatsApp →</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
