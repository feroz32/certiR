'use client';

import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export default function FloatingWhatsApp() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#1769E0] text-white rounded-full shadow-lg hover:bg-[#1256b8] hover:shadow-xl transition-all duration-300 group"
    >
      <MessageCircle className="w-5 h-5 fill-white text-[#1769E0] group-hover:scale-110 transition-transform" />
      <span className="text-xs font-bold tracking-wide">Chat on WhatsApp</span>
    </a>
  );
}
