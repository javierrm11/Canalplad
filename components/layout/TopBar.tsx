import { CONTACT } from "@/lib/site";
import { PinIcon } from "@/components/shared/icons";

export default function TopBar() {
  return (
    <div className="bg-ink text-sm text-[#d6d9d6]">
      <div className="container-site flex flex-wrap justify-between gap-x-6 gap-y-1 py-2">
        <p className="inline-flex items-center gap-2">
          <PinIcon size={15} className="text-brand-light" />
          <span className="hidden sm:inline">Villafranca de Córdoba · Trabajamos en toda Andalucía</span>
          <span className="sm:hidden">Córdoba y toda Andalucía</span>
        </p>
        <p className="inline-flex flex-wrap gap-5">
          <span className="hidden md:inline">{CONTACT.hours.label}</span>
          <a href={CONTACT.phoneHref} className="font-bold text-white no-underline hover:underline">
            {CONTACT.phoneDisplay}
          </a>
          <a
            href={CONTACT.emailHref}
            className="hidden text-[#d6d9d6] no-underline hover:text-white md:inline"
          >
            {CONTACT.email}
          </a>
        </p>
      </div>
    </div>
  );
}
