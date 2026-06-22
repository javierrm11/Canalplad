const STATS = [
  { value: "+500", label: "clientes satisfechos" },
  { value: "15+", label: "años de experiencia" },
  { value: "100%", label: "trabajos garantizados" },
  { value: "24-48h", label: "de respuesta" },
];

export default function StatsBand() {
  return (
    <section className="bg-ink px-4 py-11 font-barlow text-white sm:px-6 sm:py-12 md:px-8 md:py-16">
      <div className="mx-auto grid max-w-[1100px] grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6 text-center">
        {STATS.map((stat) => (
          <div key={stat.value}>
            <div className="font-anton text-[clamp(30px,6vw,52px)] italic leading-none text-brand-bright">
              {stat.value}
            </div>
            <div className="mt-[6px] text-[15px] text-white/70">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
