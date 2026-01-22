import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const laserFaqs = [
  {
    question: "What is laser hair removal and how does it work?",
    answer: "Laser hair removal uses focused light energy to target the hair follicle beneath the skin. The laser heats the follicle to reduce its ability to regrow hair, resulting in long-term hair reduction over a course of treatments."
  },
  {
    question: "How many laser hair removal sessions will I need?",
    answer: "Most clients need a course of 6–8 sessions for best results. Sessions are usually spaced 4–6 weeks apart depending on the treatment area and your hair growth cycle."
  },
  {
    question: "Does laser hair removal hurt?",
    answer: "Most people describe the sensation as mild and very tolerable, often compared to a quick snap or gentle warmth. Cooling technology is used during treatment to maximise comfort."
  },
  {
    question: "Is laser hair removal safe for all skin types?",
    answer: "Laser hair removal is safe when performed by trained professionals using appropriate settings. During your consultation, we assess your skin and hair type to ensure the treatment is suitable and safe for you."
  },
  {
    question: "What areas can be treated with laser hair removal?",
    answer: "areas" // Special case - will be rendered with link
  },
  {
    question: "What should I do before and after my appointment?",
    answer: "Before treatment, avoid sun exposure and do not wax or pluck the area (shaving is recommended 24–48 hours before). After treatment, keep the area protected from the sun and follow any aftercare advice provided by your practitioner."
  },
  {
    question: "Are the results permanent?",
    answer: "Laser hair removal provides long-term hair reduction. Many clients enjoy smooth skin for months or years. Occasional maintenance sessions may be recommended to maintain results."
  },
  {
    question: "Am I suitable for laser hair removal?",
    answer: "Suitability depends on your skin tone, hair colour, medical history, and the area being treated. This is assessed during your consultation to ensure the treatment is safe and effective for you."
  },
  {
    question: "Can laser hair removal be done on darker skin tones?",
    answer: "Yes. With appropriate technology and settings, laser hair removal can be safely performed on darker skin tones. A consultation is essential to assess suitability and select the correct approach."
  },
  {
    question: "Is there any downtime after laser hair removal?",
    answer: "There is little to no downtime. Most clients return to normal activities immediately. Mild redness or warmth may occur but usually settles within a few hours."
  },
  {
    question: "How long should I wait between sessions?",
    answer: "Sessions are typically spaced 4–6 weeks apart depending on the area treated and your hair growth cycle. This timing helps target hairs in the active growth phase."
  }
];

const skincareFaqs = [
  {
    question: "What is a skincare consultation?",
    answer: "A skincare consultation is a professional assessment of your skin. We discuss your concerns, skin history, lifestyle factors, and goals to create a personalised treatment and skincare plan."
  },
  {
    question: "Who should book a skincare consultation?",
    answer: "Anyone experiencing concerns such as acne, pigmentation, ageing skin, sensitivity, or uneven texture can benefit from a consultation. It's also ideal if you're unsure which treatments or products are right for your skin."
  },
  {
    question: "What happens during the consultation?",
    answer: "Your practitioner will assess your skin, ask about your current routine, and discuss your goals. You'll receive tailored recommendations for treatments and home skincare, with clear explanations of expected outcomes."
  },
  {
    question: "Do I need to prepare for a skincare consultation?",
    answer: "No special preparation is needed. We recommend arriving with clean skin and being ready to discuss any products you currently use or previous treatments you've had."
  },
  {
    question: "Will I be pressured into treatments or products?",
    answer: "No. Our consultations are educational and supportive. We provide professional recommendations so you can make informed decisions at your own pace."
  },
  {
    question: "Can I book treatments after my consultation?",
    answer: "Yes. If appropriate, treatments can be booked following your consultation. You can book online via the website or speak to our team for advice."
  },
  {
    question: "How long does a skincare consultation take?",
    answer: "Most consultations last around 30 minutes, allowing enough time for a thorough skin assessment and personalised recommendations."
  },
  {
    question: "Can you help if I have sensitive or reactive skin?",
    answer: "Yes. Sensitive and reactive skin is carefully assessed, and treatment plans are tailored to minimise irritation while supporting skin health."
  }
];

const generalFaqs = [
  {
    question: "Do you offer consultations before all treatments?",
    answer: "Yes. A consultation is required before treatment to ensure suitability, safety, and to create a personalised plan."
  },
  {
    question: "Can I wear makeup after treatments?",
    answer: "This depends on the treatment performed. Your practitioner will advise you on when it's safe to apply makeup and which products to use."
  },
  {
    question: "What if I'm pregnant or breastfeeding?",
    answer: "Some treatments may not be suitable during pregnancy or breastfeeding. This will be discussed during your consultation to ensure your safety."
  },
  {
    question: "Do you treat both men and women?",
    answer: "Yes. Our treatments and consultations are suitable for all genders."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    ...laserFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer === "areas" 
          ? "Laser hair removal can be used on most areas of the body, including face, underarms, arms, legs, bikini area, chest, back, and more."
          : faq.answer
      }
    })),
    ...skincareFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })),
    ...generalFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  ]
};

const FAQ = () => {
  return (
    <>
      <SEO
        title="Frequently Asked Questions | ReSKN Clinic Windsor"
        description="Find answers to common questions about laser hair removal and skincare consultations at ReSKN Clinic Windsor. Learn about treatments, preparation, and what to expect."
        keywords="FAQ, laser hair removal questions, skincare consultation questions, ReSKN Clinic, Windsor clinic"
        canonical="https://resknclinic.co.uk/faq"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-accent/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We've answered some of the most common questions about our laser hair removal treatments and skincare consultations below. If you have a question that isn't covered, please feel free to{" "}
                <Link to="/contact" className="text-primary hover:underline">contact us</Link> or{" "}
                <Link to="/booking" className="text-primary hover:underline">book a consultation</Link> with our team.
              </p>
            </div>
          </div>
        </section>

        {/* Laser Hair Removal FAQs */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8">
                Laser Hair Removal FAQs
              </h2>
              
              <Accordion type="single" collapsible className="w-full space-y-3">
                {laserFaqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`laser-${index}`}
                    className="border border-border/50 rounded-lg px-6 bg-card"
                  >
                    <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {faq.answer === "areas" ? (
                        <>
                          Laser hair removal can be used on most areas of the body, including face, underarms, arms, legs, bikini area, chest, back, and more. You can view our full list of treatment areas on the{" "}
                          <Link to="/laser-hair-removal" className="text-primary hover:underline">
                            Laser Hair Removal services page
                          </Link>.
                        </>
                      ) : (
                        faq.answer
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Skin Care & Consultation FAQs */}
        <section className="py-12 md:py-16 bg-accent/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8">
                Skin Care & Consultation FAQs
              </h2>
              
              <Accordion type="single" collapsible className="w-full space-y-3">
                {skincareFaqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`skincare-${index}`}
                    className="border border-border/50 rounded-lg px-6 bg-card"
                  >
                    <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* General / Practical FAQs */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8">
                General & Practical FAQs
              </h2>
              
              <Accordion type="single" collapsible className="w-full space-y-3">
                {generalFaqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`general-${index}`}
                    className="border border-border/50 rounded-lg px-6 bg-card"
                  >
                    <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-accent/20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Still have questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're happy to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-luxury text-primary-foreground px-8 py-6 text-base">
                  <Link to="/booking">Book a Consultation</Link>
                </Button>
                <Button asChild variant="outline" className="px-8 py-6 text-base border-primary text-primary hover:bg-primary/10">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;
