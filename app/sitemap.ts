import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: "2024-08-15",
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/servicios`,
      lastModified: "2024-08-15",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contacto`,
      lastModified: "2024-08-15",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/sobre-nosotros`,
      lastModified: "2024-08-15",
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}
