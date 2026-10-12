import PageHeader from "@/components/layout/PageHeader";
import CtaBand from "@/components/layout/CtaBand";
import ServiciosQuickNav from "@/components/servicios/ServiciosQuickNav";
import ServiceDetailSection from "@/components/servicios/ServiceDetailSection";
import IncludedFeatures from "@/components/servicios/IncludedFeatures";
import FaqList from "@/components/shared/FaqList";
import JsonLd from "@/components/shared/JsonLd";
import SectionHeading from "@/components/shared/SectionHeading";
import { reveal } from "@/components/shared/reveal";
import { SERVICES_DETAIL, SERVICES_FAQS } from "@/lib/services-data";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  pageMetadata,
  servicesSchema,
  webPageSchema,
} from "@/lib/seo";

const PATH = "/servicios";
const TITLE = "Servicios de Canalones y Pladur en Córdoba";
const DESCRIPTION =
  "Montaje, limpieza y reparación de canalones de aluminio, techos de pladur, tabiquería y techos desmontables en Córdoba. Materiales de primera y garantía.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const canalones = SERVICES_DETAIL.filter((s) => s.category === "canalones");
const pladur = SERVICES_DETAIL.filter((s) => s.category === "pladur");

export default function ServiciosPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: PATH,
            name: `${TITLE} | Canalplad`,
            description: DESCRIPTION,
            type: "CollectionPage",
            image: SERVICES_DETAIL[0].image.src,
          }),
          breadcrumbSchema(PATH, [
            { name: "Inicio", path: "/" },
            { name: "Servicios", path: PATH },
          ]),
          ...servicesSchema(),
          faqSchema(PATH, SERVICES_FAQS),
        )}
      />

      <PageHeader
        crumb="Servicios"
        title="Servicios de canalones y pladur en Córdoba"
        description="Instalamos, limpiamos y reparamos canalones de aluminio y realizamos todo tipo de trabajos de pladur. Materiales de primera y garantía en cada proyecto."
      >
        <ServiciosQuickNav />
      </PageHeader>

      {canalones.map((service, i) => (
        <ServiceDetailSection key={service.slug} service={service} index={i} />
      ))}

      <section aria-labelledby="pladur-title" className="bg-ink text-white">
        <div
          {...reveal("up")}
          className="container-site flex flex-wrap items-center justify-between gap-6 py-[72px]"
        >
          <div>
            <p className="eyebrow text-brand-light">Interiores</p>
            <h2 id="pladur-title" className="heading-2 mt-2">
              Trabajos de pladur en Córdoba
            </h2>
          </div>
          <p className="max-w-[520px] text-lg text-[#cfd3cf]">
            Obra rápida, limpia y sin escombros, con un excelente aislamiento y acabado
            profesional.
          </p>
        </div>
      </section>

      {pladur.map((service, i) => (
        <ServiceDetailSection key={service.slug} service={service} index={canalones.length + i} />
      ))}

      <IncludedFeatures />

      <section aria-labelledby="faq-servicios-title" className="mx-auto max-w-[880px] px-4 pt-24 sm:px-6">
        <SectionHeading
          id="faq-servicios-title"
          eyebrow="Dudas"
          title="Preguntas sobre canalones y pladur"
          align="center"
        />
        <div {...reveal("up")} className="mt-8">
          <FaqList faqs={SERVICES_FAQS} />
        </div>
      </section>

      <CtaBand
        title="¿Listo para empezar tu proyecto?"
        description="Pídenos presupuesto sin compromiso. Te respondemos en 24-48 h."
      />
    </>
  );
}
