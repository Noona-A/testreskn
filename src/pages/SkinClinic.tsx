import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Video, CheckCircle, Star, Shield, Heart, MapPin, Droplets, Sun, Flame, Scissors, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const SkinClinic = () => {
  useEffect(() => {
    document.title = "Skin Clinic | ReSKN Clinic Windsor";
  }, []);

  const steps = [
    {
      number: "1",
      title: "Take the Quiz",
      description: "Answer a few questions about your skin to discover your skin profile and get personalised recommendations."
    },
    {
      number: "2",
      title: "Book a Consultation",
      description: "Meet with our skin specialists online or at our Windsor clinic for an in-depth assessment."
    },
    {
      number: "3",
      title: "Get Your Plan",
      description: "Receive a tailored skincare routine and treatment plan designed specifically for your needs."
    },
    {
      number: "4",
      title: "Review & Refine",
      description: "Regular check-ins ensure your plan evolves with your skin, with ongoing support along the way."
    }
  ];

  const concerns = [
    { icon: Droplets, title: "Acne", description: "Breakouts, blemishes, and oily skin management", link: "/concerns/acne" },
    { icon: Sun, title: "Pigmentation", description: "Dark spots, uneven tone, and sun damage", link: "/concerns/pigmentation" },
    { icon: Flame, title: "Sensitivity & Redness", description: "Reactive skin, rosacea, and inflammation", link: "/concerns/sensitivity" },
    { icon: Scissors, title: "Ingrown Hairs", description: "Bumps, irritation from shaving or waxing", link: "/concerns/ingrowns" },
    { icon: Clock, title: "Anti-Ageing", description: "Fine lines, texture, and skin firmness", link: "/concerns/anti-ageing" }
  ];

  const benefits = [
    { icon: Shield, title: "Medical Professional Led", description: "Pharmacy-informed expertise you can trust" },
    { icon: CheckCircle, title: "Evidence-Informed", description: "Routines backed by clinical research" },
    { icon: Heart, title: "Tailored Plans", description: "Personalised care with ongoing support" },
    { icon: MapPin, title: "Luxury Local Experience", description: "Premium clinic in Windsor, Berkshire" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-lavender-light to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple/10 border border-purple/20 mb-8">
              <Sparkles size={16} className="text-purple" />
              <span className="text-sm font-medium text-purple-deep">Skin consultations</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground leading-tight mb-6">
              Your best skin starts here
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Personalised skin plans & medical-grade treatments. Expert care by a UK-registered pharmacist in Windsor.
            </p>

            {/* Service Card */}
            <div className="max-w-md mx-auto mb-8">
              <div className="p-8 rounded-2xl bg-card border border-border shadow-lg">
                <div className="w-14 h-14 rounded-xl bg-purple/10 flex items-center justify-center mb-6 mx-auto">
                  <Video size={28} className="text-purple" />
                </div>
                <h3 className="font-serif font-semibold text-foreground text-2xl mb-2">Skin Consultation</h3>
                <p className="text-muted-foreground mb-4">
                  Acne • Pigmentation • Sensitivity • Anti-ageing
                </p>
                <p className="text-purple text-lg font-medium mb-6">From £20</p>
                <Button asChild size="lg" className="btn-luxury text-white w-full">
                  <Link to="/booking">
                    Book Now <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Escape Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-8">
              Escape to better skin
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Picture your ideal skin — clear, calm, radiant. At ReSKN, we believe great skin starts with understanding yours. Through personalised consultations and evidence-informed routines, we'll guide you to confidence that glows from within.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you're tackling stubborn breakouts, evening out tone, or simply seeking that fresh, dewy look — your journey begins with a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Skin Concerns We Treat */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Skin Concerns We Treat
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whatever your skin is telling you, we're here to listen and help
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {concerns.map((concern, index) => (
              <Link
                key={index}
                to={concern.link}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-purple/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-purple/10 text-purple flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                  <concern.icon size={24} />
                </div>
                <h3 className="font-serif font-semibold text-foreground text-lg mb-2 group-hover:text-purple transition-colors">
                  {concern.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{concern.description}</p>
                <span className="text-purple text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your journey to healthier skin in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-purple/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple">{step.number}</span>
                </div>
                <h3 className="font-serif font-semibold text-foreground text-lg mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ReSKN */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Why ReSKN
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-purple/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon size={24} className="text-purple" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-purple fill-purple" />
              ))}
            </div>
            <p className="text-muted-foreground italic">Real reviews coming soon</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-purple/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Ready to Begin Your Skin Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Take our free skin quiz or book a consultation today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-luxury text-white">
                <Link to="/quiz">
                  Take the Skin Quiz <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-purple text-purple hover:bg-purple/10">
                <Link to="/booking">
                  Book Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkinClinic;