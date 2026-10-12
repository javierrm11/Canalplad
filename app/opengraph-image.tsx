import { ImageResponse } from "next/og";
import { CONTACT, SITE_URL } from "@/lib/site";

export const runtime = "edge";
export const alt = "Canalplad · Canalones de aluminio y pladur en Córdoba";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const EYEBROW = "Fabricación y montaje · Córdoba";
const HEADLINE = "Canalones de aluminio y pladur en Córdoba";
const SUBLINE = "Presupuesto gratis · Respuesta en 24-48 h · Garantía";
const DOMAIN = new URL(SITE_URL).host;

async function loadManrope(text: string) {
  try {
    const css = await (
      await fetch(
        `https://fonts.googleapis.com/css2?family=Manrope:wght@800&text=${encodeURIComponent(text)}`,
      )
    ).text();
    const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
    if (!match) return null;
    const res = await fetch(match[1]);
    return res.ok ? await res.arrayBuffer() : null;
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const logo = await fetch(new URL("../public/imagenes/icon-256.png", import.meta.url)).then(
    (res) => res.arrayBuffer(),
  );
  // Satori acepta un ArrayBuffer como origen de imagen.
  const logoSrc = logo as unknown as string;
  const font = await loadManrope(
    [EYEBROW, HEADLINE, SUBLINE, CONTACT.phoneDisplay, DOMAIN].join(""),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#16181a",
          color: "#ffffff",
          fontFamily: font ? "Manrope" : "sans-serif",
        }}
      >
        <div style={{ display: "flex", flex: 1, alignItems: "center", gap: 56, padding: "56px 72px" }}>
          <div
            style={{
              display: "flex",
              width: 240,
              height: 240,
              flexShrink: 0,
              alignItems: "center",
              justifyContent: "center",
              background: "#ffffff",
              borderRadius: 32,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} width={204} height={204} alt="" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ display: "flex", fontSize: 28, fontWeight: 800, color: "#5fdc84" }}>
              {EYEBROW}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 16,
                fontSize: 64,
                fontWeight: 800,
                lineHeight: 1.06,
                letterSpacing: -1.5,
              }}
            >
              {HEADLINE}
            </div>
            <div style={{ display: "flex", marginTop: 22, fontSize: 28, color: "#cfd3cf" }}>
              {SUBLINE}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "26px 72px",
            background: "#0f7f2e",
            fontSize: 32,
            fontWeight: 800,
          }}
        >
          <span>{CONTACT.phoneDisplay}</span>
          <span>{DOMAIN}</span>
        </div>
        <div style={{ display: "flex", height: 12 }}>
          <div style={{ display: "flex", flex: 1, background: "#d42019" }} />
          <div style={{ display: "flex", flex: 1, background: "#15a53c" }} />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font ? [{ name: "Manrope", data: font, weight: 800, style: "normal" }] : undefined,
    },
  );
}
