import { useSearchParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const profiles: Record<string, { title: string; description: string; booking: string }> = {
  "oily-acne": { title: "Oily / Acne-Prone", description: "Your skin produces excess oil and is prone to breakouts.", booking: "https://app.cal.eu/resknclinic/prescription-acne-assessment" },
  "combination": { title: "Combination", description: "Your skin has a mix of oily and dry areas.", booking: "https://app.cal.eu/resknclinic/online-skin-consultation" },
  "dry-dehydrated": { title: "Dry / Dehydrated", description: "Your skin lacks moisture and may feel tight.", booking: "https://app.cal.eu/resknclinic/online-skin-consultation" },
  "sensitive-redness": { title: "Sensitive / Redness-Prone", description: "Your skin reacts easily and shows redness.", booking: "https://app.cal.eu/resknclinic/online-skin-consultation" },
  "pigmentation": { title: "Pigmentation-Prone", description: "Your skin shows uneven tone or dark spots.", booking: "https://app.cal.eu/resknclinic/online-skin-consultation" },
};

const QuizResults = () => {
  const [params] = useSearchParams();
  const profileKey = params.get("profile") || "combination";
  const profile = profiles[profileKey] || profiles.combination;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm mb-6">Your Skin Profile</span>
          <h1 className="font-serif text-3xl md:text-4xl mb-4">{profile.title}</h1>
          <p className="text-muted-foreground mb-8">{profile.description}</p>
          
          <div className="card-luxury p-8 mb-8">
            <h2 className="font-serif text-xl mb-4">Recommended Next Step</h2>
            <p className="text-muted-foreground mb-6">Book a consultation to get your personalised skin plan</p>
            <Button asChild className="btn-luxury text-primary-foreground">
              <a href={profile.booking} target="_blank" rel="noopener noreferrer">Book Consultation</a>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            Some links may be affiliate links; we may earn a commission at no extra cost to you.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuizResults;
