import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EscapeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const text1Ref = useRef<HTMLParagraphElement>(null);
  const text2Ref = useRef<HTMLParagraphElement>(null);
  const shimmer1Ref = useRef<HTMLDivElement>(null);
  const shimmer2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Shimmer line animations
      [shimmer1Ref, shimmer2Ref].forEach((ref) => {
        if (ref.current) {
          gsap.fromTo(
            ref.current.querySelector(".shimmer-glow"),
            { xPercent: -100 },
            {
              xPercent: 200,
              duration: 2.5,
              ease: "power1.inOut",
              repeat: -1,
              repeatDelay: 2,
              scrollTrigger: {
                trigger: ref.current,
                start: "top 90%",
                toggleActions: "play pause play pause",
              },
            }
          );
        }
      });

      // Content reveal with blur effect
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" }
      )
        .fromTo(
          text1Ref.current,
          { opacity: 0, y: 30, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          text2Ref.current,
          { opacity: 0, y: 30, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out" },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Shimmer Line */}
          <div ref={shimmer1Ref} className="relative h-px w-full mb-12 bg-gradient-to-r from-transparent via-border to-transparent overflow-hidden">
            <div className="shimmer-glow absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>

          <h2 ref={headlineRef} className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 leading-relaxed opacity-0">
            Escape to better skin
          </h2>

          <p ref={text1Ref} className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 opacity-0">
            Picture your ideal skin — clear, calm, radiant. At ReSKN, we believe great skin starts with understanding yours. 
            Through personalised consultations and evidence-informed routines, we'll guide you to confidence that glows from within.
          </p>

          <p ref={text2Ref} className="text-base text-muted-foreground/80 leading-relaxed opacity-0">
            Whether you're tackling stubborn breakouts, evening out tone, or simply seeking that fresh, 
            dewy look — your journey begins with a conversation.
          </p>

          {/* Shimmer Line */}
          <div ref={shimmer2Ref} className="relative h-px w-full mt-12 bg-gradient-to-r from-transparent via-border to-transparent overflow-hidden">
            <div className="shimmer-glow absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EscapeSection;
