import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";
import centellaSensitiveSerum from "@/assets/products/centella-sensitive-serum.jpg";

const ingredient: IngredientData = {
  name: "Centella Asiatica (Cica)",
  whatItIs: "Centella asiatica, commonly known as Cica, Gotu Kola, or Tiger Grass, is a perennial herbaceous plant with a well-documented history in traditional Asian pharmacopeia. Its therapeutic efficacy is attributed to pentacyclic triterpene saponins — primarily asiaticoside, madecassoside, asiatic acid, and madecassic acid — which collectively modulate collagen synthesis, exhibit anti-inflammatory activity, and support wound healing cascades. Modern dermatological research validates its role in barrier repair and the management of inflammatory dermatoses.",
  whatItHelpsWith: [
    "Downregulating pro-inflammatory cytokines to reduce erythema and irritation",
    "Stimulating Type I collagen synthesis for improved wound healing",
    "Strengthening the epidermal barrier through enhanced lipid production",
    "Calming sensitised skin states and reducing subjective discomfort",
    "Supporting tissue remodelling following procedural interventions",
    "Providing antioxidant protection against environmental stressors"
  ],
  bestFor: ["Sensitive skin", "Rosacea-prone skin", "Acne-prone skin", "Post-procedure recovery", "Compromised barriers", "Reactive skin types"],
  howItsUsed: "Centella asiatica is formulated in serums, moisturisers, sheet masks, and targeted treatments. Concentrations vary; products listing specific centelloids (madecassoside, asiaticoside) high in the INCI list typically offer greater therapeutic benefit. Well-tolerated for twice-daily application. Particularly valuable in the recovery phase following chemical peels, laser treatments, or during acute flares of sensitive skin conditions.",
  pairsWellWith: ["Hyaluronic acid", "Niacinamide", "Ceramides", "Panthenol", "Snail mucin", "Allantoin"],
  clinicNote: "Centella asiatica is among our most frequently recommended ingredients for patients presenting with reactive, easily-irritated skin or those recovering from in-clinic procedures. Its multi-modal mechanism — combining anti-inflammatory, wound-healing, and barrier-supportive actions — makes it exceptionally versatile. We often prescribe Cica-based products as bridging therapy when patients need to temporarily discontinue more active treatments.",
  clinicalSuitability: [
    "Indicated for rosacea and rosacea-prone patients",
    "Appropriate for post-procedural care (laser, peels, microneedling)",
    "Beneficial for patients with atopic tendencies",
    "Suitable during tretinoin initiation to mitigate retinisation symptoms",
    "Safe during pregnancy and lactation"
  ],
  useWithCaution: [
    "Rare cases of allergic contact dermatitis have been reported — patch test if history of plant allergies exists",
    "Quality and concentration vary significantly between products"
  ],
  notIdealFor: [
    "Individuals with known allergy to Centella asiatica or Apiaceae family plants",
    "Those expecting rapid results for non-inflammatory concerns"
  ],
  commonConcerns: [
    "Rosacea-associated erythema",
    "Contact dermatitis recovery",
    "Post-procedural inflammation",
    "Barrier dysfunction",
    "Acne-related inflammation",
    "Sensitised skin states"
  ],
  productExamples: [
    {
      name: "Skin Chemists Sensitive Skin Serum – Calm & Repair 30ml",
      description: "Lightweight serum formulated with Dragon's Blood, Centella Asiatica and Evening Primrose Oil to support skin comfort, balance and resilience. Designed for delicate or reactive skin types.",
      link: "https://www.belantti.co.uk/products/sensitive-skin-serum-dragons-blood-centella-30ml?sca_ref=10398409.mtv59NQvcFqb1MU",
      image: centellaSensitiveSerum
    },
    {
      name: "Cica Recovery Cream",
      description: "Rich moisturiser designed to strengthen the skin barrier and provide lasting comfort for compromised or post-treatment skin.",
      link: "#"
    }
  ]
};

const CentellaAsiatica = () => <IngredientPageTemplate ingredient={ingredient} />;
export default CentellaAsiatica;
