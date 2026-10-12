import { TRUST_FEATURES } from "@/lib/home-data";
import { FEATURE_ICONS } from "@/components/shared/icons";
import { reveal } from "@/components/shared/reveal";

export default function TrustStrip() {
  return (
    <section aria-label="Por qué confiar en Canalplad" className="border-y border-line bg-soft">
      <ul className="container-site grid grid-cols-1 gap-5 py-7 sm:grid-cols-2 lg:grid-cols-4">
        {TRUST_FEATURES.map((item, i) => {
          const Icon = FEATURE_ICONS[item.icon];
          return (
            <li key={item.title} {...reveal("up", i * 80)} className="flex items-center gap-3.5">
              <span
                className={`inline-flex h-[46px] w-[46px] flex-none items-center justify-center rounded-xl bg-white shadow-[0_4px_12px_rgba(22,24,26,0.06)] ${
                  item.tone === "red" ? "text-accent" : "text-brand"
                }`}
              >
                <Icon size={22} />
              </span>
              <span className="leading-snug">
                <strong className="block">{item.title}</strong>
                <span className="text-sm text-muted">{item.text}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
