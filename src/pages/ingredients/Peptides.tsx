import IngredientPageTemplate, { IngredientData } from "@/components/ingredients/IngredientPageTemplate";

const ingredient: IngredientData = {
  name: "Peptides",
  whatItIs: "Peptides are short chains of amino acids (typically 2-50 residues) that function as signalling molecules in skin physiology. Different peptide classes exhibit distinct mechanisms: signal peptides (e.g., palmitoyl pentapeptide-4/Matrixyl) stimulate extracellular matrix protein synthesis; neurotransmitter-inhibiting peptides (e.g., acetyl hexapeptide-3/Argireline) modulate muscle contraction; carrier peptides (e.g., copper tripeptide-1) deliver trace elements essential for enzymatic functions; and enzyme-inhibiting peptides target specific degradative processes. This mechanistic diversity enables targeted intervention in various aspects of skin ageing.",
  whatItHelpsWith: [
    "Stimulating fibroblast production of collagen and elastin",
    "Reducing the depth and appearance of expression lines",
    "Improving dermal density and overall skin firmness",
    "Supporting wound healing and tissue remodelling",
    "Enhancing barrier function through increased lipid synthesis",
    "Providing antioxidant and anti-inflammatory benefits (copper peptides)"
  ],
  bestFor: ["Ageing concerns", "Loss of firmness", "Fine lines and wrinkles", "Post-procedure recovery", "Retinol-intolerant patients", "Preventative anti-ageing"],
  howItsUsed: "Peptides are formulated in serums, eye creams, and anti-ageing moisturisers. Look for products listing specific peptides (Matrixyl, Argireline, copper tripeptide-1) rather than generic 'peptide complex' claims. Apply twice daily to cleansed skin. Peptides are generally stable and well-tolerated. Efficacy requires consistent, long-term use — expect 8-12 weeks minimum for visible results. Can be used alongside retinoids (in separate routines) for synergistic anti-ageing effects.",
  pairsWellWith: ["Hyaluronic acid", "Niacinamide", "Vitamin C", "Ceramides", "Antioxidants", "Growth factors"],
  clinicNote: "Peptides serve as excellent complementary actives in anti-ageing protocols, particularly for patients who cannot tolerate retinoids or prefer gentler approaches. We frequently recommend copper peptides specifically for post-procedural healing due to their wound-modulating properties. While peptides rarely deliver the dramatic results of prescription retinoids, their favourable tolerability and additive benefits make them valuable components of comprehensive skincare regimens.",
  clinicalSuitability: [
    "Appropriate for patients intolerant to retinoids seeking anti-ageing benefits",
    "Indicated for post-procedural care (copper peptides particularly)",
    "Suitable during pregnancy and lactation (most peptides)",
    "Beneficial for periorbital ageing concerns",
    "Safe for sensitive skin types"
  ],
  useWithCaution: [
    "Copper peptides should not be used concurrently with vitamin C or AHAs — may reduce efficacy",
    "Some peptides may be unstable in certain formulation environments",
    "Quality and concentration vary significantly between products"
  ],
  notIdealFor: [
    "Those expecting results comparable to prescription retinoids",
    "Primary treatment of significant photodamage — better addressed with retinoids or procedures",
    "Budget-conscious patients — effective peptide products tend to be premium-priced"
  ],
  commonConcerns: [
    "Chronological ageing",
    "Fine lines and wrinkles",
    "Loss of skin firmness",
    "Post-procedural healing",
    "Periorbital ageing",
    "Preventative skincare"
  ],
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
