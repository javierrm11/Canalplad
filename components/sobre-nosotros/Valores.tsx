import type { ReactNode } from "react";

interface Valor {
  title: string;
  description: string;
  icon: ReactNode;
}

const ICON_PROPS = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#15a53c",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const VALORES: Valor[] = [
  {
    title: "Calidad garantizada",
    description:
      "Usamos siempre los mejores materiales y respondemos por cada trabajo que hacemos.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Rapidez y cumplimiento",
    description:
      "Respetamos los plazos acordados y dejamos siempre la obra limpia y recogida.",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Trato cercano",
    description:
      "Te asesoramos con honestidad y resolvemos tus dudas sin tecnicismos ni sorpresas.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function Valores() {
  return (
    <section className="bg-surface-soft px-4 py-[52px] font-barlow sm:px-6 sm:py-16 md:px-8 md:py-[84px]">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-12 text-center">
          <div className="mb-3 font-barlow-condensed text-sm font-bold uppercase tracking-[0.12em] text-brand">
            Nuestros valores
          </div>
          <h2 className="m-0 font-anton text-[clamp(26px,5vw,42px)] italic uppercase leading-[1.05] text-ink-soft">
            En lo que creemos
          </h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
          {VALORES.map((valor) => (
            <div key={valor.title} className="rounded-xl bg-white p-8">
              <div className="mb-[18px] flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-[#eafaef]">
                {valor.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-ink-soft">
                {valor.title}
              </h3>
              <p className="m-0 text-[15px] leading-[1.6] text-ink-faint">
                {valor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
