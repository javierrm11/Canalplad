"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { GALLERY_PHOTOS } from "@/lib/home-data";

const GAP = 12;

export default function GalleryCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const resumeAtRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const itemWidth = () => track.firstElementChild?.clientWidth ?? 0;

    const interval = setInterval(() => {
      if (Date.now() < resumeAtRef.current) return;
      const next = (indexRef.current + 1) % GALLERY_PHOTOS.length;
      track.scrollTo({ left: next * (itemWidth() + GAP), behavior: "smooth" });
      indexRef.current = next;
    }, 2000);

    const onScroll = () => {
      resumeAtRef.current = Date.now() + 4000;
      indexRef.current = Math.round(track.scrollLeft / (itemWidth() + GAP));
    };
    track.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearInterval(interval);
      track.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={trackRef}
      className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {GALLERY_PHOTOS.map((photo) => (
        <div
          key={photo.src}
          className="relative h-[280px] w-[85%] flex-none snap-center overflow-hidden rounded-xl"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            loading="lazy"
            sizes="85vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
