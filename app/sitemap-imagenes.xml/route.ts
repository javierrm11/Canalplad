import { SITE_URL, absoluteUrl } from "@/lib/site";
import { GALLERY_PHOTOS, HERO_IMAGE, HERO_INSET, WHY_US_IMAGE, type Photo } from "@/lib/home-data";
import { SERVICES_DETAIL } from "@/lib/services-data";
import { ABOUT_GALLERY, ABOUT_HEADER_IMAGE, STORY_IMAGE } from "@/lib/pages-data";

export const dynamic = "force-static";

const PAGES: { path: string; images: Photo[] }[] = [
  { path: "/", images: [HERO_IMAGE, HERO_INSET, WHY_US_IMAGE, ...GALLERY_PHOTOS] },
  { path: "/servicios", images: SERVICES_DETAIL.map((s) => s.image) },
  { path: "/sobre-nosotros", images: [ABOUT_HEADER_IMAGE, STORY_IMAGE, ...ABOUT_GALLERY] },
];

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const urls = PAGES.map(({ path, images }) => {
    const unique = Array.from(new Map(images.map((img) => [img.src, img])).values());
    const imageTags = unique
      .map(
        (img) =>
          `    <image:image>\n      <image:loc>${escapeXml(absoluteUrl(img.src))}</image:loc>\n    </image:image>`,
      )
      .join("\n");
    return `  <url>\n    <loc>${escapeXml(path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`)}</loc>\n${imageTags}\n  </url>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
