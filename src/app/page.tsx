'use client';

import { getWhatsAppUrl, getServiceWhatsAppUrl } from '@/lib/whatsapp';
import { INITIAL_SERVICES } from '@/db/seed-data';
import CertificateAnimation from '@/components/CertificateAnimation';
import { 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  Home, 
  Baby, 
  TrendingUp, 
  Award, 
  Fingerprint, 
  CreditCard, 
  Globe, 
  Heart, 
  Car, 
  Key, 
  Briefcase, 
  PhoneCall, 
  UserCheck 
} from 'lucide-react';

export default function HomePage() {
  const mainWhatsappUrl = getWhatsAppUrl();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Baby': return Baby;
      case 'TrendingUp': return TrendingUp;
      case 'ShieldCheck': return ShieldCheck;
      case 'Award': return Award;
      case 'Home': return Home;
      case 'Fingerprint': return Fingerprint;
      case 'CreditCard': return CreditCard;
      case 'Globe': return Globe;
      case 'Heart': return Heart;
      case 'Car': return Car;
      case 'Key': return Key;
      case 'Briefcase': return Briefcase;
      default: return FileText;
    }
  };

  return (
    <div className="space-y-20 pb-16 bg-white text-[#1F2937]">
      
      {/* 1. HERO SECTION */}
      <section className="pt-12 sm:pt-16 pb-8 text-center px-4 max-w-4xl mx-auto space-y-6">
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B2850] tracking-tight leading-tight">
          Need a Certificate? <br />
          <span className="text-[#1769E0]">We'll Handle It.</span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-[#667085] max-w-2xl mx-auto font-medium leading-relaxed">
          We collect your documents, handle the application and deliver the certificate to your doorstep.
        </p>

        {/* Main CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={mainWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#1769E0] text-white font-bold text-base hover:bg-[#1256b8] shadow-md transition-all flex items-center justify-center gap-2 group"
          >
            <MessageCircle className="w-5 h-5 fill-white text-[#1769E0]" />
            <span>Chat on WhatsApp →</span>
          </a>

          <a
            href="#services"
            className="text-xs font-semibold text-[#667085] hover:text-[#0B2850] py-2 transition-colors"
          >
            View Services ↓
          </a>
        </div>

        {/* Animated Visual Storytelling Component */}
        <div className="pt-6">
          <CertificateAnimation />
        </div>

      </section>

      {/* 2. SERVICES SECTION */}
      <section id="services" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-20">
        
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2850] tracking-tight">
            Our Services
          </h2>
          <p className="text-sm text-[#667085]">
            Certificate and document services, made easier.
          </p>
        </div>

        {/* Complete Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {INITIAL_SERVICES.map((service) => {
            const IconComp = getServiceIcon(service.icon);
            const serviceWhatsappUrl = getServiceWhatsAppUrl(service.title);

            return (
              <div
                key={service.id}
                className="bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:border-[#1769E0] hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EEF6FF] text-[#1769E0] flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0B2850]">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#667085] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <a
                  href={serviceWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-lg bg-[#EEF6FF] text-[#1769E0] hover:bg-[#1769E0] hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp →</span>
                </a>
              </div>
            );
          })}
        </div>

      </section>

      {/* WHATSAPP CTA INTERMEDIATE BANNER */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-[#EEF6FF] border border-[#CBD5E1] rounded-2xl p-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-[#0B2850]">
            Don't see what you're looking for?
          </h3>
          <p className="text-xs text-[#667085] max-w-md mx-auto">
            Tell us what certificate or document you need. We'll handle the paperwork and delivery.
          </p>
          <a
            href={mainWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1769E0] text-white font-semibold text-sm hover:bg-[#1256b8] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp →</span>
          </a>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section id="how-it-works" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-20">
        
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-[#0B2850] tracking-tight">
            How It Works
          </h2>
          <p className="text-xs text-[#667085]">
            Simple four-step doorstep process.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-2 text-left">
            <span className="text-xs font-bold text-[#1769E0] uppercase tracking-wider">01</span>
            <h3 className="text-base font-bold text-[#0B2850]">Talk to Us</h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              Contact us on WhatsApp.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-2 text-left">
            <span className="text-xs font-bold text-[#1769E0] uppercase tracking-wider">02</span>
            <h3 className="text-base font-bold text-[#0B2850]">Share Documents</h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              We tell you what is required and collect the documents.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-2 text-left">
            <span className="text-xs font-bold text-[#1769E0] uppercase tracking-wider">03</span>
            <h3 className="text-base font-bold text-[#0B2850]">We Handle Application</h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              We prepare and submit the application.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-2 text-left">
            <span className="text-xs font-bold text-[#1769E0] uppercase tracking-wider">04</span>
            <h3 className="text-base font-bold text-[#0B2850]">Delivered to You</h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              Once ready, we deliver the certificate to your home.
            </p>
          </div>

        </div>

      </section>

      {/* 4. WHY CERTIFICATIONWORK */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-[#0B2850] tracking-tight">
            Why CertificationWork
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-2 text-left">
            <div className="w-9 h-9 rounded-lg bg-[#EEF6FF] text-[#1769E0] flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0B2850]">Simple</h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              We make the process easier.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-2 text-left">
            <div className="w-9 h-9 rounded-lg bg-[#EEF6FF] text-[#1769E0] flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0B2850]">Personal Assistance</h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              Talk directly to us on WhatsApp.
            </p>
          </div>

          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 space-y-2 text-left">
            <div className="w-9 h-9 rounded-lg bg-[#EEF6FF] text-[#1769E0] flex items-center justify-center">
              <Home className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#0B2850]">Doorstep Delivery</h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              Get the completed certificate at home.
            </p>
          </div>

        </div>

      </section>

      {/* 5. VISION SECTION */}
      <section id="vision" className="max-w-4xl mx-auto px-4 py-8 text-center space-y-3">
        <div className="bg-gradient-to-b from-[#EEF6FF] to-white border border-[#E5E7EB] rounded-3xl p-10 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2850]">
            Protecting the Proof of Life.
          </h2>
          <p className="text-sm text-[#667085] max-w-xl mx-auto font-medium">
            Making essential document services simpler and more accessible.
          </p>
        </div>
      </section>

      {/* 6. ABOUT SECTION */}
      <section id="about" className="max-w-3xl mx-auto px-4 text-center space-y-4 scroll-mt-20">
        <h2 className="text-2xl font-bold text-[#0B2850]">
          About CertificationWork
        </h2>
        <p className="text-sm text-[#667085] leading-relaxed font-medium">
          We help people with essential certificate and document services — from collecting the required documents and handling the application to delivering the completed certificate to their doorstep.
        </p>
      </section>

      {/* 7. FINAL CTA */}
      <section id="contact" className="max-w-4xl mx-auto px-4 pt-4 scroll-mt-20">
        <div className="bg-[#0B2850] text-white rounded-3xl p-10 sm:p-12 text-center space-y-6">
          <div className="space-y-2 max-w-md mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Need a Certificate?
            </h2>
            <p className="text-sm text-slate-300">
              We're here to help.
            </p>
          </div>

          <div>
            <a
              href={mainWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#1769E0] text-white font-bold text-base hover:bg-[#1256b8] shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#1769E0]" />
              <span>Chat on WhatsApp →</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
