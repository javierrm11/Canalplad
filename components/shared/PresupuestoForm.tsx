"use client";

import { useState } from "react";
import { CONTACT, PRESUPUESTO_SERVICIOS } from "@/lib/site";

const inputClasses =
  "w-full rounded-lg border border-[#dcdcd6] px-4 py-[14px] font-barlow text-base text-ink-soft outline-none transition-colors focus:border-brand";

interface PresupuestoFormProps {
  cardClassName?: string;
  subtitle?: string;
  successText?: string;
  rows?: number;
}

export default function PresupuestoForm({
  cardClassName = "bg-white",
  subtitle = "Te contactamos en 24-48h",
  successText = "Se ha abierto WhatsApp para enviarnos tu mensaje. Te responderemos lo antes posible.",
  rows = 3,
}: PresupuestoFormProps) {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [poblacion, setPoblacion] = useState("");
  const [servicio, setServicio] = useState(PRESUPUESTO_SERVICIOS[0]);
  const [mensaje, setMensaje] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const enviar = () => {
    if (!nombre.trim() || !telefono.trim()) {
      setError("Por favor, indícanos tu nombre y teléfono.");
      return;
    }
    let text = `Hola, soy ${nombre}. Me gustaría un presupuesto de: ${servicio}.`;
    if (poblacion.trim()) text += ` Población: ${poblacion}.`;
    if (mensaje.trim()) text += ` ${mensaje}`;
    text += ` Mi teléfono de contacto: ${telefono}.`;
    window.open(
      `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
    setSent(true);
  };

  if (sent) {
    return (
      <div className={`rounded-2xl ${cardClassName} p-10 text-center font-barlow`}>
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eafaef]">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#15a53c"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mb-[10px] text-2xl font-bold text-ink-soft">
          ¡Solicitud enviada!
        </h3>
        <p className="m-0 text-base leading-[1.6] text-ink-faint">
          {successText}
        </p>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl ${cardClassName} p-10 font-barlow`}>
      <h3 className="mb-[6px] text-2xl font-bold text-ink-soft">
        Solicita tu presupuesto
      </h3>
      <p className="mb-6 text-[15px] text-[#8a8a85]">{subtitle}</p>
      <div className="flex flex-col gap-[14px]">
        <input
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
            setError("");
          }}
          placeholder="Tu nombre*"
          className={inputClasses}
        />
        <input
          value={telefono}
          onChange={(e) => {
            setTelefono(e.target.value);
            setError("");
          }}
          placeholder="Tu teléfono*"
          className={inputClasses}
        />
        <input
          value={poblacion}
          onChange={(e) => setPoblacion(e.target.value)}
          placeholder="Población"
          className={inputClasses}
        />
        <select
          value={servicio}
          onChange={(e) => setServicio(e.target.value)}
          className={`${inputClasses} bg-white`}
        >
          {PRESUPUESTO_SERVICIOS.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Cuéntanos brevemente tu proyecto"
          rows={rows}
          className={`${inputClasses} resize-y`}
        />
        {error && (
          <div className="text-sm font-semibold text-brand-red">{error}</div>
        )}
        <button
          type="button"
          onClick={enviar}
          className="w-full rounded-lg bg-brand p-[17px] text-[17px] font-bold tracking-[0.02em] text-white transition-colors hover:bg-brand-hover"
        >
          ENVIAR POR WHATSAPP →
        </button>
        <p className="m-0 mt-[2px] text-center text-xs leading-[1.5] text-[#a0a09a]">
          Al enviar se abrirá WhatsApp con tu mensaje listo para enviar.
        </p>
      </div>
    </div>
  );
}
