import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, FlaskConical, HelpCircle } from "lucide-react";
import SEO from "@/components/SEO";
import AuthorByline from "@/components/AuthorByline";
import ConsultCTA from "@/components/ConsultCTA";
import AdSlot from "@/components/AdSlot";
import { medicalWebPageSchema } from "@/lib/site";

export interface ConcernFAQ {
  q: string;
  a: string;
}

export interface ConcernLink {
  label: string;
  to: string;
}

export interface ConcernPageProps {
  path: string;
  title: string;
  /** Short SEO title, e.g. "Acne Treatment Advice". Site name is appended automatically. */
  seoTitle: string;
  description: string;
  keywords: string;
  conditionName: string;
  intro: React.ReactNode;
  sections: { heading: string; body: React.ReactNode }[];
  ingredients: ConcernLink[];
  guide?: ConcernLink;
  faqs: ConcernFAQ[];
  cta?: React.ReactNode;
}

/**
 * Shared layout for /concerns/* pages. Each concern page is a proper article with
 * headings, internal links to ingredient pages and guides, an FAQ with schema,
 * and the consultation CTA. This replaces the previous one-paragraph stubs that
 * Google treated as thin content.
 */
const ConcernPageLayout = ({
  path,
  title,
  seoTitle,
  description,
  keywords,
  conditionName,
  intro,
  sections,
  ingredients,
  guide,
  faqs,
  cta,
}: ConcernPageProps) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <SEO
        title={`${seoTitle} | ReSKN Clinic`}
        description={description}
        keywords={keywords}
        canonical={path}
        structuredData={[
          medicalWebPageSchema({ path, headline: title, description, about: conditionName }),
          faqSchema,
        ]}
      />
      <article className="pt-16 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/concerns"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            All Skin Concerns
          </Link>

          <header className="mb-8">
            <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm mb-4">Skin Concern</span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">{title}</h1>
            <div className="text-muted-foreground leading-relaxed space-y-3">{intro}</div>
            <AuthorByline className="mt-5" />
          </header>

          {sections.map((s, i) => (
            <section key={s.heading} className="card-luxury p-6 md:p-8 mb-6">
              <h2 className="font-serif text-xl md:text-2xl mb-3">{s.heading}</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">{s.body}</div>
              {i === 0 && <AdSlot />}
            </section>
          ))}

          {(ingredients.length > 0 || guide) && (
            <section className="card-luxury p-6 md:p-8 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <FlaskConical className="w-5 h-5 text-primary" />
                <h2 className="font-serif text-xl md:text-2xl">Read more</h2>
              </div>
              {guide && (
                <Link
                  to={guide.to}
                  className="flex items-center justify-between gap-3 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors mb-4"
                >
                  <span className="inline-flex items-center gap-2 font-medium">
                    <BookOpen className="w-4 h-4 text-primary" />
                    {guide.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary" />
                </Link>
              )}
              <p className="text-sm text-muted-foreground mb-3">Ingredient guides relevant to {conditionName.toLowerCase()}:</p>
              <div className="flex flex-wrap gap-2">
                {ingredients.map((ing) => (
                  <Link
                    key={ing.to}
                    to={ing.to}
                    className="px-3 py-1.5 bg-accent rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                  >
                    {ing.label}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="card-luxury p-6 md:p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-5 h-5 text-primary" />
              <h2 className="font-serif text-xl md:text-2xl">Common questions</h2>
            </div>
            <dl className="space-y-5">
              {faqs.map((f) => (
                <div key={f.q}>
                  <dt className="font-medium text-foreground mb-1">{f.q}</dt>
                  <dd className="text-muted-foreground text-sm leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          {cta ?? <ConsultCTA />}

          <p className="text-xs text-muted-foreground mt-8 leading-relaxed">
            This page is educational and does not replace an individual assessment. If your skin is painful,
            rapidly changing, or affecting your wellbeing, speak to a pharmacist or GP.
          </p>
        </div>
      </article>
    </>
  );
};

export default ConcernPageLayout;
