import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Squalane",
  whatItIs: "Squalane is the fully hydrogenated, stable form of squalene — a polyunsaturated hydrocarbon constituting approximately 10-12% of human sebum. Endogenous squalene production peaks in adolescence and declines progressively with age. Modern cosmetic squalane is predominantly derived from sustainable plant sources (olives, sugarcane, rice bran) through hydrogenation, which eliminates squalene's oxidative instability. Its molecular structure mirrors that of sebum lipids, ensuring exceptional biocompatibility, rapid absorption, and non-comedogenic properties despite being an oil.",
  whatItHelpsWith: [
    "Providing lightweight emollience without occlusive heaviness",
    "Replenishing lipids depleted by age, environmental factors, or cleansing",
    "Preventing transepidermal water loss through barrier reinforcement",
    "Improving skin softness and suppleness",
    "Enhancing the penetration and tolerability of other actives",
    "Balancing sebum production in oily skin types"
  ],
  bestFor: ["All skin types", "Oily skin", "Dehydrated skin", "Mature skin", "Those who dislike heavy creams", "Acne-prone skin (non-comedogenic)"],
  howItsUsed: "Squalane is available as a pure oil or incorporated into moisturisers and serums. Apply 2-4 drops after water-based serums to seal in hydration, or mix with moisturiser for enhanced emollience. Suitable for morning and evening use. Its rapid absorption and non-greasy finish make it appropriate even for daytime use under makeup. Can be applied to damp skin for enhanced penetration or used as a final occlusive step.",
  pairsWellWith: ["Hyaluronic acid", "Retinoids", "Vitamin C", "Niacinamide", "Ceramides", "Peptides"],
  clinicNote: "Squalane challenges the widespread misconception that oily skin should avoid oils. We consistently find that patients with seborrhoea who incorporate squalane actually experience improved oil balance — likely because supplementing with a sebum-mimetic oil reduces the skin's compensatory overproduction. Its versatility as a carrier for other actives makes it invaluable; we recommend adding squalane to retinoid products for patients experiencing excessive dryness.",
  clinicalSuitability: [
    "Appropriate for acne-prone patients seeking non-comedogenic moisture",
    "Indicated during retinoid therapy to mitigate dryness",
    "Suitable for patients with rosacea or sensitive skin",
    "Beneficial for mature skin with decreased sebum production",
    "Safe during pregnancy and lactation"
  ],
  useWithCaution: [
    "Ensure product is squalane (hydrogenated) not squalene (unstable, prone to oxidation)",
    "Very oily skin may prefer lighter application — adjust quantity as needed"
  ],
  notIdealFor: [
    "Those who prefer water-based only routines",
    "Patients with active fungal acne (malassezia folliculitis) — while generally tolerated, monitor response"
  ],
  commonConcerns: [
    "Dehydrated oily skin",
    "Lipid-depleted ageing skin",
    "Retinoid-induced dryness",
    "Barrier dysfunction",
    "General skin conditioning"
  ],
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
