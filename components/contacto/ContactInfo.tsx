import type { ReactNode } from "react";
import { CONTACT } from "@/lib/site";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsappIcon } from "@/components/shared/icons";
import { reveal } from "@/components/shared/reveal";

interface Method {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  icon: ReactNode;
  iconClass: string;
  valueClass: string;
}

const METHODS: Method[] = [
  {
    label: "Teléfono",
    value: CONTACT.phoneDisplay,
    href: CONTACT.phoneHref,
    icon: <PhoneIcon size={24} />,
    iconClass: "bg-accent text-white",
    valueClass: "text-2xl",
  },
  {
    label: "WhatsApp",
    value: "Escríbenos ahora",
    href: CONTACT.whatsappHref,
    external: true,
    icon: <WhatsappIcon size={26} />,
    iconClass: "bg-brand text-white",
    valueClass: "text-[22px]",
  },
  {
    label: "Email",
    value: CONTACT.email,
    href: CONTACT.emailHref,
    icon: <MailIcon size={24} />,
    iconClass: "bg-ink text-white",
    valueClass: "text-[19px] [overflow-wrap:anywhere]",
  },
  {
    label: "Taller",
    value: "C/ El Nogal Nº 14, Villafranca de Córdoba",
    icon: <PinIcon size={24} />,
    iconClass: "bg-brand-tint text-brand",
    valueClass: "text-lg",
  },
];

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-[30px] font-extrabold tracking-[-0.02em]">Hablemos de tu proyecto</h2>
      <ul className="mt-6 flex flex-col gap-3">
        {METHODS.map((method, i) => {
          const inner = (
            <>
              <span
                className={`inline-flex h-14 w-14 flex-none items-center justify-center rounded-2xl ${method.iconClass}`}
              >
                {method.icon}
              </span>
              <span className="min-w-0 flex-grow leading-snug">
                <span className="block text-sm text-muted">{method.label}</span>
                <span className={`block font-extrabold ${method.valueClass}`}>{method.value}</span>
              </span>
              {method.href && (
                <span className="arrow text-xl text-muted" aria-hidden="true">
                  →
                </span>
              )}
            </>
          );
          const base =
            "flex items-center gap-4 rounded-[18px] border-[1.5px] border-line bg-white p-5 text-ink no-underline";
          return (
            <li key={method.label} {...reveal("up", i * 80)}>
              {method.href ? (
                <a
                  href={method.href}
                  {...(method.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`${base} card-lift hover:border-brand-line`}
                >
                  {inner}
                </a>
              ) : (
                <address className={`${base} not-italic`}>{inner}</address>
              )}
            </li>
          );
        })}
      </ul>
      <p
        {...reveal("up")}
        className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-[18px] bg-soft px-6 py-5"
      >
        <span className="inline-flex items-center gap-2.5 font-bold">
          <ClockIcon size={20} className="text-brand" />
          Horario
        </span>
        <span>{CONTACT.hours.label}</span>
      </p>
    </div>
  );
}
