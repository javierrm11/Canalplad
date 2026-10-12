import Image from "next/image";
import Link from "next/link";
import { CONTACT, LOGO_SRC, NAV_LINKS } from "@/lib/site";
import { SERVICES_DETAIL } from "@/lib/services-data";
import { FacebookIcon, WhatsappIcon } from "@/components/shared/icons";

export default function Footer() {
  return (
    <footer className="bg-ink text-[15px] text-[#c4c8c4]">
      <div className="container-site grid grid-cols-1 gap-10 pb-10 pt-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1.3fr]">
        <div className="max-w-[320px]">
          <span className="inline-flex rounded-[10px] bg-white px-3 py-2">
            <Image
              src={LOGO_SRC}
              alt="Canalplad"
              width={150}
              height={29}
              className="h-7 w-auto"
            />
          </span>
          <p className="mt-4">
            Fabricación y montaje de canalones de aluminio y trabajos de pladur en
            Córdoba y toda Andalucía.
          </p>
          <div className="mt-5 flex gap-2.5">
            <a
              href={CONTACT.facebookHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Canalplad en Facebook"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink-2 text-white transition-colors hover:bg-brand"
            >
              <FacebookIcon size={19} />
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escribir a Canalplad por WhatsApp"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink-2 text-white transition-colors hover:bg-brand"
            >
              <WhatsappIcon size={19} />
            </a>
          </div>
        </div>

        <nav aria-label="Páginas">
          <h2 className="text-base font-extrabold text-white">Páginas</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[#c4c8c4] no-underline hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Servicios">
          <h2 className="text-base font-extrabold text-white">Servicios</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {SERVICES_DETAIL.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/servicios#${service.slug}`}
                  className="text-[#c4c8c4] no-underline hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-base font-extrabold text-white">Contacto</h2>
          <address className="mt-3 flex flex-col gap-2 not-italic">
            <a href={CONTACT.phoneHref} className="font-bold text-white no-underline hover:underline">
              {CONTACT.phoneDisplay}
            </a>
            <a href={CONTACT.emailHref} className="text-[#c4c8c4] no-underline hover:text-white">
              {CONTACT.email}
            </a>
            <span>
              C/ El Nogal Nº 14
              <br />
              14420 Villafranca de Córdoba (Córdoba)
            </span>
            <span>{CONTACT.hours.short}</span>
          </address>
        </div>
      </div>

      <div className="container-site flex flex-wrap justify-between gap-3 border-t border-ink-line py-5 text-sm">
        <p>© {new Date().getFullYear()} Canalplad · Canalones y pladur en Córdoba</p>
        <p>Villafranca de Córdoba · Córdoba · Sevilla · Jaén · Andalucía</p>
      </div>
    </footer>
  );
}
