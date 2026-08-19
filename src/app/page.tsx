import Metadata from 'next';
import Link from 'next/link';
import { getWhatsAppUrl, getServiceWhatsAppUrl } from '@/lib/whatsapp';
import HeroVisual from '@/components/HeroVisual';
import { MessageCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Certification Work Services in India',
  description:
    'Certification Work provides reliable certificate and certification services in India, helping individuals and businesses with documentation and verification.',
  alternates: {
    canonical: 'https://www.certificationwork.com/',
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

  return (
    <div className="space-y-20 pb-16 bg-white text-[#1F2937]">
      
      {/* 1. HERO SECTION */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16 w-full">
          
          {/* Left Column: Text & WhatsApp CTA */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2.5 text-[#1769E0] text-xs font-bold uppercase tracking-widest">
              <span className="w-8 h-0.5 bg-[#1769E0] inline-block rounded-full" />
              <span>CERTIFICATE ASSISTANCE, MADE SIMPLE</span>
            </div>

            {/* Exactly One Main H1 Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
              <span className="text-[#0B2850] block">Certificate &amp; Certification</span>
              <span className="text-[#1769E0] block mt-1.5">Services in India</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#667085] font-medium leading-relaxed max-w-xl">
              We collect your documents, handle the application process, and deliver your completed certificate to your home.
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
            What We Help With
          </h2>
          <p className="text-xs text-[#667085] font-medium">
            Explore dedicated service assistance guides or chat directly on WhatsApp.
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
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 text-left space-y-2">
            <span className="text-xs font-black text-[#1769E0]">01</span>
            <h3 className="text-base font-bold text-[#0B2850]">Talk to Us</h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              WhatsApp us about what document or certificate service you need.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 text-left space-y-2">
            <span className="text-xs font-black text-[#1769E0]">02</span>
            <h3 className="text-base font-bold text-[#0B2850]">Share Documents</h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              We'll provide a clear checklist of required supporting documents.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 text-left space-y-2">
            <span className="text-xs font-black text-[#1769E0]">03</span>
            <h3 className="text-base font-bold text-[#0B2850]">We Handle Application</h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              Our team verifies, formats, and handles the application submission.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 text-left space-y-2">
            <span className="text-xs font-black text-[#1769E0]">04</span>
            <h3 className="text-base font-bold text-[#0B2850]">Delivered to You</h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              Once completed, we deliver the final certificate to your doorstep.
            </p>
          </div>

        </div>

      </section>

      {/* 4. BRAND VISION */}
      <section id="about" className="max-w-3xl mx-auto px-4 py-12 text-center space-y-3 scroll-mt-24">
        <h2 className="text-3xl font-black text-[#0B2850]">
          Protecting the Proof of Life.
        </h2>
        <p className="text-sm text-[#667085] font-medium max-w-lg mx-auto leading-relaxed">
          Making essential document services simpler and more accessible for individuals and businesses across India.
        </p>
      </section>

      {/* 5. FINAL CTA */}
      <section id="contact" className="max-w-4xl mx-auto px-4 scroll-mt-24">
        <div className="bg-[#EEF6FF] border border-[#CBD5E1] rounded-3xl p-10 sm:p-14 text-center space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B2850]">
              Need a Certificate?
            </h2>
            <p className="text-sm text-[#667085] font-medium">
              Get direct doorstep assistance from our team today.
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
