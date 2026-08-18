import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ className = '', showTagline = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      
      {/* Modern, Simple & Attractive CW Badge Icon */}
      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#1769E0] to-[#0B2850] text-white flex items-center justify-center font-black text-base tracking-tight shadow-sm shrink-0 border border-[#1769E0]/20">
        <span className="tracking-tighter font-extrabold select-none">
          CW
        </span>
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col text-left">
        <div className="text-xl font-extrabold text-[#0B2850] tracking-tight leading-none">
          Certification<span className="text-[#1769E0]">Work</span>
          <span className="text-xs font-semibold text-[#667085]">.com</span>
        </div>
        {showTagline && (
          <span className="text-[10px] text-[#667085] font-semibold mt-1">
            Certificate Services. Right at Your Doorstep.
          </span>
        )}
      </div>

    </div>
  );
}
