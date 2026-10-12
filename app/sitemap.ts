import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Actualiza esta fecha cuando cambie el contenido de las páginas.
const LAST_UPDATED = "2026-10-12";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/servicios`, lastModified: LAST_UPDATED, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/contacto`, lastModified: LAST_UPDATED, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/sobre-nosotros`, lastModified: LAST_UPDATED, changeFrequency: "yearly", priority: 0.7 },
  ];
}
