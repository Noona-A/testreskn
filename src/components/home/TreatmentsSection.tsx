import { Link } from "react-router-dom";
import { Sparkles, Shield, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import laserImage from "@/assets/laser-treatment.jpg";

const TreatmentsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-6">
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-medium text-accent-foreground">Featured Treatment</span>
              </span>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6">
                Laser Hair Removal
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Say goodbye to shaving, waxing, and ingrown hairs. Our advanced diode laser technology 
                delivers safe, effective, and long-lasting results for all skin types.
              </p>

              <div className="space-y-4 mb-8">
                <div className="feature-item flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Zap size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Advanced Diode Technology</h4>
                    <p className="text-muted-foreground text-sm">Triple-wavelength system for maximum efficacy and comfort</p>
                  </div>
                </div>
                <div className="feature-item flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Shield size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Safe for All Skin Tones</h4>
                    <p className="text-muted-foreground text-sm">Clinically proven safe across Fitzpatrick skin types I-VI</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  className="btn-luxury text-white"
                >
                  <a href="https://app.cal.eu/resknclinic/laser-patch-test" target="_blank" rel="noopener noreferrer">
                    Book Free Patch Test
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-primary/30">
                  <Link to="/treatments/laser-hair-removal">
                    Learn More
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl">
                <img
                  src={laserImage}
                  alt="Laser hair removal treatment"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/60 via-transparent to-purple/20" />
              </div>

              {/* Floating card */}
              <div 
                className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-lg border border-border max-w-[200px]"
              >
                <p className="text-sm font-medium text-foreground mb-1">Patch test</p>
                <p className="text-2xl font-serif font-semibold text-primary">Free</p>
                <p className="text-xs text-muted-foreground mt-1">Before your first session</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;