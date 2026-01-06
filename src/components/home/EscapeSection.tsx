import { useEffect, useRef } from "react";

const EscapeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background reveal-section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Shimmer Line */}
          <div className="shimmer-line mb-12" />

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 leading-relaxed">
            Escape to better skin
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Picture your ideal skin — clear, calm, radiant. At ReSKN, we believe great skin starts with understanding yours. 
            Through personalised consultations and evidence-informed routines, we'll guide you to confidence that glows from within.
          </p>

          <p className="text-base text-muted-foreground/80 leading-relaxed">
            Whether you're tackling stubborn breakouts, evening out tone, or simply seeking that fresh, 
            dewy look — your journey begins with a conversation.
          </p>

          {/* Shimmer Line */}
          <div className="shimmer-line mt-12" />
        </div>
      </div>
    </section>
  );
};

export default EscapeSection;
