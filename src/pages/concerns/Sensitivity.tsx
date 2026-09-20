import ConcernPageLayout from "@/components/concerns/ConcernPageLayout";

const Sensitivity = () => (
  <ConcernPageLayout
    path="/concerns/sensitivity"
    title="Sensitivity and Redness"
    seoTitle="Sensitive Skin, Redness and Rosacea"
    description="How to calm reactive skin and rebuild a damaged barrier: fragrance-free routines, barrier ingredients with evidence, the difference between sensitivity and rosacea, and when to get treatment."
    keywords="sensitive skin routine, skin barrier repair, rosacea treatment UK, facial redness, ceramides, niacinamide, ReSKN Clinic"
    conditionName="Sensitive skin"
    intro={
      <>
        <p>
          Sensitive skin stings, burns or flushes in response to products, weather or stress. Very often the
          underlying problem is a damaged skin barrier, either from over-exfoliation, harsh cleansers or too
          many actives at once.
        </p>
        <p>
          Persistent central facial redness, visible blood vessels or bumps that look like acne but do not
          respond to acne treatment may be rosacea, which needs a different approach and often prescription
          treatment.
        </p>
      </>
    }
    sections={[
      {
        heading: "Strip the routine back",
        body: (
          <>
            <p>
              The fastest way to calm reactive skin is to remove, not add. Pause exfoliating acids, retinoids
              and vitamin C for two to four weeks. Use a fragrance-free cream or milk cleanser, a moisturiser
              that contains barrier lipids, and a mineral SPF. Reintroduce one active at a time.
            </p>
          </>
        ),
      },
      {
        heading: "Barrier ingredients with evidence",
        body: (
          <p>
            <strong>Ceramides</strong> replace the lipids a damaged barrier is missing.{" "}
            <strong>Niacinamide</strong> at 2% to 5% increases the skin's own ceramide production and reduces
            redness. <strong>Panthenol</strong> and <strong>centella asiatica</strong> are soothing and
            well tolerated. Avoid fragrance, essential oils and high-strength alcohol while skin is reactive.
          </p>
        ),
      },
      {
        heading: "If it might be rosacea",
        body: (
          <p>
            Rosacea is a long-term inflammatory condition. UK guidance supports topical ivermectin,
            metronidazole or azelaic acid for the bumps, and brimonidine for persistent redness, with oral
            options for more severe cases. These are prescription treatments, so an assessment is the right
            first step rather than trial and error with skincare.
          </p>
        ),
      },
    ]}
    ingredients={[
      { label: "Ceramides", to: "/ingredients/ceramides" },
      { label: "Niacinamide", to: "/ingredients/niacinamide" },
      { label: "Panthenol", to: "/ingredients/panthenol" },
      { label: "Centella asiatica", to: "/ingredients/centella-asiatica" },
      { label: "Squalane", to: "/ingredients/squalane" },
    ]}
    faqs={[
      {
        q: "Should I patch test new products?",
        a: "Yes. Apply a small amount behind the ear or on the inner forearm once daily for three to five days before using it on your face. This catches most irritant and allergic reactions.",
      },
      {
        q: "Is 'hypoallergenic' a reliable label?",
        a: "No. The term is not regulated in the UK. Look instead for fragrance-free, short ingredient lists and products designed for eczema-prone skin.",
      },
      {
        q: "Can I still use retinoids with sensitive skin?",
        a: "Often yes, once the barrier has recovered. Start with a low strength two nights a week, buffer with moisturiser, and increase slowly. Rosacea patients should get advice first.",
      },
    ]}
  />
);

export default Sensitivity;
