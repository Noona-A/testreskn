import ConcernPageLayout from "@/components/concerns/ConcernPageLayout";

const Pigmentation = () => (
  <ConcernPageLayout
    path="/concerns/pigmentation"
    title="Pigmentation and Dark Marks"
    seoTitle="Pigmentation, Melasma and Dark Marks"
    description="Pharmacist guidance on post-inflammatory hyperpigmentation, melasma and sun damage: why SPF comes first, which ingredients have evidence, and when prescription treatment is needed."
    keywords="hyperpigmentation treatment UK, melasma, dark marks after acne, post inflammatory hyperpigmentation, tranexamic acid, azelaic acid, ReSKN Clinic"
    conditionName="Hyperpigmentation"
    intro={
      <>
        <p>
          Pigmentation is excess melanin in the skin. The three types we see most often are post-inflammatory
          hyperpigmentation (marks left after spots or injury), melasma (symmetrical patches driven by hormones
          and UV), and sun-induced spots.
        </p>
        <p>
          Each responds differently, and melasma in particular is a chronic condition that is managed rather
          than cured. Getting the type right is the first step.
        </p>
      </>
    }
    sections={[
      {
        heading: "Sun protection is the treatment, not an add-on",
        body: (
          <>
            <p>
              Every form of pigmentation is worsened by UV and, for melasma, visible light too. No active
              ingredient will out-perform daily use of a broad-spectrum SPF 30 or higher. Tinted mineral
              sunscreens containing iron oxides add protection against visible light and are worth
              considering for melasma.
            </p>
          </>
        ),
      },
      {
        heading: "Ingredients with supporting evidence",
        body: (
          <>
            <p>
              <strong>Azelaic acid</strong> reduces melanin production and inflammation and is well studied
              for post-inflammatory marks. <strong>Topical tranexamic acid</strong> has growing evidence for
              melasma. <strong>Vitamin C</strong>, <strong>niacinamide</strong> and{" "}
              <strong>retinoids</strong> all help by slowing pigment transfer and speeding cell turnover.
            </p>
            <p>
              Hydroquinone remains the most effective single lightening agent but is prescription only in
              the UK and is used in short supervised courses, often combined with a retinoid and a mild
              steroid.
            </p>
          </>
        ),
      },
      {
        heading: "Realistic timelines",
        body: (
          <p>
            Post-inflammatory marks fade over three to six months with consistent treatment and sun
            protection. Melasma needs ongoing maintenance and tends to return if sunscreen lapses. If a
            pigmented patch is changing shape, colour or bleeding, see a GP promptly rather than treating it
            at home.
          </p>
        ),
      },
    ]}
    ingredients={[
      { label: "Azelaic acid", to: "/ingredients/azelaic-acid" },
      { label: "Tranexamic acid", to: "/ingredients/tranexamic-acid" },
      { label: "Vitamin C", to: "/ingredients/vitamin-c" },
      { label: "Niacinamide", to: "/ingredients/niacinamide" },
    ]}
    faqs={[
      {
        q: "Can laser remove pigmentation?",
        a: "Some pigmentation responds to laser or IPL, but melasma can worsen with heat-based treatments. We assess the type first and do not recommend laser for melasma as a starting point.",
      },
      {
        q: "Will exfoliating acids fade dark marks faster?",
        a: "Gentle chemical exfoliation with lactic or glycolic acid can help, but over-exfoliating causes inflammation that creates more pigment. Two or three times a week is usually enough.",
      },
      {
        q: "Does pigmentation come back?",
        a: "Post-inflammatory marks usually resolve fully once the trigger stops. Melasma is prone to relapse, especially in summer or with hormonal changes, so year-round SPF is essential.",
      },
    ]}
  />
);

export default Pigmentation;
