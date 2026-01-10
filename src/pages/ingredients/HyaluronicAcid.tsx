import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Hyaluronic Acid",
  whatItIs: "Hyaluronic acid (HA) is an endogenous glycosaminoglycan distributed throughout connective, epithelial, and neural tissues. Its exceptional hygroscopic capacity — binding up to 1,000 times its molecular weight in water — makes it fundamental to dermal hydration and viscoelasticity. In topical formulations, molecular weight significantly influences efficacy: high molecular weight HA (>1,000 kDa) forms a hydrating film on the stratum corneum, while low molecular weight HA (<50 kDa) penetrates more deeply to provide intrinsic hydration and may stimulate keratinocyte proliferation.",
  whatItHelpsWith: [
    "Providing multi-level hydration from the stratum corneum to deeper epidermal layers",
    "Plumping superficial dehydration lines and improving skin turgor",
    "Creating a hydrated microenvironment that optimises the penetration of other actives",
    "Supporting wound healing through moisture retention and cell migration",
    "Reducing transepidermal water loss when sealed with appropriate occlusives",
    "Improving overall skin texture and suppleness"
  ],
  bestFor: ["All skin types", "Dehydrated skin", "Dry skin", "Mature skin", "Post-procedure care", "Sensitised skin"],
  howItsUsed: "HA is formulated in serums, essences, sheet masks, and moisturisers. For optimal efficacy, apply to damp skin to provide water for the humectant to bind. Follow immediately with an emollient or occlusive moisturiser to prevent transepidermal water loss. In arid environments, HA may draw moisture from deeper skin layers if not properly sealed — always layer appropriately. Multi-weight HA formulations offer comprehensive hydration across skin strata.",
  pairsWellWith: ["Ceramides", "Niacinamide", "Vitamin C", "Peptides", "Centella asiatica", "Squalane"],
  clinicNote: "We consider hyaluronic acid foundational to virtually every skincare protocol. Patients frequently misunderstand HA as a moisturiser when it is fundamentally a humectant requiring occlusive follow-up. We consistently observe improved tolerance to retinoids and acids when patients incorporate multi-weight HA formulations. Post-procedure, HA-rich products accelerate recovery and reduce the subjective sensation of tightness.",
  clinicalSuitability: [
    "Universally appropriate across all Fitzpatrick skin types",
    "Indicated for patients on drying acne medications (isotretinoin, adapalene)",
    "Beneficial during and after cosmetic procedures (chemical peels, laser, microneedling)",
    "Suitable for eczema-prone individuals as part of a barrier-repair regimen",
    "Safe during pregnancy and lactation"
  ],
  useWithCaution: [
    "In very dry or low-humidity environments, ensure adequate occlusive follow-up",
    "Some individuals may experience transient congestion with very low molecular weight HA",
    "Cross-linked HA products differ significantly from standard topical HA — ensure appropriate formulation selection"
  ],
  notIdealFor: [
    "As a standalone product without occlusive follow-up in arid climates",
    "Those expecting moisturising effects without complementary emollient use"
  ],
  commonConcerns: [
    "Dehydration",
    "Fine lines (dehydration-related)",
    "Post-procedure recovery",
    "Barrier dysfunction",
    "Dull, lacklustre skin",
    "Sensitised skin states"
  ],
  productExamples: [
    {
      name: "Hydrating Hyaluronic Serum",
      description: "Multi-weight hyaluronic acid serum designed to deliver deep hydration and plump the appearance of fine lines.",
      link: "#"
    },
    {
      name: "Intensive Moisture Ampoule",
      description: "Concentrated hydrating treatment that helps restore moisture to dehydrated skin and improve suppleness.",
      link: "#"
    },
    {
      name: "HA Hydra-Boost Cream",
      description: "Rich cream combining hyaluronic acid with occlusive agents to lock in moisture and maintain hydration throughout the day.",
      link: "#"
    }
  ]
};

const HyaluronicAcid = () => <IngredientPageTemplate ingredient={ingredient} />;
export default HyaluronicAcid;
