'use client';

import { getWhatsAppUrl, getServiceWhatsAppUrl } from '@/lib/whatsapp';
import HeroVisual from '@/components/HeroVisual';
import { 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck, 
  Headphones, 
  Baby, 
  Users, 
  TrendingUp, 
  UserCheck, 
  CreditCard, 
  Globe, 
  FolderCheck, 
  FileText, 
  CheckCircle2, 
  Download, 
  Star,
  Instagram,
  Facebook
} from 'lucide-react';

export default function HomePage() {
  const mainWhatsappUrl = getWhatsAppUrl();

  const services = [
    {
      title: 'Birth Certificate',
      icon: Baby,
      waMessage: 'Hi, I need help with Birth Certificate.'
    },
    {
      title: 'Caste Certificate',
      icon: Users,
      waMessage: 'Hi, I need help with Caste Certificate.'
    },
    {
      title: 'Income Certificate',
      icon: TrendingUp,
      waMessage: 'Hi, I need help with Income Certificate.'
    },
    {
      title: 'Aadhaar Update',
      icon: UserCheck,
      waMessage: 'Hi, I need help with Aadhaar Update.'
    },
    {
      title: 'PAN Card',
      icon: CreditCard,
      waMessage: 'Hi, I need help with PAN Card.'
    },
    {
      title: 'Passport Services',
      icon: Globe,
      waMessage: 'Hi, I need help with Passport Services.'
    },
    {
      title: 'Other Documents',
      icon: FolderCheck,
      waMessage: 'Hi, I need help with document services.'
    }
  ];

  const testimonials = [
    {
      quote: "Got my certificate quickly without any hassle.",
      author: "Ramesh, Hyderabad"
    },
    {
      quote: "Very helpful support and smooth process.",
      author: "Priya, Secunderabad"
    },
    {
      quote: "They guided me at every step. Great service!",
      author: "Sana, Hyderabad"
    }
  ];

  return (
    <div className="space-y-24 pb-16 bg-white text-[#1F2937]">
      
      {/* 1. HERO SECTION */}
      <section className="pt-8 sm:pt-12 pb-6 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headlines & Action */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF6FF] border border-[#CBD5E1] text-[#1769E0] text-xs font-bold uppercase tracking-wider">
              <span>DOCUMENT SERVICES MADE SIMPLE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B2850] tracking-tight leading-[1.1]">
              Your Documents, <br />
              Made <span className="text-[#1769E0]">Simple.</span>
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-lg text-[#667085] font-medium leading-relaxed max-w-lg">
              We help you get your important certificates and documents easily and hassle-free.
            </p>

            {/* Main CTA */}
            <div className="pt-2">
              <a
                href={mainWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#1769E0] hover:bg-[#1256b8] text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all group"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp →</span>
              </a>
            </div>

            {/* Trust Features */}
            <div className="flex items-center gap-6 pt-2 text-xs font-bold text-[#667085]">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1769E0]" />
                <span>Secure Process</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-[#1769E0]" />
                <span>Doorstep Support</span>
              </span>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-4 flex items-center justify-start">
              <a href="#services" className="w-9 h-9 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#667085] hover:text-[#1769E0] hover:border-[#1769E0] transition-colors">
                ↓
              </a>
            </div>

          </div>

          {/* Right Column: 3D Certificate Graphic */}
          <div className="lg:col-span-6 flex justify-center">
            <HeroVisual />
          </div>

        </div>
      </section>

      {/* 2. OUR SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24 text-center">
        
        {/* Section Title */}
        <div className="inline-block space-y-2">
          <h2 className="text-3xl font-black text-[#0B2850] tracking-tight">
            Our Services
          </h2>
          <div className="w-12 h-1 bg-[#1769E0] rounded-full mx-auto" />
        </div>

        {/* Services Grid (Matching Reference Screenshot) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const waUrl = getServiceWhatsAppUrl(service.title);

            return (
              <a
                key={idx}
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-[#E5E7EB] rounded-2xl p-5 hover:border-[#1769E0] hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between text-center space-y-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#EEF6FF] text-[#1769E0] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-[#0B2850] leading-snug">
                  {service.title}
                </h3>

                <span className="text-[#1769E0] font-bold text-sm group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            );
          })}
        </div>

      </section>

      {/* 3. HOW IT WORKS */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-24 text-center">
        
        {/* Title */}
        <div className="inline-block space-y-2">
          <h2 className="text-3xl font-black text-[#0B2850] tracking-tight">
            How It Works
          </h2>
          <div className="w-12 h-1 bg-[#1769E0] rounded-full mx-auto" />
        </div>

        {/* 4 Connected Circular Step Nodes */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-16 right-16 h-0.5 border-t-2 border-dashed border-[#CBD5E1] -z-0" />

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center space-y-4 text-center">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-[#EEF6FF] border-2 border-white shadow-md flex items-center justify-center text-[#1769E0]">
                <FileText className="w-8 h-8" />
              </div>
              <span className="absolute -top-1 -left-1 w-7 h-7 rounded-full bg-[#1769E0] text-white font-bold text-xs flex items-center justify-center shadow">
                01
              </span>
            </div>
            <h3 className="text-base font-bold text-[#0B2850]">Choose a Service</h3>
            <p className="text-xs text-[#667085] leading-relaxed max-w-xs">
              Select the document service you need.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center space-y-4 text-center">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-[#EEF6FF] border-2 border-white shadow-md flex items-center justify-center text-[#25D366]">
                <MessageCircle className="w-8 h-8 fill-current" />
              </div>
              <span className="absolute -top-1 -left-1 w-7 h-7 rounded-full bg-[#1769E0] text-white font-bold text-xs flex items-center justify-center shadow">
                02
              </span>
            </div>
            <h3 className="text-base font-bold text-[#0B2850]">Share Details</h3>
            <p className="text-xs text-[#667085] leading-relaxed max-w-xs">
              Share your details and required documents.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center space-y-4 text-center">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-[#EEF6FF] border-2 border-white shadow-md flex items-center justify-center text-[#1769E0]">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <span className="absolute -top-1 -left-1 w-7 h-7 rounded-full bg-[#1769E0] text-white font-bold text-xs flex items-center justify-center shadow">
                03
              </span>
            </div>
            <h3 className="text-base font-bold text-[#0B2850]">We Process</h3>
            <p className="text-xs text-[#667085] leading-relaxed max-w-xs">
              Our team verifies and processes your request.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative z-10 flex flex-col items-center space-y-4 text-center">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-[#EEF6FF] border-2 border-white shadow-md flex items-center justify-center text-[#1769E0]">
                <Download className="w-8 h-8" />
              </div>
              <span className="absolute -top-1 -left-1 w-7 h-7 rounded-full bg-[#1769E0] text-white font-bold text-xs flex items-center justify-center shadow">
                04
              </span>
            </div>
            <h3 className="text-base font-bold text-[#0B2850]">Get Your Document</h3>
            <p className="text-xs text-[#667085] leading-relaxed max-w-xs">
              Receive updates and your document.
            </p>
          </div>

        </div>

      </section>

      {/* 4. TRUST BANNER (Simple. Secure. Reliable.) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EEF6FF] border border-[#CBD5E1] rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-5 text-left">
            <div className="w-16 h-16 rounded-2xl bg-[#1769E0] text-white flex items-center justify-center shrink-0 shadow-lg">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-black text-[#0B2850]">
                Simple. Secure. Reliable.
              </h3>
              <p className="text-sm text-[#667085] font-medium">
                Your documents are safe with us.
              </p>
            </div>
          </div>

          <div className="text-center md:text-right space-y-2">
            <p className="text-xs font-bold text-[#0B2850]">Have a question or need help?</p>
            <a
              href={mainWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1769E0] hover:bg-[#1256b8] text-white font-bold text-sm shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        <h3 className="text-xs font-bold text-[#667085] uppercase tracking-wider">
          Trusted by people who needed it most
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white border border-[#E5E7EB] rounded-2xl p-6 text-left space-y-3 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-2xl font-serif text-[#1769E0] leading-none">“</span>
              <p className="text-xs text-[#0B2850] font-semibold leading-relaxed">
                {t.quote}
              </p>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-[11px] font-bold text-[#667085] pt-1">
                {t.author}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-white border-t border-[#E5E7EB] pt-12 pb-8 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Col 1: Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#EEF6FF] text-[#1769E0] flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-xl font-black text-[#0B2850]">Certification<span className="text-[#1769E0]">Work</span></span>
              </div>
              <p className="text-xs text-[#667085] leading-relaxed">
                Making document services simpler for everyone.
              </p>
              <div className="flex items-center gap-3 text-[#667085] pt-2">
                <a href={mainWhatsappUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 rounded-full hover:bg-[#EEF6FF] hover:text-[#1769E0] transition-colors"><MessageCircle className="w-4 h-4" /></a>
                <a href="#" className="p-1.5 rounded-full hover:bg-[#EEF6FF] hover:text-[#1769E0] transition-colors"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="p-1.5 rounded-full hover:bg-[#EEF6FF] hover:text-[#1769E0] transition-colors"><Facebook className="w-4 h-4" /></a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#0B2850]">Quick Links</h4>
              <ul className="space-y-2 text-xs text-[#667085]">
                <li><a href="#" className="hover:text-[#1769E0] transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-[#1769E0] transition-colors">Services</a></li>
                <li><a href="#how-it-works" className="hover:text-[#1769E0] transition-colors">How It Works</a></li>
                <li><a href="#about" className="hover:text-[#1769E0] transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-[#1769E0] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#0B2850]">Services</h4>
              <ul className="space-y-2 text-xs text-[#667085]">
                {services.slice(0, 6).map((s, i) => (
                  <li key={i}>
                    <a href={getServiceWhatsAppUrl(s.title)} target="_blank" rel="noopener noreferrer" className="hover:text-[#1769E0] transition-colors">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact Us */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#0B2850]">Contact Us</h4>
              <ul className="space-y-2 text-xs text-[#667085]">
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>+91 86391 35520</span>
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#1769E0]" />
                  <span>support@certificationwork.com</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Line */}
          <div className="pt-6 border-t border-[#E5E7EB] text-center text-xs text-[#667085]">
            <p>© 2026 CertificationWork.com | All rights reserved.</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
