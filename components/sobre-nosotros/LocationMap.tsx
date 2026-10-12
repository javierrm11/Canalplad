import { CONTACT, MAPS_LINK } from "@/lib/site";
import MapEmbed from "@/components/shared/MapEmbed";
import { reveal } from "@/components/shared/reveal";

export default function LocationMap() {
  return (
    <section aria-labelledby="ubicacion-title" className="bg-soft">
      <div className="container-site grid items-center gap-12 py-24 lg:grid-cols-2 lg:py-28">
        <div {...reveal("left")}>
          <p className="eyebrow text-accent">Dónde estamos</p>
          <h2 id="ubicacion-title" className="heading-2 mt-2.5">
            En Villafranca de Córdoba, para toda Andalucía
          </h2>
          <p className="mt-4 text-lg text-body">
            {CONTACT.address.full}. Trabajamos en Córdoba capital y provincia, Sevilla, Jaén y
            toda Andalucía.
          </p>
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline mt-6"
          >
            Cómo llegar <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
        <div {...reveal("right")}>
          <MapEmbed />
        </div>
      </div>
    </section>
  );
}
