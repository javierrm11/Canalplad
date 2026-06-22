import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import ServiceDetailSection from "@/components/servicios/ServiceDetailSection";
import CtaBand from "@/components/layout/CtaBand";
import { SERVICES_DETAIL } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Servicios de Canalones y Pladur en Córdoba",
  description:
    "Instalamos, limpiamos y reparamos canalones de aluminio y realizamos todo tipo de trabajos de pladur en Córdoba. Materiales de primera y garantía en cada proyecto.",
  alternates: {
    canonical: "/servicios",
  },
};

export default function ServiciosPage() {
  return (
    <main>
      <PageHeader
        badge="Servicios"
        title="Todo en canalones y pladur en Córdoba"
        description="Instalamos, limpiamos y reparamos canalones de aluminio y realizamos todo tipo de trabajos de pladur. Materiales de primera y garantía en cada proyecto."
      />

      {SERVICES_DETAIL.map((service, i) => (
        <ServiceDetailSection
          key={service.title}
          service={service}
          reverse={i % 2 === 1}
        />
      ))}

      <CtaBand
        title="¿Listo para empezar tu proyecto?"
        description="Pídenos presupuesto sin compromiso. Te respondemos en 24-48h."
      />
    </main>
  );
}
