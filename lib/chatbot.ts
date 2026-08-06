import {
  chatCopy,
  formatBullets,
  getChatFaqs,
  type ChatFaq,
} from "@/content/chatbot";

export type ChatMessage = {
  id: string;
  role: "bot" | "user";
  text: string;
};

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();
}

/** Score FAQs by keyword hits; prefer longer / more specific keywords. */
export function matchFaq(input: string, faqs: ChatFaq[] = getChatFaqs()): ChatFaq | null {
  const q = normalize(input);
  if (!q) return null;

  let best: { faq: ChatFaq; score: number } | null = null;

  for (const faq of faqs) {
    let score = 0;
    for (const keyword of faq.keywords) {
      const k = keyword.toLowerCase();
      if (q.includes(k)) {
        score += k.length;
      }
    }
    if (score > 0 && (!best || score > best.score)) {
      best = { faq, score };
    }
  }

  return best?.faq ?? null;
}

export function replyTo(input: string): string {
  const faq = matchFaq(input);
  return formatBullets(faq?.bullets ?? chatCopy.fallbackBullets);
}

export function createId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
