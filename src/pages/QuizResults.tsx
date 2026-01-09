import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { profiles, ingredientSlugs } from "@/lib/quizScoring";
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

const QuizResults = () => {
  const [params] = useSearchParams();
  const profileKey = params.get("profile") || "balanced";
  const profile = profiles[profileKey] || profiles.balanced;

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-sm mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            Your Skin Profile
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-3">
            {profile.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {profile.subtitle}
          </p>
        </div>

        {/* Main Description Card */}
        <div className="card-luxury p-8 mb-6">
          <p className="text-muted-foreground leading-relaxed text-center">
            {profile.description}
          </p>
        </div>

        {/* What This Means Section */}
        <div className="card-luxury p-8 mb-6">
          <h2 className="font-serif text-xl mb-6 text-center">
            What this means for your skin
          </h2>
          <ul className="space-y-4">
            {profile.whatThisMeans.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ingredient Focus Section */}
        <div className="card-luxury p-8 mb-8">
          <h2 className="font-serif text-xl mb-6 text-center">
            Ingredient Focus
          </h2>
          <p className="text-sm text-muted-foreground text-center mb-6">
            These ingredients are particularly beneficial for your skin profile
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {profile.ingredientFocus.map((ingredient) => {
              const slug = ingredientSlugs[ingredient];
              return (
                <Link
                  key={ingredient}
                  to={`/ingredients/${slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent/80 rounded-full text-sm font-medium transition-colors group"
                >
                  {ingredient}
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="card-luxury p-8 bg-gradient-to-br from-secondary/5 to-primary/5 text-center">
          <h2 className="font-serif text-xl mb-3">
            Ready for personalised guidance?
          </h2>
          <p className="text-muted-foreground mb-6">
            Book a consultation to get your bespoke skin plan from our expert team
          </p>
          <Button asChild size="lg" className="btn-luxury text-primary-foreground">
            <a href={profile.bookingUrl} target="_blank" rel="noopener noreferrer">
              Book a Personalised Consultation
            </a>
          </Button>
        </div>

        {/* Secondary Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button asChild variant="outline">
            <Link to="/quiz">Retake Quiz</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/ingredients">Explore All Ingredients</Link>
          </Button>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-center text-muted-foreground mt-10 max-w-xl mx-auto">
          This quiz provides cosmetic skincare guidance only and does not replace a personalised medical consultation. 
          Some links may be affiliate links; we may earn a commission at no extra cost to you.
        </p>
      </div>
    </div>
  );
};

export default QuizResults;
