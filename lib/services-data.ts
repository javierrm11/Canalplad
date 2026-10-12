import type { Faq } from "./home-data";

export type ServiceCategory = "canalones" | "pladur";

export interface ServiceDetail {
  slug: string;
  category: ServiceCategory;
  shortLabel: string;
  title: string;
  summary: string;
  description: string;
  checklist: string[];
  image: { src: string; alt: string };
}

export const CATEGORY_LABEL: Record<ServiceCategory, string> = {
  canalones: "Canalones",
  pladur: "Pladur",
};

export const SERVICES_DETAIL: ServiceDetail[] = [
  {
    slug: "canalones-aluminio",
    category: "canalones",
    shortLabel: "Montaje",
    title: "Montaje de canalones de aluminio",
    summary:
      "A medida y en distintos colores, con bajantes y evacuación de agua.",
    description:
      "Fabricamos e instalamos canalones de aluminio a medida para tu tejado. Un material ligero, resistente a la corrosión y que no necesita apenas mantenimiento. Adiós a las humedades y a los daños en la fachada.",
    checklist: [
      "Canalones a medida en distintos colores",
      "Bajantes y evacuación de agua",
      "Instalación rápida y limpia",
    ],
    image: {
      src: "/imagenes/canalon2.webp",
      alt: "Canalón de aluminio a medida instalado en una vivienda de Córdoba",
    },
  },
  {
    slug: "limpieza-canalones",
    category: "canalones",
    shortLabel: "Limpieza",
    title: "Limpieza de canalones",
    summary: "Retiramos hojas y atascos antes de la temporada de lluvias.",
    description:
      "Las hojas y la suciedad obstruyen los canalones y provocan desbordamientos y humedades. Los limpiamos a fondo para que el agua circule perfectamente, especialmente antes de la temporada de lluvias.",
    checklist: [
      "Retirada de hojas y obstrucciones",
      "Revisión de bajantes y juntas",
      "Mantenimiento preventivo",
    ],
    image: {
      src: "/imagenes/canalones-cordoba-3.webp",
      alt: "Canalón de aluminio con esquina limpio y revisado en Córdoba",
    },
  },
  {
    slug: "reparacion-mantenimiento",
    category: "canalones",
    shortLabel: "Reparación",
    title: "Reparación y mantenimiento de canalones",
    summary: "Fugas, juntas sueltas y tramos dañados. Revisiones periódicas.",
    description:
      "¿Tienes fugas, juntas sueltas o un canalón dañado? Reparamos cualquier avería y realizamos el mantenimiento que tu instalación necesita para durar muchos años más.",
    checklist: [
      "Reparación de fugas y juntas",
      "Sustitución de tramos dañados",
      "Revisiones periódicas",
    ],
    image: {
      src: "/imagenes/canalones-cordoba-12.webp",
      alt: "Reparación de canalón de aluminio y bajante en un patio de Córdoba",
    },
  },
  {
    slug: "techos-pladur",
    category: "pladur",
    shortLabel: "Techos",
    title: "Techos de pladur",
    summary: "Lisos o decorativos, con iluminación empotrada y aislamiento.",
    description:
      "Montamos techos de pladur lisos o con diseño, perfectos para renovar cualquier estancia, ocultar instalaciones y mejorar el aislamiento térmico y acústico de tu hogar o local.",
    checklist: [
      "Techos lisos y decorativos",
      "Iluminación empotrada",
      "Aislamiento térmico y acústico",
    ],
    image: {
      src: "/imagenes/pladur2.webp",
      alt: "Montaje de techo de pladur en una vivienda de Córdoba",
    },
  },
  {
    slug: "tabiqueria-pladur",
    category: "pladur",
    shortLabel: "Tabiquería",
    title: "Tabiquería de pladur",
    summary: "Nuevas habitaciones, vestidores y divisiones, sin escombros.",
    description:
      "¿Necesitas una nueva habitación, un vestidor o dividir un espacio? La tabiquería de pladur es rápida, limpia y económica, con un excelente aislamiento y acabado profesional.",
    checklist: [
      "Nuevas habitaciones y divisiones",
      "Obra rápida y sin escombros",
      "Acabado listo para pintar",
    ],
    image: {
      src: "/imagenes/pladur-cordoba-16.webp",
      alt: "Tabiquería de pladur para crear nuevas habitaciones en Córdoba",
    },
  },
  {
    slug: "techos-desmontables",
    category: "pladur",
    shortLabel: "Techos desmontables",
    title: "Techos desmontables",
    summary: "Registrables, para oficinas y locales comerciales.",
    description:
      "Ideales para oficinas, comercios y locales: los techos registrables permiten acceder fácilmente a instalaciones eléctricas, climatización y fontanería para su mantenimiento.",
    checklist: [
      "Acceso fácil a instalaciones",
      "Variedad de acabados",
      "Perfecto para locales y oficinas",
    ],
    image: {
      src: "/imagenes/pladur-cordoba-18.webp",
      alt: "Techo desmontable registrable instalado en un local de Córdoba",
    },
  },
];

export const INCLUDED_FEATURES = [
  { title: "Presupuesto gratis", text: "Sin compromiso y sin letra pequeña.", tone: "green" as const, icon: "clipboard" as const },
  { title: "Materiales de primera", text: "Aluminio y pladur de calidad.", tone: "red" as const, icon: "star" as const },
  { title: "Obra limpia", text: "Todo recogido al terminar.", tone: "green" as const, icon: "broom" as const },
  { title: "Garantía", text: "En todos nuestros trabajos.", tone: "red" as const, icon: "shield" as const },
];

export const SERVICES_FAQS: Faq[] = [
  {
    question: "¿Fabricáis los canalones a medida?",
    answer:
      "Sí. Fabricamos los canalones de aluminio a la medida de tu tejado y en distintos colores, con sus bajantes y piezas de evacuación.",
  },
  {
    question: "¿Cuándo conviene limpiar los canalones?",
    answer:
      "Lo ideal es limpiarlos antes de la temporada de lluvias, cuando ya han caído las hojas, para evitar atascos, desbordamientos y humedades en la fachada.",
  },
  {
    question: "¿Qué ventajas tiene el pladur frente a la obra tradicional?",
    answer:
      "Es una obra rápida, limpia y sin escombros, con buen aislamiento térmico y acústico y un acabado listo para pintar.",
  },
  {
    question: "¿Instaláis techos desmontables en oficinas y locales?",
    answer:
      "Sí. Los techos registrables son ideales para oficinas y comercios porque permiten acceder a la instalación eléctrica, la climatización y la fontanería.",
  },
];
