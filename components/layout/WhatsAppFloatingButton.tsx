"use client";

import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/site";

const WhatsappIcon = ({ size = 26 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff">
    <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.5-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6 1.9.8 2.7.9 3.6.8.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4zM12 2a10 10 0 0 0-8.6 15l-1.4 5 5.2-1.3A10 10 0 1 0 12 2z" />
  </svg>
);

export default function WhatsAppFloatingButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir chat de WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-transform hover:scale-105"
      >
        <WhatsappIcon />
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 w-[240px] overflow-hidden rounded-xl bg-white shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
      <div className="flex items-center gap-2 bg-whatsapp px-3 py-2">
        <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white/20">
          <WhatsappIcon size={16} />
        </span>
        <div className="flex-1 text-white">
          <div className="text-[13px] font-bold">Canalplad</div>
          <div className="text-[11px] text-white/80">Responde en minutos</div>
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Cerrar chat"
          className="flex h-6 w-6 flex-none items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/15"
        >
          ✕
        </button>
      </div>

      <div className="bg-surface-soft px-3 py-3">
        <div className="rounded-lg rounded-tl-none bg-white px-3 py-2 text-[13px] leading-[1.4] text-ink-soft shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
          ¿Necesitas presupuesto? ¡Escríbenos! 👋
        </div>
      </div>

      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener"
        className="flex items-center justify-center gap-2 bg-whatsapp px-3 py-2 text-[13px] font-bold uppercase tracking-[0.03em] text-white no-underline transition-colors hover:bg-brand-hover"
      >
        <WhatsappIcon size={14} />
        Iniciar conversación
      </a>
    </div>
  );
}
