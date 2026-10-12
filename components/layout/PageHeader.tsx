import Link from "next/link";
import type { ReactNode } from "react";
import { loadDelay } from "@/components/shared/reveal";

interface PageHeaderProps {
  title: string;
  description: string;
  /** Nombre de la página actual en las migas de pan. */
  crumb: string;
  /** Contenido extra bajo la descripción (p. ej. accesos rápidos). */
  children?: ReactNode;
  /** Imagen u otro contenido a la derecha. */
  aside?: ReactNode;
}

export default function PageHeader({ title, description, crumb, children, aside }: PageHeaderProps) {
  return (
    <section className="border-b border-line bg-soft">
      <div
        className={`container-site py-14 sm:py-16 ${
          aside ? "grid items-center gap-12 lg:grid-cols-2" : ""
        }`}
      >
        <div>
          <nav aria-label="Migas de pan" className="anim-in-up text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="text-muted hover:text-ink">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-ink">
                {crumb}
              </li>
            </ol>
          </nav>
          <h1
            style={loadDelay(80)}
            className="anim-in-up mt-4 max-w-[820px] text-[clamp(36px,4.6vw,58px)] font-extrabold leading-[1.08] tracking-[-0.03em]"
          >
            {title}
          </h1>
          <p style={loadDelay(160)} className="anim-in-up mt-4 max-w-[680px] text-[19px] text-body">
            {description}
          </p>
          {children && (
            <div style={loadDelay(240)} className="anim-in-up mt-8">
              {children}
            </div>
          )}
        </div>
        {aside}
      </div>
    </section>
  );
}
