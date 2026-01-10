import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Tranexamic Acid",
  whatItIs: "Tranexamic acid (TXA) is a synthetic lysine derivative initially developed as an antifibrinolytic agent for haemorrhage management. Its dermatological application emerged from observations of improved melasma in patients receiving oral TXA for other indications. Mechanistically, topical TXA inhibits plasminogen activator, reducing the release of arachidonic acid and prostaglandins that stimulate melanocyte activity. It also decreases mast cell activity, thereby interrupting the UV-induced inflammatory cascade that triggers melanogenesis.",
  whatItHelpsWith: [
    "Interrupting melanocyte-keratinocyte signalling to reduce pigment production",
    "Targeting stubborn melasma resistant to conventional depigmenting agents",
    "Fading post-inflammatory hyperpigmentation from acne or injury",
    "Reducing erythema through anti-inflammatory mechanisms",
    "Preventing recurrence of pigmentation when used as maintenance therapy",
    "Addressing hormonally-driven hyperpigmentation"
  ],
  bestFor: ["Melasma", "Stubborn hyperpigmentation", "Hormonal pigmentation", "Post-inflammatory hyperpigmentation", "Fitzpatrick types III-VI", "Recurrent pigmentation"],
  howItsUsed: "Topical tranexamic acid is typically formulated in serums and essences at concentrations of 2-5%. Apply to cleansed skin twice daily. Unlike hydroquinone, it does not cause ochronosis and can be used continuously without mandatory breaks. Often combined with other tyrosinase inhibitors for synergistic effect. Results typically become apparent after 8-12 weeks of consistent use. Critically, TXA does not increase photosensitivity, though rigorous photoprotection remains essential for pigmentation management.",
  pairsWellWith: ["Niacinamide", "Vitamin C", "Azelaic acid", "Alpha arbutin", "Kojic acid", "Retinoids"],
  clinicNote: "Tranexamic acid has transformed our approach to recalcitrant melasma, a condition historically challenging to manage. Its unique mechanism — targeting the inflammatory cascade preceding melanogenesis rather than melanin synthesis alone — addresses pigmentation at a more fundamental level. We frequently incorporate TXA into multi-modal depigmentation protocols alongside tyrosinase inhibitors and retinoids. For patients with melasma triggered by hormonal factors, TXA often provides superior outcomes to conventional treatments.",
  clinicalSuitability: [
    "First-line consideration for melasma, particularly hormonally-driven presentations",
    "Appropriate for patients who have not responded to hydroquinone or vitamin C alone",
    "Suitable for long-term maintenance therapy without tachyphylaxis concerns",
    "Beneficial for post-inflammatory hyperpigmentation in acne patients",
    "Indicated for patients of colour due to favourable safety profile"
  ],
  useWithCaution: [
    "Those with a history of thromboembolic events should consult with their GP before oral TXA (topical absorption is minimal)",
    "Pregnancy and lactation — data is limited; prescriber discretion advised",
    "Patients on anticoagulant therapy should disclose this during consultation"
  ],
  notIdealFor: [
    "Solar lentigines (sun spots) — better addressed with vitamin C, retinoids, or procedures",
    "Those expecting immediate results — consistent use over months is required",
    "Monotherapy for severe melasma — best results achieved in combination protocols"
  ],
  commonConcerns: [
    "Melasma",
    "Post-inflammatory hyperpigmentation",
    "Hormonal pigmentation",
    "Recurrent hyperpigmentation",
    "Uneven skin tone",
    "Acne-related dark marks"
  ],
  productExamples: [
    {
      name: "Pigmentation Correcting Serum",
      description: "Targeted treatment designed to fade stubborn dark spots and help prevent new pigmentation from forming.",
      link: "#"
    },
    {
      name: "Melasma Control Essence",
      description: "Specialised formula that addresses hormonal discolouration and promotes a more even-toned complexion.",
      link: "#"
    },
    {
      name: "Brightening Intensive Ampoule",
      description: "Concentrated treatment combining tranexamic acid with complementary brightening agents for visible results.",
      link: "#"
    }
  ]
};

const TranexamicAcid = () => <IngredientPageTemplate ingredient={ingredient} />;
export default TranexamicAcid;
