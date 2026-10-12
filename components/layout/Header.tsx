"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CONTACT, LOGO_SRC, NAV_LINKS } from "@/lib/site";
import { CloseIcon, MenuIcon, PhoneIcon, WhatsappIcon } from "@/components/shared/icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="container-site flex items-center justify-between gap-4 py-3.5">
        <Link href="/" aria-label="Canalplad, ir al inicio" className="inline-flex flex-none">
          <Image
            src={LOGO_SRC}
            alt="Canalplad, canalones y pladur en Córdoba"
            width={196}
            height={38}
            priority
            className="h-[32px] w-auto sm:h-[38px]"
          />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-8 text-base font-semibold">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className="nav-link text-ink no-underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <Link
            href="/contacto#presupuesto"
            className="btn btn-red hidden min-h-[48px] px-5 text-[15px] sm:inline-flex"
          >
            Pedir presupuesto
          </Link>
          <a
            href={CONTACT.phoneHref}
            className="btn btn-red min-h-[46px] px-4 text-[15px] sm:hidden"
          >
            <PhoneIcon size={17} />
            Llamar
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl border-[1.5px] border-[#d6d9d6] bg-white text-ink lg:hidden"
          >
            {open ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>

      <nav
        id="menu-movil"
        aria-label="Menú móvil"
        hidden={!open}
        className="border-t border-line bg-white lg:hidden"
      >
        <ul className="container-site flex flex-col pb-4 pt-2 text-lg font-bold">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="border-b border-[#eef0ed] last:border-0">
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`block py-3.5 no-underline ${
                  isActive(link.href) ? "text-brand" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green w-full"
            >
              <WhatsappIcon size={20} />
              Escríbenos por WhatsApp
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
