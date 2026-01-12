import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import SEO from "@/components/SEO";

interface Guide {
  name: string;
  slug: string;
  summary: string;
  trackerUrl?: string;
}

const guides: Guide[] = [
  {
    name: "Acne",
    slug: "acne",
    summary: "A comprehensive guide to understanding, treating, and managing acne. From identifying your acne type to building an effective routine with proven ingredients.",
    trackerUrl: "", // To be provided
  },
  // More guides can be added here
];

const GuidesHub = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Skincare Guides",
    "description": "In-depth guides to understanding and managing common skin conditions with evidence-based approaches.",
    "url": "https://resknclinic.co.uk/guides",
    "publisher": {
      "@type": "MedicalBusiness",
      "name": "ReSKN Clinic"
    }
  };

  return (
    <>
      <SEO
        title="Skincare Guides | ReSKN Clinic"
        description="In-depth guides to understanding and managing common skin conditions like acne, pigmentation, and sensitivity with evidence-based approaches."
        keywords="ReSKN, skincare guides, acne guide, skin conditions, skincare routine, skin treatment"
        canonical="https://resknclinic.co.uk/guides"
        structuredData={structuredData}
      />
      <div className="pt-16 pb-16">
        {/* Hero Section */}
        <div className="bg-section-gradient py-16 mb-12">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm mb-6">
              Evidence-Based Resources
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              Skincare Guides
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              In-depth guides to understanding and managing common skin conditions with proven approaches.
            </p>
          </div>
        </div>

        {/* Guides Grid - Larger 2-column cards */}
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {guides.map((guide) => (
              <div
                key={guide.slug}
                className="card-luxury p-8 md:p-10 flex flex-col"
              >
                <h2 className="font-serif text-2xl md:text-3xl mb-4">
                  {guide.name}
                </h2>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {guide.summary}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="btn-luxury text-primary-foreground">
                    <Link to={`/guides/${guide.slug}`}>
                      Read Guide
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  {guide.trackerUrl && (
                    <Button asChild variant="outline">
                      <a href={guide.trackerUrl} target="_blank" rel="noopener noreferrer">
                        Tracker
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}

            {/* Placeholder cards for future guides */}
            {[...Array(3)].map((_, i) => (
              <div
                key={`placeholder-${i}`}
                className="card-luxury p-8 md:p-10 flex flex-col items-center justify-center text-center opacity-50 min-h-[250px]"
              >
                <p className="text-muted-foreground">Coming soon</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Need personalised advice for your skin?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="btn-luxury text-primary-foreground">
                <Link to="/quiz">Take the Skin Quiz</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/booking">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuidesHub;
