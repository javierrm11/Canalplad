import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import ServiciosGrid from "@/components/home/ServiciosGrid";
import WhyUs from "@/components/home/WhyUs";
import Proceso from "@/components/home/Proceso";
import Gallery from "@/components/home/Gallery";
import Reviews from "@/components/home/Reviews";
import ZonasFaq from "@/components/home/ZonasFaq";
import PresupuestoSection from "@/components/home/PresupuestoSection";
import JsonLd from "@/components/shared/JsonLd";
import { HOME_FAQS } from "@/lib/home-data";
import { faqSchema, graph, pageMetadata, webPageSchema } from "@/lib/seo";

const TITLE = "Canalones de Aluminio y Pladur en Córdoba | Canalplad";
const DESCRIPTION =
  "Instalamos canalones de aluminio a medida y montamos techos y tabiques de pladur en Córdoba y Andalucía. Más de 15 años. Presupuesto gratis en 24-48 h.";

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path: "/", name: TITLE, description: DESCRIPTION, breadcrumb: false }),
          faqSchema("/", HOME_FAQS),
        )}
      />
      <Hero />
      <TrustStrip />
      <ServiciosGrid />
      <WhyUs />
      <Proceso />
      <Gallery />
      <Reviews />
      <ZonasFaq />
      <PresupuestoSection />
    </>
  );
}
