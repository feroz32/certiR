'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, FileText, User } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const { data: session } = useSession();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#EEF6FF] border border-[#CBD5E1] text-[#1769E0] flex items-center justify-center shadow-sm">
              <FileText className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="text-2xl font-black text-[#0B2850] tracking-tight">
              Certification<span className="text-[#1769E0]">Work</span>
            </span>
          </Link>

          {/* Center: Navigation Links with active bottom bar indicator */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveTab(link.label)}
                className={`relative py-6 text-sm font-bold transition-colors ${
                  activeTab === link.label ? 'text-[#1769E0]' : 'text-[#4B5563] hover:text-[#1769E0]'
                }`}
              >
                {link.label}
                {activeTab === link.label && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1769E0] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Right: Login Button */}
          <div className="hidden md:flex items-center gap-4">
            {session?.user ? (
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#0B2850]">
                  {session.user.name || 'Account'}
                </span>
                <button
                  onClick={() => signOut()}
                  className="px-4 py-2 rounded-xl text-xs font-bold border border-[#CBD5E1] text-[#4B5563] hover:text-[#0B2850] hover:bg-[#F8FAFC] transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="px-5 py-2.5 rounded-xl border-2 border-[#1769E0] text-[#1769E0] hover:bg-[#EEF6FF] text-sm font-bold transition-all flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E5E7EB] px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActiveTab(link.label);
                setMobileMenuOpen(false);
              }}
              className="block px-3 py-2.5 text-base font-bold text-[#1F2937] hover:text-[#1769E0] hover:bg-[#EEF6FF] rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-3 border-t border-[#E5E7EB]">
            {session?.user ? (
              <button
                onClick={() => signOut()}
                className="w-full text-left px-3 py-2 text-base font-bold text-rose-600"
              >
                Sign Out ({session.user.name})
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-3 rounded-xl bg-[#1769E0] text-white text-sm font-bold"
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
