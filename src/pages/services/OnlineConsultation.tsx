import { Button } from "@/components/ui/button";

const OnlineConsultation = () => (
  <div className="pt-16 pb-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="font-serif text-4xl mb-6">Online Skin Consultation</h1>
      <p className="text-xl text-muted-foreground mb-4">30 minutes • £45</p>
      <p className="text-muted-foreground mb-8">Connect with our skin specialists via Zoom from the comfort of your home. Perfect for initial assessments and follow-ups.</p>
      <Button asChild className="btn-luxury text-primary-foreground">
        <a href="https://app.cal.eu/resknclinic/online-skin-consultation" target="_blank" rel="noopener noreferrer">Book Online Consultation</a>
      </Button>
    </div>
  </div>
);

export default OnlineConsultation;
