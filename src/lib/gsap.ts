// Centralized GSAP (CDN) access helpers.
// We load GSAP + ScrollTrigger via CDN in index.html, so they live on window.

export type GSAPApi = {
  gsap: any;
  ScrollTrigger?: any;
};

export const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export const getGSAP = (): GSAPApi | null => {
  if (typeof window === "undefined") return null;

  const w = window as any;
  const gsap = w.gsap;
  const ScrollTrigger = w.ScrollTrigger;

  if (!gsap) return null;

  // Register ScrollTrigger once when available.
  try {
    if (ScrollTrigger && !gsap.core.globals().ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }
  } catch {
    // no-op (keeps content visible even if plugin registration fails)
  }

  return { gsap, ScrollTrigger };
};
