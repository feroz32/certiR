// CertificationWork.com Central WhatsApp Utility

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '918639135520';
export const DEFAULT_WHATSAPP_MESSAGE = 'Hi, I need help with a certificate/document.';

export function getWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function getServiceWhatsAppUrl(serviceTitle: string): string {
  const message = `Hi, I need help with ${serviceTitle}.`;
  return getWhatsAppUrl(message);
}
