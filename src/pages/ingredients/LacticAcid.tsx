import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Lactic Acid (AHA)",
  whatItIs: "Lactic acid is an alpha-hydroxy acid (AHA) derived from milk, though modern formulations typically use synthetic versions. It's one of the gentler AHAs, making it suitable for beginners to chemical exfoliation. Beyond exfoliation, lactic acid also has humectant properties, helping to draw moisture into the skin.",
  whatItHelpsWith: [
    "Gently exfoliating dead skin cells",
    "Improving skin texture and radiance",
    "Fading dark spots and discolouration",
    "Increasing hydration in outer skin layers",
    "Smoothing fine lines over time"
  ],
  bestFor: ["Dry skin", "Sensitive skin", "Exfoliation beginners", "Uneven texture", "Dull complexion"],
  howItsUsed: "Lactic acid is available in concentrations from 5-12% for home use. Start with lower concentrations (5%) used 1-2 times per week, gradually increasing as tolerated. Apply in the evening and always follow with SPF the next day. Avoid mixing with retinol or vitamin C in the same routine.",
  pairsWellWith: ["Hyaluronic acid", "Niacinamide", "Ceramides", "Squalane", "Peptides"],
  clinicNote: "We often recommend lactic acid for clients who are new to chemical exfoliation or have found glycolic acid too harsh. Its larger molecular size means gentler penetration, and the added hydrating benefit makes it ideal for those with dry or sensitive skin. That said, proper sun protection is essential when using any AHA.",
  productExamples: [
    {
      name: "Gentle Resurfacing Serum",
      description: "Mild exfoliating serum that smooths texture and enhances radiance without compromising skin hydration.",
      link: "#"
    },
    {
      name: "Hydrating AHA Toner",
      description: "Balanced formula combining gentle exfoliation with moisture-boosting properties for a brighter complexion.",
      link: "#"
    },
    {
      name: "Overnight Renewal Treatment",
      description: "Nightly treatment designed to refine skin texture and fade discolouration while you sleep.",
      link: "#"
    }
  ]
};

const LacticAcid = () => <IngredientPageTemplate ingredient={ingredient} />;
export default LacticAcid;
