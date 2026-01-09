import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Green Tea Extract",
  whatItIs: "Green tea extract is derived from the leaves of Camellia sinensis and is rich in polyphenols, particularly epigallocatechin gallate (EGCG). These compounds are potent antioxidants that help protect skin from environmental damage. Green tea also has anti-inflammatory and sebum-regulating properties, making it versatile for various skin concerns.",
  whatItHelpsWith: [
    "Providing powerful antioxidant protection",
    "Calming redness and inflammation",
    "Helping regulate excess oil production",
    "Protecting against environmental aggressors",
    "Supporting overall skin health"
  ],
  bestFor: ["Oily skin", "Sensitive skin", "Ageing concerns", "Environmental protection", "Acne-prone skin"],
  howItsUsed: "Green tea extract appears in cleansers, toners, serums, moisturisers, and masks. It's extremely well-tolerated and can be used twice daily. For maximum antioxidant benefit, look for products packaged in opaque containers to protect the active compounds from light degradation.",
  pairsWellWith: ["Vitamin C", "Niacinamide", "Hyaluronic acid", "Vitamin E", "Caffeine"],
  clinicNote: "Green tea extract is an excellent daily antioxidant for almost everyone. It's particularly valuable for clients with oily or acne-prone skin who want antioxidant protection without the potential irritation of vitamin C. The calming properties also make it suitable for rosacea-prone skin. Think of it as gentle but effective environmental defence."
};

const GreenTeaExtract = () => <IngredientPageTemplate ingredient={ingredient} />;
export default GreenTeaExtract;
