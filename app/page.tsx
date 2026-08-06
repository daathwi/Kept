import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { WhoSection } from "@/components/who-section";
import { AboutSection } from "@/components/about-section";
import { GallerySection } from "@/components/gallery-section";
import { ProcessSection } from "@/components/process-section";
import { PlansSection } from "@/components/plans-section";
import { ScarcitySection } from "@/components/scarcity-section";
import { SiteFooter } from "@/components/site-footer";
import { ChatWidget } from "@/components/chatbot/chat-widget";
import { metadataCopy } from "@/content/homepage";

/**
 * Homepage is statically generated at build time (default in App Router).
 * No `dynamic = "force-dynamic"` , content lives in the content layer.
 */
export const metadata: Metadata = {
  title: metadataCopy.title,
  description: metadataCopy.description,
  openGraph: {
    title: metadataCopy.ogTitle,
    description: metadataCopy.ogDescription,
  },
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <WhoSection />
        <AboutSection />
        <GallerySection />
        <ProcessSection />
        <PlansSection />
        <ScarcitySection />
      </main>
      <SiteFooter />
      <ChatWidget />
    </>
  );
}
