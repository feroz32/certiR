import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ className = '', showTagline = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* CW Badge Shield */}
      <div className="w-10 h-10 rounded-xl bg-[#1769E0] border-2 border-[#0B2850] text-white flex items-center justify-center font-black text-lg tracking-tighter shadow-sm shrink-0">
        Cw
      </div>

      {/* Brand Text */}
      <div className="flex flex-col text-left">
        <span className="text-xl font-black text-[#0B2850] tracking-tight leading-none">
          Certification<span className="text-[#1769E0]">Work.com</span>
        </span>
        {showTagline && (
          <span className="text-[10px] text-[#667085] font-medium mt-1">
            Certificate Services. Right at Your Doorstep.
          </span>
        )}
      </div>
    </div>
  );
}
