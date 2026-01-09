import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Propolis",
  whatItIs: "Propolis is a resinous substance that bees create from tree buds and sap, mixed with their own enzymes. It's used to seal and protect the hive, and has been valued for centuries for its natural antimicrobial and healing properties. In skincare, propolis offers antibacterial, anti-inflammatory, and antioxidant benefits.",
  whatItHelpsWith: [
    "Fighting acne-causing bacteria naturally",
    "Soothing inflammation and redness",
    "Supporting wound healing",
    "Providing antioxidant protection",
    "Nourishing and calming sensitive skin"
  ],
  bestFor: ["Acne-prone skin", "Sensitive skin", "Inflamed skin", "Those seeking natural antibacterial options", "Dull, tired skin"],
  howItsUsed: "Propolis is found in serums, ampoules, and moisturisers. Concentrations vary, but look for products where propolis is listed high in the ingredient list. It's well-tolerated by most skin types, though those with bee allergies should patch test first. Can be used morning and evening.",
  pairsWellWith: ["Honey", "Centella asiatica", "Niacinamide", "Hyaluronic acid", "Green tea extract"],
  clinicNote: "Propolis is a wonderful option for clients who want to address acne or inflammation without harsh synthetic ingredients. Its natural antibacterial properties make it effective yet gentle. We often recommend propolis-based products for those who've found traditional acne treatments too drying or irritating. Always patch test if you have any history of bee allergies."
};

const Propolis = () => <IngredientPageTemplate ingredient={ingredient} />;
export default Propolis;
