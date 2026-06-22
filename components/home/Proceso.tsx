import { PROCESS_STEPS } from "@/lib/home-data";

export default function Proceso() {
  return (
    <section className="bg-white px-4 py-14 font-barlow sm:px-6 sm:py-16 md:px-8 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 text-center">
          <div className="mb-[14px] font-barlow-condensed text-[15px] font-bold uppercase tracking-[0.12em] text-brand">
            Cómo trabajamos
          </div>
          <h2 className="m-0 font-anton text-[clamp(28px,5.6vw,48px)] italic uppercase leading-[1.05] text-ink-soft">
            Así de fácil, en 3 pasos
          </h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-7">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="px-4 text-center">
              <div className="mx-auto mb-[22px] flex h-16 w-16 items-center justify-center rounded-full bg-brand font-anton text-[clamp(24px,4vw,34px)] text-white">
                {step.number}
              </div>
              <h3 className="mb-[10px] text-[21px] font-bold text-ink-soft">
                {step.title}
              </h3>
              <p className="m-0 text-[15px] leading-[1.6] text-ink-faint">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
