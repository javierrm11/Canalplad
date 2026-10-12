import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { CONTACT, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import { SITE_ICONS, businessSchema, graph, websiteSchema } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";
import ScrollReveal from "@/components/shared/ScrollReveal";
import JsonLd from "@/components/shared/JsonLd";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const DEFAULT_TITLE = "Canalones de Aluminio y Pladur en Córdoba | Canalplad";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16181a",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "construction",
  keywords: [
    "canalones Córdoba",
    "canalones de aluminio Córdoba",
    "instalación de canalones Córdoba",
    "limpieza de canalones Córdoba",
    "reparación de canalones Córdoba",
    "pladur Córdoba",
    "techos de pladur Córdoba",
    "tabiquería de pladur Córdoba",
    "techos desmontables Córdoba",
    "canalones Villafranca de Córdoba",
  ],
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: SITE_NAME,
    url: "/",
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: SITE_ICONS,
  other: {
    "geo.region": "ES-CO",
    "geo.placename": CONTACT.address.locality,
    "geo.position": `${CONTACT.geo.latitude};${CONTACT.geo.longitude}`,
    ICBM: `${CONTACT.geo.latitude}, ${CONTACT.geo.longitude}`,
  },
};

// Marca <html> con .js antes de pintar para que las animaciones de scroll
// solo oculten contenido cuando hay JavaScript. Si el script de animación no
// llega a ejecutarse en 3 s, se muestra todo igualmente.
const JS_FLAG_SCRIPT =
  "document.documentElement.classList.add('js');setTimeout(function(){if(!window.__revealReady)document.documentElement.classList.remove('js')},3000);";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={manrope.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: JS_FLAG_SCRIPT }} />
      </head>
      <body className="bg-white font-sans text-ink">
        <JsonLd data={graph(businessSchema(), websiteSchema())} />
        <a
          href="#contenido"
          className="sr-only z-[60] rounded-xl bg-ink px-4 py-3 font-bold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Saltar al contenido
        </a>
        <Header />
        {/* Recorta cualquier desborde horizontal del contenido (la cabecera
            queda fuera para que siga siendo fija al hacer scroll). */}
        <div className="overflow-x-hidden [overflow-x:clip]">
          <main id="contenido">{children}</main>
          <Footer />
        </div>
        <WhatsAppFloatingButton />
        <ScrollReveal />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
