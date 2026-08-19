import Link from 'next/link';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_NUMBER } from '@/lib/whatsapp';
import Logo from '@/components/Logo';

export default function Footer() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <footer className="bg-white border-t border-[#E5E7EB] py-10 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#E5E7EB]">
          
          {/* Logo & Vision */}
          <div className="space-y-2">
            <Logo />
            <p className="text-xs text-[#667085] font-medium pl-0.5">
              Protecting the Proof of Life.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-[#4B5563]">
            <a href="#services" className="hover:text-[#1769E0] transition-colors">Services</a>
            <a href="#how-it-works" className="hover:text-[#1769E0] transition-colors">How It Works</a>
            <a href="#about" className="hover:text-[#1769E0] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#1769E0] transition-colors">Contact</a>
            <Link href="/login" className="hover:text-[#1769E0] transition-colors">Login</Link>
          </div>

        </div>

        {/* Contact & Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#667085]">
          
          <div className="flex items-center gap-6 font-medium">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#1769E0] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp: +{WHATSAPP_NUMBER}</span>
            </a>
            <div className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#1769E0]" />
              <span>+{WHATSAPP_NUMBER}</span>
            </div>
            <div className="flex items-center gap-1.5 hidden md:flex">
              <Mail className="w-4 h-4 text-[#1769E0]" />
              <span>support@certificationwork.com</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span>·</span>
            <p>© 2026 CertificationWork.com</p>
          </div>

        </div>

      </div>
    </footer>
  );
}
