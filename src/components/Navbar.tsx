'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Brand Name */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#1769E0] text-white flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-[#0B2850] tracking-tight">
              CertificationWork.com
            </span>
          </Link>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#1F2937] hover:text-[#1769E0] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Login / Profile */}
          <div className="hidden md:flex items-center gap-4">
            {session?.user ? (
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-[#0B2850]">
                  {session.user.name || 'Account'}
                </span>
                <button
                  onClick={() => signOut()}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold border border-[#E5E7EB] text-[#667085] hover:text-[#0B2850] transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 rounded-lg bg-[#EEF6FF] text-[#1769E0] border border-[#E5E7EB] text-sm font-semibold hover:bg-[#E0EEFF] transition-colors"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 text-[#1F2937] hover:text-[#1769E0]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E5E7EB] px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#1F2937] hover:text-[#1769E0] hover:bg-[#EEF6FF] rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-3 border-t border-[#E5E7EB]">
            {session?.user ? (
              <button
                onClick={() => signOut()}
                className="w-full text-left px-3 py-2 text-base font-medium text-rose-600"
              >
                Sign Out ({session.user.name})
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-2.5 rounded-lg bg-[#1769E0] text-white text-sm font-semibold"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
