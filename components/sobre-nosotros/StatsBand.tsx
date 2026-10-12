import { STATS } from "@/lib/home-data";
import { reveal } from "@/components/shared/reveal";

const COLORS = ["text-white", "text-accent-light", "text-white", "text-brand-light"];

export default function StatsBand() {
  return (
    <section aria-label="Canalplad en cifras" className="bg-ink text-white">
      <ul className="container-site grid grid-cols-2 gap-8 py-[72px] text-center lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <li key={stat.label} {...reveal("up", i * 90)}>
            <p className={`text-[clamp(38px,4.4vw,56px)] font-extrabold leading-none ${COLORS[i]}`}>
              {stat.value}
            </p>
            <p className="mt-2 text-[#cfd3cf]">{stat.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
