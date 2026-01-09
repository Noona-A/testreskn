import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Ceramides",
  whatItIs: "Ceramides are lipids (fats) that make up over 50% of the skin's natural barrier. They act like mortar between the 'bricks' of skin cells, preventing water loss and protecting against environmental aggressors. As we age, our natural ceramide levels decline, which can lead to dryness, sensitivity, and a compromised barrier.",
  whatItHelpsWith: [
    "Restoring and strengthening the skin barrier",
    "Preventing transepidermal water loss (TEWL)",
    "Calming sensitive, reactive skin",
    "Supporting skin during retinol or acid use",
    "Improving skin texture and resilience"
  ],
  bestFor: ["Dry skin", "Sensitive skin", "Eczema-prone skin", "Ageing skin", "Compromised barriers"],
  howItsUsed: "Ceramides are found in moisturisers, serums, and barrier repair treatments. They work best when combined with cholesterol and fatty acids in a ratio similar to natural skin (approximately 3:1:1). Apply after water-based serums and before heavier occlusives.",
  pairsWellWith: ["Cholesterol", "Fatty acids", "Hyaluronic acid", "Niacinamide", "Centella asiatica"],
  clinicNote: "Ceramides are non-negotiable for anyone with a compromised barrier, and we often recommend them as the foundation of a routine before introducing any active ingredients. If your skin is perpetually irritated or dehydrated despite using hydrating products, ceramides should be your first port of call. They're also essential when using retinoids or exfoliating acids."
};

const Ceramides = () => <IngredientPageTemplate ingredient={ingredient} />;
export default Ceramides;
