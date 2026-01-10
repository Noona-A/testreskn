import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Snail Mucin",
  whatItIs: "Snail mucin (also called snail secretion filtrate) is a complex blend of proteins, glycolic acid, hyaluronic acid, and glycoprotein enzymes collected from snails. Despite its unusual origin, it's been extensively used in Korean skincare for its hydrating, healing, and skin-smoothing properties. Quality brands collect the mucin ethically without harming the snails.",
  whatItHelpsWith: [
    "Deep, lasting hydration",
    "Supporting skin healing and recovery",
    "Smoothing and improving texture",
    "Reducing the appearance of acne scars",
    "Calming irritated or damaged skin"
  ],
  bestFor: ["Dry skin", "Damaged skin", "Acne scars", "Post-inflammatory marks", "Dehydrated skin"],
  howItsUsed: "Snail mucin is most commonly found in essences and serums, typically at high concentrations (90%+). Apply after cleansing and toner, before heavier serums or moisturisers. It has a slightly sticky texture that absorbs well. Suitable for morning and evening use.",
  pairsWellWith: ["Hyaluronic acid", "Niacinamide", "Centella asiatica", "Ceramides", "Vitamin C"],
  clinicNote: "Snail mucin may sound unusual, but the evidence and client feedback speak for themselves. It's particularly effective for clients dealing with textural concerns or recovering from acne. The combination of hydrating and healing properties makes it versatile enough for most skin types. If you're hesitant about trying it, start with a small area and see how your skin responds.",
  productExamples: [
    {
      name: "Snail Repair Essence",
      description: "High-concentration essence that supports skin repair and provides deep, lasting hydration.",
      link: "#"
    },
    {
      name: "Mucin Recovery Cream",
      description: "Nourishing moisturiser formulated to help heal damaged skin and improve texture over time.",
      link: "#"
    },
    {
      name: "Scar-Fading Treatment Serum",
      description: "Targeted serum designed to reduce the appearance of acne scars and post-inflammatory marks.",
      link: "#"
    }
  ]
};

const SnailMucin = () => <IngredientPageTemplate ingredient={ingredient} />;
export default SnailMucin;
