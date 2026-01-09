import { useEffect, useRef } from "react";
import { getGSAP, prefersReducedMotion } from "@/lib/gsap";

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;
    const api = getGSAP();
    if (!api) return;
    const { gsap } = api;
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: headingRef.current, start: "top 85%", toggleActions: "play none none none" } });
      const cards = cardsRef.current?.querySelectorAll(".testimonial-card");
      if (cards) gsap.fromTo(cards, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: cardsRef.current, start: "top 80%", toggleActions: "play none none none" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <div ref={headingRef} className="opacity-0">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground mb-12">Real reviews coming soon</p>
        </div>
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="testimonial-card card-luxury p-6 opacity-0">
              <div className="h-4 bg-muted rounded w-3/4 mx-auto mb-4 animate-pulse" />
              <div className="h-3 bg-muted rounded w-1/2 mx-auto animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;