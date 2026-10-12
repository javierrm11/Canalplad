import { SERVICE_AREAS } from "@/lib/home-data";

export default function ServiceAreaList({ onSoft = false }: { onSoft?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-2.5" aria-label="Zonas donde trabajamos">
      {SERVICE_AREAS.map((area) =>
        area.highlight ? (
          <li
            key={area.label}
            className="inline-flex items-center rounded-full bg-brand px-4 py-2 text-[15px] font-bold text-white"
          >
            {area.label}
          </li>
        ) : (
          <li
            key={area.label}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] font-semibold text-ink ${
              onSoft ? "bg-white" : "bg-soft"
            }`}
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-logo" />
            {area.label}
          </li>
        ),
      )}
    </ul>
  );
}
