import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Panthenol (Vitamin B5)",
  whatItIs: "Panthenol is the provitamin form of vitamin B5 (pantothenic acid). When applied to skin, it converts to pantothenic acid, which plays a key role in healthy skin function. It's a humectant that draws moisture into the skin and has been shown to accelerate the skin's natural healing processes.",
  whatItHelpsWith: [
    "Deep hydration and moisture retention",
    "Soothing irritated or inflamed skin",
    "Accelerating wound healing",
    "Supporting skin barrier function",
    "Reducing redness and discomfort"
  ],
  bestFor: ["Dry skin", "Sensitive skin", "Irritated skin", "Post-procedure care", "Compromised barriers"],
  howItsUsed: "Panthenol is found in a wide range of products from serums to heavy creams, typically at concentrations of 1-5%. It's extremely well-tolerated and can be used morning and night. It's often included in barrier repair products and post-treatment care formulations.",
  pairsWellWith: ["Hyaluronic acid", "Ceramides", "Centella asiatica", "Aloe vera", "Niacinamide"],
  clinicNote: "Panthenol is one of those unsung heroes that quietly improves almost every formulation it's in. We recommend it especially during times of skin stress — after treatments, during weather changes, or when introducing new actives. It's so gentle that even the most reactive skin types can benefit from it."
};

const Panthenol = () => <IngredientPageTemplate ingredient={ingredient} />;
export default Panthenol;
