import { SERVICES_DETAIL } from "@/lib/services-data";

export default function ServiciosQuickNav() {
  return (
    <nav className="border-b border-ink-line bg-white px-4 py-3 font-barlow-condensed sm:px-6 md:px-8">
      <div className="mx-auto flex max-w-[1100px] gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {SERVICES_DETAIL.map((service) => (
          <a
            key={service.slug}
            href={`#${service.slug}`}
            className="flex-none whitespace-nowrap rounded-full bg-surface-pill px-4 py-[9px] text-sm font-semibold uppercase tracking-[0.03em] text-ink-muted no-underline transition-colors hover:bg-brand hover:text-white"
          >
            {service.shortLabel}
          </a>
        ))}
      </div>
    </nav>
  );
}
