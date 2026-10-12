import PageHeader from "@/components/layout/PageHeader";
import ContactInfo from "@/components/contacto/ContactInfo";
import PresupuestoForm from "@/components/shared/PresupuestoForm";
import FaqList from "@/components/shared/FaqList";
import MapEmbed from "@/components/shared/MapEmbed";
import ServiceAreaList from "@/components/shared/ServiceAreaList";
import SectionHeading from "@/components/shared/SectionHeading";
import JsonLd from "@/components/shared/JsonLd";
import { loadDelay, reveal } from "@/components/shared/reveal";
import { CONTACT_FAQS } from "@/lib/pages-data";
import { breadcrumbSchema, faqSchema, graph, pageMetadata, webPageSchema } from "@/lib/seo";

const PATH = "/contacto";
const TITLE = "Contacto y Presupuesto Gratis en Córdoba";
const DESCRIPTION =
  "Pide presupuesto gratis para canalones o pladur en Córdoba. Llama al 666 34 94 19, escríbenos por WhatsApp o rellena el formulario. Respuesta en 24-48 h.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

export default function ContactoPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: PATH,
            name: `${TITLE} | Canalplad`,
            description: DESCRIPTION,
            type: "ContactPage",
          }),
          breadcrumbSchema(PATH, [
            { name: "Inicio", path: "/" },
            { name: "Contacto", path: PATH },
          ]),
          faqSchema(PATH, CONTACT_FAQS),
        )}
      />

      <PageHeader
        crumb="Contacto"
        title="Pide tu presupuesto gratis en Córdoba"
        description="Llámanos, escríbenos por WhatsApp o rellena el formulario. Te respondemos en 24-48 h, sin compromiso."
      />

      <section className="container-site grid items-start gap-12 pb-24 pt-20 lg:grid-cols-2">
        <ContactInfo />
        <div id="presupuesto" style={loadDelay(300)} className="anim-in-up scroll-mt-28">
          <PresupuestoForm />
        </div>
      </section>

      <section aria-labelledby="zonas-contacto-title" className="bg-soft">
        <div className="container-site grid items-center gap-12 py-24 lg:grid-cols-2">
          <div {...reveal("left")}>
            <MapEmbed className="h-[380px]" />
          </div>
          <div {...reveal("right")}>
            <h2
              id="zonas-contacto-title"
              className="text-[clamp(28px,3.4vw,42px)] font-extrabold leading-[1.12] tracking-[-0.025em]"
            >
              Vamos donde nos necesites
            </h2>
            <p className="mt-3.5 text-lg text-body">
              Desde Villafranca de Córdoba a toda la provincia y Andalucía.
            </p>
            <div className="mt-6">
              <ServiceAreaList onSoft />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-contacto-title" className="mx-auto max-w-[880px] px-4 py-24 sm:px-6">
        <SectionHeading id="faq-contacto-title" title="Antes de escribirnos" align="center" />
        <div {...reveal("up")} className="mt-8">
          <FaqList faqs={CONTACT_FAQS} />
        </div>
      </section>
    </>
  );
}
