import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: "CertificationWork.com — Need a Certificate? We'll Handle It.",
  description: 'CertificationWork.com provides certificate and document assistance services. Tell us what you need, we collect your documents, handle the application and deliver to your doorstep.',
  keywords: ['CertificationWork.com', 'birth certificate', 'caste certificate', 'income certificate', 'ews certificate', 'aadhaar card', 'pan card', 'passport services', 'driving licence renewal', 'doorstep document delivery'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased bg-white text-[#1F2937] selection:bg-[#1769E0] selection:text-white">
        <Providers>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </Providers>
      </body>
    </html>
  );
}
