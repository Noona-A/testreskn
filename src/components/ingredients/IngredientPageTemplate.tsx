import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Beaker, Target, Users, Sparkles, Heart, Stethoscope, Package, ArrowRight, CheckCircle, AlertTriangle, XCircle, Activity, Info } from "lucide-react";

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
  // New clinical sections
  clinicalSuitability?: string[];
  useWithCaution?: string[];
  notIdealFor?: string[];
  commonConcerns?: string[];
}

interface IngredientPageTemplateProps {
  ingredient: IngredientData;
}

const IngredientPageTemplate = ({ ingredient }: IngredientPageTemplateProps) => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Back Link */}
        <Link 
          to="/ingredients" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          All Ingredients
        </Link>

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm mb-4">
            Ingredient Guide
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            {ingredient.name}
          </h1>
        </div>

        {/* What It Is */}
        <div className="card-luxury p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Beaker className="w-5 h-5 text-primary" />
            <h2 className="font-serif text-xl">What it is</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {ingredient.whatItIs}
          </p>
        </div>

        {/* What It Helps With */}
        <div className="card-luxury p-8 mb-6">
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
        </div>

        {/* Common Concerns - NEW */}
        {ingredient.commonConcerns && ingredient.commonConcerns.length > 0 && (
          <div className="card-luxury p-8 mb-6">
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
          </div>
        )}

        {/* Best For */}
        <div className="card-luxury p-8 mb-6">
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
        </div>

        {/* Clinical Suitability - NEW */}
        {ingredient.clinicalSuitability && ingredient.clinicalSuitability.length > 0 && (
          <div className="card-luxury p-8 mb-6 border-l-4 border-l-green-500">
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
          </div>
        )}

        {/* Use With Caution - NEW */}
        {ingredient.useWithCaution && ingredient.useWithCaution.length > 0 && (
          <div className="card-luxury p-8 mb-6 border-l-4 border-l-amber-500">
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
          </div>
        )}

        {/* Not Ideal For - NEW */}
        {ingredient.notIdealFor && ingredient.notIdealFor.length > 0 && (
          <div className="card-luxury p-8 mb-6 border-l-4 border-l-red-400">
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
          </div>
        )}

        {/* How It's Used */}
        <div className="card-luxury p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <h2 className="font-serif text-xl">How it's commonly used</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {ingredient.howItsUsed}
          </p>
        </div>

        {/* Pairs Well With */}
        <div className="card-luxury p-8 mb-6">
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
        </div>

        {/* Clinic Note */}
        <div className="card-luxury p-8 mb-6 bg-gradient-to-br from-secondary/5 to-primary/5">
          <div className="flex items-center gap-3 mb-4">
            <Stethoscope className="w-5 h-5 text-primary" />
            <h2 className="font-serif text-xl">Clinic note</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed italic">
            {ingredient.clinicNote}
          </p>
        </div>

        {/* Product Examples Section */}
        {ingredient.productExamples && ingredient.productExamples.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Package className="w-5 h-5 text-primary" />
              <h2 className="font-serif text-xl">Ingredient-focused product examples</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Clinically curated examples featuring this ingredient. These are optional references to help guide your product research.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {ingredient.productExamples.slice(0, 2).map((product, index) => (
                <div key={index} className="card-luxury p-5 flex flex-col">
                  <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    ) : (
                      <Package className="w-12 h-12 text-muted-foreground/40" />
                    )}
                  </div>
                  <h3 className="font-medium text-sm mb-2">{product.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-grow mb-4">
                    {product.description}
                  </p>
                  <a 
                    href={product.link} 
                    className="inline-flex items-center text-xs text-primary hover:text-primary/80 transition-colors group"
                  >
                    View product
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Clinical Disclaimer - NEW */}
        <div className="card-luxury p-6 mb-8 bg-muted/30 border-l-4 border-l-primary/30">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-primary/70 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              This content is provided for educational purposes and does not replace personalised medical advice. Individuals with skin conditions, those who are pregnant, or those undergoing dermatological treatments should seek professional guidance before introducing new active ingredients.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Not sure if this ingredient is right for you?
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

        {/* Affiliate Disclaimer */}
        <p className="text-xs text-center text-muted-foreground mt-10">
          Some links may be affiliate links; we may earn a commission at no extra cost to you.
        </p>
      </div>
    </div>
  );
};

export default IngredientPageTemplate;
