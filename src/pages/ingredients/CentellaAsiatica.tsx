import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Centella Asiatica",
  whatItIs: "Centella asiatica, also known as Cica or Tiger Grass, is a herbaceous plant native to Asia that has been used in traditional medicine for centuries. The plant contains active compounds called centelloids — including asiaticoside, madecassoside, asiatic acid, and madecassic acid — which work together to support skin healing and barrier function.",
  whatItHelpsWith: [
    "Calming redness and irritation",
    "Supporting skin barrier repair",
    "Reducing inflammation from breakouts",
    "Soothing sensitised or compromised skin",
    "Promoting wound healing and recovery post-treatment"
  ],
  bestFor: ["Sensitive skin", "Redness-prone skin", "Acne-prone skin", "Post-procedure recovery", "Compromised barriers"],
  howItsUsed: "Centella is found in serums, moisturisers, sheet masks, and spot treatments. It's generally well-tolerated and can be used morning and night. Look for formulations that list centella extract or specific centelloids (madecassoside, asiaticoside) high in the ingredient list for maximum benefit.",
  pairsWellWith: ["Hyaluronic acid", "Niacinamide", "Ceramides", "Panthenol", "Snail mucin"],
  clinicNote: "Centella asiatica is one of our go-to recommendations for clients with reactive or sensitised skin. It's particularly valuable during the recovery phase after procedures like laser treatments or chemical peels. Its gentle yet effective profile makes it suitable for almost all skin types, including those who struggle to tolerate many active ingredients.",
  productExamples: [
    {
      name: "Soothing Centella Serum",
      description: "Lightweight serum formulated to support skin barrier repair and calm visible redness. Suitable for sensitive or reactive skin types.",
      link: "#"
    },
    {
      name: "Cica Recovery Cream",
      description: "Rich moisturiser designed to strengthen the skin barrier and provide lasting comfort for compromised or post-treatment skin.",
      link: "#"
    },
    {
      name: "Calming Centella Toner",
      description: "Gentle hydrating toner that helps reduce inflammation and prepare skin for subsequent skincare steps.",
      link: "#"
    }
  ]
};

const CentellaAsiatica = () => <IngredientPageTemplate ingredient={ingredient} />;
export default CentellaAsiatica;
