import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Beaker,
  Target,
  Users,
  Sparkles,
  Heart,
  Stethoscope,
  Package,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Activity,
  Info,
  BookOpen,
} from "lucide-react";
import SEO from "@/components/SEO";
import AuthorByline from "@/components/AuthorByline";
import AffiliateLink from "@/components/AffiliateLink";
import AdSlot from "@/components/AdSlot";
import ConsultCTA from "@/components/ConsultCTA";
import { medicalWebPageSchema } from "@/lib/site";

export interface ProductExample {
  name: string;
  description: string;
  link: string;
  image?: string;
}
export interface IngredientData {
  name: string;
  whatItIs: string;
  whatItHelpsWith: string[];
  bestFor: string[];
  howItsUsed: string;
  pairsWellWith: string[];
  clinicNote: string;
  productExamples?: ProductExample[];
  // Clinical sections
  clinicalSuitability?: string[];
  useWithCaution?: string[];
  notIdealFor?: string[];
  commonConcerns?: string[];
  /** Optional override for the meta description (defaults to the first sentence of whatItIs). */
  metaDescription?: string;
}
interface IngredientPageTemplateProps {
  ingredient: IngredientData;
}

/** Map free-text concern tags to the concern and guide pages that discuss them. */
const relatedPages = (concerns: string[] = []) => {
  const text = concerns.join(" ").toLowerCase();
  const links: { label: string; to: string }[] = [];
  if (/acne|seborrh|pore|blackhead|comedon/.test(text)) {
    links.push({ label: "The Complete Acne Guide", to: "/guides/acne" });
    links.push({ label: "Acne", to: "/concerns/acne" });
  }
  if (/pigment|melasma|dark spot|photoage|uneven/.test(text)) links.push({ label: "Pigmentation", to: "/concerns/pigmentation" });
  if (/sensitiv|barrier|rosacea|redness|erythema|dermatitis|eczema/.test(text)) links.push({ label: "Sensitivity & Redness", to: "/concerns/sensitivity" });
  if (/ageing|aging|wrinkle|fine line|collagen|elasticity/.test(text)) links.push({ label: "Fine Lines & Skin Ageing", to: "/concerns/anti-ageing" });
  if (/ingrown|folliculitis|razor/.test(text)) links.push({ label: "Ingrown Hairs", to: "/concerns/ingrowns" });
  return links;
};

const firstSentence = (text: string, max = 155) => {
  const s = text.split(/(?<=\.)\s/)[0] ?? text;
  return s.length <= max ? s : `${s.slice(0, max - 1).trimEnd()}…`;
};

