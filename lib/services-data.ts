export interface ServiceDetail {
  slug: string;
  shortLabel: string;
  index: string;
  title: string;
  description: string;
  checklist: string[];
  image: { src: string; alt: string };
  bg: "white" | "soft";
}

export const SERVICES_DETAIL: ServiceDetail[] = [
  {
    slug: "canalones-aluminio",
    shortLabel: "Canalones",
    index: "01 · Canalones",
    title: "Montaje de canalones de aluminio",
    description:
      "Fabricamos e instalamos canalones de aluminio a medida para tu tejado. Un material ligero, resistente a la corrosión y que no necesita apenas mantenimiento. Adiós a las humedades y a los daños en la fachada.",
    checklist: [
      "Canalones a medida en distintos colores",
      "Bajantes y evacuación de agua",
      "Instalación rápida y limpia",
    ],
    image: {
      src: "/imagenes/canalon2.webp",
      alt: "Canalón de aluminio instalado en Córdoba",
    },
    bg: "white",
  },
  {
    slug: "limpieza-canalones",
    shortLabel: "Limpieza",
    index: "02 · Canalones",
    title: "Limpieza de canalones",
    description:
      "Las hojas y la suciedad obstruyen los canalones y provocan desbordamientos y humedades. Los limpiamos a fondo para que el agua circule perfectamente, especialmente antes de la temporada de lluvias.",
    checklist: [
      "Retirada de hojas y obstrucciones",
      "Revisión de bajantes y juntas",
      "Mantenimiento preventivo",
    ],
    image: {
      src: "/imagenes/canalones-cordoba-3.webp",
      alt: "Canalón de aluminio instalado con esquina en Córdoba",
    },
    bg: "soft",
  },
  {
    slug: "reparacion-mantenimiento",
    shortLabel: "Reparación",
    index: "03 · Canalones",
    title: "Reparación y mantenimiento",
    description:
      "¿Tienes fugas, juntas sueltas o un canalón dañado? Reparamos cualquier avería y realizamos el mantenimiento que tu instalación necesita para durar muchos años más.",
    checklist: [
      "Reparación de fugas y juntas",
      "Sustitución de tramos dañados",
      "Revisiones periódicas",
    ],
    image: {
      src: "/imagenes/canalones-cordoba-12.webp",
      alt: "Canalón de aluminio en patio de Córdoba con tubo en pared",
    },
    bg: "white",
  },
  {
    slug: "techos-pladur",
    shortLabel: "Techos pladur",
    index: "04 · Pladur",
    title: "Techos de pladur",
    description:
      "Montamos techos de pladur lisos o con diseño, perfectos para renovar cualquier estancia, ocultar instalaciones y mejorar el aislamiento térmico y acústico de tu hogar o local.",
    checklist: [
      "Techos lisos y decorativos",
      "Iluminación empotrada",
      "Aislamiento térmico y acústico",
    ],
    image: {
      src: "/imagenes/pladur2.webp",
      alt: "Montaje de pladur en Córdoba",
    },
    bg: "soft",
  },
  {
    slug: "tabiqueria-pladur",
    shortLabel: "Tabiquería",
    index: "05 · Pladur",
    title: "Tabiquería de pladur",
    description:
      "¿Necesitas una nueva habitación, un vestidor o dividir un espacio? La tabiquería de pladur es rápida, limpia y económica, con un excelente aislamiento y acabado profesional.",
    checklist: [
      "Nuevas habitaciones y divisiones",
      "Obra rápida y sin escombros",
      "Acabado listo para pintar",
    ],
    image: {
      src: "/imagenes/pladur-cordoba-16.webp",
      alt: "Tabiquería de pladur para nuevas habitaciones en Córdoba",
    },
    bg: "white",
  },
  {
    slug: "techos-desmontables",
    shortLabel: "Techos desmontables",
    index: "06 · Pladur",
    title: "Techos desmontables",
    description:
      "Ideales para oficinas, comercios y locales: los techos registrables permiten acceder fácilmente a instalaciones eléctricas, climatización y fontanería para su mantenimiento.",
    checklist: [
      "Acceso fácil a instalaciones",
      "Variedad de acabados",
      "Perfecto para locales y oficinas",
    ],
    image: {
      src: "/imagenes/pladur-cordoba-18.webp",
      alt: "Proyecto de pladur realizado en Córdoba",
    },
    bg: "soft",
  },
];
