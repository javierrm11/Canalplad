import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";
import ContactInfo from "@/components/contacto/ContactInfo";
import PresupuestoForm from "@/components/shared/PresupuestoForm";

export const metadata: Metadata = {
  title: "Contacto | Canalplad - Canalones y Pladur en Córdoba",
  description:
    "Llámanos, escríbenos por WhatsApp o rellena el formulario. Te respondemos en 24-48h, sin compromiso.",
  alternates: {
    canonical: "/contacto",
  },
};

export default function ContactoPage() {
  return (
    <main>
      <PageHeader
        badge="Contacto"
        title="Pide tu presupuesto gratis"
        description="Llámanos, escríbenos por WhatsApp o rellena el formulario. Te respondemos en 24-48h, sin compromiso."
      />

      <section className="bg-white px-4 py-[50px] font-barlow sm:px-6 sm:py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-[1100px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-[30px] sm:gap-10 md:gap-14">
          <ContactInfo />
          <PresupuestoForm
            cardClassName="bg-surface-soft"
            subtitle="Rellena el formulario y te contactamos en 24-48h"
            successText="Se ha abierto WhatsApp con tu mensaje listo. Te responderemos lo antes posible."
            rows={4}
          />
        </div>
      </section>
    </main>
  );
}
