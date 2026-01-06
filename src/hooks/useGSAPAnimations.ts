import { useEffect, RefObject } from "react";
import { getGSAP, prefersReducedMotion } from "@/lib/gsap";

const showElementNow = (el: HTMLElement) => {
  el.style.opacity = "1";
  el.style.transform = "none";
  el.style.filter = "none";
};

const showNodeListNow = (nodes: NodeListOf<Element>) => {
  nodes.forEach((n) => {
    if (n instanceof HTMLElement) showElementNow(n);
  });
};

// Hero parallax animation hook
export const useHeroParallax = (
  containerRef: RefObject<HTMLElement>,
  layers: { ref: RefObject<HTMLElement>; speed: number }[]
) => {
  useEffect(() => {
    if (prefersReducedMotion() || !containerRef.current) return;

    const api = getGSAP();
    if (!api) return;

    const { gsap } = api;

    const ctx = gsap.context(() => {
      layers.forEach(({ ref, speed }) => {
        if (!ref.current) return;

        gsap.to(ref.current, {
          yPercent: speed * 50,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, layers]);
};

// Scroll reveal animation hook
export const useScrollReveal = (
  ref: RefObject<HTMLElement>,
  options?: {
    y?: number;
    duration?: number;
    delay?: number;
    stagger?: number;
    blur?: boolean;
  }
) => {
  useEffect(() => {
    // Reduced motion: show content normally
    if (prefersReducedMotion() || !ref.current) {
      if (ref.current) showElementNow(ref.current);
      return;
    }

    const api = getGSAP();
    if (!api) {
      showElementNow(ref.current);
      return;
    }

    const { gsap } = api;
    const { y = 60, duration = 1, delay = 0, blur = true } = options || {};

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
          y,
          filter: blur ? "blur(10px)" : "blur(0px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [ref, options]);
};

// Stagger children animation hook
export const useStaggerReveal = (
  containerRef: RefObject<HTMLElement>,
  childSelector: string = ":scope > *",
  options?: { stagger?: number; y?: number; duration?: number }
) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const children = containerRef.current.querySelectorAll(childSelector);

    // Reduced motion: show content normally
    if (prefersReducedMotion()) {
      showNodeListNow(children);
      return;
    }

    const api = getGSAP();
    if (!api) {
      showNodeListNow(children);
      return;
    }

    const { gsap } = api;
    const { stagger = 0.15, y = 40, duration = 0.8 } = options || {};

    const ctx = gsap.context(() => {
      gsap.fromTo(
        children,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, childSelector, options]);
};

// Text split and animate hook
export const useTextReveal = (
  ref: RefObject<HTMLElement>,
  options?: {
    delay?: number;
    duration?: number;
    stagger?: number;
  }
) => {
  useEffect(() => {
    if (!ref.current) return;

    // Reduced motion: show content normally
    if (prefersReducedMotion()) {
      showElementNow(ref.current);
      return;
    }

    const api = getGSAP();
    if (!api) {
      showElementNow(ref.current);
      return;
    }

    const { gsap } = api;
    const { delay = 0, duration = 0.8, stagger = 0.05 } = options || {};

    const element = ref.current;
    const originalText = element.textContent || "";

    // Split into words
    const words = originalText.split(" ");
    element.innerHTML = words
      .map(
        (word) =>
          `<span class="inline-block overflow-hidden"><span class="inline-block">${word}</span></span>`
      )
      .join(" ");

    const innerSpans = element.querySelectorAll("span > span");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        innerSpans,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration,
          stagger,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, ref);

    return () => {
      ctx.revert();
      element.textContent = originalText;
    };
  }, [ref, options]);
};

// Floating animation for decorative elements
export const useFloatingAnimation = (
  ref: RefObject<HTMLElement>,
  options?: {
    yAmount?: number;
    duration?: number;
    delay?: number;
  }
) => {
  useEffect(() => {
    if (prefersReducedMotion() || !ref.current) return;

    const api = getGSAP();
    if (!api) return;

    const { gsap } = api;
    const { yAmount = 20, duration = 3, delay = 0 } = options || {};

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: yAmount,
        duration,
        delay,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, ref);

    return () => ctx.revert();
  }, [ref, options]);
};

// Shimmer animation for dividers
export const useShimmerAnimation = (ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    if (prefersReducedMotion() || !ref.current) return;

    const api = getGSAP();
    if (!api) return;

    const { gsap } = api;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { backgroundPosition: "-200% 0" },
        {
          backgroundPosition: "200% 0",
          duration: 3,
          ease: "none",
          repeat: -1,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%",
            toggleActions: "play pause play pause",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [ref]);
};

// Button hover glow effect (call in component with event handlers)
export const buttonHoverGlow = {
  onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion()) return;

    const api = getGSAP();
    if (!api) return;

    const { gsap } = api;

    gsap.to(e.currentTarget, {
      // uses semantic tokens (HSL)
      boxShadow: "0 0 30px hsl(var(--primary) / 0.35)",
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
    });
  },
  onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion()) return;

    const api = getGSAP();
    if (!api) return;

    const { gsap } = api;

    gsap.to(e.currentTarget, {
      boxShadow: "0 0 0px hsl(var(--primary) / 0)",
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  },
};

// Card hover lift effect
export const cardHoverLift = {
  onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion()) return;

    const api = getGSAP();
    if (!api) return;

    const { gsap } = api;

    gsap.to(e.currentTarget, {
      y: -8,
      boxShadow: "0 20px 40px -12px hsl(var(--primary) / 0.14)",
      duration: 0.4,
      ease: "power2.out",
    });
  },
  onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion()) return;

    const api = getGSAP();
    if (!api) return;

    const { gsap } = api;

    gsap.to(e.currentTarget, {
      y: 0,
      boxShadow: "0 4px 20px -4px hsl(var(--foreground) / 0.06)",
      duration: 0.4,
      ease: "power2.out",
    });
  },
};

// Initialize all ScrollTriggers (call once in app)
export const refreshScrollTrigger = () => {
  const api = getGSAP();
  api?.ScrollTrigger?.refresh?.();
};

