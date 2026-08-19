import type { Metadata } from 'next';

export const metadata = {
  title: 'Terms & Conditions | Certification Work',
  description:
    'Read the Terms and Conditions for Certification Work regarding document assistance services, processing workflows, and service scope.',
  alternates: {
    canonical: 'https://certificationwork.com/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-8 bg-white text-[#1F2937]">
      <div className="space-y-2 border-b border-[#E5E7EB] pb-6">
        <h1 className="text-3xl font-black text-[#0B2850]">Terms &amp; Conditions</h1>
        <p className="text-xs text-[#667085]">Last Updated: August 2026</p>
      </div>

      <div className="space-y-6 text-sm text-[#4B5563] leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0B2850]">1. Service Scope &amp; Non-Government Disclaimer</h2>
          <p>
            CertificationWork.com is a private document consultancy and assistance platform. We are NOT a government body, government department, or official government partner. We provide professional assistance in document compilation, application drafting, status tracking, and doorstep delivery for various certificates.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0B2850]">2. User Responsibilities</h2>
          <p>
            Applicants must ensure all documents and information provided are genuine, authentic, and accurate. Certification Work does not verify or endorse falsified records and assumes no liability for incorrect information supplied by the customer.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0B2850]">3. Processing Timelines</h2>
          <p>
            Estimated completion timelines are based on typical government department schedules. While we make every effort to expedite processing, final approval remains under the sole authority of the respective government department.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0B2850]">4. Contact &amp; Support</h2>
          <p>
            For assistance regarding active orders or service terms, contact us via WhatsApp at +91 86391 35520 or email support@certificationwork.com.
          </p>
        </section>
      </div>
    </div>
  );
}
