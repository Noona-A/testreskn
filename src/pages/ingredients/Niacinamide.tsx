import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Niacinamide",
  whatItIs: "Niacinamide, also known as nicotinamide or vitamin B3, is a water-soluble vitamin that plays a crucial role in cellular energy production and DNA repair. In skincare, it's valued for its versatility and compatibility with nearly all skin types and other active ingredients.",
  whatItHelpsWith: [
    "Regulating excess oil production",
    "Minimising the appearance of enlarged pores",
    "Brightening uneven skin tone",
    "Strengthening the skin barrier",
    "Reducing redness and blotchiness"
  ],
  bestFor: ["Oily skin", "Combination skin", "Acne-prone skin", "Ageing concerns", "Uneven skin tone"],
  howItsUsed: "Niacinamide is found in serums, moisturisers, and toners at concentrations typically ranging from 2-10%. It's stable and pairs well with most ingredients. Start with lower concentrations (2-5%) if new to the ingredient, and use consistently for 8-12 weeks to see results.",
  pairsWellWith: ["Hyaluronic acid", "Salicylic acid", "Retinol", "Vitamin C", "Ceramides"],
  clinicNote: "Niacinamide is a true workhorse ingredient that we recommend to almost everyone. Its ability to address multiple concerns simultaneously — from oil control to barrier support — makes it exceptionally versatile. Unlike some actives, it rarely causes irritation and can be introduced at any stage of a skincare journey."
};

const Niacinamide = () => <IngredientPageTemplate ingredient={ingredient} />;
export default Niacinamide;
