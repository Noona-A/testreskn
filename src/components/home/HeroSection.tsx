import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-consultation.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Skin consultation at ReSKN Clinic"
          className="w-full h-full object-cover scale-110"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-burgundy-deep/90 via-burgundy/80 to-burgundy-deep/70" />

      {/* Purple accent gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple/30 to-transparent" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/20 backdrop-blur-sm border border-orange/30 mb-8">
            <Sparkles size={16} className="text-orange" />
            <span className="text-sm font-medium text-white">
              Skin consultations & laser hair removal
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6">
            Your best skin starts here
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Personalised skin plans & medical-grade laser treatments. Expert care by a UK-registered pharmacist in Windsor.
          </p>

          {/* Two Service Cards */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            <Link
              to="/booking"
              className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-purple/20 flex items-center justify-center mb-4 group-hover:bg-purple/30 transition-colors">
                <Video size={24} className="text-purple-light" />
              </div>
              <h3 className="font-semibold text-white text-lg mb-1">Skin Consultation</h3>
              <p className="text-white/70 text-sm mb-3">
                Acne • Pigmentation • Sensitivity • Anti-ageing
              </p>
              <span className="text-orange text-sm font-medium flex items-center gap-1">
                From £20 <ArrowRight size={14} />
              </span>
            </Link>

            <Link
              to="/laser-hair-removal"
              className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-orange/20 flex items-center justify-center mb-4 group-hover:bg-orange/30 transition-colors">
                <Sparkles size={24} className="text-orange" />
              </div>
              <h3 className="font-semibold text-white text-lg mb-1">Laser Hair Removal</h3>
              <p className="text-white/70 text-sm mb-3">
                Face • Body • Bikini • Full body packages
              </p>
              <span className="text-orange text-sm font-medium flex items-center gap-1">
                From £25 <ArrowRight size={14} />
              </span>
            </Link>
          </div>

          {/* Main CTA */}
          <Button
            asChild
            size="lg"
            className="btn-luxury text-white px-10 py-6 text-base"
          >
            <Link to="/booking">
              Book Now
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-orange rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
