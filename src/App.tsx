import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "@/components/ScrollToTop";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Lazy load pages for better performance (code-splitting)
const Index = lazy(() => import("./pages/Index"));
const SkinClinic = lazy(() => import("./pages/SkinClinic"));
const Booking = lazy(() => import("./pages/Booking"));
const Quiz = lazy(() => import("./pages/Quiz"));
const QuizResults = lazy(() => import("./pages/QuizResults"));
const ConcernsHub = lazy(() => import("./pages/concerns/ConcernsHub"));
const Acne = lazy(() => import("./pages/concerns/Acne"));
const Pigmentation = lazy(() => import("./pages/concerns/Pigmentation"));
const Sensitivity = lazy(() => import("./pages/concerns/Sensitivity"));
const Ingrowns = lazy(() => import("./pages/concerns/Ingrowns"));
const AntiAgeing = lazy(() => import("./pages/concerns/AntiAgeing"));
const OnlineConsultation = lazy(() => import("./pages/services/OnlineConsultation"));
const InClinicConsultation = lazy(() => import("./pages/services/InClinicConsultation"));
const PrescriptionAcne = lazy(() => import("./pages/services/PrescriptionAcne"));
const LaserHairRemoval = lazy(() => import("./pages/LaserHairRemoval"));
const IngredientsHub = lazy(() => import("./pages/ingredients/IngredientsHub"));
const CentellaAsiatica = lazy(() => import("./pages/ingredients/CentellaAsiatica"));
const Niacinamide = lazy(() => import("./pages/ingredients/Niacinamide"));
const HyaluronicAcid = lazy(() => import("./pages/ingredients/HyaluronicAcid"));
const Ceramides = lazy(() => import("./pages/ingredients/Ceramides"));
const AzelaicAcid = lazy(() => import("./pages/ingredients/AzelaicAcid"));
const SalicylicAcid = lazy(() => import("./pages/ingredients/SalicylicAcid"));
const LacticAcid = lazy(() => import("./pages/ingredients/LacticAcid"));
const VitaminC = lazy(() => import("./pages/ingredients/VitaminC"));
const TranexamicAcid = lazy(() => import("./pages/ingredients/TranexamicAcid"));
const Panthenol = lazy(() => import("./pages/ingredients/Panthenol"));
const Squalane = lazy(() => import("./pages/ingredients/Squalane"));
const Peptides = lazy(() => import("./pages/ingredients/Peptides"));
const SnailMucin = lazy(() => import("./pages/ingredients/SnailMucin"));
const Propolis = lazy(() => import("./pages/ingredients/Propolis"));
const GreenTeaExtract = lazy(() => import("./pages/ingredients/GreenTeaExtract"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
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
            </Suspense>
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
