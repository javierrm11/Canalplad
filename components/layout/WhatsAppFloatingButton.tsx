import { CONTACT } from "@/lib/site";
import { WhatsappIcon } from "@/components/shared/icons";
import { loadDelay } from "@/components/shared/reveal";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={CONTACT.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir a Canalplad por WhatsApp"
      style={loadDelay(900)}
      className="anim-pop fixed bottom-5 right-5 z-50 inline-flex h-[62px] w-[62px] items-center justify-center rounded-full bg-brand text-white shadow-[0_12px_30px_rgba(15,127,46,0.35)] transition-transform hover:scale-[1.08] sm:bottom-6 sm:right-6"
    >
      <WhatsappIcon size={30} />
    </a>
  );
}
