import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Squalane",
  whatItIs: "Squalane is the stable, hydrogenated form of squalene — a lipid naturally produced by our skin's sebaceous glands. Modern squalane is typically derived from olives or sugarcane, making it sustainable and suitable for vegans. It closely mimics our skin's natural oils, providing excellent compatibility and absorption.",
  whatItHelpsWith: [
    "Providing lightweight, non-greasy moisture",
    "Preventing moisture loss from the skin",
    "Softening and smoothing skin texture",
    "Balancing oil production in oily skin",
    "Supporting the skin's lipid barrier"
  ],
  bestFor: ["All skin types", "Oily skin", "Dehydrated skin", "Ageing skin", "Those who dislike heavy creams"],
  howItsUsed: "Squalane is available as a pure oil or in moisturisers and serums. A few drops can be applied after water-based serums, or mixed into moisturiser for extra emollience. It's non-comedogenic and absorbs quickly without leaving a greasy residue. Use morning and/or evening as needed.",
  pairsWellWith: ["Hyaluronic acid", "Retinol", "Vitamin C", "Niacinamide", "Ceramides"],
  clinicNote: "Squalane is a revelation for clients who struggle with oils — particularly those with oily skin who've been told to avoid all oils. Because it mimics what skin naturally produces, it's exceptionally lightweight and can actually help regulate sebum production rather than exacerbate it. It's also wonderful for locking in moisture after hydrating serums.",
  productExamples: [
    {
      name: "Pure Squalane Oil",
      description: "Lightweight, fast-absorbing oil that locks in moisture and leaves skin soft without greasiness.",
      link: "#"
    },
    {
      name: "Hydra-Lock Moisturiser",
      description: "Balancing moisturiser that provides lasting hydration while helping regulate natural oil production.",
      link: "#"
    },
    {
      name: "Nourishing Face Elixir",
      description: "Luxurious blend of squalane and botanical oils to deeply nourish and protect the skin barrier.",
      link: "#"
    }
  ]
};

const Squalane = () => <IngredientPageTemplate ingredient={ingredient} />;
export default Squalane;
