import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Panthenol (Provitamin B5)",
  whatItIs: "Panthenol (dexpanthenol) is the alcohol form of pantothenic acid (vitamin B5), a water-soluble vitamin essential for coenzyme A synthesis. Upon topical application, panthenol is enzymatically converted to pantothenic acid within the epidermis, where it participates in fatty acid synthesis, lipid metabolism, and epithelial regeneration. Its dual humectant and emollient properties, combined with documented wound-healing enhancement, establish it as a foundational ingredient in barrier-supportive and post-procedural formulations.",
  whatItHelpsWith: [
    "Providing deep, lasting hydration through humectant action",
    "Accelerating epithelial regeneration and wound closure",
    "Reducing transepidermal water loss (TEWL)",
    "Calming irritation and reducing subjective discomfort",
    "Supporting lipid barrier synthesis and repair",
    "Exhibiting mild anti-inflammatory effects"
  ],
  bestFor: ["Dry skin", "Sensitive skin", "Irritated skin", "Post-procedure care", "Compromised barriers", "Nappy rash (in infants)"],
  howItsUsed: "Panthenol is formulated across virtually all product categories — cleansers, toners, serums, moisturisers, and intensive treatments — typically at concentrations of 1-5%. Its excellent tolerability permits twice-daily application without concern for irritation. Particularly valuable during periods of skin stress: post-procedure, during retinoid initiation, following sun exposure, or when barrier function is compromised. Often included in formulations designed to offset the drying effects of active ingredients.",
  pairsWellWith: ["Hyaluronic acid", "Ceramides", "Centella asiatica", "Allantoin", "Niacinamide", "Madecassoside"],
  clinicNote: "Panthenol consistently earns its place in our post-procedural protocols and in regimens for patients with chronically reactive skin. Its ability to accelerate epithelial healing while simultaneously providing non-occlusive hydration makes it uniquely versatile. We recommend panthenol-containing products during retinoid initiation to mitigate dryness and irritation, and routinely advise patients to keep a panthenol-rich product on hand for periods of acute sensitivity.",
  clinicalSuitability: [
    "Indicated for post-procedural skincare (laser, peels, microneedling)",
    "Appropriate during topical retinoid therapy",
    "Suitable for patients with atopic tendencies",
    "Beneficial for acute irritation from environmental factors",
    "Safe during pregnancy and lactation"
  ],
  useWithCaution: [
    "Rare reports of contact sensitisation exist — patch test if extensive history of allergic reactions",
    "In occlusive formulations, may contribute to milia in susceptible individuals"
  ],
  notIdealFor: [
    "Those expecting therapeutic action on specific concerns (acne, pigmentation) — panthenol supports but doesn't treat",
    "Patients requiring aggressive exfoliation or active intervention"
  ],
  commonConcerns: [
    "Barrier dysfunction",
    "Post-procedural recovery",
    "Retinoid-induced irritation",
    "Environmental sensitivity",
    "Dehydration",
    "General skin comfort"
  ],
  productExamples: [
    {
      name: "Soothing Recovery Serum",
      description: "Gentle hydrating serum formulated to calm irritated skin and support the healing process.",
      link: "#"
    },
    {
      name: "Post-Treatment Comfort Cream",
      description: "Rich moisturiser designed to nourish and protect skin recovering from professional treatments.",
      link: "#"
    },
    {
      name: "Hydrating B5 Mist",
      description: "Refreshing spray that delivers instant hydration and comfort throughout the day.",
      link: "#"
    }
  ]
};

const Panthenol = () => <IngredientPageTemplate ingredient={ingredient} />;
export default Panthenol;
