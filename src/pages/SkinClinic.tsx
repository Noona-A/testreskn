import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, MessageCircle, Search, ClipboardList, HeartHandshake, Shield, CheckCircle, Heart, BookOpen, Leaf, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import skinClinicHeroImg from "@/assets/skin-clinic-hero.jpg";

const SkinClinic = () => {
  useEffect(() => {
    document.title = "Skin Clinic | ReSKN Clinic Windsor";
  }, []);

  const steps = [
    {
      number: "1",
      icon: MessageCircle,
      title: "Consultation",
      description: "We discuss your skin history, routine, lifestyle, and concerns."
    },
    {
      number: "2",
      icon: Search,
      title: "Assessment",
      description: "Your skin is assessed to identify underlying causes, not just symptoms."
    },
    {
      number: "3",
      icon: ClipboardList,
      title: "Personalised Plan",
      description: "You receive clear product, ingredient, and treatment recommendations."
    },
    {
      number: "4",
      icon: HeartHandshake,
      title: "Follow-up Support",
      description: "Optional ongoing reviews to adjust your routine as your skin improves."
    }
  ];

  const benefits = [
    { icon: Shield, title: "Expert, pharmacist-led advice" },
    { icon: ClipboardList, title: "Personalised skincare routine" },
    { icon: BookOpen, title: "Ingredient education (what to use & avoid)" },
    { icon: Leaf, title: "Product guidance with optional recommendations" },
    { icon: CheckCircle, title: "Safe, evidence-based approach" }
  ];

  const concerns = [
    "Acne & breakouts",
    "Pigmentation & melasma",
    "Sensitive or reactive skin",
    "Dullness & dehydration",
    "Early signs of ageing"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-lavender-light via-background to-background overflow-hidden">
        <div className="palm-shadow-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Sparkles size={16} className="text-primary" />
                  <span className="text-sm font-medium text-secondary">Skin Consultations</span>
                </div>
                
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-foreground leading-tight mb-6">
                  Your best skin starts here
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                  Personalised skin consultations and evidence-based treatment plans, led by a UK-registered pharmacist.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="btn-luxury text-white px-8">
                    <Link to="/booking">
                      Book Skin Consultation <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8">
                    <Link to="/quiz">
                      Take the Skin Quiz
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={skinClinicHeroImg} 
                    alt="Glowing, healthy skin"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Skin Consultation */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-8 text-center">
              What is a skin consultation?
            </h2>
            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                A one-to-one consultation designed to understand your skin, concerns, and goals.
                You'll receive professional advice, ingredient guidance, and a personalised plan tailored to your skin — not trends.
              </p>
            </div>

            <div className="card-luxury p-8 md:p-10">
              <h3 className="font-serif text-xl font-medium text-foreground mb-6 text-center">
                Common concerns include:
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {concerns.map((concern, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-accent/50">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">{concern}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Your journey to healthier skin in four simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative">
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

      {/* What You Get */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
                What You Get
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="card-luxury p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                    <benefit.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground">{benefit.title}</h3>
                </div>
              ))}
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
                  "I booked a skin consultation because I was confused by all the products I was using. The consultation helped me understand my skin properly for the first time. The advice felt realistic and tailored to me rather than being pushed to buy lots of products."
                </p>
              </div>
              <div className="card-luxury p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  "Since my consultation my skin has genuinely improved. I finally understand what ingredients work for me and why. It felt very personal and informative and I left feeling confident about my routine instead of overwhelmed."
                </p>
              </div>
              <div className="card-luxury p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  "The whole experience was really calming and reassuring. It felt like a proper skin health consultation rather than a sales appointment. I felt listened to and supported and I would definitely recommend it to anyone unsure about their skin."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Booking */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-10">
              Book your skin consultation
            </h2>

            <div className="card-luxury p-8 mb-8">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 mx-auto">
                <Sparkles size={28} className="text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-foreground text-2xl mb-2">Skin Consultation</h3>
              <p className="text-muted-foreground mb-4">
                Acne • Pigmentation • Sensitivity • Anti-ageing
              </p>
              <p className="text-primary text-xl font-medium mb-6">From £20</p>
              <Button asChild size="lg" className="btn-luxury text-white w-full">
                <Link to="/booking">
                  Book Now <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>

            <p className="text-muted-foreground text-sm">
              Not sure what you need? <Link to="/quiz" className="text-primary hover:underline">Take our skin quiz</Link> or <Link to="/contact" className="text-primary hover:underline">get in touch</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkinClinic;
