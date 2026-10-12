import { HOME_FAQS } from "@/lib/home-data";
import FaqList from "@/components/shared/FaqList";
import ServiceAreaList from "@/components/shared/ServiceAreaList";
import { reveal } from "@/components/shared/reveal";

export default function ZonasFaq() {
  return (
    <section className="container-site grid gap-16 pb-24 lg:grid-cols-2 lg:pb-28">
      <div {...reveal("left")}>
        <h2 id="zonas-title" className="text-[32px] font-extrabold tracking-[-0.02em]">
          Dónde trabajamos
        </h2>
        <p className="mt-2.5 text-body">
          Instalamos canalones y pladur desde Villafranca de Córdoba a toda la provincia y
          Andalucía.
        </p>
        <div className="mt-6">
          <ServiceAreaList />
        </div>
      </div>
      <div {...reveal("right")}>
        <h2 id="faq-title" className="text-[32px] font-extrabold tracking-[-0.02em]">
          Preguntas frecuentes
        </h2>
        <div className="mt-4">
          <FaqList faqs={HOME_FAQS} />
        </div>
      </div>
    </section>
  );
}
