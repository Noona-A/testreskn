import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const LaserHairRemoval = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-serif text-4xl mb-6">Laser Hair Removal</h1>
        <p className="text-muted-foreground mb-8">Say goodbye to shaving and waxing. Our advanced triple-wavelength diode laser delivers safe, effective, long-lasting results for all skin types.</p>
        <div className="flex gap-4 flex-wrap">
          <Button asChild className="btn-luxury text-primary-foreground">
            <a href="https://app.cal.eu/resknclinic/laser-patch-test" target="_blank">Book Free Patch Test</a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://app.cal.eu/resknclinic/laser-hair-removal" target="_blank">Book Treatment</a>
          </Button>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default LaserHairRemoval;
