import { Link } from "react-router-dom";
import { ClipboardCheck, Zap, Calendar, RefreshCw, Check, Shield, ShieldCheck, ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import laserHeroImg from "@/assets/laser-hero.jpg";

const steps = [
  { 
    number: "1",
    icon: ClipboardCheck, 
    title: "Patch Test", 
    description: "Required before your first session to ensure safety and suitability." 
  },
  { 
    number: "2",
    icon: Zap, 
    title: "Laser Treatment", 
    description: "Targeted treatment using medical-grade laser technology." 
  },
  { 
    number: "3",
    icon: Calendar, 
    title: "Treatment Course", 
    description: "A series of sessions for long-lasting hair reduction." 
  },
  { 
    number: "4",
    icon: RefreshCw, 
    title: "Maintenance", 
    description: "Optional maintenance sessions as needed." 
  },
];

const safetyPoints = [
  "Medical-grade laser equipment",
  "Treatments delivered by a UK-registered pharmacist",
  "Patch test required for new clients",
  "Safety-first, evidence-based protocols"
];

const LaserHairRemoval = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Laser Hair Removal",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "ReSKN Clinic",
      "alternateName": ["Re-SKN", "ReSKN"]
    },
    "areaServed": {
      "@type": "City",
      "name": "Windsor"
    },
    "description": "Professional laser hair removal treatments using medical-grade technology at ReSKN Clinic in Windsor, Berkshire."
  };

  return (
    <>
      <SEO
        title="Laser Hair Removal | ReSKN Clinic Windsor"
        description="Professional laser hair removal in Windsor. Medical-grade technology, expert care by UK-registered pharmacist. Book your patch test at ReSKN Clinic today."
        keywords="ReSKN, laser hair removal Windsor, laser hair removal Berkshire, ReSKN Clinic, permanent hair removal, medical grade laser"
        canonical="https://resknclinic.co.uk/laser-hair-removal"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-lavender-light via-background to-background overflow-hidden">
        <div className="palm-shadow-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Sparkles size={16} className="text-primary" />
                  <span className="text-sm font-medium text-secondary">Medical-Grade Laser Treatment</span>
                </span>
                
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-foreground leading-tight mb-6">
                  Laser hair removal
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                  Safe, effective, medical-grade laser treatments for smoother, longer-lasting results — delivered by a UK-registered pharmacist.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4">
                  <Button asChild size="lg" className="btn-luxury text-white px-8">
                    <Link to="/booking">
                      Book Laser Hair Removal <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8">
                    <Link to="/booking">
                      Book Patch Test
                    </Link>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">Patch test required for new clients</p>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={laserHeroImg} 
                    alt="Medical-grade laser treatment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Laser Hair Removal */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-8">
              What is laser hair removal?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Laser hair removal uses targeted light energy to reduce unwanted hair safely and effectively.
              Our treatments are tailored to your skin type and hair profile for optimal results.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">Your journey to smooth, hair-free skin</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold z-10">
                    {step.number}
                  </div>
                  <div className="card-luxury p-6 h-full">
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
        </div>
      </section>

      {/* Safety & Professional Standards */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
                Safety & Professional Standards
              </h2>
            </div>

            <div className="card-luxury p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8 justify-center">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                  <ShieldCheck size={28} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground">Your safety is our priority</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {safetyPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-accent/50">
                    <Check size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
                What Our Clients Say
              </h2>
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="text-primary fill-primary" />
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-luxury p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  "I love the new space. It feels like such a big step up from the previous clinic and you can really tell how much care has gone into it. The environment is calm and professional and the treatment itself was explained clearly and done with so much care. I felt very comfortable throughout."
                </p>
              </div>
              <div className="card-luxury p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  "I was quite nervous before my first laser session but I was put at ease straight away. Everything was explained in a way that made sense and I never felt rushed. The results so far have been better than I expected and I feel much more confident already."
                </p>
              </div>
              <div className="card-luxury p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  "The clinic is clean, welcoming and really well organised. Booking was easy and the appointment ran on time. I appreciated how honest and knowledgeable the practitioner was and how much attention was paid to safety and comfort."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Booking */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-10">
              Book your laser treatment
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {/* Laser Hair Removal Card */}
              <div className="card-luxury p-8">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 mx-auto">
                  <Zap size={28} className="text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground text-xl mb-2">Laser Hair Removal</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Medical-grade laser for smooth, hair-free skin
                </p>
                <p className="text-primary text-xl font-medium mb-6">From £25</p>
                <Button asChild size="lg" className="btn-luxury text-white w-full">
                  <Link to="/booking">
                    Book Laser Hair Removal
                  </Link>
                </Button>
              </div>

              {/* Patch Test Card */}
              <div className="card-luxury p-8">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 mx-auto">
                  <Shield size={28} className="text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground text-xl mb-2">Patch Test</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Required before first laser session
                </p>
                <p className="text-primary text-xl font-medium mb-6">£25 <span className="text-sm text-muted-foreground">(redeemable)</span></p>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full">
                  <Link to="/booking">
                    Book Patch Test
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-muted-foreground text-sm">
              All booking CTAs route to the internal booking page
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LaserHairRemoval;
