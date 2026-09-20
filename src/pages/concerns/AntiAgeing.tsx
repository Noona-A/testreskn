import ConcernPageLayout from "@/components/concerns/ConcernPageLayout";

const AntiAgeing = () => (
  <ConcernPageLayout
    path="/concerns/anti-ageing"
    title="Fine Lines and Skin Ageing"
    seoTitle="Anti-Ageing Skincare That Has Evidence"
    description="An honest pharmacist guide to skin ageing: the two ingredients with strong evidence, what has weaker support, and what is marketing. Build a routine that protects and repairs."
    keywords="anti ageing skincare evidence, retinoid for wrinkles, sunscreen ageing, vitamin C serum, peptides evidence, ReSKN Clinic"
    conditionName="Photoageing"
    intro={
      <>
        <p>
          Most visible skin ageing, including fine lines, uneven tone and loss of firmness, is driven by
          ultraviolet exposure rather than time. That is useful, because it means much of it is preventable
          and some of it is reversible.
        </p>
        <p>
          The anti-ageing market is enormous and mostly unproven. Only a small number of ingredients have
          clinical trial evidence behind them. This page focuses on those.
        </p>
      </>
    }
    sections={[
      {
        heading: "Two things that are proven",
        body: (
          <>
            <p>
              <strong>Daily sunscreen.</strong> A randomised trial in over 900 adults found that daily
              broad-spectrum sunscreen use measurably slowed skin ageing over four and a half years compared
              with discretionary use. Nothing else in skincare has this level of evidence.
            </p>
            <p>
              <strong>Topical retinoids.</strong> Tretinoin has decades of trial data showing improvement
              in fine lines, texture and pigmentation, and is prescription only in the UK. Over-the-counter
              retinol and retinaldehyde are weaker but work in the same way. Start low, two or three nights
              a week, and always pair with morning SPF.
            </p>
          </>
        ),
      },
      {
        heading: "Supporting evidence",
        body: (
          <p>
            <strong>Vitamin C</strong> (L-ascorbic acid at 10% to 20%) is an antioxidant with trial data
            for photoageing and pairs well with sunscreen in the morning. <strong>Niacinamide</strong>{" "}
            improves barrier function and tone. <strong>Peptides</strong> have promising but smaller studies.{" "}
            <strong>Hyaluronic acid</strong> hydrates and plumps temporarily but does not change collagen.
          </p>
        ),
      },
      {
        heading: "What we would not spend money on",
        body: (
          <p>
            Collagen creams (the molecule is too large to penetrate), most eye creams (a moisturiser does the
            same job), and any product promising to "reverse" ageing in days. Injectable and in-clinic
            treatments can do more than skincare, and we will tell you honestly when that is the case.
          </p>
        ),
      },
    ]}
    ingredients={[
      { label: "Vitamin C", to: "/ingredients/vitamin-c" },
      { label: "Peptides", to: "/ingredients/peptides" },
      { label: "Niacinamide", to: "/ingredients/niacinamide" },
      { label: "Hyaluronic acid", to: "/ingredients/hyaluronic-acid" },
    ]}
    faqs={[
      {
        q: "At what age should I start using a retinoid?",
        a: "There is no set age. Retinoids are useful whenever photoageing or acne is a concern. Many people start in their mid to late twenties. They are not recommended in pregnancy.",
      },
      {
        q: "Is a high-street retinol as good as prescription tretinoin?",
        a: "No. Retinol must be converted in the skin to become active and is considerably weaker, though better tolerated. Tretinoin is available on prescription following an assessment.",
      },
      {
        q: "Do I need SPF indoors or on cloudy days?",
        a: "UVA passes through cloud and window glass and is the main driver of ageing. If you are near windows or outside at all, a morning SPF is worthwhile year round.",
      },
    ]}
  />
);

export default AntiAgeing;
