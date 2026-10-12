export const SITE_URL = "https://canalonescanalplad.es";

export const SITE_NAME = "Canalplad";

export const SITE_TAGLINE = "Canalones de aluminio y pladur en Córdoba";

export const SITE_DESCRIPTION =
  "Fabricación e instalación de canalones de aluminio a medida, limpieza y reparación, techos y tabiques de pladur en Córdoba y Andalucía. Presupuesto gratis.";

export const LOGO_SRC = "/imagenes/logo.webp";
export const LOGO_SIZE = { width: 1134, height: 220 };
export const ICON_SRC = "/imagenes/icon-256.png";

export const CONTACT = {
  phone: "+34 666 349 419",
  phoneDisplay: "666 34 94 19",
  phoneHref: "tel:+34666349419",
  whatsappHref: "https://wa.me/34666349419",
  whatsappNumber: "34666349419",
  facebookHref: "https://www.facebook.com/rafael.ruizocon.31",
  email: "rafaelrumo@gmail.com",
  emailHref: "mailto:rafaelrumo@gmail.com",
  address: {
    street: "C/ El Nogal, 14",
    locality: "Villafranca de Córdoba",
    region: "Córdoba",
    postalCode: "14420",
    country: "ES",
    full: "C/ El Nogal Nº 14, 14420 Villafranca de Córdoba (Córdoba)",
  },
  geo: {
    latitude: 37.957454,
    longitude: -4.550341,
  },
  hours: {
    label: "Lunes a viernes, de 8:00 a 18:00",
    short: "L–V 8:00 – 18:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
};

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export const PRESUPUESTO_SERVICIOS = [
  "Montaje de canalones de aluminio",
  "Limpieza de canalones",
  "Reparación y mantenimiento",
  "Techos de pladur",
  "Tabiquería de pladur",
  "Techos desmontables",
  "Otro / no estoy seguro",
];

export const MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d393.23036425180425!2d-4.5503403699738625!3d37.95745369915923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6cfd1cba035aed%3A0x5672081443b3db46!2sCanalplad!5e0!3m2!1ses!2ses!4v1695136063789!5m2!1ses!2ses";

// Ficha de Google Maps (id de lugar 0x5672081443b3db46 del mapa incrustado).
export const MAPS_CID_URL = "https://maps.google.com/?cid=6229050117735045958";

export const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Canalplad%2C%20Villafranca%20de%20C%C3%B3rdoba";

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
