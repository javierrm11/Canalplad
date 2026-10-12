import { REVIEWS, getInitials } from "@/lib/home-data";
import { QuoteIcon } from "@/components/shared/icons";
import { reveal } from "@/components/shared/reveal";

export default function Reviews() {
  return (
    <section aria-labelledby="opiniones-title" className="container-site py-24 lg:py-28">
      <div {...reveal("up")} className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-[640px]">
          <p className="eyebrow text-accent">Opiniones</p>
          <h2 id="opiniones-title" className="heading-2 mt-2.5">
            Lo que dicen nuestros clientes
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[56px] font-extrabold leading-none">5,0</span>
          <span>
            <span className="text-xl tracking-[2px] text-star" aria-label="5 de 5 estrellas">
              ★★★★★
            </span>
            <span className="block text-[15px] text-muted">Más de 500 clientes satisfechos</span>
          </span>
        </div>
      </div>

      <ul className="mt-11 grid grid-cols-1 gap-5 md:grid-cols-3">
        {REVIEWS.map((review, i) => (
          <li key={review.name} {...reveal("up", i * 100)}>
            <figure className="flex h-full flex-col rounded-[20px] bg-soft p-7 sm:p-8">
              <QuoteIcon className="text-brand-line" />
              <blockquote className="mt-3 flex-grow text-lg">
                <p>{review.text}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={`inline-flex h-[42px] w-[42px] items-center justify-center rounded-full text-sm font-extrabold ${
                    review.tone === "red" ? "bg-accent-tint text-accent-dark" : "bg-brand-tint text-brand"
                  }`}
                >
                  {getInitials(review.name)}
                </span>
                <span className="leading-tight">
                  <strong className="block">{review.name}</strong>
                  <span className="text-sm text-muted">{review.location}</span>
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
