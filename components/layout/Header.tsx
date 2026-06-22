"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CONTACT, LOGO_SRC, NAV_LINKS } from "@/lib/site";

const PhoneIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const WhatsappIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff">
    <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.5-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6 1.9.8 2.7.9 3.6.8.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4zM12 2a10 10 0 0 0-8.6 15l-1.4 5 5.2-1.3A10 10 0 1 0 12 2z" />
  </svg>
);

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-ink">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-[13px] font-barlow sm:px-6 md:px-8">
        <Link href="/" className="block flex-none leading-none">
          <Image
            src={LOGO_SRC}
            alt="Canalplad — Canalones y Pladur en Córdoba"
            width={150}
            height={36}
            priority
            className="block h-8 w-auto"
          />
        </Link>

        {/* desktop links */}
        <div className="hidden items-center gap-4 font-barlow-condensed text-sm font-semibold uppercase tracking-[0.05em] text-white/80 min-[881px]:flex md:gap-6 lg:gap-[30px]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-inherit no-underline transition-colors hover:text-brand-bright"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-[9px] rounded-md bg-brand px-5 py-[11px] font-semibold tracking-[0.03em] text-white no-underline transition-colors hover:bg-brand-hover"
          >
            <PhoneIcon />
            {CONTACT.phoneDisplay}
          </a>
        </div>

        {/* mobile: call button + burger */}
        <div className="flex items-center gap-[10px] min-[881px]:hidden">
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-[7px] rounded-md bg-brand px-4 py-[10px] font-barlow-condensed text-[15px] font-semibold uppercase tracking-[0.03em] text-white no-underline"
          >
            <PhoneIcon size={15} />
            Llamar
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menú"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.18] bg-white/[0.08] text-white"
          >
            {open ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* mobile dropdown panel */}
      {open && (
        <div className="flex flex-col border-t border-white/10 bg-ink px-4 pb-[18px] pt-2 font-barlow-condensed min-[881px]:hidden sm:px-6 md:px-8">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`py-[14px] text-lg font-semibold uppercase tracking-[0.04em] text-white no-underline ${
                i < NAV_LINKS.length - 1 ? "border-b border-white/[0.08]" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener"
            onClick={() => setOpen(false)}
            className="mt-[14px] flex items-center justify-center gap-[9px] rounded-lg bg-whatsapp p-[14px] text-base font-bold uppercase tracking-[0.03em] text-white no-underline"
          >
            <WhatsappIcon />
            Escríbenos por WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}
