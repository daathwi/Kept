/**
 * Homepage content layer , keeps copy and media out of components
 * so the site stays fully static and easy to version.
 */

export const nav = {
  links: [
    { href: "#about", label: "About", icon: "about" },
    { href: "#portfolio", label: "Portfolio", icon: "portfolio" },
    { href: "#plans", label: "Plans", icon: "plans" },
  ],
  cta: "Message on WhatsApp",
  ctaIcon: "whatsapp",
} as const;

export type NavIconId = (typeof nav.links)[number]["icon"] | typeof nav.ctaIcon;

export const hero = {
  ticketNo: "0014",
  status: "Open for new orders",
  title: "Your brand deserves a website that's kept, not just built.",
  lede: "I design, launch, and personally look after websites strictly with only 30 craftspeople who obsess over their brand & process without agency hand-offs.",
  cta: "Book Your Ticket",
  note: "First build free for the right business , ask me how.",
} as const;

export const who = {
  kicker: "Who I take on",
  title: "If you care about how your place looks, I care about how your site works.",
  description:
    "I don't build for everyone. I build for businesses where the details already matter , because that's the only kind of client a small, personal studio can do right by.",
  cards: [
    {
      tag: "Premium cafés",
      title: "The ones with a menu, not a price list",
      body: "A site that matches the room , booking, hours, and location handled without a single broken link.",
    },
    {
      tag: "Cake & pastry studios",
      title: "Made-to-order, not off-the-shelf",
      body: "Orders routed straight to WhatsApp, so nothing gets lost between a browser tab and a kitchen.",
    },
    {
      tag: "Independent restaurants",
      title: "Full tables, not just full inboxes",
      body: "Search-ready, mobile-first, and built to send the right customer straight to a reservation.",
    },
  ],
} as const;

export const about = {
  kicker: "Who's behind this",
  title: "Hi, I'm Daathwi.",
  portrait: {
    src: "https://picsum.photos/seed/daathwi-portrait/640/760",
    alt: "Daathwi at work",
    width: 640,
    height: 760,
  },
  paragraphs: [
    "4 years into the software industry as a UI/UX specialist and AI full-stack engineer, I've helped build and ship products for 20+ businesses. Before deciding to bring that same care directly to the businesses I actually want to work with: the ones who sweat the details the way I do.",
    "Outside of shipping product, I shoot. Every client gets a personal visit before we build anything , I photograph your space, your process, and the small details that make your business yours, at no charge. It's not stock photography standing in for your brand. It's actually your brand.",
  ],
  stats: [
    { value: "4+", label: "Years in software" },
    { value: "20+", label: "Businesses shipped for" },
    { value: "1", label: "Founder, no hand-offs" },
  ],
  instagramCta: "See more of my work on Instagram →",
} as const;

/**
 * Placeholder Picsum frames — swap every src for real on-site shots
 * before going live (the copy promises real photography).
 * Collage slots follow the shared-edge layout (tall / wide / mid).
 */
export const portfolio = {
  kicker: "Part of the build",
  title: "Photography as part of the build.",
  description:
    "I shoot your space, process, and details on-site, free. Ambience and craft in the frame, so the site looks like your place — not stock.",
  showPhotos: "Show Samples",
  hidePhotos: "Hide Samples",
  frames: {
    topTall: {
      src: "https://picsum.photos/seed/kept-frame1/540/960",
      alt: "Café ambience shot",
      width: 540,
      height: 960,
      ratio: "9x16" as const,
    },
    topWide: {
      src: "https://picsum.photos/seed/kept-frame2/1280/720",
      alt: "Pastry detail shot",
      width: 1280,
      height: 720,
      ratio: "16x9" as const,
    },
    bottomTall: {
      src: "https://picsum.photos/seed/kept-frame3/540/960",
      alt: "Restaurant interior shot",
      width: 540,
      height: 960,
      ratio: "9x16" as const,
    },
    stackMid: {
      src: "https://picsum.photos/seed/kept-frame4/800/640",
      alt: "Coffee preparation shot",
      width: 800,
      height: 640,
      ratio: "5x4" as const,
    },
    stackTall: {
      src: "https://picsum.photos/seed/kept-frame5/540/960",
      alt: "Bakery counter shot",
      width: 540,
      height: 960,
      ratio: "9x16" as const,
    },
    bottomMid: {
      src: "https://picsum.photos/seed/kept-frame6/800/640",
      alt: "Table setting shot",
      width: 800,
      height: 640,
      ratio: "5x4" as const,
    },
  },
} as const;

