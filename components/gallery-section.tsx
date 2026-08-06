import { portfolio } from "@/content/homepage";
import { GalleryReveal } from "@/components/gallery-reveal";

export function GallerySection() {
  return (
    <section id="portfolio" className="gallery-section">
      <div className="wrap section-head">
        <span className="kicker">{portfolio.kicker}</span>
        <h2>{portfolio.title}</h2>
        <p>{portfolio.description}</p>
      </div>
      <GalleryReveal />
    </section>
  );
}
