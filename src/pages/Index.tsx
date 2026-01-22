import SEO from "@/components/SEO";
import HeroSection from "@/components/home/HeroSection";
import HomepageContent from "@/components/home/HomepageContent";

const Index = () => {
  // Structured data for homepage
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://resknclinic.co.uk/#website",
        "url": "https://resknclinic.co.uk",
        "name": "ReSKN Clinic",
        "alternateName": ["Re-SKN", "ReSKN"],
        "description": "Expert skin consultations, personalised treatment plans, and laser hair removal in Windsor, Berkshire",
        "inLanguage": "en-GB"
      },
      {
        "@type": "Organization",
        "@id": "https://resknclinic.co.uk/#organization",
        "name": "ReSKN Clinic",
        "alternateName": ["Re-SKN", "ReSKN"],
        "url": "https://resknclinic.co.uk",
        "logo": {
          "@type": "ImageObject",
          "url": "https://resknclinic.co.uk/favicon.png"
        },
        "sameAs": [
          "https://www.instagram.com/resknclinic",
          "https://www.facebook.com/resknclinic"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://resknclinic.co.uk/#webpage",
        "url": "https://resknclinic.co.uk",
        "name": "ReSKN Clinic | Personalised Skin Plans in Windsor, Berkshire",
        "description": "Expert skin consultations, personalised treatment plans, and laser hair removal at ReSKN Clinic, Windsor. Book your online consultation today.",
        "isPartOf": { "@id": "https://resknclinic.co.uk/#website" },
        "about": { "@id": "https://resknclinic.co.uk/#organization" },
        "inLanguage": "en-GB"
      }
    ]
  };

  return (
    <>
      <SEO
        title="ReSKN Clinic | Personalised Skin Plans in Windsor, Berkshire"
        description="Expert skin consultations, personalised treatment plans, and laser hair removal at ReSKN Clinic, Windsor. Book your online consultation today."
        keywords="ReSKN, ReSKN Clinic, ReSKN Windsor, Re-SKN, skin clinic Windsor, laser hair removal Windsor, personalised skin plans, skin treatment Berkshire, pharmacist skin clinic, medical grade skincare"
        canonical="https://resknclinic.co.uk"
        structuredData={structuredData}
      />
      <HeroSection />
      <HomepageContent />
    </>
  );
};

export default Index;