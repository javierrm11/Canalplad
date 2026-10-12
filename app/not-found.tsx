import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow text-accent">Error 404</p>
      <h1 className="mt-3 text-[clamp(32px,4vw,48px)] font-extrabold tracking-[-0.025em]">
        No encontramos esta página
      </h1>
      <p className="mt-4 max-w-[520px] text-lg text-body">
        Puede que el enlace haya cambiado. Vuelve al inicio o llámanos al{" "}
        <a href={CONTACT.phoneHref} className="font-bold">
          {CONTACT.phoneDisplay}
        </a>
        .
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-red">
          Ir al inicio
        </Link>
        <Link href="/servicios" className="btn btn-outline">
          Ver servicios
        </Link>
      </div>
    </section>
  );
}
