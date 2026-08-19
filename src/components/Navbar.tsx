'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, User } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';
import Logo from '@/components/Logo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/#how-it-works', label: 'How It Works' },
    { href: '/#about', label: 'About' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: CW Brand Logo */}
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-[#1F2937] hover:text-[#1769E0] transition-colors"
              >
                {link.label}
              </Link>
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
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold border border-[#E5E7EB] text-[#667085] hover:text-[#0B2850] transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 rounded-xl text-sm font-semibold border border-[#E5E7EB] text-[#1F2937] hover:border-[#1769E0] hover:text-[#1769E0] transition-all flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
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
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#1F2937] hover:text-[#1769E0] hover:bg-[#EEF6FF] rounded-lg transition-colors"
            >
              {link.label}
            </Link>
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
