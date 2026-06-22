import { CONTACT } from "@/lib/site";
import PresupuestoForm from "@/components/shared/PresupuestoForm";

export default function PresupuestoSection() {
  return (
    <section
      id="presupuesto"
      className="bg-ink px-4 py-14 font-barlow text-white sm:px-6 sm:py-16 md:px-8 md:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1100px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-8 sm:gap-12 md:gap-16">
        <div>
          <div className="mb-[14px] font-barlow-condensed text-[15px] font-bold uppercase tracking-[0.12em] text-brand-bright">
            Pide tu presupuesto
          </div>
          <h2 className="mb-[22px] font-anton text-[clamp(30px,6vw,50px)] italic uppercase leading-[1.02]">
            Solicita presupuesto gratis hoy mismo
          </h2>
          <p className="mb-[34px] text-lg leading-[1.6] text-white/75">
            Rellena el formulario y te respondemos en 24-48h, o llámanos
            directamente. Sin compromiso.
          </p>
          <div className="flex flex-col gap-[18px]">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-4 text-white no-underline"
            >
              <span className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-[10px] bg-brand">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span>
                <span className="block text-[13px] uppercase tracking-[0.08em] text-white/55">
                  Llámanos
                </span>
                <span className="text-[22px] font-bold">
                  {CONTACT.phoneDisplay}
                </span>
              </span>
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-4 text-white no-underline"
            >
              <span className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-[10px] bg-whatsapp">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                  <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.5-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6 1.9.8 2.7.9 3.6.8.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4zM12 2a10 10 0 0 0-8.6 15l-1.4 5 5.2-1.3A10 10 0 1 0 12 2z" />
                </svg>
              </span>
              <span>
                <span className="block text-[13px] uppercase tracking-[0.08em] text-white/55">
                  WhatsApp
                </span>
                <span className="text-[22px] font-bold">
                  Escríbenos ahora
                </span>
              </span>
            </a>
          </div>
        </div>

        <PresupuestoForm />
      </div>
    </section>
  );
}
