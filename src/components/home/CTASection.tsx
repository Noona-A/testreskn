import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="py-24 bg-paradise-gradient">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-serif text-3xl md:text-4xl mb-4">Ready to Begin Your Skin Journey?</h2>
      <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Take our free skin quiz or book a consultation today</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" className="btn-luxury text-primary-foreground">
          <Link to="/quiz">Take the Skin Quiz</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="https://app.cal.eu/resknclinic" target="_blank" rel="noopener noreferrer">Book Consultation</a>
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
