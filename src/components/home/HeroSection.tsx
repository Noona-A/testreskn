import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonHoverGlow } from "@/hooks/useGSAPAnimations";
import { getGSAP, prefersReducedMotion } from "@/lib/gsap";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgGradientRef = useRef<HTMLDivElement>(null);
  const bokehRef = useRef<HTMLDivElement>(null);
  const palmRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;

    const api = getGSAP();
    if (!api) return;
    const { gsap } = api;

    const ctx = gsap.context(() => {
      // Parallax layers on scroll
      if (bgGradientRef.current) {
        gsap.to(bgGradientRef.current, {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (bokehRef.current) {
        gsap.to(bokehRef.current, {
          yPercent: 50,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (palmRef.current) {
        gsap.to(palmRef.current, {
          yPercent: 20,
          xPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Floating bokeh particles
      const particles = bokehRef.current?.querySelectorAll(".bokeh-particle");
      particles?.forEach((particle, i) => {
        gsap.to(particle, {
          y: "random(-30, 30)",
          x: "random(-20, 20)",
          scale: "random(0.8, 1.2)",
          duration: "random(4, 6)",
          delay: i * 0.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      // Content entrance animations
      const tl = gsap.timeline({ delay: 0.3 });

      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: 30, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }
        );
      }

      if (headlineRef.current) {
        // Split headline into words for stagger
        const text = headlineRef.current.innerHTML;
        const words = headlineRef.current.textContent?.split(" ") || [];
        headlineRef.current.innerHTML = words
          .map((word) => `<span class="inline-block overflow-hidden"><span class="inline-block hero-word">${word}</span></span>`)
          .join(" ");

        tl.fromTo(
          ".hero-word",
          { y: "110%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1, stagger: 0.08, ease: "power3.out" },
          "-=0.4"
        );
      }

      if (subheadRef.current) {
        tl.fromTo(
          subheadRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" },
          "-=0.4"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Gradient Layer */}
      <div ref={bgGradientRef} className="absolute inset-0 bg-hero-gradient will-change-transform" />

      {/* Bokeh Particles Layer */}
      <div ref={bokehRef} className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform">
        <div className="bokeh-particle absolute w-32 h-32 top-[15%] left-[8%] rounded-full bg-gradient-radial from-bokeh-glow/40 to-transparent" />
        <div className="bokeh-particle absolute w-48 h-48 top-[55%] right-[12%] rounded-full bg-gradient-radial from-tropical-teal-light/30 to-transparent" />
        <div className="bokeh-particle absolute w-24 h-24 top-[25%] right-[25%] rounded-full bg-gradient-radial from-golden-hour/20 to-transparent" />
        <div className="bokeh-particle absolute w-40 h-40 bottom-[25%] left-[18%] rounded-full bg-gradient-radial from-bokeh-glow/35 to-transparent" />
        <div className="bokeh-particle absolute w-20 h-20 top-[45%] left-[45%] rounded-full bg-gradient-radial from-tropical-teal-light/25 to-transparent" />
        <div className="bokeh-particle absolute w-36 h-36 top-[70%] left-[60%] rounded-full bg-gradient-radial from-golden-hour/15 to-transparent" />
      </div>

      {/* Palm Shadow Overlay Layer */}
      <div ref={palmRef} className="palm-shadow-overlay will-change-transform" />

      {/* Content */}
      <div ref={contentRef} className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/80 backdrop-blur-sm border border-primary/20 mb-8">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-accent-foreground">
              Now offering online consultations
            </span>
          </div>

          {/* Headline */}
          <h1 ref={headlineRef} className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-6">
            Personalised skin plans — online & in Windsor
          </h1>

          {/* Subheadline */}
          <p ref={subheadRef} className="text-lg md:text-xl text-muted-foreground mb-10">
            acne • pigmentation • sensitivity • ingrowns • glow • laser hair removal
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="btn-luxury text-primary-foreground px-8 py-6 text-base"
              {...buttonHoverGlow}
            >
              <Link to="/quiz">
                Take the Skin Quiz
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base border-primary/30 hover:bg-accent"
            >
              <a href="https://app.cal.eu/resknclinic/online-skin-consultation" target="_blank" rel="noopener noreferrer">
                Book a Consultation
              </a>
            </Button>
          </div>

          {/* Explore Link */}
          <div className="mt-8">
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
