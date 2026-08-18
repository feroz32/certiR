'use client';

import { motion } from 'framer-motion';
import { Baby, Users, CreditCard, Globe, UserCheck, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';

export default function HeroVisual() {
  const floatingBadges = [
    {
      title: 'Birth Certificate',
      icon: Baby,
      position: 'top-2 left-1/2 -translate-x-1/2 -translate-y-4',
      delay: 0
    },
    {
      title: 'Caste Certificate',
      icon: Users,
      position: 'top-8 right-2 sm:right-6',
      delay: 0.5
    },
    {
      title: 'Aadhaar Update',
      icon: UserCheck,
      position: 'top-28 left-2 sm:left-4',
      delay: 1
    },
    {
      title: 'PAN Card',
      icon: CreditCard,
      position: 'top-32 right-2 sm:right-4',
      delay: 1.5
    },
    {
      title: 'Passport Services',
      icon: Globe,
      position: 'bottom-2 left-1/2 -translate-x-1/2 translate-y-4',
      delay: 2
    }
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-4">
      
      {/* Background Orbit Ring SVG */}
      <svg className="absolute inset-0 w-full h-full text-[#CBD5E1]" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" className="opacity-60" />
        <circle cx="200" cy="200" r="180" stroke="#1769E0" strokeWidth="1" strokeDasharray="4 8" className="opacity-30 animate-spin-slow" />
      </svg>

      {/* Blue Pedestal Base Glow */}
      <div className="absolute bottom-10 w-72 h-16 bg-gradient-to-t from-[#1769E0]/30 to-[#EEF6FF] rounded-full blur-xl pointer-events-none" />
      <div className="absolute bottom-14 w-64 h-12 bg-[#1769E0]/20 rounded-full blur-lg" />

      {/* Main 3D Floating Certificate Document Card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-56 sm:w-64 bg-white border-2 border-[#CBD5E1] rounded-3xl p-6 shadow-2xl space-y-4 text-left border-t-white"
        style={{
          boxShadow: '0 20px 50px -10px rgba(23, 105, 224, 0.25), 0 10px 20px -5px rgba(11, 40, 80, 0.1)'
        }}
      >
        {/* Certificate Header */}
        <div className="text-center pb-2 border-b border-[#E5E7EB] space-y-1">
          <div className="text-[10px] font-black tracking-widest text-[#1769E0] uppercase">Official Issue</div>
          <h3 className="text-sm font-black text-[#0B2850] tracking-wider uppercase">CERTIFICATE</h3>
        </div>

        {/* Certificate Body Lines */}
        <div className="space-y-2 py-1">
          <div className="h-2 bg-[#EEF6FF] rounded-full w-full" />
          <div className="h-2 bg-[#EEF6FF] rounded-full w-4/5" />
          <div className="h-2 bg-[#EEF6FF] rounded-full w-full" />
          <div className="h-2 bg-[#EEF6FF] rounded-full w-3/5" />
        </div>

        {/* Stamp Ribbon Badge Seal */}
        <div className="flex items-center justify-between pt-2">
          <div className="h-3 w-16 bg-[#CBD5E1]/40 rounded" />
          
          {/* Blue Ribbon Seal */}
          <div className="relative w-10 h-10 rounded-full bg-[#1769E0] text-white flex items-center justify-center shadow-lg ring-4 ring-[#EEF6FF]">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>
      </motion.div>

      {/* Surrounding Floating Service Badges */}
      {floatingBadges.map((badge, idx) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={idx}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: badge.delay, ease: 'easeInOut' }}
            className={`absolute z-20 ${badge.position}`}
          >
            <div className="bg-white/95 backdrop-blur-md border border-[#E5E7EB] shadow-xl rounded-2xl p-2.5 sm:p-3 flex flex-col items-center gap-1.5 w-24 sm:w-28 text-center hover:scale-105 transition-transform">
              <div className="w-8 h-8 rounded-xl bg-[#EEF6FF] text-[#1769E0] flex items-center justify-center">
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-[#0B2850] leading-tight">
                {badge.title}
              </span>
            </div>
          </motion.div>
        );
      })}

    </div>
  );
}
