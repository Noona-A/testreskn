import { useEffect, useRef } from "react";
import { Shield, BookOpen, Heart, MapPin } from "lucide-react";
import { getGSAP, prefersReducedMotion } from "@/lib/gsap";

const reasons = [
  { icon: Shield, title: "Medical Professional Led", description: "Pharmacy-informed expertise you can trust" },
  { icon: BookOpen, title: "Evidence-Informed", description: "Routines backed by clinical research" },
  { icon: Heart, title: "Tailored Plans", description: "Personalised care with ongoing support" },
  { icon: MapPin, title: "Luxury Local Experience", description: "Premium clinic in Windsor, Berkshire" },
];

const WhyReSKNSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;
    const api = getGSAP();
    if (!api) return;
    const { gsap } = api;
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: headingRef.current, start: "top 85%", toggleActions: "play none none none" } });
      const cards = cardsRef.current?.querySelectorAll(".reason-card");
      if (cards) gsap.fromTo(cards, { opacity: 0, y: 40, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: cardsRef.current, start: "top 80%", toggleActions: "play none none none" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 ref={headingRef} className="font-serif text-3xl md:text-4xl text-center mb-12 opacity-0">Why ReSKN</h2>
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="reason-card text-center p-6 opacity-0">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent flex items-center justify-center"><r.icon size={24} className="text-primary" /></div>
              <h3 className="font-semibold mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyReSKNSection;