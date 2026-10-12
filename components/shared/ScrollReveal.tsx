"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Muestra con animación los elementos [data-reveal] cuando entran en pantalla. */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    (window as Window & { __revealReady?: boolean }).__revealReady = true;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-shown])"),
    );
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.setAttribute("data-shown", ""));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-shown", "");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
