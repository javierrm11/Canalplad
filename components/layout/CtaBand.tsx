import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { reveal } from "@/components/shared/reveal";

interface CtaBandProps {
  title: string;
  description: string;
  /** Segundo botón: formulario (por defecto) o WhatsApp. */
  secondary?: "form" | "whatsapp";
}

export default function CtaBand({ title, description, secondary = "form" }: CtaBandProps) {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div
        {...reveal("zoom")}
        className="mx-auto max-w-site rounded-[32px] bg-brand px-6 py-12 text-center text-white sm:px-12 sm:py-16 lg:py-[72px]"
      >
        <h2 className="text-[clamp(30px,3.8vw,50px)] font-extrabold leading-[1.1] tracking-[-0.025em]">
          {title}
        </h2>
        <p className="mx-auto mt-3.5 max-w-[640px] text-[19px] text-[#dff3e5]">{description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={CONTACT.phoneHref} className="btn btn-white min-h-[58px] px-7 text-xl font-extrabold">
            Llamar al {CONTACT.phoneDisplay}
          </a>
          {secondary === "form" ? (
            <Link href="/contacto#presupuesto" className="btn btn-dark min-h-[58px] px-7 text-lg">
              Rellenar formulario <span className="arrow" aria-hidden="true">→</span>
            </Link>
          ) : (
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark min-h-[58px] px-7 text-lg"
            >
              Escribir por WhatsApp
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
