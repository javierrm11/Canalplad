import Image from "next/image";

export default function Story() {
  return (
    <section className="bg-white px-4 py-[52px] font-barlow sm:px-6 sm:py-16 md:px-8 md:py-[84px]">
      <div className="mx-auto grid max-w-[1100px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-[30px] sm:gap-10 md:gap-14">
        <div>
          <div className="mb-3 font-barlow-condensed text-sm font-bold uppercase tracking-[0.12em] text-brand">
            Nuestra historia
          </div>
          <h2 className="mb-5 font-anton text-[clamp(26px,4.8vw,40px)] italic uppercase leading-[1.05] text-ink-soft">
            Más de 15 años protegiendo hogares en Córdoba
          </h2>
          <p className="mb-4 text-[17px] leading-[1.7] text-ink-faint">
            Empezamos como un pequeño taller en Villafranca de Córdoba y, con
            el tiempo y el trabajo bien hecho, nos hemos convertido en una
            empresa de referencia en canalones y pladur en toda la
            provincia.
          </p>
          <p className="m-0 text-[17px] leading-[1.7] text-ink-faint">
            Más de 500 familias y comunidades confían ya en nosotros. Nuestro
            secreto es sencillo: materiales de calidad, precios justos,
            cumplir lo que prometemos y tratar la casa del cliente como si
            fuera la nuestra.
          </p>
        </div>
        <div className="relative h-[420px] w-full overflow-hidden rounded-2xl">
          <Image
            src="/imagenes/canalones-cordoba-5.webp"
            alt="Varios canalones de aluminio instalados con bajantes en Córdoba"
            fill
            loading="lazy"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
