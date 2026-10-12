import { CONTACT } from "@/lib/site";
import PresupuestoForm from "@/components/shared/PresupuestoForm";
import { PhoneIcon } from "@/components/shared/icons";
import { reveal } from "@/components/shared/reveal";

export default function PresupuestoSection() {
  return (
    <section id="presupuesto" aria-labelledby="presupuesto-title" className="px-4 pb-24 sm:px-6 lg:px-8 lg:pb-28">
      <div
        {...reveal("zoom")}
        className="mx-auto grid max-w-site items-center gap-12 rounded-[32px] bg-brand p-7 text-white sm:p-12 lg:grid-cols-2 lg:p-[72px]"
      >
        <div>
          <h2
            id="presupuesto-title"
            className="text-[clamp(30px,3.8vw,50px)] font-extrabold leading-[1.1] tracking-[-0.025em]"
          >
            Pide tu presupuesto gratis
          </h2>
          <p className="mt-4 text-lg text-[#dff3e5]">
            Rellena el formulario o llámanos. Te respondemos en 24-48 horas, sin compromiso.
          </p>
          <a href={CONTACT.phoneHref} className="btn btn-white mt-7 min-h-[60px] px-6 text-2xl font-extrabold">
            <PhoneIcon size={22} />
            {CONTACT.phoneDisplay}
          </a>
          <p className="mt-4 text-[15px] text-[#dff3e5]">
            {CONTACT.email} · {CONTACT.hours.label}
          </p>
        </div>
        <PresupuestoForm showLocation={false} rows={3} />
      </div>
    </section>
  );
}
