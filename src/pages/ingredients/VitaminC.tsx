import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Vitamin C",
  whatItIs: "Vitamin C (L-ascorbic acid in its most potent form) is a powerful antioxidant that neutralises free radicals from UV exposure and pollution. It also inhibits melanin production, helping to brighten skin, and supports collagen synthesis for firmer-looking skin. Different forms vary in stability and potency — L-ascorbic acid is most researched but also most unstable.",
  whatItHelpsWith: [
    "Protecting against environmental damage",
    "Brightening dull, tired-looking skin",
    "Fading dark spots and sun damage",
    "Supporting natural collagen production",
    "Enhancing SPF protection (when used together)"
  ],
  bestFor: ["Dull skin", "Sun-damaged skin", "Hyperpigmentation", "Ageing concerns", "Prevention-focused routines"],
  howItsUsed: "Vitamin C serums are typically applied in the morning before SPF. Concentrations range from 5-20% — start lower if new to vitamin C. Look for dark, airtight packaging as vitamin C oxidises quickly. If it turns brown/orange, it's no longer effective. Some forms (like ascorbyl glucoside) are more stable but may be less potent.",
  pairsWellWith: ["Vitamin E", "Ferulic acid", "Hyaluronic acid", "SPF", "Niacinamide"],
  clinicNote: "Vitamin C is excellent for prevention and brightening, but choosing the right form matters. For sensitive skin, we often recommend gentler derivatives like ascorbyl glucoside or magnesium ascorbyl phosphate. L-ascorbic acid at higher concentrations can cause tingling or irritation — if this persists, consider a gentler alternative rather than pushing through."
};

const VitaminC = () => <IngredientPageTemplate ingredient={ingredient} />;
export default VitaminC;
