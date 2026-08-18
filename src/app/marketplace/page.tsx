'use client';

import { useState, useMemo } from 'react';
import { Search, MessageCircle, FileText, CheckCircle2 } from 'lucide-react';
import { INITIAL_SERVICES } from '@/db/seed-data';
import { getServiceWhatsAppUrl } from '@/lib/whatsapp';

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
      <div className="bg-[#EEF6FF] p-8 rounded-2xl border border-[#E5E7EB] space-y-3">
        <span className="text-xs font-bold text-[#1769E0] uppercase tracking-wider">
          Certificate & Document Services
        </span>
        <h1 className="text-3xl font-bold text-[#0B2850]">
          Services We Provide
        </h1>
        <p className="text-xs sm:text-sm text-[#667085] max-w-2xl leading-relaxed">
          Browse through our complete service list. When you're ready, simply click to talk to us directly on WhatsApp. We'll tell you what documents are needed and handle everything for you.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="space-y-4">
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-[#667085] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search service name (e.g. Birth, Aadhaar, Income, PAN)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#E5E7EB] text-sm text-[#1F2937] focus:outline-none focus:border-[#1769E0]"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#1769E0] text-white'
                  : 'bg-white border border-[#E5E7EB] text-[#1F2937] hover:bg-[#EEF6FF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => {
          const waUrl = getServiceWhatsAppUrl(service.title);

          return (
            <div
              key={service.id}
              className="bg-white border border-[#E5E7EB] rounded-xl p-6 flex flex-col justify-between hover:border-[#1769E0] hover:shadow-sm transition-all space-y-4"
            >
              <div className="space-y-3">
                <span className="inline-block px-2.5 py-1 rounded text-[10px] font-bold bg-[#EEF6FF] text-[#1769E0] uppercase tracking-wider">
                  {service.category}
                </span>

                <h2 className="text-base font-bold text-[#0B2850]">
                  {service.title}
                </h2>

                <p className="text-xs text-[#667085] leading-relaxed">
                  {service.description}
                </p>

                {/* Docs Checklist */}
                <div className="pt-2">
                  <span className="text-[10px] font-bold text-[#667085] uppercase tracking-wider block mb-1">
                    Documents Needed:
                  </span>
                  <div className="space-y-1">
                    {service.requiredDocs.map((doc, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#1F2937]">
                        <CheckCircle2 className="w-3 h-3 text-[#1769E0] shrink-0" />
                        <span>{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA */}
              <div className="pt-4 border-t border-[#E5E7EB]">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-lg bg-[#1769E0] text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#1256b8] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#1769E0]" />
                  <span>Chat on WhatsApp →</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
