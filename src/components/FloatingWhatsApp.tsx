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
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group ring-4 ring-[#25D366]/20"
      title="Chat on WhatsApp (+91 86391 35520)"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
      
      {/* Red Notification Badge */}
      <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white font-black text-[10px] flex items-center justify-center border-2 border-white shadow-md animate-pulse">
        1
      </span>
    </a>
  );
}