const IngredientPageTemplate = ({ ingredient }: IngredientPageTemplateProps) => {
  const { pathname } = useLocation();
  const description = ingredient.metaDescription ?? firstSentence(ingredient.whatItIs);
  const title = `${ingredient.name} for Skin: Benefits, Evidence and How to Use | ReSKN Clinic`;
  const related = relatedPages(ingredient.commonConcerns);

  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={`${ingredient.name}, ${ingredient.name} skincare, ${ingredient.name} benefits, how to use ${ingredient.name}, ReSKN Clinic`}
        canonical={pathname}
        ogType="article"
        structuredData={medicalWebPageSchema({
          path: pathname,
          headline: `${ingredient.name}: benefits, evidence and how to use it`,
          description,
        })}
      />
      <article className="pt-16 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Back Link */}
          <Link to="/ingredients" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            All Ingredients
          </Link>

          {/* Header */}
          <header className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm mb-4">Ingredient Guide</span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl">{ingredient.name}</h1>
            <AuthorByline className="justify-center mt-4" />
          </header>

          {/* What It Is */}
          <section className="card-luxury p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Beaker className="w-5 h-5 text-primary" />
              <h2 className="font-serif text-xl">What it is</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{ingredient.whatItIs}</p>
          </section>

          {/* What It Helps With */}
          <section className="card-luxury p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-5 h-5 text-primary" />
              <h2 className="font-serif text-xl">What it helps with</h2>
            </div>
            <ul className="space-y-2">
              {ingredient.whatItHelpsWith.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <AdSlot />

          {/* Common Concerns */}
          {ingredient.commonConcerns && ingredient.commonConcerns.length > 0 && (
            <section className="card-luxury p-8 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-5 h-5 text-primary" />
                <h2 className="font-serif text-xl">Common concerns it addresses</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {ingredient.commonConcerns.map((concern, index) => (
                  <span key={index} className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm">
                    {concern}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Best For */}
          <section className="card-luxury p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-5 h-5 text-primary" />
              <h2 className="font-serif text-xl">Best for</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {ingredient.bestFor.map((type, index) => (
                <span key={index} className="px-3 py-1.5 bg-accent rounded-full text-sm">
                  {type}
                </span>
              ))}
            </div>
          </section>

          {/* Clinical Suitability */}
          {ingredient.clinicalSuitability && ingredient.clinicalSuitability.length > 0 && (
            <section className="card-luxury p-8 mb-6 border-l-4 border-l-green-500">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h2 className="font-serif text-xl">Clinical suitability</h2>
              </div>
              <ul className="space-y-2">
                {ingredient.clinicalSuitability.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Use With Caution */}
          {ingredient.useWithCaution && ingredient.useWithCaution.length > 0 && (
            <section className="card-luxury p-8 mb-6 border-l-4 border-l-amber-500">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <h2 className="font-serif text-xl">Use with caution</h2>
              </div>
              <ul className="space-y-2">
                {ingredient.useWithCaution.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Not Ideal For */}
          {ingredient.notIdealFor && ingredient.notIdealFor.length > 0 && (
            <section className="card-luxury p-8 mb-6 border-l-4 border-l-red-400">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-5 h-5 text-red-500" />
                <h2 className="font-serif text-xl">Not ideal for</h2>
              </div>
              <ul className="space-y-2">
                {ingredient.notIdealFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* How It's Used */}
          <section className="card-luxury p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <h2 className="font-serif text-xl">How it's commonly used</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{ingredient.howItsUsed}</p>
          </section>

          {/* Pairs Well With */}
          <section className="card-luxury p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-5 h-5 text-primary" />
              <h2 className="font-serif text-xl">Pairs well with</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {ingredient.pairsWellWith.map((pairing, index) => (
                <span key={index} className="px-3 py-1.5 bg-muted rounded-full text-sm text-muted-foreground">
                  {pairing}
                </span>
              ))}
            </div>
          </section>

          {/* Clinic Note */}
          <section className="card-luxury p-8 mb-6 bg-gradient-to-br from-secondary/5 to-primary/5">
            <div className="flex items-center gap-3 mb-4">
              <Stethoscope className="w-5 h-5 text-primary" />
              <h2 className="font-serif text-xl">Clinic note</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed italic">{ingredient.clinicNote}</p>
          </section>

          {/* Related reading (internal links) */}
          {related.length > 0 && (
            <section className="card-luxury p-8 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
                <h2 className="font-serif text-xl">Related reading</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {related.map((r) => (
                  <Link
                    key={r.to}
                    to={r.to}
                    className="px-3 py-1.5 bg-accent rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                  >
                    {r.label}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Product Examples Section */}
          {ingredient.productExamples && ingredient.productExamples.length > 0 && (
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <Package className="w-5 h-5 text-primary" />
                <h2 className="font-serif text-xl">Ingredient-focused product examples</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Examples that feature this ingredient at a sensible concentration. These are optional references to
                help your own research, not a prescription. Links marked "affiliate" may earn us a small commission
                at no extra cost to you.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {ingredient.productExamples.slice(0, 2).map((product, index) => (
                  <div key={index} className="card-luxury p-5 flex flex-col">
                    <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      {product.image ? (
                        <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover" />
                      ) : (
                        <Package className="w-12 h-12 text-muted-foreground/40" />
                      )}
                    </div>
                    <h3 className="font-medium text-sm mb-2">{product.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-grow mb-4">{product.description}</p>
                    <AffiliateLink href={product.link} className="text-xs">
                      View product
                    </AffiliateLink>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Clinical Disclaimer */}
          <div className="card-luxury p-6 mb-8 bg-muted/30 border-l-4 border-l-primary/30">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-primary/70 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                This content is provided for educational purposes and does not replace personalised medical advice.
                Individuals with skin conditions, those who are pregnant, or those undergoing dermatological treatments
                should seek professional guidance before introducing new active ingredients.
              </p>
            </div>
          </div>

          <ConsultCTA
            heading={`Not sure if ${ingredient.name.split(" (")[0].toLowerCase()} is right for you?`}
            className="mb-8"
          />

          {/* Secondary CTA */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="outline">
                <Link to="/quiz">
                  Take the Skin Quiz <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
export default IngredientPageTemplate;
