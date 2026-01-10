import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Peptides",
  whatItIs: "Peptides are short chains of amino acids that act as messengers, signalling skin cells to perform specific functions. Different peptides have different effects — some stimulate collagen production, others help with muscle relaxation (reducing expression lines), and some have antimicrobial or copper-binding properties that support skin health.",
  whatItHelpsWith: [
    "Stimulating collagen and elastin production",
    "Reducing the appearance of fine lines",
    "Improving skin firmness and bounce",
    "Supporting skin healing and repair",
    "Strengthening the skin barrier"
  ],
  bestFor: ["Ageing concerns", "Loss of firmness", "Fine lines and wrinkles", "Barrier support", "Post-treatment recovery"],
  howItsUsed: "Peptides are found in serums, eye creams, and anti-ageing moisturisers. They're typically used twice daily and are very well tolerated. Look for products that list specific peptides (like Matrixyl, Argireline, or copper peptides) rather than just 'peptides'. They work best with consistent, long-term use.",
  pairsWellWith: ["Hyaluronic acid", "Niacinamide", "Vitamin C", "Retinol (different routines)", "Ceramides"],
  clinicNote: "Peptides are excellent supporting players in an anti-ageing routine. While they may not deliver the dramatic results of retinoids, they're gentle, well-tolerated, and work through entirely different mechanisms — making them perfect companions to other actives. We particularly recommend copper peptides for post-treatment healing and signal peptides like Matrixyl for those who can't tolerate retinol.",
  productExamples: [
    {
      name: "Firming Peptide Serum",
      description: "Concentrated formula designed to stimulate collagen production and improve the appearance of fine lines.",
      link: "#"
    },
    {
      name: "Peptide Eye Complex",
      description: "Targeted treatment for the delicate eye area, helping reduce the appearance of crow's feet and puffiness.",
      link: "#"
    },
    {
      name: "Age-Defence Moisturiser",
      description: "Daily moisturiser with multiple peptides to support skin firmness and resilience over time.",
      link: "#"
    }
  ]
};

const Peptides = () => <IngredientPageTemplate ingredient={ingredient} />;
export default Peptides;
