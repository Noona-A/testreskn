import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Who are the consultations for?", a: "Anyone looking to improve their skin health — whether you're dealing with acne, pigmentation, sensitivity, or just want a better routine." },
  { q: "Are online consultations as effective?", a: "Yes! Many skin concerns can be effectively assessed via video. We'll recommend an in-clinic visit if needed." },
  { q: "What happens after I book?", a: "You'll receive a pre-consultation questionnaire to complete before your appointment." },
  { q: "Is prescription treatment safe?", a: "All prescriptions are clinician-assessed and include follow-up support. We follow antibiotic stewardship guidelines." },
  { q: "How does laser hair removal work?", a: "Our diode laser targets hair follicles with light energy, reducing hair growth over multiple sessions." },
  { q: "Is laser suitable for my skin tone?", a: "Our 808nm diode laser is safe for Fitzpatrick skin types I–V. We always do a patch test first to ensure suitability." },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">Frequently Asked Questions</h2>
        <div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border px-6">
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