export const process = {
  kicker: "How it works",
  title: "Four stages. No agency layers in between.",
  steps: [
    {
      num: "00",
      icon: "visit" as const,
      title: "Visit",
      body: "I come to your business in person and shoot the ambience, the process, and the stories worth telling , free, before we build anything.",
      meta: "On-site · No charge",
    },
    {
      num: "01",
      icon: "build" as const,
      title: "Build",
      body: "A fast, search-ready site built around your menu, hours, and booking , with WhatsApp for every enquiry, and your photography, not stock. You own the domain.",
      meta: "One-time · ₹20k–30k · SEO",
    },
    {
      num: "02",
      icon: "launch" as const,
      title: "Launch",
      body: "Live, indexed, and connected , usually within the same week. No waiting on a queue behind other clients.",
      meta: "Same week · Go live",
    },
    {
      num: "03",
      icon: "keep" as const,
      title: "Keep",
      body: "Hosting, security, and updates so the site never quietly breaks, slows down, or falls out of date , handled by me, not a ticket queue.",
      meta: "Ongoing · Growth or Pro",
    },
  ],
} as const;

export const plans = {
  kicker: "The menu",
  title: "Two ways to keep it running.",
  description: "Pick what your business needs , not what a bigger agency needs to sell.",
  cta: "Get Started",
  items: [
    {
      name: "Growth Plan",
      setup: "₹20k–30k",
      setupLabel: "one-time",
      price: "₹799",
      period: "/month",
      featured: false,
      badge: null,
      features: [
        { label: "Hosting", value: "included" },
        { label: "SSL certificate", value: "included" },
        { label: "SEO", value: "included" },
        { label: "Automatic backups", value: "included" },
        { label: "Server monitoring", value: "included" },
        { label: "Security updates", value: "included" },
        { label: "Website updates via WhatsApp", value: "3 / mo" },
      ],
    },
    {
      name: "Pro Plan",
      setup: "₹20k–30k",
      setupLabel: "one-time",
      price: "₹1,499",
      period: "/month",
      featured: true,
      badge: "Most ordered",
      features: [
        { label: "Everything in Growth", value: "included" },
        { label: "Google Analytics", value: "included" },
        { label: "Chat AI Assistant", value: "included" },
        { label: "Trained on menu & FAQs", value: "included" },
        { label: "Hours, contact & location", value: "included" },
        { label: "Knowledge-base refresh", value: "1 / mo" },
        { label: "Chat volume covered", value: "fair-use cap" },
      ],
    },
  ],
} as const;

export const scarcity = {
  title: "Only 30 seats. On purpose.",
  body: "Care doesn't scale past a point , past 30 clients, updates slow down and quality slips, and that's exactly what I'm not willing to sell you. When a seat opens, it opens for one business, not a waitlist of a hundred.",
} as const;

export const contact = {
  title: "Let's see if your business is a fit.",
  body: "Tell me a bit about your café, bakery, or restaurant. I'll say honestly whether I'm the right person for the build — no obligation, no sales script.",
  cta: "Send on WhatsApp",
  signature: "— Daathwi",
  form: {
    name: "Name",
    email: "Email",
    phone: "Phone",
    brand: "Brand name",
    businessType: "Business type",
    why: "Why you need a site",
    businessTypes: [
      "Café",
      "Bakery / pastry studio",
      "Restaurant",
      "Other hospitality",
    ],
  },
} as const;

export const metadataCopy = {
  title: "Kept , Websites for businesses that care",
  description:
    "I design, launch, and personally look after websites for cafés, bakeries, and restaurants. One founder, thirty clients, no agency hand-offs.",
  ogTitle: "Kept , Websites for businesses that care",
  ogDescription:
    "Design, launch, and ongoing care for hospitality brands that sweat the details.",
} as const;
