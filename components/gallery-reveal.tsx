"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { portfolio } from "@/content/homepage";

type Frame = (typeof portfolio.frames)[keyof typeof portfolio.frames];

function GalleryFrame({
  frame,
  className,
  sizes,
}: {
  frame: Frame;
  className: string;
  sizes: string;
}) {
  return (
    <figure className={`gallery-frame ${className}`}>
      <Image
        src={frame.src}
        alt={frame.alt}
        width={frame.width}
        height={frame.height}
        sizes={sizes}
        loading="lazy"
      />
    </figure>
  );
}

export function GalleryReveal() {
  const collageId = useId();
  const [open, setOpen] = useState(false);
  const { frames } = portfolio;

  return (
    <div className={`gallery-reveal${open ? " is-open" : ""}`}>
      <div className="wrap">
        <button
          type="button"
          className="gallery-toggle"
          aria-expanded={open}
          aria-controls={collageId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? portfolio.hidePhotos : portfolio.showPhotos}
        </button>
      </div>

      {open ? (
        <div id={collageId} className="gallery-bleed">
          <div className="gallery-collage">
            <div className="gallery-row gallery-row--top">
              <GalleryFrame
                frame={frames.topTall}
                className="gallery-frame--tall gallery-frame--top-tall"
                sizes="(max-width: 640px) 40vw, 22vw"
              />
              <GalleryFrame
                frame={frames.topWide}
                className="gallery-frame--wide"
                sizes="(max-width: 640px) 100vw, 70vw"
              />
            </div>
            <div className="gallery-row gallery-row--bottom">
              <GalleryFrame
                frame={frames.bottomTall}
                className="gallery-frame--tall"
                sizes="(max-width: 640px) 40vw, 22vw"
              />
              <div className="gallery-stack">
                <GalleryFrame
                  frame={frames.stackMid}
                  className="gallery-frame--mid"
                  sizes="(max-width: 640px) 50vw, 28vw"
                />
                <GalleryFrame
                  frame={frames.stackTall}
                  className="gallery-frame--tall"
                  sizes="(max-width: 640px) 50vw, 28vw"
                />
              </div>
              <GalleryFrame
                frame={frames.bottomMid}
                className="gallery-frame--mid gallery-frame--side"
                sizes="(max-width: 640px) 60vw, 38vw"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
