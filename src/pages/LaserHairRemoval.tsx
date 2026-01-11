import { useState } from "react";
import { Link } from "react-router-dom";
import { ClipboardCheck, Zap, Calendar, RefreshCw, Check, Shield, ShieldCheck, ArrowRight, Sparkles, Star, Sun, Droplets, AlertTriangle, XCircle, CheckCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import laserHeroImg from "@/assets/laser-hero.jpg";
import laserResultArmpit from "@/assets/laser-result-armpit.jpg";
import laserResultLeg from "@/assets/laser-result-leg.jpg";
const steps = [{
  number: "1",
  icon: ClipboardCheck,
  title: "Patch Test",
  description: "Required before your first session to ensure safety and suitability."
}, {
  number: "2",
  icon: Zap,
  title: "Laser Treatment",
  description: "Targeted treatment using medical-grade laser technology."
}, {
  number: "3",
  icon: Calendar,
  title: "Treatment Course",
  description: "A series of sessions for long-lasting hair reduction."
}, {
  number: "4",
  icon: RefreshCw,
  title: "Maintenance",
  description: "Optional maintenance sessions as needed."
}];
const safetyPoints = ["Medical-grade 808nm diode laser with 4 wavelengths", "Treatments delivered by a UK-registered pharmacist", "Patch test required for new clients", "Safety-first, evidence-based protocols"];
const beforeTreatment = ["Shave the area 12–24 hours before your appointment — surface hair can absorb laser energy; shaving keeps the follicle intact", "Avoid waxing, plucking, or epilation for 4–6 weeks before treatment — these remove the structure the laser targets", "Avoid sun exposure, self-tan, and sunbeds for at least 2–4 weeks — tanned skin increases burn and pigmentation risk", "Stop retinoids, exfoliants, and acids 3–7 days prior if advised — these increase skin sensitivity", "Arrive with clean, product-free skin — no lotions, oils, make-up, deodorants or moisturisers on the treatment area", "Discuss any medications or skin conditions with your therapist to rule out photosensitising effects"];
const afterTreatment = ["Avoid direct UV exposure and tanning beds for 2–4 weeks — apply SPF50+ daily to treated areas", "Avoid heat, saunas, steam rooms, and strenuous exercise for 48–72 hours to prevent inflammation", "Keep the area gentle — avoid tight clothing, scrubs, and fragranced products for 48–72 hours", "Do not shave for at least 48–72 hours — plucking or waxing remains contraindicated throughout your course", "Apply light cooling compresses or a soothing gel to reduce redness and discomfort"];
const bestPractices = ["Follow your personalised schedule — typically 4–8 weeks apart — to catch hairs in successive growth cycles", "Shave consistently prior to each session for optimal laser penetration", "Protect treated skin from UV daily to avoid pigmentation changes and support uniform results", "Maintain hydration and gentle skincare between treatment days", "Avoid smoking and excessive alcohol around treatments — these can affect circulation and healing"];
// Green section - Ideal candidates & conditions treated
const idealCandidates = [
  {
    condition: "Dark hair (black or brown) on any skin tone",
    reason: "The laser targets melanin (pigment) in the hair follicle — darker hair absorbs energy more effectively for better results"
  },
  {
    condition: "Skin types I–V (fair to dark brown skin)",
    reason: "Our 808nm diode laser with 4 wavelengths is clinically proven safe for Fitzpatrick types I–V with integrated cooling technology"
  },
  {
    condition: "Coarse or thick hair",
    reason: "Thicker hairs contain more melanin, making them easier for the laser to target and destroy"
  },
  {
    condition: "PCOS (Polycystic Ovary Syndrome)",
    reason: "Clinically recommended for managing unwanted facial and body hair caused by hormonal imbalances"
  },
  {
    condition: "Hirsutism",
    reason: "Clinically indicated for women with excess hair growth in typically male-pattern areas (face, chest, back)"
  },
  {
    condition: "Pilonidal sinus (post-surgery)",
    reason: "Recommended to reduce hair regrowth and lower the risk of recurrence after surgical treatment"
  },
  {
    condition: "Gender transition (pre-surgical hair removal)",
    reason: "Per NHS and NICE guidelines, laser hair removal is recommended for facial hair and genital donor sites before gender-affirming surgery — we provide a supportive, confidential service"
  }
];

// Orange section - Proceed with care (merged caution + less effective)
const proceedWithCare = [
  {
    condition: "Very dark skin (Fitzpatrick type VI)",
    reason: "Our 808nm diode laser is optimised for types I–V. For type VI skin, alternative wavelengths (e.g. Nd:YAG 1064nm) may be safer — we'll discuss options during your consultation"
  },
  {
    condition: "White, grey, red, or very light blonde hair",
    reason: "These hair colours lack sufficient melanin for the laser to target effectively — results may be limited"
  },
  {
    condition: "Very fine or 'peach fuzz' hair",
    reason: "Minimal pigment in fine vellus hair means the laser may not produce noticeable reduction"
  },
  {
    condition: "PCOS or hormonal conditions",
    reason: "While treatment works well, you may need additional sessions and ongoing maintenance as hormones can stimulate new growth"
  },
  {
    condition: "History of cold sores (herpes simplex)",
    reason: "Laser energy near the mouth can trigger an outbreak — we may prescribe antiviral medication beforehand"
  },
  {
    condition: "Diabetes",
    reason: "Slower wound healing may increase infection risk — extra aftercare precautions apply"
  },
  {
    condition: "Moles, freckles, or tattoos in the treatment area",
    reason: "The laser must avoid these with a safe perimeter to prevent burns or pigment changes"
  }
];

// Red section - Not recommended (contraindications)
const notRecommended = [
  {
    condition: "Active skin infections in the treatment area",
    reason: "Including cold sores, impetigo, shingles, eczema, or psoriasis flare-ups — treatment must wait until healed"
  },
  {
    condition: "Recent sun exposure or fake tan",
    reason: "Wait 4–6 weeks after sun/sunbed exposure, or 10+ days after self-tan — tanned skin significantly increases burn risk"
  },
  {
    condition: "Roaccutane (isotretinoin) use",
    reason: "Must wait at least 6 months after stopping — this medication thins the skin and increases sensitivity"
  },
  {
    condition: "Pregnancy or breastfeeding",
    reason: "Not recommended due to hormonal changes affecting results and limited safety data — we advise waiting"
  },
  {
    condition: "History of keloid scarring",
    reason: "High risk of abnormal scar formation — laser treatment is not advised"
  },
  {
    condition: "Photosensitising medications",
    reason: "Certain drugs (e.g., some antibiotics, St John's Wort) increase light sensitivity and burn risk"
  }
];
// Treatment Guide Section Component with tabs
const TreatmentGuideSection = ({ 
  beforeTreatment, 
  afterTreatment, 
  bestPractices 
}: { 
  beforeTreatment: string[]; 
  afterTreatment: string[]; 
  bestPractices: string[];
}) => {
  const [activeTab, setActiveTab] = useState<'before' | 'after' | 'best'>('before');

  const tabs = [
    { id: 'before' as const, label: 'Before', icon: ClipboardCheck },
    { id: 'after' as const, label: 'After', icon: Sun },
    { id: 'best' as const, label: 'Best Results', icon: Sparkles },
  ];

  const content = {
    before: {
      title: 'Before your treatment',
      description: 'Preparing your skin correctly sets the foundation for both safety and effectiveness — allowing the laser energy to reach the hair follicle efficiently while minimising irritation.',
      items: beforeTreatment,
      icon: Check,
    },
    after: {
      title: 'After your treatment',
      description: 'Post-treatment aftercare is essential to allow controlled healing, prevent complications, and protect skin while it\'s most vulnerable.',
      items: afterTreatment,
      icon: Check,
    },
    best: {
      title: 'For best results',
      description: 'Laser hair removal works by targeting hair in its active growth (anagen) phase — not all hairs are in this phase at once, so multiple sessions are required.',
      items: bestPractices,
      icon: Sparkles,
    },
  };

  const currentContent = content[activeTab];
  const IconComponent = currentContent.icon;

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-accent rounded-full text-sm mb-4">
              Treatment Guide
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
              Prepare for the best results
            </h2>
            <p className="text-muted-foreground">
              Following these guidelines ensures both safety and effectiveness of your laser hair removal course.
            </p>
          </div>

          <div className="grid md:grid-cols-[200px_1fr] gap-6">
            {/* Tab Buttons - Vertical on desktop, horizontal on mobile */}
            <div className="flex md:flex-col gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 flex-1 md:flex-none ${
                    activeTab === tab.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-card hover:bg-accent text-foreground border border-border'
                  }`}
                >
                  <tab.icon className={`w-5 h-5 flex-shrink-0 ${activeTab === tab.id ? 'text-white' : 'text-primary'}`} />
                  <span className="font-medium text-sm md:text-base">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="card-luxury p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  {activeTab === 'before' && <ClipboardCheck className="w-5 h-5 text-primary" />}
                  {activeTab === 'after' && <Sun className="w-5 h-5 text-primary" />}
                  {activeTab === 'best' && <Sparkles className="w-5 h-5 text-primary" />}
                </div>
                <h3 className="font-serif text-xl">{currentContent.title}</h3>
              </div>
              <p className="text-muted-foreground mb-6 text-sm">
                {currentContent.description}
              </p>
              <ul className="space-y-3">
                {currentContent.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <IconComponent className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LaserHairRemoval = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Laser Hair Removal",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "ReSKN Clinic",
      "alternateName": ["Re-SKN", "ReSKN"]
    },
    "areaServed": {
      "@type": "City",
      "name": "Windsor"
    },
    "description": "Professional laser hair removal treatments using medical-grade technology at ReSKN Clinic in Windsor, Berkshire."
  };
  return <>
      <SEO title="Laser Hair Removal | ReSKN Clinic Windsor" description="Professional laser hair removal in Windsor. Medical-grade technology, expert care by UK-registered pharmacist. Book your patch test at ReSKN Clinic today." keywords="ReSKN, laser hair removal Windsor, laser hair removal Berkshire, ReSKN Clinic, permanent hair removal, medical grade laser" canonical="https://resknclinic.co.uk/laser-hair-removal" structuredData={structuredData} />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-lavender-light via-background to-background overflow-hidden md:py-[60px]">
        <div className="palm-shadow-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Sparkles size={16} className="text-primary" />
                  <span className="text-sm font-medium text-secondary">Medical-Grade Laser Treatment</span>
                </span>
                
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-foreground leading-tight mb-6">
                  Laser hair removal
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                  Safe, effective, medical-grade laser treatments for smoother, longer-lasting results — delivered by a UK-registered pharmacist.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4">
                  <Button asChild size="lg" className="btn-luxury text-white px-8">
                    <Link to="/booking">
                      Book Laser Hair Removal <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8">
                    <Link to="/booking">
                      Book Patch Test
                    </Link>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">Patch test required for new clients</p>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                  <img src={laserHeroImg} alt="Medical-grade laser treatment" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Laser Hair Removal */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-8">
              What is laser hair removal?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Laser hair removal uses targeted light energy to reduce unwanted hair safely and effectively.
              Our treatments are tailored to your skin type and hair profile for optimal results.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">Your journey to smooth, hair-free skin</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => <div key={step.title} className="relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold z-10">
                    {step.number}
                  </div>
                  <div className="card-luxury p-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
                      <step.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Guide Section */}
      <TreatmentGuideSection 
        beforeTreatment={beforeTreatment}
        afterTreatment={afterTreatment}
        bestPractices={bestPractices}
      />

      {/* Suitability Section */}
      <section className="py-12 md:py-16 bg-section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
                Is laser hair removal right for you?
              </h2>
              <p className="text-muted-foreground">
                Our 808nm diode laser is suitable for most skin types (Fitzpatrick I–V). Some conditions require extra care or may mean treatment isn't recommended.
              </p>
            </div>

            {/* Green - Ideal Candidates & Conditions Treated */}
            <div className="card-luxury p-8 mb-6 border-l-4 border-l-green-500">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h3 className="font-serif text-xl">Ideal candidates & conditions treated</h3>
              </div>
              <p className="text-muted-foreground mb-6 text-sm">
                Laser hair removal is clinically recommended for the following — based on NICE, NHS, and BMLA guidance.
              </p>
              <ul className="space-y-4">
                {idealCandidates.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">{item.condition}</span>
                      <p className="text-muted-foreground text-sm mt-1">{item.reason}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Orange - Proceed With Care */}
            <div className="card-luxury p-8 mb-6 border-l-4 border-l-amber-500">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <h3 className="font-serif text-xl">Proceed with care</h3>
              </div>
              <p className="text-muted-foreground mb-6 text-sm">
                Treatment is still possible in many cases, but results may vary or extra precautions are needed. We'll discuss this during your consultation.
              </p>
              <ul className="space-y-4">
                {proceedWithCare.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">{item.condition}</span>
                      <p className="text-muted-foreground text-sm mt-1">{item.reason}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Red - Not Recommended */}
            <div className="card-luxury p-8 mb-6 border-l-4 border-l-red-500">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-5 h-5 text-red-500" />
                <h3 className="font-serif text-xl">Not recommended</h3>
              </div>
              <p className="text-muted-foreground mb-6 text-sm">
                According to UK clinical guidelines, treatment should be postponed or avoided entirely in these situations.
              </p>
              <ul className="space-y-4">
                {notRecommended.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">{item.condition}</span>
                      <p className="text-muted-foreground text-sm mt-1">{item.reason}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinical Disclaimer */}
            <div className="card-luxury p-6 bg-muted/30 border-l-4 border-l-primary/30">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-primary/70 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This guidance is based on the British Medical Laser Association (BMLA), NICE, and NHS recommendations. It is for educational purposes only and does not replace a personalised consultation. Every client receives a full assessment and patch test before treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Professional Standards */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
                Safety & Professional Standards
              </h2>
            </div>

            <div className="card-luxury p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8 justify-center">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                  <ShieldCheck size={28} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground">Your safety is our priority</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {safetyPoints.map((point, index) => <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-accent/50">
                    <Check size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Reviews */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
                Real results, real reviews
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                See what our clients are saying about their laser hair removal journey
              </p>
            </div>

            {/* Results Gallery */}
            <div className="grid sm:grid-cols-2 gap-6 mb-14">
              <div className="card-luxury p-4 overflow-hidden">
                <div className="aspect-[3/4] rounded-lg overflow-hidden mb-4">
                  <img src={laserResultArmpit} alt="Underarm hair reduction after 2 laser sessions" className="w-full h-full object-cover" />
                </div>
                <p className="text-sm text-muted-foreground text-center">Underarm — after 2 sessions</p>
              </div>
              <div className="card-luxury p-4 overflow-hidden">
                <div className="aspect-[3/4] rounded-lg overflow-hidden mb-4">
                  <img src={laserResultLeg} alt="Leg hair reduction after 4 laser sessions" className="w-full h-full object-cover" />
                </div>
                <p className="text-sm text-muted-foreground text-center">Leg — after 4 sessions</p>
              </div>
            </div>

            {/* Reviews */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Review 1 - Short */}
              <div className="card-luxury p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-primary fill-primary" />)}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "Honestly didn't think it would work for me but after 4 sessions I barely have any regrowth. So happy I finally did it!"
                </p>
                <p className="text-xs text-muted-foreground/70 mt-4">— Sarah, underarm treatment</p>
              </div>

              {/* Review 2 - Medium */}
              <div className="card-luxury p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-primary fill-primary" />)}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "Was really nervous about my first session (I'm a total wimp with pain lol) but it was completely fine. The cooling gel helps loads. Already seeing less hair after just 2 appointments. The clinic is lovely too — feels proper professional, not like those high street places."
                </p>
                <p className="text-xs text-muted-foreground/70 mt-4">— Priya, bikini line</p>
              </div>

              {/* Review 3 - Short */}
              <div className="card-luxury p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-primary fill-primary" />)}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "Best money I've spent. No more razor burn or ingrown hairs. Game changer."
                </p>
                <p className="text-xs text-muted-foreground/70 mt-4">— Amina, full legs</p>
              </div>

              {/* Review 4 - Long */}
              <div className="card-luxury p-6 md:col-span-2">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-primary fill-primary" />)}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "I've been wanting to do laser for years but kept putting it off because I wasn't sure if it would work on my skin tone (I'm South Asian). Had a really thorough consultation where everything was explained properly — the patch test, what to expect, aftercare, all of it. I'm now 5 sessions in and the difference is incredible. Wish I'd done it sooner! The team are so knowledgeable and never make you feel rushed."
                </p>
                <p className="text-xs text-muted-foreground/70 mt-4">— Fatima, underarms & Brazilian</p>
              </div>

              {/* Review 5 - Short */}
              <div className="card-luxury p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-primary fill-primary" />)}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "Quick, easy, actually works. What more can you ask for? 👌"
                </p>
                <p className="text-xs text-muted-foreground/70 mt-4">— Jade, lip & chin</p>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Pricing & Booking */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-10">
              Book your laser treatment
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {/* Laser Hair Removal Card */}
              <div className="card-luxury p-8">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 mx-auto">
                  <Zap size={28} className="text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground text-xl mb-2">Laser Hair Removal</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Medical-grade laser for smooth, hair-free skin
                </p>
                <p className="text-primary text-xl font-medium mb-6">From £25</p>
                <Button asChild size="lg" className="btn-luxury text-white w-full">
                  <Link to="/booking">
                    Book Laser Hair Removal
                  </Link>
                </Button>
              </div>

              {/* Patch Test Card */}
              <div className="card-luxury p-8">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 mx-auto">
                  <Shield size={28} className="text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground text-xl mb-2">Patch Test</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Required before first laser session
                </p>
                <p className="text-primary text-xl font-medium mb-6">£25 <span className="text-sm text-muted-foreground">(redeemable)</span></p>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full">
                  <Link to="/booking">
                    Book Patch Test
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-muted-foreground text-sm">
              All booking CTAs route to the internal booking page
            </p>
          </div>
        </div>
      </section>
    </>;
};
export default LaserHairRemoval;