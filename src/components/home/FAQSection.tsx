import { useEffect, useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getGSAP, prefersReducedMotion } from "@/lib/gsap";

const faqs = [
  { q: "Who are the consultations for?", a: "Anyone looking to improve their skin health — whether you're dealing with acne, pigmentation, sensitivity, or just want a better routine." },
  { q: "Are online consultations as effective?", a: "Yes! Many skin concerns can be effectively assessed via video. We'll recommend an in-clinic visit if needed." },
  { q: "What happens after I book?", a: "You'll receive a pre-consultation questionnaire to complete before your appointment." },
  { q: "Is prescription treatment safe?", a: "All prescriptions are clinician-assessed and include follow-up support. We follow antibiotic stewardship guidelines." },
  { q: "How does laser hair removal work?", a: "Our diode laser targets hair follicles with light energy, reducing hair growth over multiple sessions." },
  { q: "Is laser suitable for my skin tone?", a: "Our technology is safe for all skin tones (Fitzpatrick I-VI). We always do a patch test first." },
];

const FAQSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !sectionRef.current) return;
    const api = getGSAP();
    if (!api) return;
    const { gsap } = api;
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: headingRef.current, start: "top 85%", toggleActions: "play none none none" } });
      const items = accordionRef.current?.querySelectorAll("[data-faq-item]");
      if (items) gsap.fromTo(items, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: accordionRef.current, start: "top 80%", toggleActions: "play none none none" } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 ref={headingRef} className="font-serif text-3xl md:text-4xl text-center mb-12 opacity-0">Frequently Asked Questions</h2>
        <div ref={accordionRef}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border px-6 opacity-0" data-faq-item>
                <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;