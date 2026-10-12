import { reveal } from "./reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  dark?: boolean;
  id?: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  dark = false,
  id,
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div
      {...reveal("up")}
      className={`${centered ? "mx-auto max-w-[680px] text-center" : "max-w-[680px]"} ${className}`}
    >
      {eyebrow && (
        <p className={`eyebrow ${dark ? "text-brand-light" : "text-accent"}`}>{eyebrow}</p>
      )}
      <h2 id={id} className={`heading-2 mt-2.5 ${dark ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-lg ${dark ? "text-[#cfd3cf]" : "text-body"}`}>{intro}</p>
      )}
    </div>
  );
}
