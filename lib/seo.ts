import type { Metadata } from "next";
import {
  CONTACT,
  ICON_SRC,
  LOGO_SRC,
  MAPS_CID_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "./site";
import { GALLERY_PHOTOS, HERO_IMAGE, REVIEWS, SERVICE_AREAS, type Faq } from "./home-data";
import { SERVICES_DETAIL } from "./services-data";

const OG_IMAGE_ALT = "Canalplad · Canalones de aluminio y pladur en Córdoba";
const BUSINESS_ID = `${SITE_URL}/#business`;
const WEBSITE_ID = `${SITE_URL}/#website`;

interface PageMetaInput {
  /** Título sin el sufijo de marca; la plantilla del layout añade " | Canalplad". */
  title: string;
  description: string;
  path: string;
  /** Usa el título tal cual, sin plantilla (portada). */
  absoluteTitle?: boolean;
}

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    // La imagen se declara aquí porque un openGraph propio de la página
    // sustituye al heredado de app/opengraph-image.tsx.
    openGraph: {
      type: "website",
      locale: "es_ES",
      siteName: SITE_NAME,
      url: path,
      title: fullTitle,
      description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: OG_IMAGE_ALT }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: "/twitter-image", width: 1200, height: 630, alt: OG_IMAGE_ALT }],
    },
  };
}

/* ---------- Datos estructurados (schema.org / JSON-LD) ---------- */

type JsonLdNode = Record<string, unknown>;

export function graph(...nodes: JsonLdNode[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

function areaServed() {
  return SERVICE_AREAS.map((area) => ({ "@type": area.type, name: area.name }));
}

export function businessSchema(): JsonLdNode {
  return {
    "@type": ["RoofingContractor", "GeneralContractor"],
    "@id": BUSINESS_ID,
    name: SITE_NAME,
    alternateName: "Canalplad Córdoba",
    slogan: "Fabricación y montaje",
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/`,
    logo: absoluteUrl(LOGO_SRC),
    image: [absoluteUrl(HERO_IMAGE.src), ...GALLERY_PHOTOS.map((p) => absoluteUrl(p.src))],
    telephone: CONTACT.phone.replace(/\s/g, ""),
    email: CONTACT.email,
    priceRange: "€€",
    currenciesAccepted: "EUR",
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
      latitude: CONTACT.geo.latitude,
      longitude: CONTACT.geo.longitude,
    },
    hasMap: MAPS_CID_URL,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: CONTACT.hours.days,
        opens: CONTACT.hours.opens,
        closes: CONTACT.hours.closes,
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: CONTACT.phone.replace(/\s/g, ""),
      email: CONTACT.email,
      areaServed: "ES",
      availableLanguage: ["es"],
    },
    areaServed: areaServed(),
    knowsAbout: [
      "Canalones de aluminio",
      "Instalación de canalones",
      "Limpieza de canalones",
      "Reparación de canalones",
      "Pladur",
      "Techos de pladur",
      "Tabiquería de pladur",
      "Techos desmontables",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de canalones y pladur",
      itemListElement: SERVICES_DETAIL.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@id": `${SITE_URL}/servicios#${service.slug}` },
      })),
    },
    sameAs: [CONTACT.facebookHref],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      reviewCount: String(REVIEWS.length),
    },
    review: REVIEWS.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.name },
      reviewBody: review.text,
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    })),
  };
}

export function websiteSchema(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: "es-ES",
    publisher: { "@id": BUSINESS_ID },
  };
}

export function webPageSchema({
  path,
  name,
  description,
  type = "WebPage",
  image = HERO_IMAGE.src,
  breadcrumb = true,
}: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  image?: string;
  breadcrumb?: boolean;
}): JsonLdNode {
  const url = absoluteUrl(path);
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "es-ES",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
    primaryImageOfPage: { "@type": "ImageObject", url: absoluteUrl(image) },
    ...(breadcrumb ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
  };
}

export function breadcrumbSchema(path: string, items: { name: string; path: string }[]): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(path: string, faqs: Faq[]): JsonLdNode {
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function servicesSchema(): JsonLdNode[] {
  return SERVICES_DETAIL.map((service) => ({
    "@type": "Service",
    "@id": `${SITE_URL}/servicios#${service.slug}`,
    name: service.title,
    serviceType: service.title,
    category: service.category === "canalones" ? "Canalones de aluminio" : "Pladur",
    description: service.description,
    url: `${SITE_URL}/servicios#${service.slug}`,
    image: absoluteUrl(service.image.src),
    provider: { "@id": BUSINESS_ID },
    areaServed: areaServed(),
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      description: "Presupuesto gratis y sin compromiso",
    },
  }));
}

export const SITE_ICONS: Metadata["icons"] = {
  icon: [
    { url: "/favicon.ico", sizes: "any" },
    { url: ICON_SRC, type: "image/png", sizes: "256x256" },
  ],
  apple: [{ url: ICON_SRC, sizes: "256x256" }],
};
