import { useEffect, useRef } from "react";
import { ClipboardList, Video, FileText, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Take the Quiz",
    description: "Answer a few questions about your skin to discover your skin profile and get personalised recommendations.",
  },
  {
    icon: Video,
    title: "Book a Consultation",
    description: "Meet with our skin specialists online or at our Windsor clinic for an in-depth assessment.",
  },
  {
    icon: FileText,
    title: "Get Your Plan",
    description: "Receive a tailored skincare routine and treatment plan designed specifically for your needs.",
  },
  {
    icon: RefreshCw,
    title: "Review & Refine",
    description: "Regular check-ins ensure your plan evolves with your skin, with ongoing support along the way.",
  },
];

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-paradise-gradient reveal-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your journey to healthier skin in four simple steps
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-border hidden lg:block">
            <div className="shimmer-line h-full" />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold z-10">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="card-luxury p-8 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6">
                    <step.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
