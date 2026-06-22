import { CONTACT } from "@/lib/site";

interface CtaBandProps {
  title: string;
  description: string;
}

export default function CtaBand({ title, description }: CtaBandProps) {
  return (
    <section className="bg-brand px-4 py-[46px] text-center font-barlow text-white sm:px-6 sm:py-14 md:px-8 md:py-[72px]">
      <div className="mx-auto max-w-[760px]">
        <h2 className="mb-4 font-anton text-[clamp(26px,5vw,42px)] italic uppercase leading-[1.05]">
          {title}
        </h2>
        <p className="mb-[30px] text-[19px] leading-[1.55] text-white/[0.92]">
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-[14px]">
          <a
            href={CONTACT.phoneHref}
            className="rounded-lg bg-white px-[30px] py-4 text-[17px] font-bold text-brand no-underline"
          >
            📞 {CONTACT.phoneDisplay}
          </a>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener"
            className="rounded-lg bg-ink px-[30px] py-4 text-[17px] font-bold text-white no-underline"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
