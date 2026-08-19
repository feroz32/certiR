'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, FileText, CheckCircle2, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { INITIAL_SERVICES } from '@/db/seed-data';

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Identity', 'Income & Tax', 'Residence & Caste', 'Vehicle & Driving', 'Business & Legal'];

  const filteredServices = useMemo(() => {
    return INITIAL_SERVICES.filter(service => {
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-white min-h-screen">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[#071A36] to-[#0B2850] text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-3">
        <span className="text-xs font-bold text-sky-400 uppercase tracking-wider bg-white/10 px-3 py-1 rounded-md">
          Official Service Directory
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold">
          Certificate & Document Assistance Marketplace
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
          Select any certificate service to begin online application filing. Upload digital documents or request doorstep collection by our authorized agent.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="space-y-4">
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search service name (e.g. Birth, Domicile, Income, Passport, PAN)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#1769E0] shadow-sm"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0B2850] text-white'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-[#1769E0] hover:shadow-xl transition-all duration-300 space-y-5 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-blue-50 text-[#1769E0]">
                  {service.category}
                </span>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 font-semibold block uppercase">Govt / Fee</span>
                  <span className="text-lg font-black text-[#0B2850]">₹{service.feeAmount}</span>
                </div>
              </div>

              <div>
                <h2 className="text-base font-bold text-[#0B2850] group-hover:text-[#1769E0] transition-colors">
                  {service.title}
                </h2>
                <p className="text-xs text-slate-500 leading-relaxed mt-1 line-clamp-2">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 p-2 rounded-xl border border-slate-100">
                <Clock className="w-3.5 h-3.5 text-[#1769E0] shrink-0" />
                <span>Turnaround: {service.estimatedDays} Working Days</span>
              </div>

              {/* Docs Checklist */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">
                  Required Documents:
                </span>
                <div className="space-y-1">
                  {service.requiredDocs.map((doc, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Online Application CTA */}
            <div className="pt-4 border-t border-slate-100">
              <Link
                href={`/marketplace/${service.id}/apply`}
                className="w-full py-3 rounded-xl bg-[#0B2850] hover:bg-[#1769E0] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>Apply Online & Book Pickup</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
