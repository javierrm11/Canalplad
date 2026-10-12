import type { Faq } from "@/lib/home-data";

export default function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="flex flex-col">
      {faqs.map((faq, i) => (
        <details key={faq.question} open={i === 0} className="border-b border-line py-5">
          <summary className="flex items-center justify-between gap-4 text-lg font-bold text-ink">
            <h3 className="text-lg font-bold">{faq.question}</h3>
            <span
              aria-hidden="true"
              className="faq-plus inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand-tint text-[22px] leading-none text-brand"
            >
              +
            </span>
          </summary>
          <p className="mt-2.5 text-body">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
