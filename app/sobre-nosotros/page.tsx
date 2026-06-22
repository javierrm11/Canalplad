import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import CtaBand from "@/components/layout/CtaBand";
import Story from "@/components/sobre-nosotros/Story";
import Valores from "@/components/sobre-nosotros/Valores";
import StatsBand from "@/components/sobre-nosotros/StatsBand";
import LocationMap from "@/components/sobre-nosotros/LocationMap";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Canalplad - Canalones y Pladur en Córdoba",
  description:
    "Somos Canalplad, una empresa familiar de Villafranca de Córdoba especializada en canalones de aluminio y pladur. Más de 15 años protegiendo hogares en Córdoba.",
  alternates: {
    canonical: "/sobre-nosotros",
  },
};

export default function SobreNosotrosPage() {
  return (
    <main>
      <PageHeader
        badge="Sobre nosotros"
        title="Oficio, cercanía y trabajo bien hecho"
        description="Somos Canalplad, una empresa familiar de Villafranca de Córdoba especializada en canalones de aluminio y pladur."
      />

      <Story />
      <Valores />
      <StatsBand />
      <LocationMap />

      <CtaBand
        title="Confía en quien lleva años en el oficio"
        description="Pídenos presupuesto sin compromiso. Estaremos encantados de ayudarte."
      />
    </main>
  );
}
