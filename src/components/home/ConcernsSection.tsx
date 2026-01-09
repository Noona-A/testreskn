import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Sun, Flame, Scissors, Clock } from "lucide-react";

const concerns = [
  { icon: Droplets, title: "Acne", description: "Breakouts, blemishes, and oily skin management", href: "/concerns/acne" },
  { icon: Sun, title: "Pigmentation", description: "Dark spots, uneven tone, and sun damage", href: "/concerns/pigmentation" },
  { icon: Flame, title: "Sensitivity & Redness", description: "Reactive skin, rosacea, and inflammation", href: "/concerns/sensitivity" },
  { icon: Scissors, title: "Ingrown Hairs", description: "Bumps, irritation from shaving or waxing", href: "/concerns/ingrowns" },
  { icon: Clock, title: "Anti-Ageing", description: "Fine lines, texture, and skin firmness", href: "/concerns/anti-ageing" },
];

const ConcernsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Skin Concerns We Treat
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whatever your skin is telling you, we're here to listen and help
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {concerns.map((concern) => (
            <Link
              key={concern.title}
              to={concern.href}
              className="card-luxury p-6 group hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <concern.icon size={24} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {concern.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {concern.description}
              </p>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/concerns"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View all skin concerns
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConcernsSection;
