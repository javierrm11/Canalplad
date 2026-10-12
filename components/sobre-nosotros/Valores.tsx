import { VALORES } from "@/lib/pages-data";
import { FEATURE_ICONS } from "@/components/shared/icons";
import SectionHeading from "@/components/shared/SectionHeading";
import { reveal } from "@/components/shared/reveal";

export default function Valores() {
  return (
    <section aria-labelledby="valores-title" className="container-site py-24 lg:py-28">
      <SectionHeading id="valores-title" eyebrow="Nuestros valores" title="En lo que creemos" align="center" />
      <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {VALORES.map((valor, i) => {
          const Icon = FEATURE_ICONS[valor.icon];
          return (
            <li key={valor.title} {...reveal("up", i * 100)} className="card-lift rounded-[22px] bg-soft p-8 sm:p-9">
              <span
                className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                  valor.tone === "red" ? "bg-accent-tint text-accent-dark" : "bg-brand-tint text-brand"
                }`}
              >
                <Icon size={26} />
              </span>
              <h3 className="mt-5 text-[22px] font-extrabold">{valor.title}</h3>
              <p className="mt-2 text-body">{valor.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
