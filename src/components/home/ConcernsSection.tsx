import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Sun, Flame, Scissors, Clock } from "lucide-react";
import { cardHoverLift } from "@/hooks/useGSAPAnimations";
import { getGSAP, prefersReducedMotion } from "@/lib/gsap";

const concerns = [
  { icon: Droplets, title: "Acne", description: "Breakouts, blemishes, and oily skin management", href: "/concerns/acne", iconBg: "bg-orange/10", iconColor: "text-orange" },
  { icon: Sun, title: "Pigmentation", description: "Dark spots, uneven tone, and sun damage", href: "/concerns/pigmentation", iconBg: "bg-orange-light/10", iconColor: "text-orange-light" },
  { icon: Flame, title: "Sensitivity & Redness", description: "Reactive skin, rosacea, and inflammation", href: "/concerns/sensitivity", iconBg: "bg-burgundy-light/10", iconColor: "text-burgundy-light" },
  { icon: Scissors, title: "Ingrown Hairs", description: "Bumps, irritation from shaving or waxing", href: "/concerns/ingrowns", iconBg: "bg-purple-light/10", iconColor: "text-purple-light" },
  { icon: Clock, title: "Anti-Ageing", description: "Fine lines, texture, and skin firmness", href: "/concerns/anti-ageing", iconBg: "bg-purple/10", iconColor: "text-purple" },
];

const ConcernsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;

    const api = getGSAP();
    if (!api) return;
    const { gsap } = api;

    const ctx = gsap.context(() => {
      // Heading animation with blur
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Cards stagger with scale
      const cards = cardsRef.current?.querySelectorAll(".concern-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );

        // Icons pop animation
        const icons = cardsRef.current?.querySelectorAll(".concern-icon");
        gsap.fromTo(
          icons,
          { scale: 0, rotate: -45 },
          {
            scale: 1,
            rotate: 0,
            duration: 0.5,
            stagger: 0.1,
            delay: 0.3,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center mb-16 opacity-0">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Skin Concerns We Treat
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whatever your skin is telling you, we're here to listen and help
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {concerns.map((concern) => (
            <Link
              key={concern.title}
              to={concern.href}
              className="concern-card card-luxury p-6 group opacity-0"
              {...cardHoverLift}
            >
              <div className={`concern-icon w-12 h-12 rounded-xl ${concern.iconBg} ${concern.iconColor} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                <concern.icon size={24} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {concern.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {concern.description}
              </p>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/concerns"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View all skin concerns
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConcernsSection;
