import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const InClinicConsultation = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-serif text-4xl mb-6">In-Clinic Consultation</h1>
        <p className="text-xl text-muted-foreground mb-4">45 minutes • £65</p>
        <p className="text-muted-foreground mb-8">Visit our luxury Windsor clinic for a comprehensive skin analysis with advanced diagnostic tools.</p>
        <Button asChild className="btn-luxury text-primary-foreground">
          <a href="https://app.cal.eu/resknclinic/in-clinic-skin-consultation" target="_blank">Book In-Clinic Visit</a>
        </Button>
      </div>
    </main>
    <Footer />
  </div>
);

export default InClinicConsultation;
