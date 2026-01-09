import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Hyaluronic Acid",
  whatItIs: "Hyaluronic acid (HA) is a naturally occurring glycosaminoglycan found throughout our body's connective tissue. It acts like a molecular sponge, capable of holding up to 1,000 times its weight in water. In skincare, different molecular weights penetrate to different depths — low molecular weight reaches deeper layers, while high molecular weight forms a hydrating film on the surface.",
  whatItHelpsWith: [
    "Intense hydration at multiple skin levels",
    "Plumping fine lines and dehydration lines",
    "Creating a dewy, healthy-looking complexion",
    "Supporting other actives to penetrate better",
    "Soothing and calming the skin"
  ],
  bestFor: ["All skin types", "Dehydrated skin", "Dry skin", "Ageing skin", "Post-treatment care"],
  howItsUsed: "HA is available in serums, essences, sheet masks, and moisturisers. For best results, apply to damp skin and seal with a moisturiser or occlusive. In very dry climates, HA can draw moisture from deeper skin layers, so always layer it under a good moisturiser.",
  pairsWellWith: ["Ceramides", "Niacinamide", "Vitamin C", "Peptides", "Centella asiatica"],
  clinicNote: "Hyaluronic acid is foundational to good hydration and we recommend it to virtually every client. However, formulation matters — look for products with multiple molecular weights for comprehensive hydration. Remember: HA is a humectant, not a moisturiser. It draws water but needs to be sealed in with an occlusive layer to be truly effective."
};

const HyaluronicAcid = () => <IngredientPageTemplate ingredient={ingredient} />;
export default HyaluronicAcid;
