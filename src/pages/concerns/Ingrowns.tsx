import { Button } from "@/components/ui/button";

const Ingrowns = () => (
  <div className="pt-16 pb-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="font-serif text-4xl mb-6">Ingrown Hairs</h1>
      <p className="text-muted-foreground mb-8">Painful bumps from shaving or waxing? Laser hair removal offers a long-term solution.</p>
      <Button asChild className="btn-luxury text-primary-foreground">
        <a href="https://app.cal.eu/resknclinic/laser-patch-test" target="_blank" rel="noopener noreferrer">Book Free Patch Test</a>
      </Button>
    </div>
  </div>
);

export default Ingrowns;
