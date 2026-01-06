import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bokehRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Simple parallax effect on scroll
    const handleScroll = () => {
      if (!sectionRef.current || !bokehRef.current) return;
      const scrolled = window.scrollY;
      const rate = scrolled * 0.3;
      bokehRef.current.style.transform = `translateY(${rate}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Bokeh Particles */}
      <div ref={bokehRef} className="bokeh-container">
        <div className="bokeh-particle w-32 h-32 top-[20%] left-[10%]" style={{ animationDelay: "0s" }} />
        <div className="bokeh-particle w-48 h-48 top-[60%] right-[15%]" style={{ animationDelay: "2s" }} />
        <div className="bokeh-particle w-24 h-24 top-[30%] right-[25%]" style={{ animationDelay: "4s" }} />
        <div className="bokeh-particle w-40 h-40 bottom-[20%] left-[20%]" style={{ animationDelay: "1s" }} />
        <div className="bokeh-particle w-20 h-20 top-[50%] left-[40%]" style={{ animationDelay: "3s" }} />
      </div>

      {/* Palm Shadow Overlay */}
      <div className="palm-shadow-overlay" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/80 backdrop-blur-sm border border-primary/20 mb-8 animate-fade-in">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-accent-foreground">
              Now offering online consultations
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Personalised skin plans —{" "}
            <span className="text-gradient-primary">online & in Windsor</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            acne • pigmentation • sensitivity • ingrowns • glow • laser hair removal
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="btn-luxury text-primary-foreground px-8 py-6 text-base">
              <Link to="/quiz">
                Take the Skin Quiz
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-6 text-base border-primary/30 hover:bg-accent">
              <a href="https://app.cal.eu/resknclinic/online-skin-consultation" target="_blank" rel="noopener noreferrer">
                Book a Consultation
              </a>
            </Button>
          </div>

          {/* Explore Link */}
          <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/concerns"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Explore Skin Concerns
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
