import type { MetadataRoute } from "next";
import { ICON_SRC, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} · Canalones y pladur en Córdoba`,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#16181a",
    lang: "es",
    icons: [
      { src: "/favicon.ico", sizes: "256x256", type: "image/x-icon" },
      { src: ICON_SRC, sizes: "256x256", type: "image/png", purpose: "any" },
    ],
  };
}
