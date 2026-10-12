import { SERVICES_DETAIL, type ServiceCategory } from "@/lib/services-data";

const GROUPS: { category: ServiceCategory; label: string; color: string }[] = [
  { category: "canalones", label: "Canalones", color: "text-accent-dark" },
  { category: "pladur", label: "Pladur", color: "text-brand" },
];

export default function ServiciosQuickNav() {
  return (
    <nav aria-label="Ir a un servicio" className="flex flex-wrap items-center gap-2.5">
      {GROUPS.map((group, gi) => (
        <div key={group.category} className="flex flex-wrap items-center gap-2.5">
          {gi > 0 && <span aria-hidden="true" className="mx-2 hidden h-7 w-px bg-[#d6d9d6] sm:block" />}
          <span className={`mr-1 text-sm font-extrabold ${group.color}`}>{group.label}</span>
          {SERVICES_DETAIL.filter((s) => s.category === group.category).map((service) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="inline-flex min-h-[44px] items-center rounded-full border-[1.5px] border-[#d6d9d6] bg-white px-4 text-[15px] font-semibold text-ink no-underline transition-colors hover:border-ink hover:bg-ink hover:text-white"
            >
              {service.shortLabel}
            </a>
          ))}
        </div>
      ))}
    </nav>
  );
}
