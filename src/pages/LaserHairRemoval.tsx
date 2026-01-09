import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, Zap, Calendar, RefreshCw, Check, AlertCircle, Users, ShieldCheck } from "lucide-react";
import laserTreatmentImg from "@/assets/laser-treatment.jpg";

const steps = [
  { icon: ClipboardCheck, title: "Patch Test & Consultation", description: "We assess your skin type, hair colour, and medical history to ensure laser is right for you." },
  { icon: Zap, title: "Laser Treatment Sessions", description: "Comfortable, quick sessions using our advanced triple-wavelength diode laser technology." },
  { icon: Calendar, title: "Treatment Course", description: "Typically 6–8 sessions spaced 4–8 weeks apart, depending on the treatment area." },
  { icon: RefreshCw, title: "Maintenance Sessions", description: "Occasional touch-ups to maintain your smooth, hair-free results long-term." },
];

const timeline = [
  { sessions: "1–2 sessions", result: "Slower regrowth", description: "Hair begins to grow back more slowly and finer." },
  { sessions: "3–4 sessions", result: "Visible reduction", description: "Noticeable decrease in hair density and thickness." },
  { sessions: "6–8 sessions", result: "Significant long-term reduction", description: "Up to 80–90% permanent hair reduction for most clients." },
];

const suitability = [
  { icon: Users, title: "Suitable For", items: ["Most skin tones (Fitzpatrick I–VI)", "Dark hair (brown to black)", "Face, body, and intimate areas", "Both men and women"] },
  { icon: ShieldCheck, title: "Safety Considerations", items: ["Patch test required for all new clients", "Avoid sun exposure before and after treatment", "Not suitable during pregnancy", "Some medications may affect suitability"] },
];

const LaserHairRemoval = () => {
  useEffect(() => {
    document.title = "Laser Hair Removal | ReSKN Clinic Windsor";
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-hero-gradient overflow-hidden">
        <div className="palm-shadow-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-white/10 text-white/90 rounded-full backdrop-blur-sm">
              Medical-Grade Laser Treatment
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6">
              Laser Hair Removal
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Medical-grade laser treatments for long-lasting, smoother skin — delivered safely by a UK-registered pharmacist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Button asChild size="lg" className="btn-luxury text-white">
                <a href="https://app.cal.eu/resknclinic/laser-hair-removal" target="_blank" rel="noopener noreferrer">
                  Book Laser Hair Removal
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <a href="https://app.cal.eu/resknclinic/laser-patch-test" target="_blank" rel="noopener noreferrer">
                  Book Patch Test
                </a>
              </Button>
            </div>
            <p className="text-sm text-white/60">Patch test required for new clients</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Your journey to smooth, hair-free skin</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.title} className="relative step-card">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold z-10">
                  {index + 1}
                </div>
                <div className="card-luxury p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
                    <step.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Timeline */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">What to Expect</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Realistic expectations for your laser hair removal journey</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-card card-luxury p-6 flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check size={20} className="text-primary" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span className="font-semibold text-foreground">{item.sessions}</span>
                    <span className="text-sm px-2 py-0.5 rounded-full bg-accent text-accent-foreground">{item.result}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Placeholder */}
      <section className="py-20 md:py-28 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">Results</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">See what's possible with medical-grade laser hair removal</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {["Underarms", "Legs", "Face"].map((area) => (
              <div key={area} className="card-luxury overflow-hidden">
                <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                  <img src={laserTreatmentImg} alt={`${area} laser treatment`} className="w-full h-full object-cover opacity-70" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-serif text-lg font-medium text-foreground">{area}</h3>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 max-w-md mx-auto">
            <AlertCircle size={14} className="inline mr-1" />
            Individual results may vary. Photos are for illustrative purposes only.
          </p>
        </div>
      </section>

      {/* Suitability & Safety */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">Is Laser Hair Removal Right For You?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Understanding suitability and safety considerations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {suitability.map((section) => (
              <div key={section.title} className="card-luxury p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <section.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-secondary via-purple-deep to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-white mb-4">Ready to Start Your Laser Journey?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">Book your patch test or treatment session today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-luxury text-white">
              <a href="https://app.cal.eu/resknclinic/laser-hair-removal" target="_blank" rel="noopener noreferrer">
                Book Laser Hair Removal
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <a href="https://app.cal.eu/resknclinic/laser-patch-test" target="_blank" rel="noopener noreferrer">
                Book Patch Test
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LaserHairRemoval;