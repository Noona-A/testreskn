import { Button } from "@/components/ui/button";

const Acne = () => (
  <div className="pt-24 pb-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="font-serif text-4xl mb-6">Acne</h1>
      <p className="text-muted-foreground mb-8">Breakouts can affect anyone at any age. We help identify triggers and create effective treatment plans.</p>
      <Button asChild className="btn-luxury text-primary-foreground">
        <a href="https://app.cal.eu/resknclinic/prescription-acne-assessment" target="_blank" rel="noopener noreferrer">Book Acne Assessment</a>
      </Button>
    </div>
  </div>
);

export default Acne;
