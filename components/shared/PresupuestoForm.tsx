"use client";

import { useId, useState, type FormEvent } from "react";
import { CONTACT, PRESUPUESTO_SERVICIOS } from "@/lib/site";
import { CheckIcon, WhatsappIcon } from "./icons";

interface PresupuestoFormProps {
  title?: string;
  subtitle?: string;
  showLocation?: boolean;
  rows?: number;
  className?: string;
}

export default function PresupuestoForm({
  title = "Solicita tu presupuesto",
  subtitle = "Rellena el formulario y te contactamos en 24-48 h",
  showLocation = true,
  rows = 4,
  className = "",
}: PresupuestoFormProps) {
  const uid = useId();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nombre = String(data.get("nombre") ?? "").trim();
    const telefono = String(data.get("telefono") ?? "").trim();
    const poblacion = String(data.get("poblacion") ?? "").trim();
    const servicio = String(data.get("servicio") ?? "");
    const mensaje = String(data.get("mensaje") ?? "").trim();

    if (!nombre || !telefono) {
      setError("Por favor, indícanos tu nombre y teléfono.");
      return;
    }

    let text = `Hola, soy ${nombre}. Me gustaría un presupuesto de: ${servicio}.`;
    if (poblacion) text += ` Población: ${poblacion}.`;
    if (mensaje) text += ` ${mensaje}`;
    text += ` Mi teléfono de contacto: ${telefono}.`;

    window.open(
      `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener",
    );
    setSent(true);
  }

  if (sent) {
    return (
      <div
        role="status"
        className={`anim-pop rounded-3xl border border-line bg-white p-8 text-center shadow-card sm:p-12 ${className}`}
      >
        <span className="mx-auto inline-flex h-[72px] w-[72px] items-center justify-center rounded-full bg-brand-tint text-brand">
          <CheckIcon size={34} />
        </span>
        <p className="mt-5 text-[26px] font-extrabold">¡Solicitud preparada!</p>
        <p className="mx-auto mt-2.5 max-w-[380px] text-body">
          Se ha abierto WhatsApp con tu mensaje listo para enviar. Te responderemos lo
          antes posible.
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setError("");
          }}
          className="btn btn-outline mt-6 min-h-[50px] text-base"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby={`${uid}-title`}
      className={`flex flex-col gap-3.5 rounded-3xl border border-line bg-white p-6 text-ink shadow-card sm:p-9 ${className}`}
    >
      <div>
        <p id={`${uid}-title`} className="text-[26px] font-extrabold tracking-[-0.01em]">
          {title}
        </p>
        <p className="mt-0.5 text-[15px] text-muted">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-bold">
          Nombre *
          <input name="nombre" type="text" autoComplete="name" required className="field" />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-bold">
          Teléfono *
          <input
            name="telefono"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            className="field"
          />
        </label>
      </div>

      {showLocation && (
        <label className="flex flex-col gap-1.5 text-sm font-bold">
          Población
          <input name="poblacion" type="text" autoComplete="address-level2" className="field" />
        </label>
      )}

      <label className="flex flex-col gap-1.5 text-sm font-bold">
        Servicio
        <select name="servicio" className="field" defaultValue={PRESUPUESTO_SERVICIOS[0]}>
          {PRESUPUESTO_SERVICIOS.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-bold">
        Cuéntanos brevemente tu proyecto
        <textarea name="mensaje" rows={rows} className="field resize-y py-3" />
      </label>

      {error && (
        <p role="alert" className="text-sm font-semibold text-accent">
          {error}
        </p>
      )}

      <button type="submit" className="btn btn-green min-h-[58px] text-[17px] font-extrabold">
        <WhatsappIcon size={20} />
        Enviar por WhatsApp
      </button>
      <p className="text-center text-[13px] text-muted">
        Al enviar se abrirá WhatsApp con tu mensaje listo para enviar.
      </p>
    </form>
  );
}
