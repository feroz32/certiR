import Link from 'next/link';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_NUMBER } from '@/lib/whatsapp';

export default function Footer() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <footer className="bg-[#0B2850] text-white pt-12 pb-8 border-t border-[#0B2850]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-700/60">
          
          {/* Brand & Vision */}
          <div className="space-y-3 md:col-span-1">
            <h3 className="text-xl font-bold text-white tracking-tight">
              CertificationWork.com
            </h3>
            <p className="text-xs font-semibold text-sky-300">
              Protecting the Proof of Life.
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              Making essential document services simpler and more accessible.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-sky-200 uppercase tracking-wider mb-3">Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><Link href="/login" className="hover:text-white transition-colors">Login</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold text-sky-200 uppercase tracking-wider mb-3">Legal</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-sky-200 uppercase tracking-wider">Direct Contact</h4>
            <div className="space-y-2 text-xs text-slate-300">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white font-medium hover:text-sky-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: +{WHATSAPP_NUMBER}</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call: +{WHATSAPP_NUMBER}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400" />
                <span>support@certificationwork.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <p>© 2026 CertificationWork.com. All rights reserved.</p>
          <p className="text-[11px] text-slate-400">Essential document services delivered to your doorstep.</p>
        </div>

      </div>
    </footer>
  );
}
