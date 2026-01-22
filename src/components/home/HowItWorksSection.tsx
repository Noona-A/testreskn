import { ClipboardList, Video, FileText, RefreshCw } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Take the Quiz", description: "Answer a few questions about your skin to discover your skin profile and get personalised recommendations." },
  { icon: Video, title: "Book a Consultation", description: "Meet with our pharmacist online via video call for an in-depth skin assessment." },
  { icon: FileText, title: "Get Your Plan", description: "Receive a tailored skincare routine and treatment plan designed specifically for your needs." },
  { icon: RefreshCw, title: "Review & Refine", description: "Regular check-ins ensure your plan evolves with your skin, with ongoing support along the way." },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Your journey to healthier skin in four simple steps</p>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 hidden lg:block" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="step-number absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold z-10">{index + 1}</div>
                <div className="card-luxury p-8 h-full hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6"><step.icon size={28} className="text-primary" /></div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
