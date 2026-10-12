import Image from "next/image";
import Link from "next/link";
import { CATEGORY_LABEL, SERVICES_DETAIL } from "@/lib/services-data";
import { reveal } from "@/components/shared/reveal";

export default function ServiciosGrid() {
  return (
    <section aria-labelledby="servicios-title" className="container-site py-24 lg:py-28">
      <div className="flex flex-wrap items-end justify-between gap-5" {...reveal("up")}>
        <div className="max-w-[640px]">
          <p className="eyebrow text-accent">Servicios</p>
          <h2 id="servicios-title" className="heading-2 mt-2.5">
            Canalones y pladur en Córdoba: todo lo que necesita tu casa
          </h2>
        </div>
        <Link href="/servicios" className="inline-flex min-h-[44px] items-center gap-2 font-bold text-brand no-underline">
          Ver todos los servicios <span className="arrow" aria-hidden="true">→</span>
        </Link>
      </div>

      <ul className="mt-11 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES_DETAIL.map((service, i) => (
          <li key={service.slug} {...reveal("up", (i % 3) * 90)}>
            <Link
              href={`/servicios#${service.slug}`}
              className="card-lift flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-white text-ink no-underline"
            >
              <div className="zoom relative h-[210px]">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <span
                  className={`absolute left-3.5 top-3.5 rounded-full bg-white px-3 py-1 text-[13px] font-extrabold ${
                    service.category === "canalones" ? "text-accent-dark" : "text-brand"
                  }`}
                >
                  {CATEGORY_LABEL[service.category]}
                </span>
              </div>
              <div className="flex flex-grow flex-col p-6">
                <h3 className="text-[21px] font-extrabold leading-snug">{service.title}</h3>
                <p className="mt-2 text-base text-body">{service.summary}</p>
                <span className="mt-auto pt-4 font-bold text-brand">
                  Más información <span className="arrow" aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
