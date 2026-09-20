import { Link } from "react-router-dom";
import ConcernPageLayout from "@/components/concerns/ConcernPageLayout";

const Acne = () => (
  <ConcernPageLayout
    path="/concerns/acne"
    title="Acne"
    seoTitle="Acne Treatment Advice from a Pharmacist"
    description="What actually clears acne according to UK guidance: benzoyl peroxide, adapalene, azelaic acid, when to get a prescription, and how to build a routine that works."
    keywords="acne treatment UK, acne pharmacist advice, benzoyl peroxide, adapalene, azelaic acid, hormonal acne, NICE acne guidance, ReSKN Clinic"
    conditionName="Acne vulgaris"
    intro={
      <>
        <p>
          Acne is the most common skin condition in the UK and affects adults as well as teenagers. It happens
          when hair follicles become blocked with oil and dead skin cells, which allows the bacterium{" "}
          <em>Cutibacterium acnes</em> to multiply and drive inflammation.
        </p>
        <p>
          The good news is that acne responds well to the right treatment. The frustrating part is that most
          people are using the wrong products, at the wrong strength, for too short a time.
        </p>
      </>
    }
    sections={[
      {
        heading: "What the evidence supports",
        body: (
          <>
            <p>
              UK guidance (NICE NG198) recommends topical treatments as first line for mild to moderate acne.
              The strongest over-the-counter option is <strong>benzoyl peroxide</strong>, which kills the
              bacteria involved and does not cause resistance. Start at 2.5% to 5% once daily and build up.
            </p>
            <p>
              <strong>Adapalene</strong>, a topical retinoid, normalises how skin cells shed so pores stop
              blocking. In the UK it is prescription only, and NICE recommends it in fixed combination with
              benzoyl peroxide as a first-line option.{" "}
              <strong>Azelaic acid</strong> is a well-tolerated alternative that also helps with the dark
              marks acne leaves behind and is safe in pregnancy.
            </p>
            <p>
              Expect 8 to 12 weeks before judging any treatment. Stopping at week 3 because nothing has
              changed is the single most common reason acne routines fail.
            </p>
          </>
        ),
      },
      {
        heading: "When to seek prescription treatment",
        body: (
          <>
            <p>
              See a prescriber if your acne is moderate to severe, is leaving scars, is affecting your mood,
              or has not improved after 12 weeks of a proper over-the-counter routine. Prescription options
              include combination gels, oral antibiotics used alongside a topical, hormonal treatments for
              women, and isotretinoin under specialist care for severe or scarring acne.
            </p>
            <p>
              As an independent prescriber, our clinic can assess your acne online and advise on the most
              appropriate route, including whether a GP or dermatology referral is needed.
            </p>
          </>
        ),
      },
      {
        heading: "Building a routine that sticks",
        body: (
          <>
            <p>
              Keep it simple: a gentle cleanser, one active treatment, a non-comedogenic moisturiser and a
              broad-spectrum SPF every morning. Adding more products increases irritation, not results.
            </p>
            <p>
              Our{" "}
              <Link to="/guides/acne" className="text-primary underline underline-offset-2">
                Complete Acne Guide
              </Link>{" "}
              walks through routines, a 12-week plan, purging versus reactions, scarring, body acne and
              hormonal acne in depth.
            </p>
          </>
        ),
      },
    ]}
    guide={{ label: "The Complete Acne Guide", to: "/guides/acne" }}
    ingredients={[
      { label: "Azelaic acid", to: "/ingredients/azelaic-acid" },
      { label: "Salicylic acid", to: "/ingredients/salicylic-acid" },
      { label: "Niacinamide", to: "/ingredients/niacinamide" },
      { label: "Ceramides", to: "/ingredients/ceramides" },
    ]}
    faqs={[
      {
        q: "Does diet cause acne?",
        a: "UK guidance does not recommend specific diets for acne because the evidence is limited. Some studies link high glycaemic load diets and dairy with acne in some people, so it is reasonable to track your own pattern, but diet changes alone rarely clear acne.",
      },
      {
        q: "Should I stop wearing makeup?",
        a: "No. Choose products labelled non-comedogenic, remove makeup fully at night, and clean brushes weekly. Makeup is not a cause of acne when used this way.",
      },
      {
        q: "Is it normal for skin to get worse when I start treatment?",
        a: "A short period of increased breakouts can happen in the first few weeks with retinoids as blocked pores clear. Burning, swelling or a rash is not purging and means you should stop and seek advice.",
      },
    ]}
  />
);

export default Acne;
