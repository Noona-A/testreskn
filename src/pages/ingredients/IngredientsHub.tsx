import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const ingredients = [{
  name: "Centella Asiatica",
  slug: "centella-asiatica",
  benefit: "Calms inflammation and supports barrier repair"
}, {
  name: "Niacinamide",
  slug: "niacinamide",
  benefit: "Balances oil, brightens, and minimises pores"
}, {
  name: "Hyaluronic Acid",
  slug: "hyaluronic-acid",
  benefit: "Deep hydration for plump, dewy skin"
}, {
  name: "Ceramides",
  slug: "ceramides",
  benefit: "Strengthens skin barrier and locks in moisture"
}, {
  name: "Azelaic Acid",
  slug: "azelaic-acid",
  benefit: "Clears breakouts and fades discolouration"
}, {
  name: "Salicylic Acid (BHA)",
  slug: "salicylic-acid",
  benefit: "Unclogs pores and treats acne"
}, {
  name: "Lactic Acid (AHA)",
  slug: "lactic-acid",
  benefit: "Gentle exfoliation for smoother texture"
}, {
  name: "Vitamin C",
  slug: "vitamin-c",
  benefit: "Brightens and protects against environmental damage"
}, {
  name: "Tranexamic Acid",
  slug: "tranexamic-acid",
  benefit: "Targets stubborn pigmentation and melasma"
}, {
  name: "Panthenol (Vitamin B5)",
  slug: "panthenol",
  benefit: "Soothes and accelerates skin healing"
}, {
  name: "Squalane",
  slug: "squalane",
  benefit: "Lightweight moisture that mimics natural oils"
}, {
  name: "Peptides",
  slug: "peptides",
  benefit: "Signals skin to produce collagen and elastin"
}, {
  name: "Snail Mucin",
  slug: "snail-mucin",
  benefit: "Hydrates and supports skin regeneration"
}, {
  name: "Propolis",
  slug: "propolis",
  benefit: "Natural antibacterial with soothing properties"
}, {
  name: "Green Tea Extract",
  slug: "green-tea-extract",
  benefit: "Antioxidant protection and calming benefits"
}];
const IngredientsHub = () => {
  return <div className="pt-16 pb-16">
      {/* Hero Section */}
      <div className="bg-section-gradient py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm mb-6">
            Evidence-Informed Skincare
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Skincare Ingredients, Explained
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">Evidence-informed guidance to help you understand what your skin needs and why.</p>
        </div>
      </div>

      {/* Ingredients Grid */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ingredients.map(ingredient => <Link key={ingredient.slug} to={`/ingredients/${ingredient.slug}`} className="card-luxury p-6 hover:border-primary/30 group">
              <h2 className="font-serif text-xl mb-2 group-hover:text-primary transition-colors">
                {ingredient.name}
              </h2>
              <p className="text-muted-foreground text-sm mb-4">
                {ingredient.benefit}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-primary">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>)}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Not sure which ingredients are right for you?
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
        <p className="text-xs text-center text-muted-foreground mt-12">
          Some links may be affiliate links; we may earn a commission at no extra cost to you.
        </p>
      </div>
    </div>;
};
export default IngredientsHub;