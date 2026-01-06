import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
    // Update document title
    document.title = "ReSKN Clinic | Personalised Skin Plans in Windsor, Berkshire";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Personalised skin consultations for acne, pigmentation, sensitivity, and more. Expert-led online and in-clinic services in Windsor, Berkshire. Book your skin consultation today.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* JSON-LD for Local Business */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "ReSKN Clinic",
          "description": "Personalised skin plans, evidence-informed guidance, and curated treatments for acne, pigmentation, sensitivity, and more.",
          "url": "https://resknclinic.co.uk",
          "email": "hello@resknclinic.co.uk",
          "telephone": "+44 1234 567 890",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Windsor",
            "addressRegion": "Berkshire",
            "addressCountry": "UK"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Windsor, Berkshire, UK"
          },
          "priceRange": "££",
          "openingHours": "Mo-Sa 09:00-18:00"
        })
      }} />

      <Header />
      
      <main>
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
      </main>

      <Footer />
    </div>
  );
};

export default Index;
