import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Salicylic Acid (BHA)",
  whatItIs: "Salicylic acid is a lipophilic beta-hydroxy acid (BHA) derived from willow bark (Salix alba) or synthesised from phenol. Its oil-solubility enables penetration into the lipid-rich environment of the pilosebaceous unit, where it exerts comedolytic effects by dissolving the intercellular cement binding corneocytes. Additionally, salicylic acid possesses inherent anti-inflammatory properties through inhibition of prostaglandin synthesis, distinguishing it from alpha-hydroxy acids and making it particularly suited for inflammatory acne.",
  whatItHelpsWith: [
    "Dissolving sebum and keratinous debris within follicular infundibula",
    "Exfoliating within the pore lining to prevent comedone formation",
    "Reducing inflammatory lesion counts through prostaglandin inhibition",
    "Normalising the abnormal desquamation pattern seen in acne-prone skin",
    "Improving overall skin texture and reducing rough, bumpy areas",
    "Managing keratosis pilaris and other hyperkeratotic conditions"
  ],
  bestFor: ["Oily skin", "Acne-prone skin", "Blackheads and open comedones", "Congested pores", "Keratosis pilaris", "Seborrhoeic skin"],
  howItsUsed: "Available in cleansers, toners, serums, and leave-on treatments at concentrations of 0.5-2% for over-the-counter products. Start with lower concentrations applied 2-3 times weekly, increasing frequency as tolerance develops. Leave-on formulations provide greater efficacy than rinse-off products. Apply to dry skin for optimal penetration. Photosensitivity is minimal compared to AHAs, but SPF remains advisable when using any exfoliant.",
  pairsWellWith: ["Niacinamide", "Hyaluronic acid", "Azelaic acid", "Centella asiatica", "Benzoyl peroxide (different times of day)"],
  clinicNote: "Salicylic acid remains our first-line recommendation for patients presenting with comedonal acne or persistent congestion. Its ability to work within the follicular unit rather than merely on the surface distinguishes it from AHAs. We caution patients against the common error of over-application — excessive use disrupts the barrier and paradoxically increases sebum production. Consistent, measured use yields superior outcomes to aggressive approaches.",
  clinicalSuitability: [
    "First-line for comedonal acne (blackheads and whiteheads)",
    "Appropriate for patients who cannot tolerate benzoyl peroxide",
    "Beneficial for keratosis pilaris and rough body skin",
    "Suitable as maintenance therapy post-isotretinoin (after appropriate washout)",
    "Indicated for seborrhoeic dermatitis on face"
  ],
  useWithCaution: [
    "Those with aspirin or salicylate allergy should avoid or patch test",
    "Dry or eczema-prone skin — may exacerbate barrier dysfunction",
    "Concurrent use with other exfoliants may cause over-exfoliation",
    "Pregnancy — topical use in limited areas is generally considered safe, but discuss with prescriber"
  ],
  notIdealFor: [
    "Severely dry or dehydrated skin types",
    "Active eczema or dermatitis flares",
    "Immediately post-procedure on healing skin",
    "Those with significantly compromised skin barriers"
  ],
  commonConcerns: [
    "Acne vulgaris",
    "Comedonal acne",
    "Blackheads and whiteheads",
    "Congested pores",
    "Keratosis pilaris",
    "Seborrhoeic dermatitis"
  ],
  productExamples: [
    {
      name: "Pore Clearing BHA Toner",
      description: "Exfoliating toner that penetrates pores to dissolve congestion and prevent future blackheads and breakouts.",
      link: "#"
    },
    {
      name: "Targeted Blemish Treatment",
      description: "Concentrated spot treatment designed to reduce the appearance of active breakouts and calm inflammation.",
      link: "#"
    },
    {
      name: "Deep Cleansing BHA Cleanser",
      description: "Gentle foaming cleanser that helps remove excess oil and debris while keeping pores clear.",
      link: "#"
    }
  ]
};

const SalicylicAcid = () => <IngredientPageTemplate ingredient={ingredient} />;
export default SalicylicAcid;
