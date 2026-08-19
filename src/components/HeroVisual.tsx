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
      // Top Center
      style: { top: '0%', left: '50%', transform: 'translate(-50%, -20%)' },
      delay: 0
    },
    {
      title: 'Income Certificate',
      icon: IndianRupee,
      // Top Right
      style: { top: '12%', right: '-2%' },
      delay: 0.4
    },
    {
      title: 'Other Certificates',
      icon: LayoutGrid,
      // Bottom Right
      style: { bottom: '14%', right: '-2%' },
      delay: 0.8
    },
    {
      title: 'ID & Address Proof',
      icon: Contact,
      // Bottom Left
      style: { bottom: '14%', left: '-2%' },
      delay: 1.2
    },
    {
      title: 'Educational Certificates',
      icon: GraduationCap,
      // Top Left
      style: { top: '12%', left: '-2%' },
      delay: 1.6
    }
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto h-[460px] sm:h-[520px] flex items-center justify-center p-6 select-none">
      
      {/* Background Circular Orbit Ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg className="w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] text-[#1769E0]/20" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="175" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="200" cy="200" r="175" stroke="#1769E0" strokeWidth="1.5" strokeDasharray="3 12" className="opacity-40 animate-spin-slow" />
        </svg>
      </div>

      {/* Blue Radial Glow Effect behind Central Card */}
      <div className="absolute w-72 h-72 bg-gradient-to-tr from-[#1769E0]/15 via-[#EEF6FF]/40 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Main Central Certificate Document Card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-56 sm:w-64 bg-white border border-[#DCE8FC] rounded-2xl p-5 sm:p-6 shadow-2xl space-y-4 text-center"
        style={{
          boxShadow: '0 25px 60px -12px rgba(23, 105, 224, 0.22), 0 10px 25px -5px rgba(11, 40, 80, 0.06)'
        }}
      >
        {/* Emblem/Seal Icon at Top */}
        <div className="flex justify-center">
          <div className="w-10 h-10 rounded-full bg-[#EEF6FF] border border-[#1769E0]/30 text-[#1769E0] flex items-center justify-center shadow-inner">
            <Award className="w-5 h-5" />
          </div>
        </div>

        {/* Certificate Title */}
        <h3 className="text-xs sm:text-sm font-black text-[#0B2850] tracking-[0.2em] uppercase">
          CERTIFICATE
        </h3>

        {/* Skeleton Lines */}
        <div className="space-y-2 py-1 max-w-[85%] mx-auto">
          <div className="h-2 bg-[#EEF6FF] rounded-full w-full" />
          <div className="h-2 bg-[#EEF6FF] rounded-full w-4/5 mx-auto" />
          <div className="h-2 bg-[#EEF6FF] rounded-full w-full" />
          <div className="h-2 bg-[#EEF6FF] rounded-full w-3/5 mx-auto" />
        </div>

        {/* Bottom Signature & Verified Seal */}
        <div className="flex items-center justify-between pt-3 border-t border-[#F1F5F9]">
          <div className="text-left">
            <span className="font-serif italic text-xs text-slate-500 font-bold tracking-wider block">Jura</span>
            <div className="h-0.5 w-12 bg-slate-300 rounded" />
          </div>

          {/* Blue Verified Check Seal */}
          <div className="w-8 h-8 rounded-full bg-[#1769E0] text-white flex items-center justify-center shadow-md ring-4 ring-[#EEF6FF]">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>
      </motion.div>

      {/* Surrounding 5 Floating Cards */}
      {floatingBadges.map((badge, idx) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={idx}
            style={badge.style}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: badge.delay, ease: 'easeInOut' }}
            className="absolute z-20"
          >
            <div className="bg-white border border-slate-200/90 shadow-lg hover:shadow-xl rounded-2xl p-3 sm:p-3.5 flex flex-col items-center gap-2 w-28 sm:w-32 text-center transition-all duration-300 hover:scale-105">
              <div className="w-9 h-9 rounded-xl bg-[#F0F6FF] text-[#1769E0] flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#0B2850] leading-tight">
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
        style={{ bottom: '2%', left: '50%', transform: 'translateX(-50%)' }}
        className="absolute z-20"
      >
        <div className="px-4 py-1.5 rounded-full bg-white border border-[#DCE8FC] shadow-md flex items-center gap-2 text-xs font-bold text-[#0B2850]">
          <span className="w-2 h-2 rounded-full bg-[#1769E0] animate-pulse" />
          <span>And many more</span>
        </div>
      </motion.div>

    </div>
  );
}
