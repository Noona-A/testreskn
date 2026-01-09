import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonHoverGlow } from "@/hooks/useGSAPAnimations";
import { getGSAP, prefersReducedMotion } from "@/lib/gsap";
import heroImage from "@/assets/hero-consultation.jpg";
import laserImage from "@/assets/laser-treatment.jpg";

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
          loading="eager"
          decoding="async"
          fetchPriority="high"
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
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/20 backdrop-blur-sm border border-orange/30 mb-8">
            <Sparkles size={16} className="text-orange" />
            <span className="text-sm font-medium text-white">
              Skin consultations & laser hair removal
            </span>
          </div>

          {/* Headline */}
          <h1 ref={headlineRef} className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6">
            Your best skin starts here
          </h1>

          {/* Subheadline */}
          <p ref={subheadRef} className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Personalised skin plans & medical-grade laser treatments. Expert care by a UK-registered pharmacist in Windsor.
          </p>

          {/* Two Service Cards */}
          <div ref={ctaRef} className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            <Link
              to="/booking"
              className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-purple/20 flex items-center justify-center mb-4 group-hover:bg-purple/30 transition-colors">
                <Video size={24} className="text-purple-light" />
              </div>
              <h3 className="font-semibold text-white text-lg mb-1">Skin Consultation</h3>
              <p className="text-white/70 text-sm mb-3">
                Acne • Pigmentation • Sensitivity • Anti-ageing
              </p>
              <span className="text-orange text-sm font-medium flex items-center gap-1">
                From £20 <ArrowRight size={14} />
              </span>
            </Link>

            <Link
              to="/booking"
              className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-orange/20 flex items-center justify-center mb-4 group-hover:bg-orange/30 transition-colors">
                <Sparkles size={24} className="text-orange" />
              </div>
              <h3 className="font-semibold text-white text-lg mb-1">Laser Hair Removal</h3>
              <p className="text-white/70 text-sm mb-3">
                Face • Body • Bikini • Full body packages
              </p>
              <span className="text-orange text-sm font-medium flex items-center gap-1">
                From £25 <ArrowRight size={14} />
              </span>
            </Link>
          </div>

          {/* Main CTA */}
          <Button
            asChild
            size="lg"
            className="btn-luxury text-white px-10 py-6 text-base"
            {...buttonHoverGlow}
          >
            <Link to="/booking">
              Book Now
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
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
