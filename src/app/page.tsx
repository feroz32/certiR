'use client';

import { getWhatsAppUrl, getServiceWhatsAppUrl } from '@/lib/whatsapp';
import HeroVisual from '@/components/HeroVisual';
import { MessageCircle } from 'lucide-react';

export default function HomePage() {
  const mainWhatsappUrl = getWhatsAppUrl();

  const servicesList = [
    { title: 'Birth Certificate' },
    { title: 'Caste Certificate' },
    { title: 'Income Certificate' },
    { title: 'EWS Certificate' },
    { title: 'Residence Certificate' },
    { title: 'Aadhaar Services' },
    { title: 'PAN Card' },
    { title: 'Passport Services' },
    { title: 'Marriage Certificate' },
    { title: 'Driving Licence' },
    { title: 'Property Search' },
    { title: 'GST Services' },
  ];

  return (
    <div className="space-y-20 pb-16 bg-white text-[#1F2937]">
      
      {/* 1. HERO SECTION (PERFECTLY CENTERED & FITTED) */}
      <section className="pt-8 sm:pt-14 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12 w-full">
          
          {/* Left Column: Text & WhatsApp CTA */}
          <div className="lg:col-span-6 space-y-6 text-left my-auto">
            
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 text-[#1769E0] text-xs font-bold uppercase tracking-widest">
              <span className="w-6 h-0.5 bg-[#1769E0] inline-block" />
              <span>CERTIFICATE ASSISTANCE, MADE SIMPLE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              <span className="text-[#0B2850] block">Certificate Services,</span>
              <span className="text-[#1769E0] block mt-1">Right at Your Doorstep.</span>
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
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chat with us on WhatsApp →</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Visual Perfectly Centered */}
          <div className="lg:col-span-6 flex items-center justify-center my-auto overflow-visible">
            <HeroVisual />
          </div>

        </div>
      </section>

      {/* 2. SERVICES (COMPACT STRIP) */}
      <section id="services" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center scroll-mt-24">
        
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B2850] tracking-tight">
            What We Help With
          </h2>
          <p className="text-xs text-[#667085] font-medium">
            Click any service to chat with us on WhatsApp.
          </p>
        </div>

        {/* Compact Service Strip */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 pt-2 sm:flex-wrap sm:justify-center no-scrollbar">
          {servicesList.map((service, idx) => {
            const waUrl = getServiceWhatsAppUrl(service.title);
            return (
              <a
                key={idx}
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2.5 rounded-xl bg-[#EEF6FF] border border-[#CBD5E1] text-[#0B2850] hover:bg-[#1769E0] hover:text-white text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <span>{service.title}</span>
                <span className="text-[#1769E0] group-hover:text-white">·</span>
              </a>
            );
          })}
          <a
            href={mainWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2.5 rounded-xl bg-[#1769E0] text-white text-xs font-bold hover:bg-[#1256b8] transition-colors"
          >
            More Services →
          </a>
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
              WhatsApp us about what you need.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 text-left space-y-2">
            <span className="text-xs font-black text-[#1769E0]">02</span>
            <h3 className="text-base font-bold text-[#0B2850]">Share Documents</h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              We'll tell you what's required.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 text-left space-y-2">
            <span className="text-xs font-black text-[#1769E0]">03</span>
            <h3 className="text-base font-bold text-[#0B2850]">We Handle the Application</h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              We prepare and submit it.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 text-left space-y-2">
            <span className="text-xs font-black text-[#1769E0]">04</span>
            <h3 className="text-base font-bold text-[#0B2850]">Delivered to You</h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              Once ready, we deliver the certificate to your doorstep.
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
          Making essential document services simpler and more accessible.
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
              We're here to help.
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
