import type { CSSProperties } from "react";

export type RevealVariant = "up" | "left" | "right" | "zoom" | "line";

/**
 * Atributos para animar un elemento al entrar en pantalla.
 * Uso: <div {...reveal("up", 120)}>…</div>
 * ScrollReveal (en el layout) añade data-shown cuando el elemento es visible.
 */
export function reveal(variant: RevealVariant = "up", delayMs = 0) {
  return {
    "data-reveal": variant,
    ...(delayMs
      ? { style: { "--reveal-delay": `${delayMs}ms` } as CSSProperties }
      : {}),
  };
}

/** Retraso para animaciones de carga (.anim-in-up / .anim-pop). */
export function loadDelay(delayMs: number) {
  return { "--d": `${delayMs}ms` } as CSSProperties;
}
