import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonHoverGlow } from "@/hooks/useGSAPAnimations";
import { getGSAP, prefersReducedMotion } from "@/lib/gsap";
import heroImage from "@/assets/hero-consultation.jpg";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgGradientRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
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
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0.8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

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
      {/* Background Image Layer */}
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        <img
          src={heroImage}
          alt="Skin consultation at ReSKN Clinic"
          className="w-full h-full object-cover scale-110"
        />
      </div>

      {/* Gradient Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-r from-burgundy-deep/90 via-burgundy/80 to-burgundy-deep/70"
      />

      {/* Purple accent gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple/30 to-transparent" />

      {/* Content */}
      <div ref={contentRef} className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/20 backdrop-blur-sm border border-orange/30 mb-8">
            <Sparkles size={16} className="text-orange" />
            <span className="text-sm font-medium text-white">
              Now offering online consultations
            </span>
          </div>

          {/* Headline */}
          <h1 ref={headlineRef} className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6">
            Personalised skin plans — online & in Windsor
          </h1>

          {/* Subheadline */}
          <p ref={subheadRef} className="text-lg md:text-xl text-white/80 mb-10">
            acne • pigmentation • sensitivity • ingrowns • glow • laser hair removal
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="btn-luxury text-white px-8 py-6 text-base"
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
              className="px-8 py-6 text-base border-white/30 text-white hover:bg-white/10 hover:text-white"
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
              className="inline-flex items-center gap-2 text-white/70 hover:text-orange transition-colors text-sm"
            >
              Explore Skin Concerns
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-orange rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
