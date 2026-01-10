import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Ceramides",
  whatItIs: "Ceramides are a family of sphingolipids constituting approximately 50% of the stratum corneum lipid matrix. They function as the 'mortar' within the brick-and-mortar model of the skin barrier, maintaining structural integrity and regulating transepidermal water loss (TEWL). At least twelve ceramide subclasses have been identified in human skin, with ceramides 1, 3, and 6-II being particularly critical for barrier homeostasis. Endogenous ceramide production declines with age and is disrupted in inflammatory dermatoses, contributing to barrier impairment.",
  whatItHelpsWith: [
    "Restoring stratum corneum integrity and barrier function",
    "Reducing transepidermal water loss (TEWL)",
    "Improving skin hydration through enhanced water retention",
    "Calming inflammation associated with barrier dysfunction",
    "Mitigating irritation from retinoids, acids, and other active ingredients",
    "Improving overall skin texture and resilience"
  ],
  bestFor: ["Dry skin", "Sensitive skin", "Eczema-prone skin", "Mature skin", "Compromised barriers", "Retinoid users"],
  howItsUsed: "Ceramides are formulated in moisturisers, serums, and barrier repair treatments. Optimal formulations include ceramides alongside cholesterol and free fatty acids in a physiological ratio (approximately 3:1:1), mimicking the natural stratum corneum lipid composition. Apply after water-based serums. Can be used morning and evening as part of a barrier-supportive regimen. Particularly important during retinoid therapy or when using exfoliating acids.",
  pairsWellWith: ["Cholesterol", "Fatty acids", "Hyaluronic acid", "Niacinamide", "Centella asiatica", "Squalane"],
  clinicNote: "Ceramides represent a non-negotiable component of any barrier repair protocol. We consistently observe that patients who incorporate ceramide-rich products tolerate active ingredients more successfully and experience fewer episodes of irritation or sensitivity. For patients presenting with chronic barrier dysfunction — often manifesting as persistent dryness, stinging, or reactivity — we prioritise barrier restoration with ceramide-based products before introducing therapeutic actives.",
  clinicalSuitability: [
    "Essential for patients with atopic dermatitis or eczema",
    "Indicated during retinoid therapy to maintain barrier integrity",
    "Beneficial for patients using hydroxy acids or other exfoliants",
    "Appropriate for post-procedural skincare protocols",
    "Safe during pregnancy and lactation"
  ],
  useWithCaution: [
    "Some formulations contain additional ingredients that may not suit all skin types — review full INCI list",
    "Not all ceramide products contain physiologically relevant concentrations or ratios"
  ],
  notIdealFor: [
    "Those seeking treatment for specific concerns (acne, pigmentation) without complementary actives — ceramides support but don't treat",
    "Products claiming ceramide benefits without appropriate concentration or supporting lipids"
  ],
  commonConcerns: [
    "Barrier dysfunction",
    "Chronic dryness",
    "Retinoid-induced irritation",
    "Eczema and atopic dermatitis",
    "Sensitised skin states",
    "Dehydration"
  ],
  productExamples: [
    {
      name: "Ceramide Power – Rebuilding Mask 50ml",
      description: "Intensive overnight mask with Ceramides 6 and Yuzu plant ceramides to rebuild the skin's natural hydrolipid barrier. Enriched with peach oil, shea butter and neroli hydrolate for overnight recovery.",
      link: "https://www.belantti.co.uk/products/ceramide-power-rebuilding-mask-50ml?_pos=1&_sid=febb3003b&_ss=r&variant=53019747713288&sca_ref=10398409.mtv59NQvcFqb1MU",
      image: "https://www.belantti.co.uk/cdn/shop/files/ApisCeramidePowerRebuildingMask50ml.jpg?v=1748873571&width=600"
    },
    {
      name: "Highborn MOISTUREBURST Serum Ceramide Hydration",
      description: "Ceramide-rich hydrating serum to restore moisture, strengthen the skin barrier and promote a youthful, dewy complexion. Vegan and cruelty-free formula with deep, long-lasting hydration.",
      link: "https://www.belantti.co.uk/products/moistureburst-ceramide-serum?_pos=2&_sid=febb3003b&_ss=r&variant=52863925256456&sca_ref=10398409.mtv59NQvcFqb1MU",
      image: "https://www.belantti.co.uk/cdn/shop/files/HighbornMoistureburstSerumCeramideHydration.webp?v=1746615953&width=600"
    }
  ]
};

const Ceramides = () => <IngredientPageTemplate ingredient={ingredient} />;
export default Ceramides;
