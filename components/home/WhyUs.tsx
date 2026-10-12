import Image from "next/image";
import { WHY_US_CHECKLIST, WHY_US_IMAGE } from "@/lib/home-data";
import { CheckIcon } from "@/components/shared/icons";
import { reveal } from "@/components/shared/reveal";

const MINI_STATS = [
  { value: "+500", label: "clientes satisfechos" },
  { value: "24-48 h", label: "de respuesta" },
  { value: "100%", label: "con garantía", green: true },
];

export default function WhyUs() {
  return (
    <section aria-labelledby="porque-title" className="bg-ink text-white">
      <div className="container-site grid items-center gap-16 py-24 lg:grid-cols-2 lg:py-28">
        <div {...reveal("left")} className="relative pb-6">
          <div className="zoom overflow-hidden rounded-3xl">
            <Image
              src={WHY_US_IMAGE.src}
              alt={WHY_US_IMAGE.alt}
              width={2048}
              height={1536}
              sizes="(min-width: 1024px) 560px, 92vw"
              className="h-[340px] w-full object-cover sm:h-[500px]"
            />
          </div>
          <div className="absolute bottom-0 right-5 rounded-[18px] bg-accent px-6 py-5 shadow-[0_20px_44px_rgba(0,0,0,0.35)]">
            <p className="text-[40px] font-extrabold leading-none">15+</p>
            <p className="text-sm text-[#ffe1df]">años de oficio</p>
          </div>
        </div>

        <div {...reveal("right")}>
          <p className="eyebrow text-brand-light">Por qué elegirnos</p>
          <h2 id="porque-title" className="heading-2 mt-2.5">
            Fabricamos y montamos nosotros. Sin intermediarios.
          </h2>
          <p className="mt-4 text-lg text-[#cfd3cf]">
            Somos una empresa familiar de Villafranca de Córdoba. Cumplimos los plazos,
            dejamos la obra limpia y cuidamos tu casa como si fuera la nuestra.
          </p>
          <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {WHY_US_CHECKLIST.map((item, i) => (
              <li
                key={item}
                {...reveal("up", i * 80)}
                className="flex items-center gap-3 rounded-[14px] bg-ink-2 p-4"
              >
                <CheckIcon size={22} className="flex-none text-brand-light" />
                {item}
              </li>
            ))}
          </ul>
          <ul className="mt-9 grid grid-cols-3 gap-4 border-t border-ink-line pt-7">
            {MINI_STATS.map((stat) => (
              <li key={stat.label}>
                <p
                  className={`text-[clamp(26px,3vw,38px)] font-extrabold leading-none ${
                    stat.green ? "text-brand-light" : ""
                  }`}
                >
                  {stat.value}
                </p>
                <p className="mt-1.5 text-sm text-[#cfd3cf]">{stat.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
