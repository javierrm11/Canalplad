import { PROCESS_STEPS } from "@/lib/home-data";
import SectionHeading from "@/components/shared/SectionHeading";
import { reveal } from "@/components/shared/reveal";

export default function Proceso() {
  return (
    <section aria-labelledby="proceso-title" className="container-site py-24 lg:py-28">
      <SectionHeading
        id="proceso-title"
        eyebrow="Cómo trabajamos"
        title="Tres pasos, sin complicaciones"
        align="center"
      />
      <div className="relative mt-14">
        <div
          aria-hidden="true"
          {...reveal("line")}
          className="absolute left-[16%] right-[16%] top-[31px] hidden h-0.5 bg-brand-line md:block"
        />
        <ol className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
          {PROCESS_STEPS.map((step, i) => (
            <li key={step.number} {...reveal("up", i * 120)} className="text-center">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand text-2xl font-extrabold text-white shadow-[0_0_0_8px_#ffffff]">
                {step.number}
              </span>
              <h3 className="mt-4 text-[21px] font-extrabold">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-[300px] text-body">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
