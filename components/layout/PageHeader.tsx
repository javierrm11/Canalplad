interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
}

export default function PageHeader({ badge, title, description }: PageHeaderProps) {
  return (
    <section className="bg-ink px-4 py-[46px] font-barlow text-white sm:px-6 sm:py-14 md:px-8 md:py-[72px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-5 inline-block bg-brand-red px-[14px] py-[6px] font-barlow-condensed text-[13px] font-bold uppercase tracking-[0.12em] text-white">
          {badge}
        </div>
        <h1 className="m-0 mb-[18px] max-w-[820px] font-anton text-[clamp(33px,7vw,62px)] italic uppercase leading-[0.98]">
          {title}
        </h1>
        <p className="m-0 max-w-[640px] text-[19px] leading-[1.55] text-white/80">
          {description}
        </p>
      </div>
    </section>
  );
}
