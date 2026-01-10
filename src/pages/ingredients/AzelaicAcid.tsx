import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Azelaic Acid",
  whatItIs: "Azelaic acid is a naturally occurring dicarboxylic acid found in grains like wheat and barley. In skincare, it's valued for its multi-functional properties — it's antibacterial, anti-inflammatory, and works to inhibit tyrosinase (an enzyme involved in melanin production). This makes it effective for both acne and pigmentation concerns.",
  whatItHelpsWith: [
    "Treating mild to moderate acne",
    "Fading post-inflammatory hyperpigmentation",
    "Reducing redness from rosacea",
    "Evening out skin tone",
    "Unclogging pores without excessive dryness"
  ],
  bestFor: ["Acne-prone skin", "Rosacea", "Hyperpigmentation", "Sensitive acne-prone skin", "Melasma (with guidance)"],
  howItsUsed: "Azelaic acid is available in over-the-counter formulations (typically 10%) and prescription strengths (15-20%). Apply once or twice daily after cleansing. It can be layered under moisturiser. Some initial tingling is normal but should subside with continued use.",
  pairsWellWith: ["Niacinamide", "Hyaluronic acid", "Salicylic acid", "Vitamin C", "Retinol (with caution)"],
  clinicNote: "Azelaic acid is one of our favourite ingredients for acne and rosacea because it's effective yet gentle enough for sensitive skin types. Unlike some acne treatments, it rarely causes excessive dryness or irritation. For stubborn pigmentation or acne, we may recommend prescription-strength formulations during your consultation.",
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
