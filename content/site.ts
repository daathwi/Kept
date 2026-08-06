/** Site-wide configuration , swap these before going live. */
export const site = {
  name: "Kept",
  tagline: "Websites for businesses that care",
  url: "https://kept.studio",
  locale: "en_IN",
  whatsapp: {
    /** Real WhatsApp number (country code, no +). */
    number: "919363869593",
    defaultText: "Hi, I'd like to talk about a website for my business",
  },
  social: {
    instagram: "https://www.instagram.com/daathwi.jpg/",
  },
  seats: {
    total: 30,
    filled: 12,
  },
} as const;

export function whatsappUrl(text: string = site.whatsapp.defaultText): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(text)}`;
}

export function seatsOpen(): number {
  return site.seats.total - site.seats.filled;
}

export function seatsFilledPercent(): number {
  return Math.round((site.seats.filled / site.seats.total) * 100);
}
