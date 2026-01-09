import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary via-burgundy-deep to-secondary">
      <div className="container mx-auto px-4 text-center">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-white">Ready to Begin Your Skin Journey?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">Take our free skin quiz or book a consultation today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-luxury text-white">
              <Link to="/quiz">Take the Skin Quiz</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Link to="/booking">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
