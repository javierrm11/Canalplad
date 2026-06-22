import { SERVICE_AREAS } from "@/lib/home-data";

export default function ServiceArea() {
  return (
    <section className="bg-white px-4 py-[54px] font-barlow sm:px-6 sm:py-16 md:px-8 md:py-[90px]">
      <div className="mx-auto max-w-[1200px] text-center">
        <div className="mb-[14px] font-barlow-condensed text-[15px] font-bold uppercase tracking-[0.12em] text-brand">
          Zona de trabajo
        </div>
        <h2 className="mb-[18px] font-anton text-[clamp(26px,5vw,42px)] italic uppercase leading-[1.05] text-ink-soft">
          Canalones y pladur en toda Córdoba y Andalucía
        </h2>
        <p className="mx-auto mb-9 max-w-[680px] text-lg leading-[1.6] text-ink-faint">
          Con base en Villafranca de Córdoba, trabajamos en Córdoba capital
          y provincia y nos desplazamos por toda Andalucía.
        </p>
        <div className="mx-auto flex max-w-[900px] flex-wrap justify-center gap-3">
          {SERVICE_AREAS.map((area) => (
            <span
              key={area}
              className="rounded-full bg-surface-pill px-5 py-[10px] text-[15px] font-semibold text-ink-muted"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
