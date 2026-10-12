import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { CATEGORY_LABEL, type ServiceDetail } from "@/lib/services-data";
import { CheckIcon } from "@/components/shared/icons";
import { reveal } from "@/components/shared/reveal";

interface ServiceDetailSectionProps {
  service: ServiceDetail;
  index: number;
}

export default function ServiceDetailSection({ service, index }: ServiceDetailSectionProps) {
  const reverse = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");
  const titleId = `${service.slug}-title`;

  return (
    <section
      id={service.slug}
      aria-labelledby={titleId}
      className={reverse ? "bg-soft" : "bg-white"}
    >
      <div className="container-site grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16 lg:py-[104px]">
        <div {...reveal(reverse ? "right" : "left")} className={`relative ${reverse ? "lg:order-2" : ""}`}>
          <div className="zoom overflow-hidden rounded-3xl shadow-photo">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              width={2048}
              height={1536}
              sizes="(min-width: 1024px) 560px, 92vw"
              className="h-[300px] w-full object-cover sm:h-[460px]"
            />
          </div>
          <span
            className={`absolute left-4 top-4 rounded-full bg-white px-3.5 py-1.5 text-sm font-extrabold shadow-[0_6px_16px_rgba(22,24,26,0.12)] ${
              service.category === "canalones" ? "text-accent-dark" : "text-brand"
            }`}
          >
            {number} · {CATEGORY_LABEL[service.category]}
          </span>
        </div>

        <div {...reveal(reverse ? "left" : "right")} className={reverse ? "lg:order-1" : ""}>
          <h2 id={titleId} className="text-[clamp(28px,3.4vw,44px)] font-extrabold leading-[1.12] tracking-[-0.025em]">
            {service.title} en Córdoba
          </h2>
          <p className="mt-4 text-lg text-body">{service.description}</p>
          <ul className="mt-6 flex flex-col gap-3 font-semibold">
            {service.checklist.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-tint text-brand">
                  <CheckIcon size={15} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contacto#presupuesto" className="btn btn-red">
              Pedir presupuesto <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
