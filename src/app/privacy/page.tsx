import type { Metadata } from 'next';

export const metadata = {
  title: 'Privacy Policy | Certification Work',
  description:
    'Read the official Privacy Policy for Certification Work regarding document security, personal data protection, and user rights.',
  alternates: {
    canonical: 'https://certificationwork.com/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-8 bg-white text-[#1F2937]">
      <div className="space-y-2 border-b border-[#E5E7EB] pb-6">
        <h1 className="text-3xl font-black text-[#0B2850]">Privacy Policy</h1>
        <p className="text-xs text-[#667085]">Last Updated: August 2026</p>
      </div>

      <div className="space-y-6 text-sm text-[#4B5563] leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0B2850]">1. Introduction</h2>
          <p>
            Certification Work (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) values your privacy and is committed to protecting your personal data and supporting documents shared with us during certificate and document assistance services.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0B2850]">2. Information We Collect</h2>
          <p>
            We collect personal identity details, contact information, and supporting documentation (such as identity proof, address proof, and photos) strictly necessary to process your requested certificate application.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0B2850]">3. How We Use Your Data</h2>
          <p>
            Your information is used solely to verify eligibility, prepare official application forms, communicate application progress, and deliver completed documents to your doorstep.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0B2850]">4. Data Protection &amp; Confidentiality</h2>
          <p>
            We implement strict confidentiality standards. We never sell, rent, or lease your personal documents to third parties. Data is shared exclusively with relevant government portals or issuing authorities required to process your service request.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0B2850]">5. Contact Us</h2>
          <p>
            For any privacy inquiries or document removal requests, please contact our support team at support@certificationwork.com or via WhatsApp at +91 86391 35520.
          </p>
        </section>
      </div>
    </div>
  );
}
