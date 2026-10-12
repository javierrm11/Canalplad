import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";
import CtaBand from "@/components/layout/CtaBand";
import Story from "@/components/sobre-nosotros/Story";
import StatsBand from "@/components/sobre-nosotros/StatsBand";
import Valores from "@/components/sobre-nosotros/Valores";
import LocationMap from "@/components/sobre-nosotros/LocationMap";
import JsonLd from "@/components/shared/JsonLd";
import { reveal } from "@/components/shared/reveal";
import { ABOUT_GALLERY, ABOUT_HEADER_IMAGE } from "@/lib/pages-data";
import { breadcrumbSchema, graph, pageMetadata, webPageSchema } from "@/lib/seo";

const PATH = "/sobre-nosotros";
const TITLE = "Quiénes Somos: Empresa Familiar en Córdoba";
const DESCRIPTION =
  "Canalplad es una empresa familiar de Villafranca de Córdoba con más de 15 años instalando canalones de aluminio y pladur. Más de 500 clientes satisfechos.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

export default function SobreNosotrosPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: PATH,
            name: `${TITLE} | Canalplad`,
            description: DESCRIPTION,
            type: "AboutPage",
            image: ABOUT_HEADER_IMAGE.src,
          }),
          breadcrumbSchema(PATH, [
            { name: "Inicio", path: "/" },
            { name: "Sobre nosotros", path: PATH },
          ]),
        )}
      />

      <PageHeader
        crumb="Sobre nosotros"
        title="Empresa familiar de canalones y pladur en Córdoba"
        description="Oficio, cercanía y trabajo bien hecho. Somos Canalplad, de Villafranca de Córdoba, especialistas en canalones de aluminio y pladur."
        aside={
          <div className="anim-in-up overflow-hidden rounded-3xl shadow-photo">
            <Image
              src={ABOUT_HEADER_IMAGE.src}
              alt={ABOUT_HEADER_IMAGE.alt}
              width={2048}
              height={1536}
              priority
              sizes="(min-width: 1024px) 560px, 92vw"
              className="anim-in-img h-[300px] w-full object-cover sm:h-[380px]"
            />
          </div>
        }
      />

      <Story />
      <StatsBand />
      <Valores />

      <section aria-label="Algunos de nuestros trabajos" className="px-4 pb-24 sm:px-6 lg:px-8 lg:pb-28">
        <ul className="mx-auto grid max-w-site grid-cols-1 gap-3.5 sm:grid-cols-3">
          {ABOUT_GALLERY.map((photo, i) => (
            <li key={photo.src} {...reveal("up", i * 90)} className="zoom relative h-[300px] overflow-hidden rounded-[20px]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </section>

      <LocationMap />

      <CtaBand
        title="Confía en quien lleva años en el oficio"
        description="Pídenos presupuesto sin compromiso. Estaremos encantados de ayudarte."
        secondary="whatsapp"
      />
    </>
  );
}
