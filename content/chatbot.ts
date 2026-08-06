import { seatsOpen, site } from "@/content/site";

export type ChatFaq = {
  id: string;
  /** Lowercase keywords; any match ranks the answer. */
  keywords: string[];
  question: string;
  /** Bullet lines joined with newlines; each line is one point. */
  bullets: string[];
};

export const chatCopy = {
  launcherLabel: "Ask Kept",
  launcherClose: "Close chat",
  title: "Kept",
  subtitle: "Quick answers · or WhatsApp me",
  greeting:
    "Hi , ask me about plans, pricing, the process, or seats. If you'd rather talk to Daathwi directly, jump to WhatsApp anytime.",
  placeholder: "Ask about plans, pricing…",
  sendLabel: "Send",
  whatsappCta: "Continue on WhatsApp",
  whatsappPrompt: "Hi, I was chatting on Kept and I'd like to talk about a website for my business",
  fallbackBullets: [
    "I don't have that detail here.",
    "WhatsApp Daathwi for a proper answer , tap below to open a message.",
  ],
  suggestions: [
    "What do you charge?",
    "How does it work?",
    "Who do you take on?",
    "Any seats open?",
  ],
} as const;

export function formatBullets(bullets: readonly string[]): string {
  return bullets.map((line) => `• ${line}`).join("\n");
}

export function getChatFaqs(): ChatFaq[] {
  const open = seatsOpen();

  return [
    {
      id: "pricing",
      keywords: [
        "price",
        "pricing",
        "cost",
        "charge",
        "fee",
        "fees",
        "plan",
        "plans",
        "growth",
        "pro",
        "month",
        "₹",
        "rupee",
        "cheap",
        "expensive",
        "budget",
      ],
      question: "What do you charge?",
      bullets: [
        "One-time build: ₹20k–30k",
        "Growth keep plan: ₹799/month , hosting, SEO, updates, backups",
        "Pro keep plan: ₹1,499/month , everything in Growth + Google Analytics + Chat AI Assistant",
      ],
    },
    {
      id: "process",
      keywords: [
        "process",
        "work",
        "how",
        "steps",
        "start",
        "begin",
        "timeline",
        "visit",
        "build",
        "launch",
        "keep",
      ],
      question: "How does it work?",
      bullets: [
        "Visit , I shoot your place free, on-site",
        "Build , search-ready site, WhatsApp for enquiries, you own the domain",
        "Launch , usually within the week",
        "Keep , I handle hosting, security, and updates",
      ],
    },
    {
      id: "who",
      keywords: [
        "who",
        "café",
        "cafe",
        "bakery",
        "restaurant",
        "client",
        "take on",
        "fit",
        "business",
        "eligible",
      ],
      question: "Who do you take on?",
      bullets: [
        "Premium cafés",
        "Cake & pastry studios",
        "Independent restaurants",
        "Places where the details already matter",
      ],
    },
    {
      id: "seats",
      keywords: [
        "seat",
        "seats",
        "open",
        "available",
        "capacity",
        "slot",
        "spots",
        "waitlist",
        "full",
      ],
      question: "Any seats open?",
      bullets: [
        `${open} of ${site.seats.total} seats open right now`,
        `${site.seats.filled} filled`,
        "Cap is thirty , on purpose, so quality doesn't slip",
      ],
    },
    {
      id: "photography",
      keywords: [
        "photo",
        "photos",
        "photography",
        "shoot",
        "camera",
        "instagram",
        "gallery",
        "pictures",
      ],
      question: "Do you shoot the photos?",
      bullets: [
        "Yes , personal visit before we build",
        "I photograph your space, process, and details",
        "No charge , real brand shots, not stock",
      ],
    },
    {
      id: "whatsapp-assistant",
      keywords: [
        "assistant",
        "ai",
        "chatbot",
        "bot",
        "faq",
        "pro plan",
        "whatsapp ai",
        "chat ai",
      ],
      question: "What's the Chat AI Assistant?",
      bullets: [
        "Included on the Pro plan",
        "Trained on your menu & FAQs",
        "Knows hours, contact & location",
        "Knowledge-base refresh once a month",
      ],
    },
    {
      id: "free",
      keywords: ["free", "first build", "trial", "discount"],
      question: "Is anything free?",
      bullets: [
        "On-site photography , always free before we build",
        "First build can be free for the right business",
        "Ask Daathwi on WhatsApp how that works",
      ],
    },
    {
      id: "about",
      keywords: ["daathwi", "you", "who are you", "founder", "about"],
      question: "Who's behind Kept?",
      bullets: [
        "Daathwi , UI/UX specialist & AI full-stack engineer",
        "One founder, no agency hand-offs",
        "Personal care for hospitality brands",
      ],
    },
  ];
}
