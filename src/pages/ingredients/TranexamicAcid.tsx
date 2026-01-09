import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Tranexamic Acid",
  whatItIs: "Tranexamic acid (TXA) is a synthetic derivative of the amino acid lysine. Originally used in medicine to prevent excessive bleeding, it was later discovered to have significant skin-brightening properties. It works by inhibiting the interaction between keratinocytes (skin cells) and melanocytes (pigment-producing cells), effectively reducing melanin production at its source.",
  whatItHelpsWith: [
    "Treating stubborn hyperpigmentation",
    "Addressing hormonal melasma",
    "Fading post-inflammatory dark marks",
    "Evening out blotchy skin tone",
    "Preventing pigmentation recurrence"
  ],
  bestFor: ["Melasma", "Stubborn pigmentation", "Hormonal discolouration", "Post-inflammatory hyperpigmentation", "Asian/melanin-rich skin"],
  howItsUsed: "Topical tranexamic acid is typically found in serums and essences at concentrations of 2-5%. It's gentle enough for twice-daily use and pairs well with other brightening ingredients. Unlike some brightening agents, it doesn't increase sun sensitivity, though SPF remains essential for treating pigmentation.",
  pairsWellWith: ["Niacinamide", "Vitamin C", "Azelaic acid", "Alpha arbutin", "Kojic acid"],
  clinicNote: "Tranexamic acid has become one of our most-prescribed ingredients for pigmentation, particularly melasma, which is notoriously difficult to treat. What makes it special is its mechanism — by interrupting the communication between skin cells and melanocytes, it addresses pigmentation at a deeper level. For stubborn cases, we often combine topical TXA with other treatments in a comprehensive approach."
};

const TranexamicAcid = () => <IngredientPageTemplate ingredient={ingredient} />;
export default TranexamicAcid;
