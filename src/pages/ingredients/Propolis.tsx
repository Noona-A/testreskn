import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Propolis",
  whatItIs: "Propolis is a resinous substance produced by honeybees (Apis mellifera) from botanical exudates combined with bee enzymes and wax. Its composition varies by geographic origin but consistently contains flavonoids (particularly pinocembrin, galangin, and chrysin), phenolic acids (caffeic acid phenethyl ester/CAPE), terpenoids, and aromatic compounds. These constituents confer broad-spectrum antimicrobial activity, potent anti-inflammatory effects, and antioxidant properties that have been utilised therapeutically for millennia.",
  whatItHelpsWith: [
    "Exerting antibacterial activity against acne-associated bacteria",
    "Modulating inflammatory pathways to reduce lesion severity",
    "Providing antioxidant protection against environmental oxidative stress",
    "Supporting wound healing through antimicrobial and regenerative mechanisms",
    "Calming and soothing irritated or inflamed skin",
    "Nourishing the skin with bioactive compounds"
  ],
  bestFor: ["Acne-prone skin", "Inflamed skin", "Sensitive skin", "Those seeking natural antimicrobial options", "Dull, stressed skin"],
  howItsUsed: "Propolis is formulated in serums, ampoules, moisturisers, and spot treatments. Concentrations vary significantly; efficacy requires products with propolis extract listed prominently in the INCI. Apply to cleansed skin morning and evening. Patch testing is mandatory for individuals with known bee, honey, or bee product allergies. Effects are typically cumulative — consistent use over 4-8 weeks is advisable before assessing efficacy.",
  pairsWellWith: ["Honey", "Centella asiatica", "Niacinamide", "Hyaluronic acid", "Green tea extract", "Royal jelly"],
  clinicNote: "Propolis offers a valuable alternative for patients seeking to address inflammatory acne without conventional antibacterials or benzoyl peroxide. Its natural antimicrobial and anti-inflammatory properties can be particularly effective for mild to moderate presentations. We consistently emphasise the importance of patch testing given the meaningful incidence of contact allergy to bee products. For patients with confirmed tolerance, propolis-based products often deliver excellent outcomes with minimal irritation.",
  clinicalSuitability: [
    "Appropriate for patients preferring naturally-derived antimicrobial actives",
    "Indicated for inflammatory acne where conventional treatments are not tolerated",
    "Suitable for general skin health and antioxidant support",
    "Beneficial for minor wound healing and skin recovery",
    "Safe during pregnancy — though patch testing advisable for new users"
  ],
  useWithCaution: [
    "Known allergy to bees, bee stings, honey, or bee products — contraindicated",
    "History of contact dermatitis — propolis is a recognised allergen; always patch test",
    "Those with pollen allergies may exhibit cross-reactivity"
  ],
  notIdealFor: [
    "Individuals with confirmed hypersensitivity to bee products",
    "Those requiring prescription-strength acne intervention",
    "Patients with severe, nodular, or cystic acne — systemic treatment is appropriate"
  ],
  commonConcerns: [
    "Inflammatory acne",
    "Minor skin infections",
    "General skin inflammation",
    "Oxidative stress protection",
    "Skin healing and recovery"
  ],
  productExamples: [
    {
      name: "Propolis Healing Ampoule",
      description: "Concentrated formula that helps fight blemishes and calm inflammation using natural antibacterial properties.",
      link: "#"
    },
    {
      name: "Soothing Propolis Serum",
      description: "Gentle serum designed to nourish sensitive skin while providing antioxidant protection.",
      link: "#"
    },
    {
      name: "Honey Propolis Glow Cream",
      description: "Nourishing moisturiser that combines propolis with honey extracts for a healthy, radiant complexion.",
      link: "#"
    }
  ]
};

const Propolis = () => <IngredientPageTemplate ingredient={ingredient} />;
export default Propolis;
