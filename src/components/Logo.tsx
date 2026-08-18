import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ className = '', showTagline = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      
      {/* Stylish CW Badge Mark (Matching reference shield shape with equal size CW) */}
      <div className="relative w-11 h-11 rounded-2xl rounded-tr-xs bg-gradient-to-br from-[#1769E0] to-[#0B2850] p-[2px] shadow-md hover:shadow-lg transition-shadow group shrink-0">
        <div className="w-full h-full bg-[#1769E0] rounded-[14px] rounded-tr-xs flex items-center justify-center relative overflow-hidden">
          
          {/* Subtle glossy background highlight */}
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-white/20 rounded-full blur-sm pointer-events-none" />

          {/* Equal Sized Bold CW Letters */}
          <span className="text-white font-black text-lg tracking-tight leading-none drop-shadow-sm select-none">
            CW
          </span>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col text-left">
        <div className="text-xl sm:text-2xl font-black text-[#0B2850] tracking-tight leading-none">
          Certification<span className="text-[#1769E0]">Work</span>
          <span className="text-sm font-bold text-[#667085]">.com</span>
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
