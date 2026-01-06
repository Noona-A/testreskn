import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const TreatmentsHub = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl text-center mb-12">Treatments</h1>
        <div className="max-w-md mx-auto">
          <Link to="/treatments/laser-hair-removal" className="card-luxury p-8 block text-center">
            <h2 className="font-serif text-2xl mb-2">Laser Hair Removal</h2>
            <p className="text-muted-foreground">Advanced diode laser technology</p>
          </Link>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default TreatmentsHub;
