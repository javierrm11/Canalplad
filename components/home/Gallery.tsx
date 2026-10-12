import Image from "next/image";
import { GALLERY_PHOTOS } from "@/lib/home-data";
import { CONTACT } from "@/lib/site";
import { reveal } from "@/components/shared/reveal";

export default function Gallery() {
  return (
    <section aria-labelledby="trabajos-title" className="bg-soft">
      <div className="container-site py-24 lg:py-28">
        <div {...reveal("up")} className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="eyebrow text-accent">Trabajos realizados</p>
            <h2 id="trabajos-title" className="heading-2 mt-2.5">
              Obras reales en Córdoba y provincia
            </h2>
          </div>
          <a
            href={CONTACT.facebookHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 font-bold text-brand no-underline"
          >
            Más fotos en Facebook <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <ul className="mt-10 grid auto-rows-[200px] grid-cols-2 gap-3.5 sm:auto-rows-[230px] lg:grid-cols-4">
          {GALLERY_PHOTOS.map((photo, i) => (
            <li
              key={photo.src}
              {...reveal("zoom", i * 80)}
              className={`zoom relative overflow-hidden rounded-[20px] ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <figure className="h-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={i === 0 ? "(min-width: 1024px) 600px, 100vw" : "(min-width: 1024px) 300px, 50vw"}
                  className="object-cover"
                />
                {photo.caption && (
                  <figcaption className="absolute bottom-4 left-4 rounded-xl bg-white/95 px-3.5 py-2 text-[15px] font-bold">
                    {photo.caption}
                  </figcaption>
                )}
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
