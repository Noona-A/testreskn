import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Azelaic Acid",
  whatItIs: "Azelaic acid is a naturally occurring saturated dicarboxylic acid produced by Malassezia furfur yeast and found in cereal grains. It exhibits a multi-modal mechanism of action: competitive inhibition of tyrosinase (reducing melanin synthesis), antibacterial activity against Cutibacterium acnes, normalisation of keratinisation, and anti-inflammatory effects through inhibition of reactive oxygen species. This diverse pharmacological profile makes it uniquely suited for conditions where inflammation, hyperpigmentation, and abnormal keratinisation coexist.",
  whatItHelpsWith: [
    "Targeting Cutibacterium acnes and reducing comedone formation",
    "Inhibiting melanin biosynthesis to fade hyperpigmentation",
    "Modulating inflammatory pathways in rosacea and acne",
    "Normalising follicular keratinisation without excessive desquamation",
    "Reducing post-inflammatory erythema and discolouration",
    "Providing antioxidant protection against free radical damage"
  ],
  bestFor: ["Acne vulgaris", "Rosacea", "Post-inflammatory hyperpigmentation", "Melasma", "Papulopustular conditions", "Sensitive acne-prone skin"],
  howItsUsed: "Over-the-counter formulations typically contain 10% azelaic acid, while prescription preparations are available at 15-20%. Apply to cleansed skin once or twice daily, depending on tolerance. Initial mild stinging or itching is common and typically resolves within 2-4 weeks of continued use. Unlike many acne treatments, azelaic acid does not significantly increase photosensitivity, though SPF remains essential when treating pigmentation.",
  pairsWellWith: ["Niacinamide", "Hyaluronic acid", "Salicylic acid", "Vitamin C", "Tranexamic acid", "Retinoids (with appropriate timing)"],
  clinicNote: "Azelaic acid is among our most prescribed topical agents for patients presenting with acne and concurrent pigmentary concerns. Its favourable safety profile — including suitability during pregnancy — distinguishes it from many alternative treatments. For rosacea patients, we frequently recommend azelaic acid as first-line therapy due to its dual anti-inflammatory and antimicrobial properties. Prescription-strength formulations are often necessary for optimal outcomes in stubborn cases.",
  clinicalSuitability: [
    "First-line option for mild to moderate papulopustular rosacea",
    "Suitable for acne treatment during pregnancy and lactation",
    "Appropriate for Fitzpatrick skin types IV-VI due to lower hypopigmentation risk",
    "Indicated for patients who cannot tolerate benzoyl peroxide or retinoids",
    "Beneficial as maintenance therapy following successful acne treatment"
  ],
  useWithCaution: [
    "Initial application may cause transient stinging, burning, or itching",
    "Those with very sensitive skin should introduce gradually",
    "Combination with other exfoliating agents may increase irritation potential"
  ],
  notIdealFor: [
    "Primary treatment of comedonal acne (better addressed with retinoids or salicylic acid)",
    "Those seeking rapid results — consistent use over weeks is required",
    "Patients who experience persistent burning beyond the adjustment period"
  ],
  commonConcerns: [
    "Acne vulgaris",
    "Papulopustular rosacea",
    "Post-inflammatory hyperpigmentation",
    "Melasma",
    "Acne-related erythema",
    "Uneven skin tone"
  ],
  productExamples: [
    {
      name: "Clarifying Azelaic Serum",
      description: "Targeted treatment formulated to address breakouts and reduce the appearance of post-acne marks without over-drying.",
      link: "#"
    },
    {
      name: "Redness Relief Cream",
      description: "Soothing moisturiser designed to calm visible redness and support skin prone to rosacea or sensitivity.",
      link: "#"
    },
    {
      name: "Brightening Tone Corrector",
      description: "Concentrated formula that helps fade dark spots and even out blotchy skin tone over time.",
      link: "#"
    }
  ]
};

const AzelaicAcid = () => <IngredientPageTemplate ingredient={ingredient} />;
export default AzelaicAcid;
