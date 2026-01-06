import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { buttonHoverGlow } from "@/hooks/useGSAPAnimations";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Buttons stagger
      const buttons = contentRef.current?.querySelectorAll("a, button");
      if (buttons) {
        gsap.fromTo(
          buttons,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            delay: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
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
    <section ref={sectionRef} className="py-24 bg-paradise-gradient">
      <div className="container mx-auto px-4 text-center">
        <div ref={contentRef} className="opacity-0">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Ready to Begin Your Skin Journey?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Take our free skin quiz or book a consultation today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="btn-luxury text-primary-foreground"
              {...buttonHoverGlow}
            >
              <Link to="/quiz">Take the Skin Quiz</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://app.cal.eu/resknclinic" target="_blank" rel="noopener noreferrer">Book Consultation</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
