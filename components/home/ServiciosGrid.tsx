import type { ReactNode } from "react";

interface Servicio {
  title: string;
  description: string;
  icon: ReactNode;
}

const ICON_PROPS = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#15a53c",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const SERVICIOS: Servicio[] = [
  {
    title: "Montaje de canalones de aluminio",
    description:
      "Instalación de canalones de aluminio a medida, resistentes y duraderos, para proteger tu fachada de la lluvia.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M3 8h18l-1.5 4.5a4 4 0 0 1-3.8 2.7H8.3a4 4 0 0 1-3.8-2.7L3 8z" />
        <path d="M7 8V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
        <path d="M12 15v6" />
      </svg>
    ),
  },
  {
    title: "Limpieza de canalones",
    description:
      "Eliminamos hojas, suciedad y obstrucciones para que el agua circule y evitar humedades y desbordamientos.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M19 3l-7 7" />
        <path d="M14 5l5 5" />
        <path d="M8 12l-4 9 9-4" />
        <path d="M12 16l-4-4" />
      </svg>
    ),
  },
  {
    title: "Reparación y mantenimiento",
    description:
      "Arreglamos fugas, juntas y bajantes dañados. Mantenimiento periódico para alargar la vida de tu instalación.",
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2.2-2.2 2.8-2.8z" />
      </svg>
    ),
  },
  {
    title: "Techos de pladur",
    description:
      "Montaje de techos de pladur lisos o con diseño, con perfecto acabado y aislamiento para tu hogar o local.",
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="3" y="4" width="18" height="5" />
        <path d="M5 9v11" />
        <path d="M19 9v11" />
        <path d="M9 9v11" />
        <path d="M15 9v11" />
      </svg>
    ),
  },
  {
    title: "Tabiquería de pladur",
    description:
      "Creamos nuevas habitaciones y divisiones con tabiques de pladur: rápido, limpio y con gran aislamiento.",
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <path d="M3 9h18" />
        <path d="M9 9v12" />
        <path d="M15 3v6" />
      </svg>
    ),
  },
  {
    title: "Techos desmontables",
    description:
      "Instalación de techos registrables para oficinas y locales, con fácil acceso a instalaciones y mantenimiento.",
    icon: (
      <svg {...ICON_PROPS}>
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="M3 10h18" />
        <path d="M3 15h18" />
        <path d="M9 5v14" />
        <path d="M15 5v14" />
      </svg>
    ),
  },
];

export default function ServiciosGrid() {
  return (
    <section className="bg-white px-4 py-14 font-barlow sm:px-6 sm:py-16 md:px-8 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 text-center">
          <div className="mb-[14px] font-barlow-condensed text-[15px] font-bold uppercase tracking-[0.12em] text-brand">
            Nuestros servicios
          </div>
          <h2 className="m-0 font-anton text-[clamp(28px,5.6vw,48px)] italic uppercase leading-[1.05] text-ink-soft">
            Canalones y pladur en Córdoba
          </h2>
        </div>

        {/* mobile: compact scannable rows, no hidden content */}
        <div className="flex flex-col gap-3 sm:hidden">
          {SERVICIOS.map((servicio) => (
            <div
              key={servicio.title}
              className="flex gap-4 rounded-[10px] border border-ink-line bg-white p-4"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-[10px] bg-[#eafaef]">
                {servicio.icon}
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold text-ink-soft">
                  {servicio.title}
                </h3>
                <p className="m-0 text-sm leading-[1.5] text-ink-faint">
                  {servicio.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 sm:grid">
          {SERVICIOS.map((servicio) => (
            <div
              key={servicio.title}
              className="rounded-[10px] border border-ink-line bg-white p-[34px] px-[30px] transition-all duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-[22px] flex h-[54px] w-[54px] items-center justify-center rounded-[10px] bg-[#eafaef]">
                {servicio.icon}
              </div>
              <h3 className="mb-[10px] text-[21px] font-bold text-ink-soft">
                {servicio.title}
              </h3>
              <p className="m-0 text-[15px] leading-[1.6] text-ink-faint">
                {servicio.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/servicios"
            className="inline-flex items-center gap-[10px] font-barlow-condensed text-base font-bold uppercase tracking-[0.06em] text-brand no-underline transition-all hover:gap-4"
          >
            Ver todos los servicios en detalle →
          </a>
        </div>
      </div>
    </section>
  );
}
