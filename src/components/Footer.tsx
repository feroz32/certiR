import Link from 'next/link';
import { Phone, Mail, ShieldCheck } from 'lucide-react';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 py-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-3 md:col-span-1">
            <Logo />
            <p className="text-xs text-slate-400 font-medium leading-relaxed">
              Official certificate assistance & document concierge. Bringing doorstep document delivery to citizens.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-bold">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>100% Encrypted & Govt Valid</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Quick Links</h4>
            <div className="flex flex-col space-y-2 text-xs font-medium text-slate-400">
              <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <Link href="/marketplace" className="hover:text-blue-400 transition-colors">All Services</Link>
              <Link href="/tracking" className="hover:text-blue-400 transition-colors">Track Application</Link>
              <Link href="/#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</Link>
              <Link href="/#about" className="hover:text-blue-400 transition-colors">About Us</Link>
            </div>
          </div>

          {/* Col 3: Certificate Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Services</h4>
            <div className="flex flex-col space-y-2 text-xs font-medium text-slate-400">
              <Link href="/marketplace?cat=Identity" className="hover:text-blue-400 transition-colors">Birth & Passport Services</Link>
              <Link href="/marketplace?cat=Residence%20%26%20Caste" className="hover:text-blue-400 transition-colors">Caste & Domicile</Link>
              <Link href="/marketplace?cat=Income%20%26%20Tax" className="hover:text-blue-400 transition-colors">Income & EWS Certificates</Link>
              <Link href="/marketplace?cat=Vehicle%20%26%20Driving" className="hover:text-blue-400 transition-colors">Driving Licence Renewal</Link>
              <Link href="/marketplace?cat=Business%20%26%20Legal" className="hover:text-blue-400 transition-colors">GST & Property Search</Link>
            </div>
          </div>

          {/* Col 4: Contact & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Support & Helpline</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Helpline: +91 86391 35520</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>support@certificationwork.com</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                Mon - Sat: 9:00 AM - 7:00 PM IST
              </p>
            </div>
          </div>

        </div>

        {/* Copyright & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© 2026 CertificationWork.com. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Security Audit</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
