import { siteConfig } from "@/config/site";

export function buildWhatsAppUrl(message?: string) {
  const number = siteConfig.whatsapp.number.replace(/\D/g, "");
  const text = message ?? siteConfig.whatsapp.defaultMessage;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function openWhatsApp(message?: string) {
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}
