import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Booking = lazy(() => import("./pages/Booking"));
const Quiz = lazy(() => import("./pages/Quiz"));
const QuizResults = lazy(() => import("./pages/QuizResults"));
const LaserHairRemoval = lazy(() => import("./pages/LaserHairRemoval"));
const SkinClinic = lazy(() => import("./pages/SkinClinic"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Concerns

// Concerns
const ConcernsHub = lazy(() => import("./pages/concerns/ConcernsHub"));
const Acne = lazy(() => import("./pages/concerns/Acne"));
const Pigmentation = lazy(() => import("./pages/concerns/Pigmentation"));
const Sensitivity = lazy(() => import("./pages/concerns/Sensitivity"));
const Ingrowns = lazy(() => import("./pages/concerns/Ingrowns"));
const AntiAgeing = lazy(() => import("./pages/concerns/AntiAgeing"));

// Ingredients
const IngredientsHub = lazy(() => import("./pages/ingredients/IngredientsHub"));
const Niacinamide = lazy(() => import("./pages/ingredients/Niacinamide"));
const HyaluronicAcid = lazy(() => import("./pages/ingredients/HyaluronicAcid"));
const VitaminC = lazy(() => import("./pages/ingredients/VitaminC"));
const SalicylicAcid = lazy(() => import("./pages/ingredients/SalicylicAcid"));
const LacticAcid = lazy(() => import("./pages/ingredients/LacticAcid"));
const AzelaicAcid = lazy(() => import("./pages/ingredients/AzelaicAcid"));
const TranexamicAcid = lazy(() => import("./pages/ingredients/TranexamicAcid"));
const Ceramides = lazy(() => import("./pages/ingredients/Ceramides"));
const Squalane = lazy(() => import("./pages/ingredients/Squalane"));
const Peptides = lazy(() => import("./pages/ingredients/Peptides"));
const CentellaAsiatica = lazy(() => import("./pages/ingredients/CentellaAsiatica"));
const GreenTeaExtract = lazy(() => import("./pages/ingredients/GreenTeaExtract"));
const Panthenol = lazy(() => import("./pages/ingredients/Panthenol"));
const Propolis = lazy(() => import("./pages/ingredients/Propolis"));
const SnailMucin = lazy(() => import("./pages/ingredients/SnailMucin"));

// Guides
const GuidesHub = lazy(() => import("./pages/guides/GuidesHub"));
const AcneGuide = lazy(() => import("./pages/guides/AcneGuide"));

const queryClient = new QueryClient();

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse text-primary">Loading...</div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 pt-16 md:pt-20">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/booking" element={<Booking />} />
                  <Route path="/quiz" element={<Quiz />} />
                  <Route path="/quiz/results" element={<QuizResults />} />
                  <Route path="/laser-hair-removal" element={<LaserHairRemoval />} />
                  <Route path="/skin-clinic" element={<SkinClinic />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  
                  
                  {/* Concerns */}
                  <Route path="/concerns" element={<ConcernsHub />} />
                  <Route path="/concerns/acne" element={<Acne />} />
                  <Route path="/concerns/pigmentation" element={<Pigmentation />} />
                  <Route path="/concerns/sensitivity" element={<Sensitivity />} />
                  <Route path="/concerns/ingrowns" element={<Ingrowns />} />
                  <Route path="/concerns/anti-ageing" element={<AntiAgeing />} />
                  
                  {/* Ingredients */}
                  <Route path="/ingredients" element={<IngredientsHub />} />
                  <Route path="/ingredients/niacinamide" element={<Niacinamide />} />
                  <Route path="/ingredients/hyaluronic-acid" element={<HyaluronicAcid />} />
                  <Route path="/ingredients/vitamin-c" element={<VitaminC />} />
                  <Route path="/ingredients/salicylic-acid" element={<SalicylicAcid />} />
                  <Route path="/ingredients/lactic-acid" element={<LacticAcid />} />
                  <Route path="/ingredients/azelaic-acid" element={<AzelaicAcid />} />
                  <Route path="/ingredients/tranexamic-acid" element={<TranexamicAcid />} />
                  <Route path="/ingredients/ceramides" element={<Ceramides />} />
                  <Route path="/ingredients/squalane" element={<Squalane />} />
                  <Route path="/ingredients/peptides" element={<Peptides />} />
                  <Route path="/ingredients/centella-asiatica" element={<CentellaAsiatica />} />
                  <Route path="/ingredients/green-tea-extract" element={<GreenTeaExtract />} />
                  <Route path="/ingredients/panthenol" element={<Panthenol />} />
                  <Route path="/ingredients/propolis" element={<Propolis />} />
                  <Route path="/ingredients/snail-mucin" element={<SnailMucin />} />
                  
                  {/* Guides */}
                  <Route path="/guides" element={<GuidesHub />} />
                  <Route path="/guides/acne" element={<AcneGuide />} />
                  
                  {/* Catch-all */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;