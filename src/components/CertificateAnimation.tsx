'use client';

import { motion } from 'framer-motion';
import { MessageCircle, FileText, CheckCircle2, Home, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CertificateAnimation() {
  const stages = [
    { label: 'WhatsApp', icon: MessageCircle },
    { label: 'Documents', icon: FileText },
    { label: 'Application', icon: ShieldCheck },
    { label: 'Certificate Ready', icon: CheckCircle2 },
    { label: 'Doorstep', icon: Home },
  ];

  return (
    <div className="w-full max-w-xl mx-auto py-4">
      {/* Clean Subtle White Container */}
      <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6 text-center">
        
        {/* Main Floating Certificate Object */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-48 sm:w-56 mx-auto bg-[#EEF6FF] border border-[#CBD5E1] rounded-2xl p-5 space-y-3 shadow-md text-left"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-[#1769E0] text-white flex items-center justify-center font-black text-xs">
                CW
              </div>
              <span className="text-[11px] font-bold text-[#0B2850]">Certificate</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-[#1769E0]" />
          </div>

          <div className="space-y-1.5 pt-1">
            <div className="h-2 bg-white rounded-full w-full" />
            <div className="h-2 bg-white rounded-full w-4/5" />
            <div className="h-2 bg-white rounded-full w-3/5" />
          </div>

          <div className="flex justify-end pt-1">
            <CheckCircle2 className="w-4 h-4 text-[#1769E0]" />
          </div>
        </motion.div>

        {/* 5 Stage Horizontal Flow Indicator */}
        <div className="pt-2">
          <div className="flex items-center justify-between text-center relative px-2">
            
            {/* Horizontal Line behind */}
            <div className="absolute top-4 left-6 right-6 h-0.5 bg-[#EEF6FF] -z-0" />

            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div key={idx} className="relative z-10 flex flex-col items-center gap-1.5">
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-[#1769E0] text-[#1769E0] flex items-center justify-center shadow-xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-semibold text-[#667085] hidden sm:block">
                    {stage.label}
                  </span>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </div>
  );
}
