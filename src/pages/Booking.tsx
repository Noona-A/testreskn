import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Sparkles, Video, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

type ServiceType = "skin" | "laser" | null;
type PaymentType = "full" | "deposit" | null;

interface LaserArea {
  name: string;
  category: "face" | "upper" | "lower" | "full";
  duration: string;
  fullPrice: string;
  depositPrice: string;
  fullLink: string;
  depositLink: string | null;
}

const laserAreas: LaserArea[] = [
  // Face
  { name: "Nose", category: "face", duration: "30m", fullPrice: "£25", depositPrice: "£25", fullLink: "https://app.cal.eu/resknclinic/face-nose", depositLink: null },
  { name: "Ears", category: "face", duration: "30m", fullPrice: "£25", depositPrice: "£25", fullLink: "https://app.cal.eu/resknclinic/face-ears", depositLink: null },
  { name: "Upper Lip", category: "face", duration: "30m", fullPrice: "£25", depositPrice: "£25", fullLink: "https://app.cal.eu/resknclinic/face-upper-lip", depositLink: null },
  { name: "Chin", category: "face", duration: "30m", fullPrice: "£25", depositPrice: "£25", fullLink: "https://app.cal.eu/resknclinic/face-chin", depositLink: null },
  { name: "Side Burns", category: "face", duration: "30m", fullPrice: "£35", depositPrice: "£25", fullLink: "https://app.cal.eu/resknclinic/face-side-burns", depositLink: "https://app.cal.eu/resknclinic/face-side-burns-deposit" },
  { name: "Neck", category: "face", duration: "30m", fullPrice: "£50", depositPrice: "£25", fullLink: "https://app.cal.eu/resknclinic/face-neck", depositLink: "https://app.cal.eu/resknclinic/face-neck-deposit" },
  { name: "Full Face", category: "face", duration: "30m", fullPrice: "£60", depositPrice: "£25", fullLink: "https://app.cal.eu/resknclinic/face-full-face", depositLink: "https://app.cal.eu/resknclinic/face-full-face-deposit" },
  { name: "Full Face & Neck", category: "face", duration: "60m", fullPrice: "£80", depositPrice: "£25", fullLink: "https://app.cal.eu/resknclinic/face-full-face-and-neck", depositLink: "https://app.cal.eu/resknclinic/face-full-face-and-neck-deposit" },
  
  // Upper Body
  { name: "Underarms", category: "upper", duration: "20m", fullPrice: "£25", depositPrice: "£25", fullLink: "https://app.cal.eu/resknclinic/upper-body-underarms", depositLink: null },
  { name: "Hands & Fingers", category: "upper", duration: "30m", fullPrice: "£50", depositPrice: "£25", fullLink: "https://app.cal.eu/resknclinic/upper-body-hands-fingers", depositLink: "https://app.cal.eu/resknclinic/upper-body-hands-fingers-deposit" },
  { name: "Shoulder", category: "upper", duration: "30m", fullPrice: "£60", depositPrice: "£25", fullLink: "https://app.cal.eu/resknclinic/upper-body-shoulder", depositLink: "https://app.cal.eu/resknclinic/upper-body-shoulder-deposit" },
  { name: "Half Arms", category: "upper", duration: "30m", fullPrice: "£60", depositPrice: "£25", fullLink: "https://app.cal.eu/resknclinic/upper-body-half-arms", depositLink: "https://app.cal.eu/resknclinic/upper-body-half-arms-deposit" },
  { name: "Full Arms", category: "upper", duration: "60m", fullPrice: "£90", depositPrice: "£25", fullLink: "https://app.cal.eu/resknclinic/upper-body-full-arms", depositLink: "https://app.cal.eu/resknclinic/upper-body-full-arms-deposit" },
  { name: "Chest", category: "upper", duration: "60m", fullPrice: "£60", depositPrice: "£25", fullLink: "https://app.cal.eu/resknclinic/upper-body-chest", depositLink: "https://app.cal.eu/resknclinic/upper-body-chest-deposit" },
  { name: "Stomach", category: "upper", duration: "30m", fullPrice: "£60", depositPrice: "£25", fullLink: "https://app.cal.eu/resknclinic/upper-body-stomach", depositLink: "https://app.cal.eu/resknclinic/upper-body-stomach-copy" },
  { name: "Back", category: "upper", duration: "60m", fullPrice: "£100", depositPrice: "£25", fullLink: "https://app.cal.eu/resknclinic/upper-body-back", depositLink: "https://app.cal.eu/resknclinic/upper-body-back-deposit" },
  
  // Lower Body
  { name: "Bikini", category: "lower", duration: "30m", fullPrice: "£40", depositPrice: "£25", fullLink: "https://app.cal.eu/resknclinic/lower-body-bikini", depositLink: "https://app.cal.eu/resknclinic/lower-body-bikini-deposit" },
  { name: "Bikini & Intimate", category: "lower", duration: "30m", fullPrice: "£50", depositPrice: "£25", fullLink: "https://app.cal.eu/resknclinic/lower-body-bikini-intimate-area", depositLink: "https://app.cal.eu/resknclinic/lower-body-bikini-intimate-area-deposit" },
  { name: "Bottom", category: "lower", duration: "30m", fullPrice: "£55", depositPrice: "£25", fullLink: "https://app.cal.eu/resknclinic/lower-body-bottom", depositLink: "https://app.cal.eu/resknclinic/lower-body-bottom-deposit" },
  { name: "Half Legs", category: "lower", duration: "60m", fullPrice: "£90", depositPrice: "£25", fullLink: "https://app.cal.eu/resknclinic/lower-body-half-legs", depositLink: "https://app.cal.eu/resknclinic/lower-body-half-legs-deposit" },
  { name: "Full Legs", category: "lower", duration: "60m", fullPrice: "£140", depositPrice: "£25", fullLink: "https://app.cal.eu/resknclinic/lower-body-full-legs", depositLink: "https://app.cal.eu/resknclinic/lower-body-full-legs-deposit" },
  { name: "Feet & Toes", category: "lower", duration: "30m", fullPrice: "£45", depositPrice: "£25", fullLink: "https://app.cal.eu/resknclinic/lower-body-feet-and-toes", depositLink: "https://app.cal.eu/resknclinic/lower-body-feet-and-toes-deposit" },
  
  // Full Body
  { name: "Full Body", category: "full", duration: "120m", fullPrice: "£300", depositPrice: "£25", fullLink: "https://app.cal.eu/resknclinic/lower-body-full-body", depositLink: "https://app.cal.eu/resknclinic/full-body-deposit" },
];

