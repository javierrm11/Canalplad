import Image from "next/image";
import { STORY_IMAGE } from "@/lib/pages-data";
import { HomeIcon } from "@/components/shared/icons";
import { reveal } from "@/components/shared/reveal";

export default function Story() {
  return (
    <section aria-labelledby="historia-title" className="container-site grid items-center gap-16 py-24 lg:grid-cols-2 lg:py-28">
      <div {...reveal("left")}>
        <p className="eyebrow text-accent">Nuestra historia</p>
        <h2 id="historia-title" className="heading-2 mt-2.5">
          Más de 15 años protegiendo hogares en Córdoba
        </h2>
        <p className="mt-5 text-lg text-body">
          Empezamos como un pequeño taller en Villafranca de Córdoba y, con el tiempo y el
          trabajo bien hecho, nos hemos convertido en una empresa de referencia en canalones
          y pladur en toda la provincia.
        </p>
        <p className="mt-4 text-lg text-body">
          Más de 500 familias y comunidades confían ya en nosotros. Nuestro secreto es
          sencillo: materiales de calidad, precios justos, cumplir lo que prometemos y tratar
          la casa del cliente como si fuera la nuestra.
        </p>
      </div>
      <div {...reveal("right")} className="relative pb-8">
        <div className="zoom overflow-hidden rounded-3xl">
          <Image
            src={STORY_IMAGE.src}
            alt={STORY_IMAGE.alt}
            width={2048}
            height={1536}
            sizes="(min-width: 1024px) 560px, 92vw"
            className="h-[320px] w-full object-cover sm:h-[460px]"
          />
        </div>
        <div className="absolute bottom-0 left-0 flex items-center gap-3.5 rounded-[18px] bg-white px-5 py-4 shadow-float sm:-left-3">
          <span className="inline-flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-accent-tint text-accent-dark">
            <HomeIcon size={22} />
          </span>
          <span className="leading-tight">
            <strong className="block">Taller propio</strong>
            <span className="text-sm text-muted">Villafranca de Córdoba</span>
          </span>
        </div>
      </div>
    </section>
  );
}
