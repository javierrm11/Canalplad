import type { Faq, Photo } from "./home-data";

export const ABOUT_HEADER_IMAGE: Photo = {
  src: "/imagenes/canalones-cordoba-4.webp",
  alt: "Furgoneta de Canalplad delante de una casa con canalones de aluminio recién instalados",
};

export const STORY_IMAGE: Photo = {
  src: "/imagenes/canalones-cordoba-5.webp",
  alt: "Varios canalones de aluminio con bajantes instalados por Canalplad en Córdoba",
};

export const ABOUT_GALLERY: Photo[] = [
  {
    src: "/imagenes/canalon-cordoba-23.webp",
    alt: "Canalón de aluminio en el porche de un cortijo de la provincia de Córdoba",
  },
  {
    src: "/imagenes/pladur-cordoba-27.webp",
    alt: "Techo de pladur montado en una vivienda de Córdoba",
  },
  {
    src: "/imagenes/canalones-cordoba-29.webp",
    alt: "Chalet con canalón y bajante granate instalados en Córdoba",
  },
];

export const VALORES = [
  {
    title: "Calidad garantizada",
    description:
      "Usamos siempre los mejores materiales y respondemos por cada trabajo que hacemos.",
    icon: "shield" as const,
    tone: "green" as const,
  },
  {
    title: "Rapidez y cumplimiento",
    description:
      "Respetamos los plazos acordados y dejamos siempre la obra limpia y recogida.",
    icon: "clock" as const,
    tone: "red" as const,
  },
  {
    title: "Trato cercano",
    description:
      "Te asesoramos con honestidad y resolvemos tus dudas sin tecnicismos ni sorpresas.",
    icon: "users" as const,
    tone: "green" as const,
  },
];

export const CONTACT_FAQS: Faq[] = [
  {
    question: "¿El presupuesto cuesta algo?",
    answer: "No. El presupuesto es gratis y sin compromiso.",
  },
  {
    question: "¿Puedo mandar fotos por WhatsApp?",
    answer:
      "Sí. Con unas fotos del tejado o de la estancia podemos orientarte antes de la visita.",
  },
  {
    question: "¿Cuánto tardáis en responder?",
    answer: "Entre 24 y 48 horas. Si es urgente, llámanos al 666 34 94 19.",
  },
  {
    question: "¿Cuál es vuestro horario?",
    answer:
      "Atendemos de lunes a viernes, de 8:00 a 18:00. Por WhatsApp puedes escribirnos cuando quieras y te contestamos en horario laboral.",
  },
];
