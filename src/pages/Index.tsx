import { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import EscapeSection from "@/components/home/EscapeSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ConcernsSection from "@/components/home/ConcernsSection";
import ServicesSection from "@/components/home/ServicesSection";
import TreatmentsSection from "@/components/home/TreatmentsSection";
import WhyReSKNSection from "@/components/home/WhyReSKNSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  useEffect(() => {
    document.title = "ReSKN Clinic | Personalised Skin Plans in Windsor, Berkshire";
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "ReSKN Clinic",
          "description": "Personalised skin plans, evidence-informed guidance, and curated treatments.",
          "url": "https://resknclinic.co.uk",
          "email": "hello@resknclinic.co.uk",
          "telephone": "+44 1234 567 890",
          "address": { "@type": "PostalAddress", "addressLocality": "Windsor", "addressRegion": "Berkshire", "addressCountry": "UK" }
        })
      }} />
      <HeroSection />
      <EscapeSection />
      <HowItWorksSection />
      <ConcernsSection />
      <ServicesSection />
      <TreatmentsSection />
      <WhyReSKNSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default Index;
