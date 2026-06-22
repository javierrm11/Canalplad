import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ServiciosGrid from "@/components/home/ServiciosGrid";
import WhyUs from "@/components/home/WhyUs";
import GalleryMosaic from "@/components/home/GalleryMosaic";
import Proceso from "@/components/home/Proceso";
import Reviews from "@/components/home/Reviews";
import ServiceArea from "@/components/home/ServiceArea";
import PresupuestoSection from "@/components/home/PresupuestoSection";
import { SITE_URL, getBusinessSchema } from "@/lib/site";

export const metadata: Metadata = {
  title: "Canalones y Pladur en Córdoba | Instalación Profesional - Canalplad",
  description:
    "Especialistas en instalación de canalones y pladur en Córdoba. Servicios de montaje, limpieza y reparación de canalones de aluminio, techos y tabiquería de pladur. Presupuesto sin compromiso.",
  keywords:
    "canalones Córdoba, pladur Córdoba, instalación canalones Córdoba, montaje pladur Córdoba, limpieza canalones Córdoba, techos desmontables Córdoba, reparación canalones, tabiquería pladur Córdoba, canalones aluminio Córdoba, empresa canalones Córdoba, precios canalones Córdoba",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Canalones y Pladur en Córdoba | Instalación Profesional - Canalplad",
    description:
      "Expertos en instalación de canalones y pladur en Córdoba. Calidad garantizada, precios competitivos y más de 500 clientes satisfechos.",
    images: ["/imagenes/logo.webp"],
    url: SITE_URL,
    type: "website",
    locale: "es_ES",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBusinessSchema()) }}
      />
      <main>
        <Hero />
        <ServiciosGrid />
        <WhyUs />
        <GalleryMosaic />
        <Proceso />
        <Reviews />
        <ServiceArea />
        <PresupuestoSection />
      </main>
    </>
  );
}
