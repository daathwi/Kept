import Image from "next/image";
import { site } from "@/content/site";
import { about } from "@/content/homepage";

export function AboutSection() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <div className="about-photo">
          <Image
            src={about.portrait.src}
            alt={about.portrait.alt}
            width={about.portrait.width}
            height={about.portrait.height}
            sizes="(max-width: 760px) 100vw, 340px"
            priority={false}
          />
        </div>
        <div className="about-copy">
          <span className="kicker">{about.kicker}</span>
          <h2>{about.title}</h2>
          <p>{about.paragraphs[0]}</p>
          <div className="stat-row">
            {about.stats.map((stat) => (
              <div key={stat.label} className="stat">
                <span className="num mono">{stat.value}</span>
                <span className="label">{stat.label}</span>
              </div>
            ))}
          </div>
          <p>{about.paragraphs[1]}</p>
          <a
            className="text-link"
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            {about.instagramCta}
          </a>
        </div>
      </div>
    </section>
  );
}
