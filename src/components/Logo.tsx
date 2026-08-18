import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ className = '', showTagline = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Exact Uploaded Logo Image */}
      <img
        src="/official-logo.png"
        alt="CertificationWork.com Logo"
        className="h-10 sm:h-12 w-auto object-contain"
      />
    </div>
  );
}
