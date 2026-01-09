import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Beaker, Target, Users, Sparkles, Heart, Stethoscope } from "lucide-react";

export interface IngredientData {
  name: string;
  whatItIs: string;
  whatItHelpsWith: string[];
  bestFor: string[];
  howItsUsed: string;
  pairsWellWith: string[];
  clinicNote: string;
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
        <div className="card-luxury p-8 mb-10 bg-gradient-to-br from-secondary/5 to-primary/5">
          <div className="flex items-center gap-3 mb-4">
            <Stethoscope className="w-5 h-5 text-primary" />
            <h2 className="font-serif text-xl">Clinic note</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed italic">
            {ingredient.clinicNote}
          </p>
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

        {/* Disclaimer */}
        <p className="text-xs text-center text-muted-foreground mt-10">
          Some links may be affiliate links; we may earn a commission at no extra cost to you.
        </p>
      </div>
    </div>
  );
};

export default IngredientPageTemplate;
