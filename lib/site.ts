import { REVIEWS } from "./home-data";

export const SITE_URL = "https://canalonescanalplad.es";

export const SITE_NAME = "Canalplad Córdoba";

export const LOGO_SRC = "/imagenes/logo.webp";

export const CONTACT = {
  phone: "+34 666 349 419",
  phoneDisplay: "666 34 94 19",
  phoneHref: "tel:+34666349419",
  whatsappHref: "https://wa.me/34666349419",
  whatsappNumber: "34666349419",
  facebookHref: "https://www.facebook.com/rafael.ruizocon.31",
  email: "rafaelrumo@gmail.com",
  address: {
    street: "Calle ejemplo, 123",
    locality: "Villafranca de Córdoba",
    region: "Córdoba",
    postalCode: "14420",
    country: "ES",
    full: "C/ El Nogal Nº 14, Villafranca de Córdoba, Córdoba",
  },
  geo: {
    latitude: 37.957454,
    longitude: -4.550341,
  },
};

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
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

export function getBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: SITE_NAME,
    description:
      "Empresa especializada en instalación y limpieza de canalones de aluminio, techos y tabiquería de pladur en Córdoba y Andalucía.",
    image: `${SITE_URL}${LOGO_SRC}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.locality,
      addressRegion: CONTACT.address.region,
      postalCode: CONTACT.address.postalCode,
      addressCountry: CONTACT.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CONTACT.geo.latitude.toString(),
      longitude: CONTACT.geo.longitude.toString(),
    },
    url: `${SITE_URL}/`,
    telephone: "+34-666-349-419",
    openingHours: "Mo-Fr 08:00-18:00",
    priceRange: "€€",
    areaServed: "Córdoba y provincia",
    sameAs: [CONTACT.facebookHref],
    serviceType: [
      "Instalación de canalones en Córdoba",
      "Limpieza de canalones en Córdoba",
      "Reparación de canalones en Córdoba",
      "Instalación de pladur en Córdoba",
      "Techos de pladur en Córdoba",
      "Tabiquería de pladur en Córdoba",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: REVIEWS.length.toString(),
    },
    review: REVIEWS.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.name },
      reviewBody: review.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    })),
  };
}
