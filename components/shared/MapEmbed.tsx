import { MAPS_EMBED_SRC } from "@/lib/site";

export default function MapEmbed({ className = "h-[400px]" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-3xl border border-line bg-soft shadow-photo ${className}`}>
      <iframe
        src={MAPS_EMBED_SRC}
        title="Ubicación de Canalplad en Villafranca de Córdoba (Google Maps)"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-full w-full border-0"
      />
    </div>
  );
}
