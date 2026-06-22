import Image from "next/image";
import Link from "next/link";
import { CONTACT, LOGO_SRC } from "@/lib/site";

const SECCIONES = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

const SERVICIOS = [
  "Canalones de aluminio",
  "Limpieza de canalones",
  "Reparación y mantenimiento",
  "Techos de pladur",
  "Tabiquería de pladur",
];

export default function Footer() {
  return (
    <footer className="bg-ink font-barlow text-white">
      <div className="mx-auto max-w-[1200px] px-4 pt-11 sm:px-6 sm:pt-12 md:px-8 md:pt-16">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-7 sm:gap-10 md:gap-12">
          <div>
            <Image
              src={LOGO_SRC}
              alt="Canalplad — Canalones y Pladur en Córdoba"
              width={170}
              height={40}
              className="mb-5 block h-10 w-auto"
            />
            <p className="mb-5 max-w-[300px] text-[15px] leading-[1.65] text-white/60">
              Especialistas en instalación de canalones de aluminio y
              trabajos de pladur en Córdoba y toda Andalucía. Calidad
              garantizada y presupuesto sin compromiso.
            </p>
            <div className="flex gap-3">
              <a
                href={CONTACT.facebookHref}
                target="_blank"
                rel="noopener"
                aria-label="Facebook de Canalplad"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.08] transition-colors hover:bg-brand"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp de Canalplad"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.08] transition-colors hover:bg-brand"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                  <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.5-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6 1.9.8 2.7.9 3.6.8.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4zM12 2a10 10 0 0 0-8.6 15l-1.4 5 5.2-1.3A10 10 0 1 0 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-[18px] font-barlow-condensed text-sm font-bold uppercase tracking-[0.1em] text-brand-bright">
              Secciones
            </h3>
            <div className="flex flex-col gap-3 text-[15px]">
              {SECCIONES.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/70 no-underline transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-[18px] font-barlow-condensed text-sm font-bold uppercase tracking-[0.1em] text-brand-bright">
              Servicios
            </h3>
            <div className="flex flex-col gap-3 text-[15px] text-white/70">
              {SERVICIOS.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-[18px] font-barlow-condensed text-sm font-bold uppercase tracking-[0.1em] text-brand-bright">
              Contacto
            </h3>
            <div className="flex flex-col gap-[14px] text-[15px]">
              <a
                href={CONTACT.phoneHref}
                className="text-lg font-bold text-white no-underline transition-colors hover:text-brand-bright"
              >
                {CONTACT.phoneDisplay}
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener"
                className="text-white/70 no-underline transition-colors hover:text-white"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-white/70 no-underline transition-colors hover:text-white"
              >
                {CONTACT.email}
              </a>
              <span className="text-sm leading-[1.5] text-white/50">
                Villafranca de Córdoba
                <br />
                Córdoba · Andalucía
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap justify-between gap-[10px] border-t border-white/10 py-[22px] text-[13px] text-white/45">
          <span>
            © 2026 Canalplad Córdoba · Canalones y pladur · Todos los
            derechos reservados
          </span>
          <span>Villafranca de Córdoba · Trabajamos en toda Andalucía</span>
        </div>
      </div>
    </footer>
  );
}
