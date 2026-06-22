import Image from "next/image";
import { CONTACT } from "@/lib/site";
import { HERO_BG, TRUST_ITEMS } from "@/lib/home-data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <Image
        src={HERO_BG.src}
        alt={HERO_BG.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/[0.82] via-black/50 to-black/[0.92]" />

      <div className="relative z-[2] mx-auto max-w-[1200px] px-4 pb-[120px] pt-14 sm:px-6 sm:pt-16 md:px-8 md:pt-20 lg:pt-24">
        <div className="mb-[26px] inline-block bg-brand-red px-4 py-[7px] font-barlow-condensed text-sm font-bold uppercase tracking-[0.12em] text-white">
          Canalones de aluminio · Pladur · Córdoba
        </div>
        <h1 className="mb-6 max-w-[900px] font-anton text-[clamp(38px,8.5vw,84px)] italic leading-[0.95] uppercase tracking-[-0.01em]">
          Canalones que duran
          <br />
          <span className="text-brand-bright">toda la vida</span>
        </h1>
        <p className="mb-[38px] max-w-[620px] text-[21px] font-medium leading-[1.5] text-white/85">
          Instalación, limpieza y reparación de canalones de aluminio y
          trabajos de pladur en Córdoba y toda Andalucía. Más de 500 hogares
          ya confían en nosotros.
        </p>
        <div className="flex flex-wrap items-center gap-[14px]">
          <a
            href="#presupuesto"
            className="inline-flex items-center gap-[10px] bg-brand px-[34px] py-[18px] text-[17px] font-bold tracking-[0.02em] text-white no-underline transition-colors hover:bg-brand-hover"
          >
            PEDIR PRESUPUESTO GRATIS →
          </a>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-[10px] border-2 border-white/40 px-[30px] py-4 text-[17px] font-bold text-white no-underline transition-colors hover:border-brand-bright hover:text-brand-bright"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            LLÁMANOS AHORA
          </a>
        </div>
      </div>

      {/* trust strip */}
      <div className="relative z-[2] bg-brand text-white">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-[18px] gap-y-[10px] px-4 py-[18px] font-barlow-condensed text-[17px] font-bold uppercase tracking-[0.05em] sm:px-6 md:px-8">
          {TRUST_ITEMS.map((item, i) => (
            <span key={item} className="flex items-center gap-[18px]">
              {i > 0 && <span className="opacity-50">·</span>}
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
