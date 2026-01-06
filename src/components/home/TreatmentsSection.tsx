import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Shield, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { buttonHoverGlow } from "@/hooks/useGSAPAnimations";

gsap.registerPlugin(ScrollTrigger);

const TreatmentsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const floatingCardRef = useRef<HTMLDivElement>(null);
  const sparkleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Content reveal
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Visual reveal
      gsap.fromTo(
        visualRef.current,
        { opacity: 0, x: 60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // Floating card animation
      if (floatingCardRef.current) {
        gsap.fromTo(
          floatingCardRef.current,
          { opacity: 0, y: 40, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );

        // Continuous gentle float
        gsap.to(floatingCardRef.current, {
          y: -10,
          duration: 2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 1.5,
        });
      }

      // Sparkle icon animation
      if (sparkleRef.current) {
        gsap.to(sparkleRef.current, {
          y: -15,
          rotate: 10,
          duration: 2.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }

      // Feature items stagger
      const features = contentRef.current?.querySelectorAll(".feature-item");
      if (features) {
        gsap.fromTo(
          features,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div ref={contentRef} className="opacity-0">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-6">
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-medium text-accent-foreground">Featured Treatment</span>
              </span>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
                Laser Hair Removal
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Say goodbye to shaving, waxing, and ingrown hairs. Our advanced diode laser technology 
                delivers safe, effective, and long-lasting results for all skin types.
              </p>

              <div className="space-y-4 mb-8">
                <div className="feature-item flex items-start gap-4 opacity-0">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Zap size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Advanced Diode Technology</h4>
                    <p className="text-muted-foreground text-sm">Triple-wavelength system for maximum efficacy and comfort</p>
                  </div>
                </div>
                <div className="feature-item flex items-start gap-4 opacity-0">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Shield size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Safe for All Skin Tones</h4>
                    <p className="text-muted-foreground text-sm">Clinically proven safe across Fitzpatrick skin types I-VI</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  className="btn-luxury text-primary-foreground"
                  {...buttonHoverGlow}
                >
                  <a href="https://app.cal.eu/resknclinic/laser-patch-test" target="_blank" rel="noopener noreferrer">
                    Book Free Patch Test
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-primary/30">
                  <Link to="/treatments/laser-hair-removal">
                    Learn More
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Visual */}
            <div ref={visualRef} className="relative opacity-0">
              <div className="aspect-[4/5] rounded-3xl bg-paradise-gradient overflow-hidden relative">
                {/* Decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-primary/10 animate-pulse" />
                </div>
                
                {/* Floating bokeh */}
                <div className="absolute w-24 h-24 top-[20%] left-[20%] rounded-full bg-gradient-radial from-bokeh-glow/40 to-transparent" />
                <div className="absolute w-32 h-32 bottom-[30%] right-[20%] rounded-full bg-gradient-radial from-tropical-teal-light/30 to-transparent" />

                {/* Content overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div ref={sparkleRef}>
                      <Sparkles size={64} className="text-primary mx-auto mb-4" />
                    </div>
                    <p className="font-serif text-2xl text-foreground/80">
                      Smooth, lasting results
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div 
                ref={floatingCardRef}
                className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-lg border border-border max-w-[200px] opacity-0"
              >
                <p className="text-sm font-medium text-foreground mb-1">Patch test</p>
                <p className="text-2xl font-serif font-semibold text-primary">Free</p>
                <p className="text-xs text-muted-foreground mt-1">Before your first session</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
