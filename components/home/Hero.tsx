import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { HERO_IMAGE, HERO_INSET } from "@/lib/home-data";
import { CheckIcon, ShieldIcon, WhatsappIcon } from "@/components/shared/icons";
import { loadDelay } from "@/components/shared/reveal";

const HIGHLIGHTS = ["Presupuesto sin compromiso", "Respuesta en 24-48 h", "Garantía total"];

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="bg-white">
      <div className="container-site grid items-center gap-16 pb-24 pt-14 sm:pt-[72px] lg:grid-cols-2">
        <div>
          <p className="anim-in-up inline-flex items-center gap-2.5 rounded-full bg-brand-tint py-[7px] pl-2 pr-3.5 text-sm font-bold text-brand">
            <span className="flex-none whitespace-nowrap rounded-full bg-brand px-2.5 py-[3px] text-xs text-white">15+ años</span>
            Fabricación y montaje en Córdoba
          </p>
          <h1
            id="hero-title"
            style={loadDelay(60)}
            className="anim-in-up mt-5 text-[clamp(38px,5vw,62px)] font-extrabold leading-[1.06] tracking-[-0.03em]"
          >
            Canalones de aluminio y pladur en Córdoba,{" "}
            <span className="text-brand underline decoration-[#9fdcb2] decoration-[8px] underline-offset-4 [text-decoration-skip-ink:none]">
              instalados por profesionales
            </span>
          </h1>
          <p style={loadDelay(140)} className="anim-in-up mt-5 max-w-[540px] text-[19px] text-body">
            Fabricamos los canalones a la medida de tu tejado y montamos techos y tabiques
            de pladur. Trabajo limpio, rápido y con garantía en Córdoba y toda Andalucía.
          </p>
          <div style={loadDelay(220)} className="anim-in-up mt-8 flex flex-wrap gap-3">
            <Link href="/contacto#presupuesto" className="btn btn-red min-h-[56px] px-7">
              Pedir presupuesto gratis <span className="arrow" aria-hidden="true">→</span>
            </Link>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline min-h-[56px]"
            >
              <WhatsappIcon size={20} />
              Escribir por WhatsApp
            </a>
          </div>
          <ul
            style={loadDelay(300)}
            className="anim-in-up mt-8 flex flex-wrap gap-x-6 gap-y-2.5 text-[15px] font-semibold text-body"
          >
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckIcon size={18} className="text-brand" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative pb-10 pl-6 sm:pl-10">
          <div className="overflow-hidden rounded-[28px] bg-soft shadow-[0_30px_70px_rgba(22,24,26,0.18)]">
            <Image
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              width={2048}
              height={1536}
              priority
              sizes="(min-width: 1280px) 560px, (min-width: 1024px) 45vw, 92vw"
              className="anim-in-img h-[360px] w-full object-cover sm:h-[480px] lg:h-[540px]"
            />
          </div>
          <div
            style={loadDelay(400)}
            className="anim-pop absolute bottom-0 left-0 w-[42%] max-w-[230px] overflow-hidden rounded-[20px] border-[6px] border-white shadow-[0_20px_44px_rgba(22,24,26,0.2)]"
          >
            <Image
              src={HERO_INSET.src}
              alt={HERO_INSET.alt}
              width={460}
              height={345}
              sizes="230px"
              className="h-[130px] w-full object-cover sm:h-[170px]"
            />
          </div>
          <div
            style={loadDelay(550)}
            className="anim-pop absolute right-2 top-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-float sm:-right-3"
          >
            <span className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-brand-tint text-brand">
              <ShieldIcon size={22} />
            </span>
            <span className="leading-tight">
              <strong className="block text-base">Garantía total</strong>
              <span className="text-[13px] text-muted">en todos los trabajos</span>
            </span>
          </div>
          <div
            style={loadDelay(750)}
            className="anim-pop absolute bottom-2 right-4 rounded-2xl bg-ink px-4 py-3.5 text-white shadow-[0_18px_40px_rgba(22,24,26,0.25)] sm:right-6"
          >
            <p className="text-[15px] tracking-[2px] text-star-light" aria-label="Valoración de 5 estrellas">
              ★★★★★
            </p>
            <p className="text-xl font-extrabold leading-tight">+500 clientes</p>
            <p className="text-[13px] text-[#c4c8c4]">en Córdoba y provincia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
