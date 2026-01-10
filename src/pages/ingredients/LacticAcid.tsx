import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Lactic Acid (AHA)",
  whatItIs: "Lactic acid is an alpha-hydroxy acid (AHA) naturally present in sour milk and produced endogenously as a component of the skin's natural moisturising factor (NMF). As the second-smallest AHA molecule after glycolic acid, it penetrates effectively while causing comparatively less irritation due to its larger molecular size. Beyond keratolytic activity, lactic acid exhibits unique humectant properties and stimulates ceramide synthesis, distinguishing it from other AHAs and making it particularly suited for dry or sensitive skin types.",
  whatItHelpsWith: [
    "Promoting controlled desquamation of the stratum corneum",
    "Stimulating ceramide production and improving barrier function",
    "Increasing epidermal and dermal hyaluronic acid content",
    "Reducing the appearance of fine lines and photoageing",
    "Fading superficial hyperpigmentation",
    "Improving overall skin radiance and texture"
  ],
  bestFor: ["Dry skin", "Sensitive skin", "AHA beginners", "Uneven texture", "Dull complexion", "Keratosis pilaris"],
  howItsUsed: "Lactic acid is available at concentrations from 5-12% for home use. Begin with lower concentrations (5%) applied 1-2 times weekly, increasing frequency as tolerance develops. Apply to dry skin in the evening; rinse-off formulations may be preferable for sensitive individuals. Mandatory SPF use the following day due to increased photosensitivity. Avoid concurrent use with retinoids or other exfoliants to prevent over-exfoliation.",
  pairsWellWith: ["Hyaluronic acid", "Niacinamide", "Ceramides", "Squalane", "Peptides"],
  clinicNote: "Lactic acid represents our preferred introductory AHA for patients new to chemical exfoliation or those who have found glycolic acid excessively irritating. Its hydrating properties make it uniquely suited for patients presenting with both textural concerns and underlying dryness. For keratosis pilaris, we frequently recommend lactic acid body products as a well-tolerated, effective intervention. As with all exfoliants, we emphasise gradual introduction and consistent photoprotection.",
  clinicalSuitability: [
    "Appropriate for patients with sensitive or reactive skin seeking exfoliation",
    "Indicated for those with concurrent dryness and textural concerns",
    "Suitable for keratosis pilaris management",
    "Beneficial as a gentler alternative to glycolic acid",
    "Generally avoided in pregnancy (as with most AHAs) — discuss with prescriber"
  ],
  useWithCaution: [
    "Sensitive or rosacea-prone skin — introduce very gradually",
    "Those using retinoids should avoid layering — alternate evenings if necessary",
    "Active eczema or dermatitis — defer until inflammation resolves",
    "Pregnancy — topical AHAs are generally advised against; seek guidance"
  ],
  notIdealFor: [
    "Severely compromised skin barriers — stabilise first",
    "Immediately post-procedure before re-epithelialisation",
    "Those unable to commit to daily SPF use",
    "Patients seeking aggressive exfoliation — glycolic acid or peels may be more appropriate"
  ],
  commonConcerns: [
    "Dull, lacklustre skin",
    "Uneven skin texture",
    "Keratosis pilaris",
    "Superficial hyperpigmentation",
    "Fine lines",
    "Rough, dry skin"
  ],
  productExamples: [
    {
      name: "Gentle Resurfacing Serum",
      description: "Mild exfoliating serum that smooths texture and enhances radiance without compromising skin hydration.",
      link: "#"
    },
    {
      name: "Hydrating AHA Toner",
      description: "Balanced formula combining gentle exfoliation with moisture-boosting properties for a brighter complexion.",
      link: "#"
    },
    {
      name: "Overnight Renewal Treatment",
      description: "Nightly treatment designed to refine skin texture and fade discolouration while you sleep.",
      link: "#"
    }
  ]
};

const LacticAcid = () => <IngredientPageTemplate ingredient={ingredient} />;
export default LacticAcid;
