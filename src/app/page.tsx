'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Clock, 
  FileText, 
  CheckCircle2, 
  Lock, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  UserCheck, 
  Headphones, 
  BadgeCheck,
  Building2,
  FileCheck2,
  Layers
} from 'lucide-react';
import { INITIAL_SERVICES, ServiceItem } from '@/db/seed-data';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [trackRefNo, setTrackRefNo] = useState('');

  const categories = [
    'All',
    'Identity',
    'Income & Tax',
    'Residence & Caste',
    'Vehicle & Driving',
    'Business & Legal'
  ];

  const filteredServices = useMemo(() => {
    return INITIAL_SERVICES.filter(service => {
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const faqs = [
    {
      q: "How does the doorstep document collection process work?",
      a: "When you apply for a service that requires original verification, our verified courier partner schedules a pick-up at your preferred time slot, collects the required physical documents securely, and delivers the finalized certificate back to your address."
    },
    {
      q: "Are the certificates issued by CertificationWork.com legally valid?",
      a: "Yes, 100%. We act as your official documentation assistance partner. All certificates are issued directly by competent government authorities (Tehsildar, Municipal Corporation, RTO, Passport Seva Kendra, UIDAI, etc.) with official seals and QR verification."
    },
    {
      q: "How can I track my application status after applying?",
      a: "As soon as you complete your application online, you receive a unique Application Reference Number (e.g. CR-2026-XXXXXX). You can use our live Tracking Portal at any time to monitor real-time scrutiny stages."
    },
    {
      q: "What if my application gets rejected by department officials?",
      a: "Our document specialists conduct a thorough pre-scrutiny audit of your papers before department submission. If any document is missing or formatted incorrectly, we notify you upfront to ensure a 99.8% first-time approval rate."
    }
  ];

  return (
    <div className="bg-white text-[#1F2937] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#071A36] via-[#0B2850] to-[#0A1E3F] text-white pt-16 sm:pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Subtle Glow Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#1769E0]/15 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute -bottom-20 right-10 w-96 h-96 bg-blue-500/10 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          
          {/* Official Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-blue-200 text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>India's Trusted Doorstep Certificate & Documentation Portal</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight sm:leading-tight">
              Official Certificate Services. <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-200 bg-clip-text text-transparent">
                Delivered Right to Your Doorstep.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal max-w-3xl mx-auto leading-relaxed">
              Skip the government office queues. We collect your documents, audit for zero rejection risk, handle official department filing, and deliver verified certificates to your home.
            </p>
          </div>

          {/* Quick Search Bar inside Hero */}
          <div className="max-w-2xl mx-auto">
            <div className="relative flex items-center bg-white rounded-2xl p-2 shadow-2xl border border-slate-200">
              <Search className="w-5 h-5 text-slate-400 ml-3.5 shrink-0" />
              <input
                type="text"
                placeholder="Search certificate service (e.g. Birth, Domicile, Income, Passport, PAN)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none text-sm font-medium"
              />
              <Link
                href="/marketplace"
                className="bg-[#1769E0] hover:bg-[#1256b8] text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md shrink-0 flex items-center gap-2"
              >
                <span>Browse All</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/marketplace"
              className="px-7 py-3.5 rounded-xl bg-[#1769E0] hover:bg-[#1256b8] text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center gap-2.5"
            >
              <span>Apply Online Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/tracking"
              className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all flex items-center gap-2"
            >
              <FileCheck2 className="w-4 h-4 text-sky-400" />
              <span>Track Existing Application</span>
            </Link>
          </div>

          {/* Trust Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-white/10 max-w-4xl mx-auto text-left">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">100% Legal & Valid</h4>
                <p className="text-[11px] text-slate-400">Issued by Govt Authorities</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Doorstep Delivery</h4>
                <p className="text-[11px] text-slate-400">Physical Pickup & Drop</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-400/20 text-amber-400 shrink-0">
                <BadgeCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Pre-Scrutiny Audit</h4>
                <p className="text-[11px] text-slate-400">Zero Rejection Guarantee</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-400/20 text-indigo-400 shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Encrypted Data Vault</h4>
                <p className="text-[11px] text-slate-400">Strict Privacy Protocol</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. POPULAR CERTIFICATE SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-10 scroll-mt-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769E0] bg-blue-50 px-3 py-1 rounded-md">
              Comprehensive Catalogue
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2850] tracking-tight">
              Certificate & Document Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-xl">
              Select a service below to start your digital application or schedule a doorstep document collection agent.
            </p>
          </div>

          <Link
            href="/marketplace"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#1769E0] hover:text-[#1256b8] hover:underline"
          >
            <span>View all 12+ Available Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0B2850] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-[#1769E0] hover:shadow-xl transition-all duration-300 group space-y-6"
            >
              <div className="space-y-4">
                {/* Header Badge & Fee */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-blue-50 text-[#1769E0]">
                    {service.category}
                  </span>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 font-semibold block uppercase">Govt / Service Fee</span>
                    <span className="text-lg font-black text-[#0B2850]">₹{service.feeAmount}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-lg font-bold text-[#0B2850] group-hover:text-[#1769E0] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mt-1.5 line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Turnaround Time */}
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <Clock className="w-4 h-4 text-[#1769E0] shrink-0" />
                  <span>Est. Turnaround: {service.estimatedDays} Working Days</span>
                </div>

                {/* Required Documents Checklist */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-bold text-slate-700 block">
                    Key Required Documents:
                  </span>
                  <div className="space-y-1.5">
                    {service.requiredDocs.map((doc, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Application Link */}
              <div className="pt-4 border-t border-slate-100">
                <Link
                  href={`/marketplace/${service.id}/apply`}
                  className="w-full py-3 rounded-xl bg-[#0B2850] hover:bg-[#1769E0] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md group-hover:shadow-lg"
                >
                  <span>Apply Online & Book Pickup</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 3. HOW IT WORKS (4-STEP PROCESS) */}
      <section id="how-it-works" className="bg-slate-50 py-20 border-y border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769E0] bg-blue-100/60 px-3 py-1 rounded-md">
              Simplified 4-Step Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2850]">
              How CertificationWork Operates
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Transparent, end-to-end assistance designed to take document hassles off your shoulders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4 relative">
              <span className="w-10 h-10 rounded-xl bg-[#EEF6FF] text-[#1769E0] font-black text-sm flex items-center justify-center border border-blue-200">
                01
              </span>
              <h3 className="text-base font-bold text-[#0B2850]">Select & Fill Form</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Choose your required certificate service online and fill in essential applicant details in under 2 minutes.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4 relative">
              <span className="w-10 h-10 rounded-xl bg-[#EEF6FF] text-[#1769E0] font-black text-sm flex items-center justify-center border border-blue-200">
                02
              </span>
              <h3 className="text-base font-bold text-[#0B2850]">Upload or Schedule Pickup</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Upload digital copies online, or request our doorstep executive to collect original physical documents.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4 relative">
              <span className="w-10 h-10 rounded-xl bg-[#EEF6FF] text-[#1769E0] font-black text-sm flex items-center justify-center border border-blue-200">
                03
              </span>
              <h3 className="text-base font-bold text-[#0B2850]">Expert Pre-Audit & Filing</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Our legal specialists verify your papers for accuracy before submitting directly to government department officials.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-4 relative">
              <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 font-black text-sm flex items-center justify-center border border-emerald-200">
                04
              </span>
              <h3 className="text-base font-bold text-[#0B2850]">Doorstep Certificate Delivery</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Once approved, your original government-stamped certificate is delivered securely to your doorstep.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. REAL-TIME APPLICATION TRACKING WIDGET */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-[#071A36] to-[#0B2850] rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-slate-800 space-y-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Live Status Monitoring
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Already Have an Application? Track It Now.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Enter your Application Reference Number (e.g. CR-2026-849201) to check department scrutiny stages.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (trackRefNo.trim()) {
                window.location.href = `/tracking?appNo=${encodeURIComponent(trackRefNo.trim())}`;
              }
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-2xl"
          >
            <input
              type="text"
              required
              placeholder="Enter Application Ref No (e.g. CR-2026-849201)"
              value={trackRefNo}
              onChange={(e) => setTrackRefNo(e.target.value)}
              className="flex-1 px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none text-sm font-semibold"
            />
            <button
              type="submit"
              className="px-7 py-3.5 rounded-xl bg-[#1769E0] hover:bg-blue-600 text-white font-bold text-sm transition-all shadow-lg shrink-0 flex items-center justify-center gap-2"
            >
              <span>Track Application</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* 5. TRUST & SECURITY ADVANTAGE */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769E0] bg-blue-50 px-3 py-1 rounded-md">
              Why CertificationWork.com
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2850] leading-tight">
              Built on Trust, Precision & Complete Security.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Obtaining essential certificates often involves confusing government portals, missing documents, and multiple office visits. CertificationWork.com provides a structured digital workflow with dedicated legal guidance.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-blue-50 text-[#1769E0] shrink-0 mt-0.5">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B2850]">Verified Documentation Experts</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Our trained team reviews every document before submission to eliminate department rejections.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-blue-50 text-[#1769E0] shrink-0 mt-0.5">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B2850]">Direct Department Coordination</h4>
                  <p className="text-xs text-slate-500 mt-0.5">We liaise directly with municipal and revenue officers for timely processing.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-blue-50 text-[#1769E0] shrink-0 mt-0.5">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B2850]">Bank-Grade Data Confidentiality</h4>
                  <p className="text-xs text-slate-500 mt-0.5">All customer identity proofs are encrypted in our digital vault and purged after certificate delivery.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-gradient-to-br from-slate-900 to-[#0B2850] p-8 sm:p-10 rounded-3xl text-white space-y-6 shadow-2xl border border-slate-800">
              <div className="space-y-2 border-b border-white/10 pb-6">
                <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">Performance Metrics</span>
                <h3 className="text-2xl font-bold">Trusted Across 100+ Cities</h3>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <span className="text-3xl font-black text-blue-400">10,000+</span>
                  <span className="text-xs text-slate-300 block font-medium">Certificates Issued</span>
                </div>

                <div className="space-y-1">
                  <span className="text-3xl font-black text-emerald-400">99.8%</span>
                  <span className="text-xs text-slate-300 block font-medium">First-Time Approval</span>
                </div>

                <div className="space-y-1">
                  <span className="text-3xl font-black text-amber-400">4.9 / 5</span>
                  <span className="text-xs text-slate-300 block font-medium">Customer Rating</span>
                </div>

                <div className="space-y-1">
                  <span className="text-3xl font-black text-purple-400">100%</span>
                  <span className="text-xs text-slate-300 block font-medium">Doorstep Security</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769E0] bg-blue-100/60 px-3 py-1 rounded-md">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2850]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left font-bold text-[#0B2850] text-sm sm:text-base flex items-center justify-between gap-4 hover:text-[#1769E0] transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#1769E0] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      <p className="pt-3">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. FINAL CTA FOOTER BANNER */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
        <div className="bg-gradient-to-r from-[#0B2850] to-[#1769E0] rounded-3xl p-10 sm:p-16 text-center text-white space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Need a Certificate Handled Effortlessly?
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto font-medium">
            Join thousands of satisfied applicants. Apply online today and let our experts handle the rest.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/marketplace"
              className="px-8 py-4 rounded-xl bg-white text-[#0B2850] hover:bg-slate-100 font-extrabold text-sm shadow-xl transition-all flex items-center gap-2"
            >
              <span>Explore Services & Apply</span>
              <ArrowRight className="w-4 h-4 text-[#1769E0]" />
            </Link>

            <Link
              href="/tracking"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/30 transition-all"
            >
              Track Application Status
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
