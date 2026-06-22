import { CONTACT, MAPS_EMBED_SRC } from "@/lib/site";

export default function ContactInfo() {
  return (
    <div>
      <h2 className="mb-7 font-anton text-[clamp(24px,4vw,34px)] italic uppercase leading-[1.05] text-ink-soft">
        Hablemos de tu proyecto
      </h2>

      <a
        href={CONTACT.phoneHref}
        className="mb-5 flex items-center gap-4 text-ink-soft no-underline"
      >
        <span className="flex h-[52px] w-[52px] flex-none items-center justify-center rounded-[10px] bg-brand">
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
          <span className="block text-[13px] uppercase tracking-[0.08em] text-[#8a8a85]">
            Teléfono
          </span>
          <span className="text-[22px] font-bold">{CONTACT.phoneDisplay}</span>
        </span>
      </a>

      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener"
        className="mb-5 flex items-center gap-4 text-ink-soft no-underline"
      >
        <span className="flex h-[52px] w-[52px] flex-none items-center justify-center rounded-[10px] bg-whatsapp">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
            <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.5-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6 1.9.8 2.7.9 3.6.8.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4zM12 2a10 10 0 0 0-8.6 15l-1.4 5 5.2-1.3A10 10 0 1 0 12 2z" />
          </svg>
        </span>
        <span>
          <span className="block text-[13px] uppercase tracking-[0.08em] text-[#8a8a85]">
            WhatsApp
          </span>
          <span className="text-[22px] font-bold">Escríbenos ahora</span>
        </span>
      </a>

      <a
        href={`mailto:${CONTACT.email}`}
        className="mb-5 flex items-center gap-4 text-ink-soft no-underline"
      >
        <span className="flex h-[52px] w-[52px] flex-none items-center justify-center rounded-[10px] bg-ink-card">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-10 6L2 7" />
          </svg>
        </span>
        <span>
          <span className="block text-[13px] uppercase tracking-[0.08em] text-[#8a8a85]">
            Email
          </span>
          <span className="text-lg font-bold">{CONTACT.email}</span>
        </span>
      </a>

      <div className="mb-8 flex items-center gap-4 text-ink-soft">
        <span className="flex h-[52px] w-[52px] flex-none items-center justify-center rounded-[10px] bg-surface-pill">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#15a53c"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </span>
        <span>
          <span className="block text-[13px] uppercase tracking-[0.08em] text-[#8a8a85]">
            Ubicación
          </span>
          <span className="text-lg font-bold">
            Villafranca de Córdoba · Andalucía
          </span>
        </span>
      </div>

      <div className="overflow-hidden rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
        <iframe
          src={MAPS_EMBED_SRC}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de Canalplad en Google Maps"
          className="block h-[280px] w-full border-0"
        />
      </div>
    </div>
  );
}
