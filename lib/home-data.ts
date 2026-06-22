export const HERO_BG = {
  src: "/imagenes/canalones-cordoba-4.webp",
  alt: "Canalón de aluminio instalado en casa de Córdoba",
};

export const TRUST_ITEMS = [
  "+500 clientes satisfechos",
  "Presupuesto sin compromiso",
  "Garantía total",
  "Respuesta en 24-48h",
];

export const STATS = [
  { value: "+500", label: "clientes satisfechos en Córdoba y provincia" },
  { value: "15+", label: "años de experiencia en el oficio" },
  { value: "24-48h", label: "de respuesta a tu solicitud" },
  { value: "100%", label: "trabajos con garantía" },
];

export const WHY_US_CHECKLIST = [
  "Materiales de primera calidad",
  "Presupuesto gratis y sin compromiso",
  "Trabajo garantizado",
  "Rapidez y limpieza",
];

export interface GalleryPhoto {
  src: string;
  alt: string;
  tall?: boolean;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    src: "/imagenes/canalones-cordoba-1.webp",
    alt: "Instalación de canalón de aluminio en Córdoba",
    tall: true,
  },
  {
    src: "/imagenes/pladur-cordoba-15.webp",
    alt: "Trabajo de pladur realizado en casa de Córdoba",
  },
  {
    src: "/imagenes/canalones-cordoba-6.webp",
    alt: "Canalón con esquina y bajante en Córdoba",
  },
  {
    src: "/imagenes/pladur-cordoba-17.webp",
    alt: "Techo de pladur y arreglo de pared en Córdoba",
    tall: true,
  },
  {
    src: "/imagenes/canalones-cordoba-9.webp",
    alt: "Canalón y bajante instalados en Córdoba",
  },
  {
    src: "/imagenes/pladur-cordoba-24.webp",
    alt: "Montaje de techo de pladur en Córdoba",
  },
  {
    src: "/imagenes/canalon-cordoba-20.webp",
    alt: "Canalón instalado junto a piscina en Córdoba",
  },
  {
    src: "/imagenes/pladur-cordoba-26.webp",
    alt: "Pasillo hecho con pladur en Córdoba",
  },
  {
    src: "/imagenes/canalones-cordoba-11.webp",
    alt: "Canalón de aluminio instalado en casa de Córdoba",
  },
  {
    src: "/imagenes/pladur-cordoba-27.webp",
    alt: "Techo de pladur con iluminación en Córdoba",
  },

];

export const PROCESS_STEPS = [
  {
    number: 1,
    title: "Cuéntanos qué necesitas",
    description:
      "Llámanos o escríbenos por WhatsApp. Te escuchamos y resolvemos tus dudas sin compromiso.",
  },
  {
    number: 2,
    title: "Presupuesto sin compromiso",
    description:
      "Valoramos el trabajo y te damos un presupuesto claro, sin sorpresas ni letra pequeña.",
  },
  {
    number: 3,
    title: "Instalación garantizada",
    description:
      "Realizamos el trabajo con rapidez y lo dejamos todo limpio. Con garantía y a tu entera satisfacción.",
  },
];

export function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export const REVIEWS = [
  {
    text: '"Instalaron los canalones de mi casa en un día. Trabajo impecable y muy buen precio. Se acabaron las goteras."',
    name: "Antonio R.",
    location: "Córdoba",
  },
  {
    text: '"Nos hicieron el techo de pladur del salón y dos habitaciones. Rápidos, limpios y muy profesionales. Repetiremos."',
    name: "María José L.",
    location: "Villafranca de Córdoba",
  },
  {
    text: '"Vinieron a limpiar y reparar los canalones de la comunidad. Serios y cumplidores. Totalmente recomendables."',
    name: "Francisco M.",
    location: "Córdoba",
  },
];

export const SERVICE_AREAS = [
  "Córdoba capital",
  "Villafranca de Córdoba",
  "El Carpio",
  "Montoro",
  "Adamuz",
  "Bujalance",
  "Pedro Abad",
  "Almodóvar del Río",
  "Sevilla",
  "Jaén",
  "Y toda Andalucía",
];
