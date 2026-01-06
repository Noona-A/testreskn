import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Terms = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl prose">
        <h1 className="font-serif text-4xl mb-6">Terms of Service</h1>
        <p className="text-muted-foreground mb-6">By using ReSKN Clinic services, you agree to these terms.</p>
        <h2 className="font-serif text-2xl mt-8 mb-4">Medical Disclaimer</h2>
        <p className="text-muted-foreground">Our consultations provide guidance and are not a substitute for medical advice from your GP. Seek urgent help for severe symptoms.</p>
        <h2 className="font-serif text-2xl mt-8 mb-4">Bookings</h2>
        <p className="text-muted-foreground">Cancellations must be made 24 hours in advance. Late cancellations may incur a fee.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Terms;
