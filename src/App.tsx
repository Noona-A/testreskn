import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Index from "./pages/Index";
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
import TreatmentsHub from "./pages/treatments/TreatmentsHub";
import LaserHairRemoval from "./pages/treatments/LaserHairRemoval";
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
              <Route path="/services" element={<ServicesHub />} />
              <Route path="/services/online-consultation" element={<OnlineConsultation />} />
              <Route path="/services/in-clinic-consultation" element={<InClinicConsultation />} />
              <Route path="/services/prescription-acne" element={<PrescriptionAcne />} />
              <Route path="/treatments" element={<TreatmentsHub />} />
              <Route path="/treatments/laser-hair-removal" element={<LaserHairRemoval />} />
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
