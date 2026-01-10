import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Salicylic Acid (BHA)",
  whatItIs: "Salicylic acid is a beta-hydroxy acid (BHA) derived from willow bark. Unlike water-soluble AHAs, salicylic acid is oil-soluble, allowing it to penetrate into pores and dissolve the sebum and debris that lead to congestion. It also has anti-inflammatory properties, making it particularly suitable for acne-prone skin.",
  whatItHelpsWith: [
    "Unclogging pores and treating blackheads",
    "Reducing active breakouts",
    "Controlling excess oil production",
    "Smoothing rough, bumpy texture",
    "Preventing future congestion"
  ],
  bestFor: ["Oily skin", "Acne-prone skin", "Blackheads and whiteheads", "Congested pores", "Keratosis pilaris"],
  howItsUsed: "Available in cleansers, toners, serums, and spot treatments at concentrations of 0.5-2%. Start with lower concentrations and use 2-3 times per week, building up as tolerated. Always use SPF as salicylic acid can increase sun sensitivity.",
  pairsWellWith: ["Niacinamide", "Hyaluronic acid", "Azelaic acid", "Centella asiatica", "Tea tree oil"],
  clinicNote: "Salicylic acid is our top recommendation for clients dealing with blackheads and persistent congestion. Its ability to work inside the pore makes it more effective than surface-level exfoliants for these concerns. However, more isn't always better — over-exfoliation can actually trigger more oil production and breakouts.",
  productExamples: [
    {
      name: "Pore Clearing BHA Toner",
      description: "Exfoliating toner that penetrates pores to dissolve congestion and prevent future blackheads and breakouts.",
      link: "#"
    },
    {
      name: "Targeted Blemish Treatment",
      description: "Concentrated spot treatment designed to reduce the appearance of active breakouts and calm inflammation.",
      link: "#"
    },
    {
      name: "Deep Cleansing BHA Cleanser",
      description: "Gentle foaming cleanser that helps remove excess oil and debris while keeping pores clear.",
      link: "#"
    }
  ]
};

const SalicylicAcid = () => <IngredientPageTemplate ingredient={ingredient} />;
export default SalicylicAcid;
