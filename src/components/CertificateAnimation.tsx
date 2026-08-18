'use client';

import { motion } from 'framer-motion';
import { MessageCircle, FileText, CheckCircle2, Home, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CertificateAnimation() {
  return (
    <div className="w-full max-w-3xl mx-auto my-6">
      {/* Minimal Card Container */}
      <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 relative overflow-hidden">
        
        {/* Top Floating Certificate Graphic */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-[#E5E7EB]">
          
          {/* Main Floating Blue & White Document */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full sm:w-1/2 bg-[#EEF6FF] border border-[#CBD5E1] rounded-xl p-5 space-y-3 relative"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#1769E0] text-white flex items-center justify-center font-bold text-xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0B2850]">Official Certificate</h4>
                  <p className="text-[10px] text-[#667085]">CertificationWork.com</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Issued
              </span>
            </div>

            {/* Document preview lines */}
            <div className="space-y-2 pt-1">
              <div className="h-2 bg-white rounded w-5/6" />
              <div className="h-2 bg-white rounded w-3/4" />
              <div className="h-2 bg-white rounded w-2/3" />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[10px] text-[#667085] font-medium">Protecting the Proof of Life</span>
              <div className="w-6 h-6 rounded-full border-2 border-[#1769E0] flex items-center justify-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1769E0]" />
              </div>
            </div>
          </motion.div>

          {/* Quick Explanation */}
          <div className="w-full sm:w-1/2 space-y-2 text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1769E0]">
              Simple Doorstep Process
            </span>
            <h3 className="text-xl font-bold text-[#0B2850] leading-snug">
              Documents → Application → Certificate Delivered
            </h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              Tell us what you need on WhatsApp. We collect your required documents, file the application, and deliver the completed certificate directly to your doorstep.
            </p>
          </div>
        </div>

        {/* 4 Step Flow */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-3 rounded-xl bg-[#EEF6FF] border border-[#E5E7EB] space-y-1">
            <div className="flex items-center justify-between">
              <MessageCircle className="w-4 h-4 text-[#1769E0]" />
              <span className="text-[10px] font-bold text-[#667085]">01</span>
            </div>
            <h4 className="text-xs font-bold text-[#0B2850]">Talk to Us</h4>
            <p className="text-[11px] text-[#667085]">WhatsApp assist</p>
          </div>

          <div className="p-3 rounded-xl bg-[#EEF6FF] border border-[#E5E7EB] space-y-1">
            <div className="flex items-center justify-between">
              <FileText className="w-4 h-4 text-[#1769E0]" />
              <span className="text-[10px] font-bold text-[#667085]">02</span>
            </div>
            <h4 className="text-xs font-bold text-[#0B2850]">Share Documents</h4>
            <p className="text-[11px] text-[#667085]">Doorstep collection</p>
          </div>

          <div className="p-3 rounded-xl bg-[#EEF6FF] border border-[#E5E7EB] space-y-1">
            <div className="flex items-center justify-between">
              <CheckCircle2 className="w-4 h-4 text-[#1769E0]" />
              <span className="text-[10px] font-bold text-[#667085]">03</span>
            </div>
            <h4 className="text-xs font-bold text-[#0B2850]">We Handle It</h4>
            <p className="text-[11px] text-[#667085]">Official filing</p>
          </div>

          <div className="p-3 rounded-xl bg-[#EEF6FF] border border-[#E5E7EB] space-y-1">
            <div className="flex items-center justify-between">
              <Home className="w-4 h-4 text-[#1769E0]" />
              <span className="text-[10px] font-bold text-[#667085]">04</span>
            </div>
            <h4 className="text-xs font-bold text-[#0B2850]">Delivered to You</h4>
            <p className="text-[11px] text-[#667085]">At your doorstep</p>
          </div>
        </div>

      </div>
    </div>
  );
}
