'use client';

import { motion } from 'framer-motion';
import { 
  Baby, 
  GraduationCap, 
  FileCheck, 
  Contact, 
  LayoutGrid, 
  IndianRupee,
  CheckCircle2,
  Award,
  Sparkles
} from 'lucide-react';

export default function HeroVisual() {
  const floatingBadges = [
    {
      title: 'Birth Certificate',
      icon: Baby,
      position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-6',
      delay: 0
    },
    {
      title: 'Income Certificate',
      icon: IndianRupee,
      position: 'top-12 right-0 sm:-right-4',
      delay: 0.4
    },
    {
      title: 'Other Certificates',
      icon: LayoutGrid,
      position: 'bottom-12 right-0 sm:-right-4',
      delay: 0.8
    },
    {
      title: 'ID & Address Proof',
      icon: Contact,
      position: 'bottom-12 left-0 sm:-left-4',
      delay: 1.2
    },
    {
      title: 'Educational Certificates',
      icon: GraduationCap,
      position: 'top-12 left-0 sm:-left-4',
      delay: 1.6
    }
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto aspect-square flex items-center justify-center p-4">
      
      {/* Background Circular Orbit Ring */}
      <svg className="absolute inset-0 w-full h-full text-[#1769E0]/20" viewBox="0 0 450 450" fill="none">
        <circle cx="225" cy="225" r="170" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
        <circle cx="225" cy="225" r="170" stroke="#1769E0" strokeWidth="1.5" strokeDasharray="3 12" className="opacity-40 animate-spin-slow" />
      </svg>

      {/* Blue Glow Base under Certificate */}
      <div className="absolute bottom-8 w-72 h-16 bg-[#1769E0]/15 rounded-full blur-2xl pointer-events-none" />

      {/* Main Central Certificate Document */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-56 sm:w-64 bg-white border-2 border-[#DCE8FC] rounded-2xl p-6 shadow-2xl space-y-4 text-center"
        style={{
          boxShadow: '0 25px 60px -15px rgba(23, 105, 224, 0.2), 0 10px 25px -5px rgba(11, 40, 80, 0.08)'
        }}
      >
        {/* Emblem/Seal Icon at Top */}
        <div className="flex justify-center">
          <div className="w-9 h-9 rounded-full bg-[#EEF6FF] border border-[#1769E0]/30 text-[#1769E0] flex items-center justify-center shadow-inner">
            <Award className="w-5 h-5" />
          </div>
        </div>

        {/* Certificate Title */}
        <h3 className="text-sm font-black text-[#0B2850] tracking-widest uppercase">
          CERTIFICATE
        </h3>

        {/* Placeholder Lines */}
        <div className="space-y-2 py-1 max-w-[85%] mx-auto">
          <div className="h-1.5 bg-[#EEF6FF] rounded-full w-full" />
          <div className="h-1.5 bg-[#EEF6FF] rounded-full w-4/5 mx-auto" />
          <div className="h-1.5 bg-[#EEF6FF] rounded-full w-full" />
          <div className="h-1.5 bg-[#EEF6FF] rounded-full w-3/5 mx-auto" />
        </div>

        {/* Bottom Signature & Stamp */}
        <div className="flex items-center justify-between pt-3 border-t border-[#F1F5F9]">
          <div className="text-left">
            <span className="font-serif italic text-xs text-slate-500 font-bold tracking-wider block">Jura</span>
            <div className="h-0.5 w-12 bg-slate-300 rounded" />
          </div>

          {/* Blue Ribbon Seal */}
          <div className="w-8 h-8 rounded-full bg-[#1769E0] text-white flex items-center justify-center shadow-md ring-4 ring-[#EEF6FF]">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>
      </motion.div>

      {/* Surrounding Floating Cards */}
      {floatingBadges.map((badge, idx) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={idx}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: badge.delay, ease: 'easeInOut' }}
            className={`absolute z-20 ${badge.position}`}
          >
            <div className="bg-white border border-[#E5E7EB] shadow-lg rounded-2xl p-2.5 sm:p-3 flex flex-col items-center gap-1.5 w-24 sm:w-28 text-center hover:scale-105 transition-all">
              <div className="w-8 h-8 rounded-xl bg-[#F0F6FF] text-[#1769E0] flex items-center justify-center">
                <Icon className="w-4.5 h-4.5" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-[#0B2850] leading-tight">
                {badge.title}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* Bottom Center Pill: "● And many more" */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 2, ease: 'easeInOut' }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 z-20"
      >
        <div className="px-4 py-1.5 rounded-full bg-white border border-[#DCE8FC] shadow-md flex items-center gap-2 text-xs font-bold text-[#0B2850]">
          <span className="w-2 h-2 rounded-full bg-[#1769E0] animate-pulse" />
          <span>And many more</span>
        </div>
      </motion.div>

    </div>
  );
}
