export interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

export const HERO_IMAGE: Photo = {
  src: "/imagenes/canalones-cordoba-29.webp",
  alt: "Chalet en Córdoba con canalón y bajante de aluminio granate instalados por Canalplad",
};

export const HERO_INSET: Photo = {
  src: "/imagenes/pladur-cordoba-27.webp",
  alt: "Techo de pladur montado por Canalplad en una vivienda de Córdoba",
};

export const WHY_US_IMAGE: Photo = {
  src: "/imagenes/canalones-cordoba-4.webp",
  alt: "Furgoneta de Canalplad junto a una casa de campo con canalones de aluminio nuevos",
};

export type TrustIcon = "wrench" | "clock" | "star" | "broom";

export const TRUST_FEATURES: {
  title: string;
  text: string;
  icon: TrustIcon;
  tone: "red" | "green";
}[] = [
  { title: "Fabricación propia", text: "Canalones a medida", icon: "wrench", tone: "red" },
  { title: "Respuesta en 24-48 h", text: "Presupuesto gratis", icon: "clock", tone: "green" },
  { title: "Materiales de primera", text: "Aluminio y pladur", icon: "star", tone: "red" },
  { title: "Obra limpia", text: "Todo recogido al terminar", icon: "broom", tone: "green" },
];

export const STATS = [
  { value: "+500", label: "clientes satisfechos" },
  { value: "15+", label: "años de experiencia" },
  { value: "24-48 h", label: "de respuesta" },
  { value: "100%", label: "trabajos con garantía" },
];

export const WHY_US_CHECKLIST = [
  "Materiales de primera calidad",
  "Presupuesto gratis y sin compromiso",
  "Trabajo garantizado",
  "Rapidez y limpieza",
];

export const GALLERY_PHOTOS: Photo[] = [
  {
    src: "/imagenes/canalon-cordoba-23.webp",
    alt: "Canalón de aluminio perimetral en el porche de un cortijo de Córdoba",
    caption: "Canalón perimetral · Cortijo",
  },
  {
    src: "/imagenes/pladur-cordoba-27.webp",
    alt: "Techo de pladur con juntas terminadas en una vivienda de Córdoba",
  },
  {
    src: "/imagenes/canalones-cordoba-6.webp",
    alt: "Canalón de aluminio con esquina y bajante en una casa de Córdoba",
  },
  {
    src: "/imagenes/pladur-cordoba-26.webp",
    alt: "Pasillo hecho con tabiquería de pladur en Córdoba",
  },
  {
    src: "/imagenes/canalon-cordoba-20.webp",
    alt: "Canalón de aluminio instalado junto a una piscina en Córdoba",
  },
];

export const PROCESS_STEPS = [
  {
    number: 1,
    title: "Cuéntanos qué necesitas",
    description:
      "Llámanos o escríbenos por WhatsApp. Resolvemos tus dudas sin compromiso.",
  },
  {
    number: 2,
    title: "Presupuesto sin compromiso",
    description:
      "Valoramos el trabajo y te damos un precio claro, sin letra pequeña.",
  },
  {
    number: 3,
    title: "Instalación garantizada",
    description:
      "Trabajo rápido, todo limpio al terminar y con garantía.",
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
    text: "Instalaron los canalones de mi casa en un día. Trabajo impecable y muy buen precio. Se acabaron las goteras.",
    name: "Antonio R.",
    location: "Córdoba",
    tone: "red" as const,
  },
  {
    text: "Nos hicieron el techo de pladur del salón y dos habitaciones. Rápidos, limpios y muy profesionales. Repetiremos.",
    name: "María José L.",
    location: "Villafranca de Córdoba",
    tone: "green" as const,
  },
  {
    text: "Vinieron a limpiar y reparar los canalones de la comunidad. Serios y cumplidores. Totalmente recomendables.",
    name: "Francisco M.",
    location: "Córdoba",
    tone: "red" as const,
  },
];

export const SERVICE_AREAS: {
  label: string;
  name: string;
  type: "City" | "AdministrativeArea";
  highlight?: boolean;
}[] = [
  { label: "Córdoba capital", name: "Córdoba", type: "City" },
  { label: "Villafranca de Córdoba", name: "Villafranca de Córdoba", type: "City" },
  { label: "El Carpio", name: "El Carpio", type: "City" },
  { label: "Montoro", name: "Montoro", type: "City" },
  { label: "Adamuz", name: "Adamuz", type: "City" },
  { label: "Bujalance", name: "Bujalance", type: "City" },
  { label: "Pedro Abad", name: "Pedro Abad", type: "City" },
  { label: "Almodóvar del Río", name: "Almodóvar del Río", type: "City" },
  { label: "Sevilla", name: "Sevilla", type: "City" },
  { label: "Jaén", name: "Jaén", type: "City" },
  { label: "Y toda Andalucía", name: "Andalucía", type: "AdministrativeArea", highlight: true },
];

export interface Faq {
  question: string;
  answer: string;
}

export const HOME_FAQS: Faq[] = [
  {
    question: "¿El presupuesto cuesta algo?",
    answer:
      "No. El presupuesto es gratis y sin compromiso. Te damos un precio claro, sin letra pequeña.",
  },
  {
    question: "¿Cuánto tardáis en responder?",
    answer:
      "Respondemos en 24-48 horas. Si es urgente, llámanos al 666 34 94 19.",
  },
  {
    question: "¿De qué material son los canalones?",
    answer:
      "Trabajamos con canalones de aluminio fabricados a medida y en distintos colores: ligeros, resistentes a la corrosión y casi sin mantenimiento.",
  },
  {
    question: "¿Qué garantía tienen los trabajos?",
    answer:
      "Todos nuestros trabajos tienen garantía y respondemos por cada instalación que hacemos.",
  },
  {
    question: "¿Trabajáis con comunidades de vecinos?",
    answer:
      "Sí. Instalamos, limpiamos y reparamos canalones en viviendas, comunidades de vecinos y locales.",
  },
  {
    question: "¿En qué zonas trabajáis?",
    answer:
      "Tenemos el taller en Villafranca de Córdoba y trabajamos en Córdoba capital y provincia, Sevilla, Jaén y toda Andalucía.",
  },
];
