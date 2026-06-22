import { STATS, WHY_US_CHECKLIST } from "@/lib/home-data";

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-ink px-4 py-[54px] font-barlow text-white sm:px-6 sm:py-16 md:px-8 md:py-[90px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-8 sm:gap-12 md:gap-16">
        <div>
          <div className="mb-[14px] font-barlow-condensed text-[15px] font-bold uppercase tracking-[0.12em] text-brand-bright">
            Por qué elegirnos
          </div>
          <h2 className="mb-[22px] font-anton text-[clamp(28px,5.2vw,46px)] italic uppercase leading-[1.05]">
            El oficio bien hecho marca la diferencia
          </h2>
          <p className="mb-8 text-lg leading-[1.6] text-white/75">
            En Canalplad llevamos más de 15 años instalando canalones y
            pladur en Córdoba con materiales de primera calidad y un trato
            cercano. Cumplimos los plazos, dejamos la obra limpia y
            respondemos por nuestro trabajo.
          </p>
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
            {WHY_US_CHECKLIST.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-xl leading-none text-brand-bright">
                  ✓
                </span>
                <span className="text-base font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-[18px]">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="rounded-xl border border-white/[0.08] bg-ink-card px-[26px] py-[30px]"
            >
              <div className="font-anton text-[clamp(28px,5.2vw,46px)] italic leading-none text-brand-bright">
                {stat.value}
              </div>
              <div className="mt-[6px] text-[15px] text-white/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
