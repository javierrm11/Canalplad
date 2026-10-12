import { INCLUDED_FEATURES } from "@/lib/services-data";
import { FEATURE_ICONS } from "@/components/shared/icons";
import SectionHeading from "@/components/shared/SectionHeading";
import { reveal } from "@/components/shared/reveal";

export default function IncludedFeatures() {
  return (
    <section aria-labelledby="incluido-title" className="bg-soft">
      <div className="container-site py-24">
        <SectionHeading id="incluido-title" title="Incluido en todos los trabajos" align="center" />
        <ul className="mt-11 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INCLUDED_FEATURES.map((item, i) => {
            const Icon = FEATURE_ICONS[item.icon];
            return (
              <li key={item.title} {...reveal("up", i * 90)} className="rounded-[20px] bg-white p-7">
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-[14px] ${
                    item.tone === "red" ? "bg-accent-tint text-accent-dark" : "bg-brand-tint text-brand"
                  }`}
                >
                  <Icon size={24} />
                </span>
                <h3 className="mt-4 text-[19px] font-extrabold">{item.title}</h3>
                <p className="mt-1.5 text-base text-body">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