const skinServices = [
  { name: "Online Skin Consultation", duration: "30m", price: "£35", link: "https://app.cal.eu/resknclinic/online-skin-consultation", description: "Video consultation from home" },
  { name: "Follow-up Review", duration: "15m", price: "£20", link: "https://app.cal.eu/resknclinic/follow-up-review", description: "Check progress & adjust plan" },
];

const Booking = () => {
  const [step, setStep] = useState(1);
  const [serviceType, setServiceType] = useState<ServiceType>(null);
  const [selectedArea, setSelectedArea] = useState<LaserArea | null>(null);
  const [paymentType, setPaymentType] = useState<PaymentType>(null);
  const [activeCategory, setActiveCategory] = useState<"face" | "upper" | "lower" | "full">("face");

  const handleServiceSelect = (type: ServiceType) => {
    setServiceType(type);
    setStep(2);
  };

  const handleAreaSelect = (area: LaserArea) => {
    setSelectedArea(area);
    // If no deposit option, go straight to full payment
    if (!area.depositLink) {
      setPaymentType("full");
      setStep(3);
    } else {
      setStep(3);
    }
  };

  const handlePaymentSelect = (type: PaymentType) => {
    setPaymentType(type);
  };

  const getBookingLink = () => {
    if (!selectedArea) return "#";
    if (paymentType === "deposit" && selectedArea.depositLink) {
      return selectedArea.depositLink;
    }
    return selectedArea.fullLink;
  };

  const goBack = () => {
    if (step === 2) {
      setServiceType(null);
      setStep(1);
    } else if (step === 3) {
      setSelectedArea(null);
      setPaymentType(null);
      setStep(2);
    }
  };

  const filteredAreas = laserAreas.filter(area => area.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                  step >= s
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {step > s ? <Check size={18} /> : s}
              </div>
              {s < 3 && (
                <div
                  className={`w-12 h-0.5 mx-2 transition-all ${
                    step > s ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Back Button */}
        {step > 1 && (
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft size={18} />
            Back
          </button>
        )}

        <AnimatePresence mode="wait">
          {/* Step 1: Choose Service Type */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  What would you like to book?
                </h1>
                <p className="text-muted-foreground">
                  Choose the service that's right for you
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleServiceSelect("skin")}
                  className="group p-8 rounded-2xl border-2 border-border hover:border-primary/50 bg-card hover:bg-accent/30 transition-all text-left"
                >
                  <div className="w-16 h-16 rounded-2xl bg-purple/10 flex items-center justify-center mb-6 group-hover:bg-purple/20 transition-colors">
                    <Video size={28} className="text-purple" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    Skin Consultation
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Expert advice for acne, pigmentation, sensitivity & more
                  </p>
                  <span className="text-primary text-sm font-medium flex items-center gap-2">
                    From £20 <ArrowRight size={14} />
                  </span>
                </motion.button>

                <motion.a
                  href="https://app.cal.eu/resknclinic/patchtest"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group p-8 rounded-2xl border-2 border-border hover:border-primary/50 bg-card hover:bg-accent/30 transition-all text-left"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Check size={28} className="text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    Patch Test
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Required before your first laser session. Fee redeemable.
                  </p>
                  <span className="text-primary text-sm font-medium flex items-center gap-2">
                    £25 <ArrowRight size={14} />
                  </span>
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleServiceSelect("laser")}
                  className="group p-8 rounded-2xl border-2 border-border hover:border-primary/50 bg-card hover:bg-accent/30 transition-all text-left"
                >
                  <div className="w-16 h-16 rounded-2xl bg-orange/10 flex items-center justify-center mb-6 group-hover:bg-orange/20 transition-colors">
                    <Sparkles size={28} className="text-orange" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    Laser Hair Removal
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Medical-grade laser for smooth, hair-free skin
                  </p>
                  <span className="text-primary text-sm font-medium flex items-center gap-2">
                    From £25 <ArrowRight size={14} />
                  </span>
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Skin Services or Laser Body Parts */}
          {step === 2 && serviceType === "skin" && (
            <motion.div
              key="step2-skin"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  Choose Your Consultation
                </h1>
                <p className="text-muted-foreground">
                  Select the appointment type that suits you
                </p>
              </div>

              <div className="grid gap-4 max-w-lg mx-auto">
                {skinServices.map((service) => (
                  <motion.a
                    key={service.name}
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group p-6 rounded-xl border border-border hover:border-primary/50 bg-card hover:bg-accent/30 transition-all flex items-center justify-between"
                  >
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                      <span className="text-xs text-muted-foreground mt-1 inline-block">
                        {service.duration}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-primary font-semibold">{service.price}</span>
                      <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary ml-auto mt-2 transition-colors" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && serviceType === "laser" && (
            <motion.div
              key="step2-laser"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  Select Treatment Area
                </h1>
                <p className="text-muted-foreground">
                  Choose the body part for laser hair removal
                </p>
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { id: "face" as const, label: "Face" },
                  { id: "upper" as const, label: "Upper Body" },
                  { id: "lower" as const, label: "Lower Body" },
                  { id: "full" as const, label: "Full Body" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === cat.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-accent"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Areas Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredAreas.map((area) => (
                  <motion.button
                    key={area.name}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAreaSelect(area)}
                    className="group p-5 rounded-xl border border-border hover:border-primary/50 bg-card hover:bg-accent/30 transition-all text-left"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {area.name}
                      </h3>
                      <span className="text-primary font-semibold text-sm">
                        {area.fullPrice}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">{area.duration}</span>
                    {area.depositLink && (
                      <p className="text-xs text-orange mt-2">£25 deposit available</p>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 3: Payment Selection (Laser only) */}
          {step === 3 && selectedArea && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                  How would you like to pay?
                </h1>
                <p className="text-muted-foreground">
                  {selectedArea.name} - {selectedArea.duration}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {selectedArea.depositLink && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handlePaymentSelect("deposit")}
                    className={`group p-8 rounded-2xl border-2 transition-all text-left ${
                      paymentType === "deposit"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50 bg-card hover:bg-accent/30"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        Pay Deposit
                      </h3>
                      {paymentType === "deposit" && (
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <Check size={14} className="text-primary-foreground" />
                        </div>
                      )}
                    </div>
                    <p className="text-3xl font-bold text-primary mb-2">£25</p>
                    <p className="text-muted-foreground text-sm">
                      Pay the remaining {parseInt(selectedArea.fullPrice.replace("£", "")) - 25 > 0 
                        ? `£${parseInt(selectedArea.fullPrice.replace("£", "")) - 25}` 
                        : "balance"} at your appointment
                    </p>
                  </motion.button>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handlePaymentSelect("full")}
                  className={`group p-8 rounded-2xl border-2 transition-all text-left ${
                    paymentType === "full"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50 bg-card hover:bg-accent/30"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      Pay in Full
                    </h3>
                    {paymentType === "full" && (
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Check size={14} className="text-primary-foreground" />
                      </div>
                    )}
                  </div>
                  <p className="text-3xl font-bold text-primary mb-2">{selectedArea.fullPrice}</p>
                  <p className="text-muted-foreground text-sm">
                    Complete payment upfront
                  </p>
                </motion.button>
              </div>

              {/* Confirm Button */}
              {paymentType && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-center"
                >
                  <Button
                    asChild
                    size="lg"
                    className="btn-luxury text-white px-12 py-6 text-base"
                  >
                    <a href={getBookingLink()} target="_blank" rel="noopener noreferrer">
                      Continue to Booking
                      <ArrowRight className="ml-2" size={18} />
                    </a>
                  </Button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Help Link */}
        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground">
            Not sure what you need?{" "}
            <Link to="/quiz" className="text-primary hover:underline">
              Take our skin quiz
            </Link>{" "}
            or{" "}
            <Link to="/contact" className="text-primary hover:underline">
              get in touch
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
