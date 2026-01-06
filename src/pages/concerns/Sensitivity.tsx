import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const Sensitivity = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-serif text-4xl mb-6">Sensitivity & Redness</h1>
        <p className="text-muted-foreground mb-8">Reactive skin and rosacea require gentle, targeted care. We'll help calm and strengthen your skin barrier.</p>
        <Button asChild className="btn-luxury text-primary-foreground">
          <a href="https://app.cal.eu/resknclinic/online-skin-consultation" target="_blank">Book Consultation</a>
        </Button>
      </div>
    </main>
    <Footer />
  </div>
);

export default Sensitivity;
