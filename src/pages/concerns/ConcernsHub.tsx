import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

const concerns = [
  {
    title: "Acne",
    href: "/concerns/acne",
    summary: "Evidence-based treatment, from over-the-counter benzoyl peroxide to prescription options.",
  },
  {
    title: "Pigmentation",
    href: "/concerns/pigmentation",
    summary: "Post-inflammatory marks, melasma and sun damage, and why SPF is the treatment.",
  },
  {
    title: "Sensitivity & Redness",
    href: "/concerns/sensitivity",
    summary: "Barrier repair for reactive skin, and how to tell sensitivity from rosacea.",
  },
  {
    title: "Ingrown Hairs",
    href: "/concerns/ingrowns",
    summary: "Short-term relief and the long-term fix for razor bumps.",
  },
  {
    title: "Anti-Ageing",
    href: "/concerns/anti-ageing",
    summary: "The two ingredients with strong evidence, and what to skip.",
  },
];

const ConcernsHub = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Skin Concerns",
    description: "Pharmacist-written guidance on common skin concerns, with evidence-based treatment options.",
    url: "https://resknclinic.co.uk/concerns/",
    hasPart: concerns.map((c) => ({
      "@type": "MedicalWebPage",
      name: c.title,
      url: `https://resknclinic.co.uk${c.href}/`,
    })),
  };

  return (
    <>
      <SEO
        title="Skin Concerns We Treat | ReSKN Clinic"
        description="Pharmacist-written guidance on acne, pigmentation, sensitive skin, ingrown hairs and skin ageing. Evidence-based advice and online consultations from Windsor, Berkshire."
        keywords="skin concerns, acne, pigmentation, sensitive skin, ingrown hairs, anti-ageing, skin clinic Windsor, ReSKN"
        canonical="/concerns"
        structuredData={structuredData}
      />
      <div className="pt-16 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm mb-4">Evidence-Based</span>
            <h1 className="font-serif text-4xl md:text-5xl mb-4">Skin Concerns</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Clear, honest guidance on the conditions we see most often, written by a GPhC-registered
              pharmacist. Start with your concern, then explore the ingredient guides linked from each page.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {concerns.map((c) => (
              <Link key={c.href} to={c.href} className="card-luxury p-6 flex flex-col group hover:shadow-lg transition-shadow">
                <h2 className="font-serif text-2xl mb-2 group-hover:text-primary transition-colors">{c.title}</h2>
                <p className="text-sm text-muted-foreground flex-1">{c.summary}</p>
                <span className="inline-flex items-center text-sm text-primary mt-4">
                  Read more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConcernsHub;
