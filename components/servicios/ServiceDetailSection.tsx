import Image from "next/image";
import type { ServiceDetail } from "@/lib/services-data";

interface ServiceDetailSectionProps {
  service: ServiceDetail;
  reverse: boolean;
}

export default function ServiceDetailSection({
  service,
  reverse,
}: ServiceDetailSectionProps) {
  const bgClass = service.bg === "soft" ? "bg-surface-soft" : "bg-white";

  const text = (
    <div>
      <div className="mb-3 font-barlow-condensed text-sm font-bold uppercase tracking-[0.12em] text-brand">
        {service.index}
      </div>
      <h2 className="mb-4 font-anton text-[clamp(25px,4.5vw,38px)] italic uppercase leading-[1.05] text-ink-soft">
        {service.title}
      </h2>
      <p className="mb-[22px] text-[17px] leading-[1.65] text-ink-faint">
        {service.description}
      </p>
      <div className="mb-[26px] flex flex-col gap-[10px]">
        {service.checklist.map((item) => (
          <div
            key={item}
            className="flex items-center gap-[10px] text-base text-ink-muted"
          >
            <span className="font-bold text-brand">✓</span> {item}
          </div>
        ))}
      </div>
      <a
        href="/contacto"
        className="inline-flex items-center gap-[10px] rounded-lg bg-brand px-[26px] py-[14px] text-base font-bold text-white no-underline transition-colors hover:bg-brand-hover"
      >
        Pedir presupuesto →
      </a>
    </div>
  );

  const photo = (
    <div className="relative h-[260px] w-full overflow-hidden rounded-2xl sm:h-[380px]">
      <Image
        src={service.image.src}
        alt={service.image.alt}
        fill
        loading="lazy"
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );

  return (
    <section
      id={service.slug}
      className={`${bgClass} scroll-mt-20 px-4 py-[50px] font-barlow sm:px-6 sm:py-16 md:px-8 md:py-20`}
    >
      <div className="mx-auto grid max-w-[1100px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-[30px] sm:gap-10 md:gap-14">
        <div className={reverse ? "sm:order-2" : "sm:order-1"}>{text}</div>
        <div className={reverse ? "sm:order-1" : "sm:order-2"}>{photo}</div>
      </div>
    </section>
  );
}
