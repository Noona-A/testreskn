import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Green Tea Extract (Camellia Sinensis)",
  whatItIs: "Green tea extract is derived from unoxidised leaves of Camellia sinensis and represents one of the most extensively researched botanical antioxidants in dermatology. Its therapeutic efficacy is primarily attributed to catechin polyphenols, particularly epigallocatechin-3-gallate (EGCG), which constitutes up to 50-80% of total catechins. EGCG demonstrates potent free radical scavenging, anti-inflammatory activity through COX-2 inhibition, sebum-regulating properties, and photoprotective effects that complement topical sunscreen use.",
  whatItHelpsWith: [
    "Neutralising reactive oxygen species from UV and environmental exposure",
    "Reducing inflammation through prostaglandin pathway modulation",
    "Regulating sebaceous gland activity and reducing sebum output",
    "Providing photoprotective effects that complement SPF",
    "Supporting skin barrier integrity and reducing erythema",
    "Potentially inhibiting matrix metalloproteinases involved in photoageing"
  ],
  bestFor: ["Oily skin", "Sensitive skin", "Rosacea-prone skin", "Ageing concerns", "Environmental protection", "Acne-prone skin"],
  howItsUsed: "Green tea extract is formulated across product categories: cleansers, toners, serums, moisturisers, and masks. Concentrations and extraction methods vary; products should list EGCG or catechin content where possible. Extremely well-tolerated for twice-daily use. For optimal antioxidant preservation, select products in opaque, air-limiting packaging. Often combined with vitamins C and E for synergistic antioxidant networks.",
  pairsWellWith: ["Vitamin C", "Vitamin E", "Niacinamide", "Hyaluronic acid", "Caffeine", "Resveratrol"],
  clinicNote: "Green tea extract serves as an excellent foundational antioxidant, particularly for patients with oily or rosacea-prone skin who experience irritation from L-ascorbic acid formulations. Its sebum-regulating properties provide added benefit for acne-prone patients seeking photoprotection. We recommend green tea extract as part of a comprehensive antioxidant strategy rather than a standalone treatment, ideally combined with a robust SPF regimen.",
  clinicalSuitability: [
    "Appropriate for patients who cannot tolerate vitamin C formulations",
    "Indicated for rosacea-prone patients seeking antioxidant protection",
    "Suitable for oily or acne-prone skin requiring sebum regulation",
    "Beneficial as adjunctive photoprotection alongside SPF",
    "Safe during pregnancy and lactation"
  ],
  useWithCaution: [
    "Caffeine-sensitive individuals may prefer caffeine-free formulations",
    "Rarely, contact allergy to green tea has been reported — patch test if history of plant allergies",
    "Efficacy depends heavily on formulation stability and concentration"
  ],
  notIdealFor: [
    "Those expecting standalone treatment for significant skin concerns",
    "Patients seeking dramatic visible results — benefits are primarily preventative",
    "Very dry skin types — may prefer more emollient-rich antioxidant formulations"
  ],
  commonConcerns: [
    "Photoprotection enhancement",
    "Rosacea-associated inflammation",
    "Seborrhoea",
    "Environmental damage prevention",
    "General antioxidant support",
    "Mild acne"
  ],
  productExamples: [
    {
      name: "Antioxidant Green Tea Serum",
      description: "Protective serum that defends against environmental damage while calming redness and inflammation.",
      link: "#"
    },
    {
      name: "Green Tea Mattifying Moisturiser",
      description: "Lightweight formula designed to hydrate while helping regulate excess oil production.",
      link: "#"
    },
    {
      name: "Clarifying Tea Tree Cleanser",
      description: "Gentle cleanser combining green tea antioxidants with purifying properties for clearer skin.",
      link: "#"
    }
  ]
};

const GreenTeaExtract = () => <IngredientPageTemplate ingredient={ingredient} />;
export default GreenTeaExtract;
