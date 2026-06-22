import { MAPS_EMBED_SRC } from "@/lib/site";

export default function LocationMap() {
  return (
    <section className="bg-white px-4 py-[52px] font-barlow sm:px-6 sm:py-16 md:px-8 md:py-[84px]">
      <div className="mx-auto grid max-w-[1100px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-7 sm:gap-9 md:gap-12">
        <div>
          <div className="mb-3 font-barlow-condensed text-sm font-bold uppercase tracking-[0.12em] text-brand">
            Dónde estamos
          </div>
          <h2 className="mb-[18px] font-anton text-[clamp(25px,4.5vw,38px)] italic uppercase leading-[1.05] text-ink-soft">
            Villafranca de Córdoba
          </h2>
          <p className="mb-6 text-[17px] leading-[1.7] text-ink-faint">
            Nuestra base está en Villafranca de Córdoba, desde donde nos
            desplazamos por Córdoba capital, toda la provincia y el resto de
            Andalucía.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center gap-[10px] rounded-lg bg-brand px-7 py-[15px] text-base font-bold text-white no-underline transition-colors hover:bg-brand-hover"
          >
            Contacta con nosotros →
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
          <iframe
            src={MAPS_EMBED_SRC}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Canalplad en Google Maps"
            className="block h-[360px] w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
