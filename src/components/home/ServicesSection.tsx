import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Video, MapPin, Pill, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { buttonHoverGlow, cardHoverLift } from "@/hooks/useGSAPAnimations";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Video,
    title: "Online Skin Consultation",
    description: "Connect with our specialists from anywhere via video call. Perfect for routine check-ins and initial assessments.",
    duration: "30 mins",
    price: "£45",
    href: "/services/online-consultation",
    bookingLink: "https://app.cal.eu/resknclinic/online-skin-consultation",
  },
  {
    icon: MapPin,
    title: "In-Clinic Consultation",
    description: "Visit our luxury Windsor clinic for a comprehensive skin analysis with advanced diagnostic tools.",
    duration: "45 mins",
    price: "£65",
    href: "/services/in-clinic-consultation",
    bookingLink: "https://app.cal.eu/resknclinic/in-clinic-skin-consultation",
  },
  {
    icon: Pill,
    title: "Prescription Acne Pathway",
    description: "Clinician-led assessment for prescription-strength treatments when over-the-counter options aren't enough.",
    duration: "20 mins",
    price: "£35",
    href: "/services/prescription-acne",
    bookingLink: "https://app.cal.eu/resknclinic/prescription-acne-assessment",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading animation
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

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll(".service-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, rotateX: 15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.9,
            stagger: 0.2,
            ease: "power3.out",
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center mb-16 opacity-0">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert skin consultations tailored to your lifestyle
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" style={{ perspective: "1000px" }}>
          {services.map((service) => (
            <div 
              key={service.title} 
              className="service-card card-luxury p-8 flex flex-col opacity-0"
              {...cardHoverLift}
            >
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6">
                <service.icon size={28} className="text-primary" />
              </div>

              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {service.description}
              </p>

              <div className="flex items-center gap-4 mb-6 text-sm">
                <span className="text-muted-foreground">{service.duration}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span className="font-semibold text-primary">{service.price}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  asChild 
                  className="btn-luxury text-primary-foreground flex-1"
                  {...buttonHoverGlow}
                >
                  <a href={service.bookingLink} target="_blank" rel="noopener noreferrer">
                    Book Now
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-primary/30">
                  <Link to={service.href}>
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View all services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
