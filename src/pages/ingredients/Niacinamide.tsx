import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";
import hydromineralCream from "@/assets/products/hydromineral-cream-h2o.jpg";
import niacinamideToner from "@/assets/products/niacinamide-hydrating-toner.png";

const ingredient: IngredientData = {
  name: "Niacinamide (Vitamin B3)",
  whatItIs: "Niacinamide, also known as nicotinamide or vitamin B3, is a water-soluble vitamin that serves as a precursor to essential coenzymes NAD+ and NADP+, which are critical for cellular energy metabolism and DNA repair mechanisms. In clinical dermatology, niacinamide is recognised for its sebostatic properties, barrier-enhancing effects, and ability to modulate inflammatory pathways. Its exceptional tolerability and compatibility with virtually all other topical actives make it a cornerstone ingredient in evidence-based skincare protocols.",
  whatItHelpsWith: [
    "Regulating sebaceous gland activity and reducing sebum excretion rate",
    "Minimising the appearance of enlarged pores through sebum control",
    "Inhibiting melanosome transfer to improve uneven pigmentation",
    "Strengthening the stratum corneum by stimulating ceramide and fatty acid synthesis",
    "Reducing transepidermal water loss (TEWL) and improving barrier integrity",
    "Modulating inflammatory mediators to reduce erythema and blotchiness"
  ],
  bestFor: ["Oily skin", "Combination skin", "Acne-prone skin", "Ageing concerns", "Uneven skin tone", "Sensitive skin"],
  howItsUsed: "Niacinamide is formulated in serums, moisturisers, and toners at concentrations typically ranging from 2-10%. Clinical studies demonstrate efficacy at concentrations as low as 2%, though 4-5% is commonly used for optimal tolerability and results. Higher concentrations (10%+) may cause transient flushing in sensitive individuals. Apply to cleansed skin morning and evening. Consistent use over 8-12 weeks is typically required to observe significant clinical improvement.",
  pairsWellWith: ["Hyaluronic acid", "Salicylic acid", "Retinoids", "Vitamin C", "Ceramides", "Azelaic acid"],
  clinicNote: "Frequently recommended in our clinic for patients presenting with seborrhoea, post-inflammatory hyperpigmentation, or barrier dysfunction. Niacinamide's mechanism of action complements rather than duplicates that of retinoids and hydroxy acids, making it an excellent adjunctive therapy. We often prescribe it as a foundational ingredient before introducing more potent actives, and it remains in the regimen long-term due to its cumulative barrier-strengthening effects.",
  clinicalSuitability: [
    "Appropriate for acne vulgaris management as part of a comprehensive regimen",
    "Suitable for rosacea-prone patients due to anti-inflammatory properties",
    "Beneficial during topical retinoid therapy to mitigate irritation",
    "Indicated for patients with impaired epidermal barrier function",
    "Safe for use during pregnancy and lactation"
  ],
  useWithCaution: [
    "Concentrations above 10% may cause transient vasodilation (flushing) in sensitive individuals",
    "Patients with known niacin sensitivity should patch test first",
    "Those using multiple actives should introduce gradually to assess tolerance"
  ],
  notIdealFor: [
    "Individuals with confirmed hypersensitivity to niacinamide or niacin derivatives",
    "Those experiencing active dermatitis until inflammation resolves"
  ],
  commonConcerns: [
    "Acne vulgaris",
    "Seborrhoea",
    "Post-inflammatory hyperpigmentation",
    "Enlarged pores",
    "Barrier dysfunction",
    "Rosacea-associated erythema",
    "Photoageing"
  ],
  productExamples: [
    {
      name: "Hydromineral Cream H2O 50ml",
      description: "Lightweight hydrating cream formulated to deliver deep moisture while supporting skin barrier function. Suitable for all skin types seeking balanced hydration.",
      link: "https://www.belantti.co.uk/products/hydromineral-face-cream-h2o?sca_ref=10398409.mtv59NQvcFqb1MU",
      image: hydromineralCream
    },
    {
      name: "SUGAR + PHA/AHA + Niacinamide – Mild Hydrating Toner 200ml",
      description: "Gentle hydrating toner combining niacinamide with PHA and AHA acids to refine skin texture, minimise pores and maintain optimal moisture balance for face, neck and décolleté.",
      link: "https://www.belantti.co.uk/products/sugar-pha-aha-niacinamide-hydrating-toner?sca_ref=10398409.mtv59NQvcFqb1MU",
      image: niacinamideToner
    }
  ]
};

const Niacinamide = () => <IngredientPageTemplate ingredient={ingredient} />;
export default Niacinamide;
