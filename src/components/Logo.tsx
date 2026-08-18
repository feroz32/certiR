import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ className = '', showTagline = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      
      {/* Prominent CW Shield Icon (Larger & Clearly Visible) */}
      <img
        src="/cw-shield.png"
        alt="CW Badge"
        className="w-11 h-11 sm:w-13 sm:h-13 object-contain shrink-0 drop-shadow-md hover:scale-105 transition-transform"
      />

      {/* Brand Name Typography */}
      <div className="flex flex-col text-left">
        <div className="text-xl sm:text-2xl font-black text-[#0B2850] tracking-tight leading-none">
          Certification<span className="text-[#1769E0]">Work</span>
          <span className="text-xs sm:text-sm font-bold text-[#667085]">.com</span>
        </div>
        {showTagline && (
          <span className="text-[11px] text-[#667085] font-semibold mt-1">
            Certificate Services. Right at Your Doorstep.
          </span>
        )}
      </div>

    </div>
  );
}
