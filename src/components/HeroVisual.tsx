'use client';

import { motion } from 'framer-motion';
import { 
  Baby, 
  GraduationCap, 
  Contact, 
  LayoutGrid, 
  IndianRupee,
  CheckCircle2,
  Award
} from 'lucide-react';

export default function HeroVisual() {
  const floatingBadges = [
    {
      title: 'Birth Certificate',
      icon: Baby,
      position: 'top-1 left-1/2 -translate-x-1/2',
      delay: 0
    },
    {
      title: 'Income Certificate',
      icon: IndianRupee,
      position: 'top-8 right-0 sm:right-2',
      delay: 0.4
    },
    {
      title: 'Other Certificates',
      icon: LayoutGrid,
      position: 'bottom-12 right-0 sm:right-2',
      delay: 0.8
    },
    {
      title: 'ID & Address Proof',
      icon: Contact,
      position: 'bottom-12 left-0 sm:left-2',
      delay: 1.2
    },
    {
      title: 'Educational Certificates',
      icon: GraduationCap,
      position: 'top-8 left-0 sm:left-2',
      delay: 1.6
    }
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto h-[400px] sm:h-[440px] flex items-center justify-center py-4 px-2 select-none">
      
      {/* Background Circular Orbit Ring */}
      <svg className="absolute inset-0 w-full h-full text-[#1769E0]/20" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="145" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
        <circle cx="200" cy="200" r="145" stroke="#1769E0" strokeWidth="1.5" strokeDasharray="3 12" className="opacity-40 animate-spin-slow" />
      </svg>

      {/* Subtle Glow under Certificate */}
      <div className="absolute bottom-12 w-64 h-12 bg-[#1769E0]/15 rounded-full blur-xl pointer-events-none" />

      {/* Main Central Certificate Document */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-48 sm:w-56 bg-white border border-[#DCE8FC] rounded-2xl p-4 sm:p-5 shadow-xl space-y-3 text-center"
        style={{
          boxShadow: '0 20px 45px -10px rgba(23, 105, 224, 0.18), 0 8px 20px -5px rgba(11, 40, 80, 0.06)'
        }}
      >
        {/* Emblem Icon */}
        <div className="flex justify-center">
          <div className="w-8 h-8 rounded-full bg-[#EEF6FF] border border-[#1769E0]/30 text-[#1769E0] flex items-center justify-center shadow-inner">
            <Award className="w-4 h-4" />
          </div>
        </div>

        {/* Certificate Title */}
        <h3 className="text-xs sm:text-sm font-black text-[#0B2850] tracking-widest uppercase">
          CERTIFICATE
        </h3>

        {/* Placeholder Lines */}
        <div className="space-y-1.5 py-0.5 max-w-[85%] mx-auto">
          <div className="h-1.5 bg-[#EEF6FF] rounded-full w-full" />
          <div className="h-1.5 bg-[#EEF6FF] rounded-full w-4/5 mx-auto" />
          <div className="h-1.5 bg-[#EEF6FF] rounded-full w-full" />
          <div className="h-1.5 bg-[#EEF6FF] rounded-full w-3/5 mx-auto" />
        </div>

        {/* Bottom Signature & Stamp */}
        <div className="flex items-center justify-between pt-2 border-t border-[#F1F5F9]">
          <div className="text-left">
            <span className="font-serif italic text-[11px] text-slate-500 font-bold tracking-wider block">Jura</span>
            <div className="h-0.5 w-10 bg-slate-300 rounded" />
          </div>

          {/* Blue Ribbon Seal */}
          <div className="w-7 h-7 rounded-full bg-[#1769E0] text-white flex items-center justify-center shadow-md ring-2 ring-[#EEF6FF]">
            <CheckCircle2 className="w-4 h-4" />
          </div>
        </div>
      </motion.div>

      {/* Surrounding Floating Cards */}
      {floatingBadges.map((badge, idx) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={idx}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: badge.delay, ease: 'easeInOut' }}
            className={`absolute z-20 ${badge.position}`}
          >
            <div className="bg-white border border-[#E5E7EB] shadow-md rounded-xl p-2 sm:p-2.5 flex flex-col items-center gap-1 w-22 sm:w-26 text-center hover:scale-105 transition-all">
              <div className="w-7 h-7 rounded-lg bg-[#F0F6FF] text-[#1769E0] flex items-center justify-center">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] font-bold text-[#0B2850] leading-tight">
                {badge.title}
              </span>
            </div>
          </motion.div>
        );
      })}

      {/* Bottom Center Pill: "● And many more" */}
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 2, ease: 'easeInOut' }}
        className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="px-3.5 py-1 rounded-full bg-white border border-[#DCE8FC] shadow-sm flex items-center gap-1.5 text-[11px] font-bold text-[#0B2850]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1769E0] animate-pulse" />
          <span>And many more</span>
        </div>
      </motion.div>

    </div>
  );
}
