import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Snail Mucin (Snail Secretion Filtrate)",
  whatItIs: "Snail mucin, formally snail secretion filtrate (SSF), is a complex biological matrix produced by gastropods (typically Cornu aspersum, formerly Helix aspersa) containing a diverse array of bioactive compounds: glycosaminoglycans (including hyaluronic acid), glycoprotein enzymes, allantoin, copper peptides, and antimicrobial peptides. This composition confers wound-healing, hydrating, and antimicrobial properties. Ethical harvesting methods now predominate, typically involving stress-free stimulation of mucin production without harm to the snails.",
  whatItHelpsWith: [
    "Providing multi-mechanism hydration through glycosaminoglycans and glycoproteins",
    "Accelerating wound healing and tissue regeneration",
    "Reducing the appearance of atrophic acne scarring over time",
    "Calming inflammation and reducing post-inflammatory erythema",
    "Improving skin texture and promoting cellular turnover",
    "Supporting barrier repair through diverse bioactive compounds"
  ],
  bestFor: ["Dry skin", "Damaged skin", "Acne scarring", "Post-inflammatory marks", "Dehydrated skin", "Wound healing"],
  howItsUsed: "Snail mucin is most commonly formulated in essences and serums at high concentrations (90%+). Apply after cleansing and toning, before heavier serums or moisturisers. The characteristically viscous texture absorbs readily without residue. Suitable for twice-daily application. For acne scarring, consistent use over 3-6 months is typically required to observe meaningful improvement. Patch testing is advisable for those with gastropod or dust mite allergies.",
  pairsWellWith: ["Hyaluronic acid", "Niacinamide", "Centella asiatica", "Ceramides", "Vitamin C", "Peptides"],
  clinicNote: "Despite initial scepticism about 'unusual' ingredients, snail mucin has earned its place in evidence-based skincare through consistent clinical outcomes. We frequently recommend it for patients with post-acne textural concerns who seek gentler alternatives to aggressive resurfacing. Its wound-healing properties also make it valuable in post-procedural protocols. We advise caution regarding allergy potential — those with dust mite allergies may exhibit cross-reactivity.",
  clinicalSuitability: [
    "Appropriate for patients seeking non-invasive scar improvement",
    "Indicated for post-procedural recovery and wound healing",
    "Suitable for patients with concurrent hydration and texture concerns",
    "Beneficial for sensitive skin types seeking healing support",
    "Generally safe during pregnancy — though limited formal data exists"
  ],
  useWithCaution: [
    "Known allergy to snails or shellfish — may indicate potential sensitivity",
    "Dust mite allergy — cross-reactivity has been documented",
    "Those with severe acne scarring should maintain realistic expectations — SSF supports but does not replace professional interventions"
  ],
  notIdealFor: [
    "Individuals with confirmed gastropod or significant shellfish allergy",
    "Those requiring dramatic scar revision — procedural intervention is more appropriate",
    "Patients uncomfortable with animal-derived ingredients"
  ],
  commonConcerns: [
    "Atrophic acne scarring",
    "Post-inflammatory hyperpigmentation",
    "Dehydration",
    "Post-procedural healing",
    "General skin texture concerns"
  ],
  productExamples: [
    {
      name: "Snail Repair Essence",
      description: "High-concentration essence that supports skin repair and provides deep, lasting hydration.",
      link: "#"
    },
    {
      name: "Mucin Recovery Cream",
      description: "Nourishing moisturiser formulated to help heal damaged skin and improve texture over time.",
      link: "#"
    },
    {
      name: "Scar-Fading Treatment Serum",
      description: "Targeted serum designed to reduce the appearance of acne scars and post-inflammatory marks.",
      link: "#"
    }
  ]
};

const SnailMucin = () => <IngredientPageTemplate ingredient={ingredient} />;
export default SnailMucin;
