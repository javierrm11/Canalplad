import { REVIEWS, getInitials } from "@/lib/home-data";

const AVATAR_COLORS = ["bg-brand", "bg-ink-soft", "bg-star", "bg-brand-red"];

export default function Reviews() {
  return (
    <section className="bg-surface-soft px-4 py-14 font-barlow sm:px-6 sm:py-16 md:px-8 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 text-center">
          <div className="mb-[14px] font-barlow-condensed text-[15px] font-bold uppercase tracking-[0.12em] text-brand">
            Opiniones de clientes
          </div>
          <h2 className="m-0 font-anton text-[clamp(28px,5.6vw,48px)] italic uppercase leading-[1.05] text-ink-soft">
            Lo que dicen de nosotros
          </h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          {REVIEWS.map((review, i) => (
            <div
              key={review.name}
              className="rounded-xl bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
            >
              <div className="mb-5 flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 flex-none items-center justify-center rounded-full font-anton text-base text-white ${
                    AVATAR_COLORS[i % AVATAR_COLORS.length]
                  }`}
                >
                  {getInitials(review.name)}
                </div>
                <div>
                  <div className="font-bold text-ink-soft">{review.name}</div>
                  <div className="text-sm text-[#8a8a85]">
                    {review.location}
                  </div>
                </div>
              </div>
              <div className="mb-[14px] text-lg text-star">★★★★★</div>
              <p className="text-base leading-[1.6] text-ink-muted">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
