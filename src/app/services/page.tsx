import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES_DATA } from '@/lib/servicesData';
import { MessageCircle, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export const metadata = {
  title: 'Certificate Services in India | Certification Work',
  description:
    'Browse all certificate and document assistance services provided by Certification Work in India, including birth, caste, income, EWS, Aadhaar, PAN, passport, and marriage certificates.',
  alternates: {
    canonical: 'https://www.certificationwork.com/services',
  },
};

export default function ServicesIndexPage() {
  const mainWhatsappUrl = getWhatsAppUrl();
  const servicesList = Object.values(SERVICES_DATA);

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-[#1F2937]">
      
      {/* Header Banner */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-[#1769E0] text-xs font-bold uppercase tracking-widest">
          <span className="w-8 h-0.5 bg-[#1769E0] inline-block rounded-full" />
          <span>OUR SERVICES</span>
          <span className="w-8 h-0.5 bg-[#1769E0] inline-block rounded-full" />
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-[#0B2850] tracking-tight">
          Certificate &amp; Document Assistance Services
        </h1>

        <p className="text-base text-[#667085] font-medium leading-relaxed">
          We collect your documents, handle the application process, and deliver your completed certificate directly to your doorstep.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesList.map((service) => (
          <div
            key={service.slug}
            className="bg-white border border-[#E5E7EB] rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-[#1769E0] hover:shadow-md transition-all group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#1769E0] bg-[#EEF6FF] px-2.5 py-1 rounded-md">
                  {service.category}
                </span>
                <ShieldCheck className="w-5 h-5 text-[#1769E0]" />
              </div>

              <h2 className="text-xl font-bold text-[#0B2850] group-hover:text-[#1769E0] transition-colors">
                {service.title}
              </h2>

              <p className="text-xs text-[#667085] leading-relaxed">
                {service.shortDescription}
              </p>
            </div>

            <div className="pt-2 border-t border-[#F3F4F6] flex items-center justify-between">
              <Link
                href={`/services/${service.slug}`}
                className="text-xs font-bold text-[#1769E0] hover:text-[#0B2850] flex items-center gap-1 transition-colors"
              >
                <span>View Full Details &amp; Checklist</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Card */}
      <div className="bg-[#EEF6FF] border border-[#CBD5E1] rounded-3xl p-8 sm:p-12 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-black text-[#0B2850]">
          Need Custom Document Assistance?
        </h2>
        <p className="text-xs sm:text-sm text-[#667085] font-medium max-w-lg mx-auto">
          Contact our team directly on WhatsApp for guidance on any state or central certificate.
        </p>
        <div>
          <a
            href={mainWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1769E0] hover:bg-[#1256b8] text-white font-bold text-sm shadow-md transition-all"
          >
            <MessageCircle className="w-4.5 h-4.5 fill-current" />
            <span>Chat on WhatsApp →</span>
          </a>
        </div>
      </div>

    </div>
  );
}
