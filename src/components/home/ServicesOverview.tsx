import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap } from "lucide-react";
import { cardHoverLift } from "@/hooks/useGSAPAnimations";
import { getGSAP, prefersReducedMotion } from "@/lib/gsap";

const services = [
  {
    icon: Sparkles,
    title: "Skin Consultations",
    description: "Personalised, evidence-informed skincare for acne, pigmentation, sensitivity, and ageing.",
    cta: "Take the Skin Quiz",
    link: "/quiz",
  },
  {
    icon: Zap,
    title: "Laser Hair Removal",
    description: "Medical-grade laser treatments for face and body hair reduction.",
    cta: "View Laser Hair Removal",
    link: "/laser-hair-removal",
  },
];

const ServicesOverview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;
    const api = getGSAP();
    if (!api) return;
    const { gsap } = api;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: headingRef.current, start: "top 85%" } }
      );

      const cards = cardsRef.current?.querySelectorAll(".service-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: cardsRef.current, start: "top 80%" } }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center mb-14 opacity-0">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Two focused services designed to help you look and feel your best</p>
        </div>
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="service-card opacity-0" {...cardHoverLift}>
              <div className="card-luxury p-8 md:p-10 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6">
                  <service.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                <Button asChild className="btn-luxury text-white w-full sm:w-auto">
                  <Link to={service.link}>{service.cta}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
