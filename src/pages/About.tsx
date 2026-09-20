import { Link } from "react-router-dom";
import { BadgeCheck, GraduationCap, Microscope, ShieldCheck } from "lucide-react";
import SEO from "@/components/SEO";
import ConsultCTA from "@/components/ConsultCTA";
import { AUTHOR, authorSchema, SITE_URL } from "@/lib/site";

const About = () => {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About ReSKN Clinic",
      url: `${SITE_URL}/about/`,
      mainEntity: { "@type": "MedicalBusiness", "@id": `${SITE_URL}/#organisation` },
    },
    { "@context": "https://schema.org", ...authorSchema() },
  ];

  return (
    <>
      <SEO
        title="About ReSKN Clinic | Pharmacist-Led Skin Clinic in Windsor"
        description="ReSKN Clinic is a pharmacist-led skin clinic in Windsor, Berkshire. Meet the clinician behind our guides and consultations and read how we approach evidence-based skincare."
        keywords="about ReSKN Clinic, pharmacist skin clinic Windsor, independent prescriber skincare, evidence-based skincare Berkshire"
        canonical="/about"
        structuredData={structuredData}
      />
      <div className="pt-16 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-serif text-4xl mb-6">About ReSKN Clinic</h1>
          <p className="text-muted-foreground mb-6">
            ReSKN Clinic is a skin health and confidence clinic based in Windsor, Berkshire. We combine medical
            expertise with a personalised approach to skincare, offering online skin consultations and
            professional laser hair removal.
          </p>
          <p className="text-muted-foreground mb-10">
            Everything we publish is written to the same standard we would use in clinical practice. If an
            ingredient or treatment does not have evidence of benefit, we say so.
          </p>

          <section className="card-luxury p-8 mb-8" id="clinician">
            <div className="flex items-center gap-3 mb-4">
              <BadgeCheck className="w-5 h-5 text-primary" />
              <h2 className="font-serif text-2xl">The clinician</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">{AUTHOR.name}</strong>, {AUTHOR.credentials}. All consultations,
              guides and ingredient pages on this site are written and reviewed by {AUTHOR.name}.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Master of Pharmacy (MPharm) and registered with the General Pharmaceutical Council (GPhC), the UK
                  regulator for pharmacists.
                  {AUTHOR.gphcNumber && ` Registration number ${AUTHOR.gphcNumber}.`}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Qualified Independent Prescriber, able to assess and prescribe for skin conditions within scope of
                  practice.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Microscope className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>
                  Experience in community pharmacy and urgent care, with additional training in dermatology and
                  aesthetics. Trained in medical-grade diode laser hair removal.
                </span>
              </li>
            </ul>
          </section>

          <section className="card-luxury p-8 mb-8">
            <h2 className="font-serif text-2xl mb-4">How we write our guides</h2>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
              <li>Recommendations follow UK guidance where it exists, including NICE and the British Association of Dermatologists.</li>
              <li>Ingredients are described at the concentrations that have been studied, not at marketing strengths.</li>
              <li>Where evidence is weak or mixed, the page says so rather than implying benefit.</li>
              <li>Product examples are optional references. Some links are affiliate links and are labelled as such. Commission never influences which ingredients we recommend.</li>
              <li>Every clinical page carries a last reviewed date and is checked against current guidance at least yearly.</li>
            </ul>
          </section>

          <ConsultCTA />

          <p className="text-sm text-muted-foreground mt-8">
            Questions about the clinic? <Link to="/contact" className="text-primary underline underline-offset-2">Get in touch</Link>.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
