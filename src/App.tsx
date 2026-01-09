import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Index from "./pages/Index";
import SkinClinic from "./pages/SkinClinic";
import Booking from "./pages/Booking";
import Quiz from "./pages/Quiz";
import QuizResults from "./pages/QuizResults";
import ConcernsHub from "./pages/concerns/ConcernsHub";
import Acne from "./pages/concerns/Acne";
import Pigmentation from "./pages/concerns/Pigmentation";
import Sensitivity from "./pages/concerns/Sensitivity";
import Ingrowns from "./pages/concerns/Ingrowns";
import AntiAgeing from "./pages/concerns/AntiAgeing";
import ServicesHub from "./pages/services/ServicesHub";
import OnlineConsultation from "./pages/services/OnlineConsultation";
import InClinicConsultation from "./pages/services/InClinicConsultation";
import PrescriptionAcne from "./pages/services/PrescriptionAcne";
import LaserHairRemoval from "./pages/LaserHairRemoval";
import IngredientsHub from "./pages/ingredients/IngredientsHub";
import CentellaAsiatica from "./pages/ingredients/CentellaAsiatica";
import Niacinamide from "./pages/ingredients/Niacinamide";
import HyaluronicAcid from "./pages/ingredients/HyaluronicAcid";
import Ceramides from "./pages/ingredients/Ceramides";
import AzelaicAcid from "./pages/ingredients/AzelaicAcid";
import SalicylicAcid from "./pages/ingredients/SalicylicAcid";
import LacticAcid from "./pages/ingredients/LacticAcid";
import VitaminC from "./pages/ingredients/VitaminC";
import TranexamicAcid from "./pages/ingredients/TranexamicAcid";
import Panthenol from "./pages/ingredients/Panthenol";
import Squalane from "./pages/ingredients/Squalane";
import Peptides from "./pages/ingredients/Peptides";
import SnailMucin from "./pages/ingredients/SnailMucin";
import Propolis from "./pages/ingredients/Propolis";
import GreenTeaExtract from "./pages/ingredients/GreenTeaExtract";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/quiz/results" element={<QuizResults />} />
              <Route path="/concerns" element={<ConcernsHub />} />
              <Route path="/concerns/acne" element={<Acne />} />
              <Route path="/concerns/pigmentation" element={<Pigmentation />} />
              <Route path="/concerns/sensitivity" element={<Sensitivity />} />
              <Route path="/concerns/ingrowns" element={<Ingrowns />} />
              <Route path="/concerns/anti-ageing" element={<AntiAgeing />} />
              <Route path="/skin-clinic" element={<SkinClinic />} />
              <Route path="/services/online-consultation" element={<OnlineConsultation />} />
              <Route path="/services/in-clinic-consultation" element={<InClinicConsultation />} />
              <Route path="/services/prescription-acne" element={<PrescriptionAcne />} />
              <Route path="/laser-hair-removal" element={<LaserHairRemoval />} />
              <Route path="/treatments/laser-hair-removal" element={<LaserHairRemoval />} />
              <Route path="/ingredients" element={<IngredientsHub />} />
              <Route path="/ingredients/centella-asiatica" element={<CentellaAsiatica />} />
              <Route path="/ingredients/niacinamide" element={<Niacinamide />} />
              <Route path="/ingredients/hyaluronic-acid" element={<HyaluronicAcid />} />
              <Route path="/ingredients/ceramides" element={<Ceramides />} />
              <Route path="/ingredients/azelaic-acid" element={<AzelaicAcid />} />
              <Route path="/ingredients/salicylic-acid" element={<SalicylicAcid />} />
              <Route path="/ingredients/lactic-acid" element={<LacticAcid />} />
              <Route path="/ingredients/vitamin-c" element={<VitaminC />} />
              <Route path="/ingredients/tranexamic-acid" element={<TranexamicAcid />} />
              <Route path="/ingredients/panthenol" element={<Panthenol />} />
              <Route path="/ingredients/squalane" element={<Squalane />} />
              <Route path="/ingredients/peptides" element={<Peptides />} />
              <Route path="/ingredients/snail-mucin" element={<SnailMucin />} />
              <Route path="/ingredients/propolis" element={<Propolis />} />
              <Route path="/ingredients/green-tea-extract" element={<GreenTeaExtract />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
