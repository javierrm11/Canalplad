import Image from "next/image";
import { GALLERY_PHOTOS } from "@/lib/home-data";

export default function GalleryMosaic() {
  return (
    <section className="bg-surface-soft px-4 py-14 font-barlow sm:px-6 sm:py-16 md:px-8 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 text-center">
          <div className="mb-[14px] font-barlow-condensed text-[15px] font-bold uppercase tracking-[0.12em] text-brand">
            Trabajos realizados
          </div>
          <h2 className="mb-[14px] font-anton text-[clamp(28px,5.6vw,48px)] italic uppercase leading-[1.05] text-ink-soft">
            Nuestros proyectos en Córdoba
          </h2>
          <p className="mx-auto max-w-[600px] text-lg text-ink-faint">
            Una selección de nuestros trabajos de canalones y pladur
            realizados en Córdoba y provincia.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] auto-rows-[200px] gap-4">
          {GALLERY_PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className={`relative overflow-hidden rounded-xl ${
                photo.tall ? "row-span-2" : ""
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
