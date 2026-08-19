import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';

export const metadata: Metadata = {
  title: "CertificationWork.com — Official Certificate & Document Assistance",
  description: 'CertificationWork.com provides professional certificate and document assistance services. Apply online, upload documents, track scrutiny, and receive doorstep delivery.',
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
        </Providers>
      </body>
    </html>
  );
}
