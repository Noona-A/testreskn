import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Acne = () => (
  <div className="pt-16 pb-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="font-serif text-4xl mb-6">Acne</h1>
      <p className="text-muted-foreground mb-8">Breakouts can affect anyone at any age. We help identify triggers and create effective treatment plans tailored to your skin.</p>
      <Button asChild className="btn-luxury text-primary-foreground">
        <Link to="/booking">Book a Consultation</Link>
      </Button>
    </div>
  </div>
);

export default Acne;
