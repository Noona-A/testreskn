import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ConcernPageLayout from "@/components/concerns/ConcernPageLayout";

const Ingrowns = () => (
  <ConcernPageLayout
    path="/concerns/ingrowns"
    title="Ingrown Hairs"
    seoTitle="Ingrown Hairs and Razor Bumps"
    description="Why ingrown hairs happen after shaving and waxing, what helps short term, and why laser hair removal is the evidence-backed long-term option for recurrent razor bumps."
    keywords="ingrown hairs treatment, razor bumps, pseudofolliculitis barbae, laser hair removal ingrown hairs, ingrown hair bikini line, ReSKN Clinic Windsor"
    conditionName="Ingrown hairs"
    intro={
      <>
        <p>
          Ingrown hairs form when a hair curls back or grows sideways into the skin instead of out of the
          follicle. The body treats it as a foreign object, causing a red, sometimes painful bump. People with
          curly or coarse hair are most affected, and the beard area, bikini line and legs are common sites.
        </p>
      </>
    }
    sections={[
      {
        heading: "Short-term relief",
        body: (
          <>
            <p>
              Stop shaving or waxing the area for a few weeks if you can. Warm compresses soften the skin,
              and a leave-on <strong>salicylic acid</strong> product helps clear the plug over the trapped
              hair. Do not dig hairs out with tweezers or needles, which causes infection and dark marks.
            </p>
            <p>
              If you must shave, use a single-blade razor, shave in the direction of growth, and do not pull
              skin taut. A sharp blade and shaving gel matter more than any aftershave product.
            </p>
          </>
        ),
      },
      {
        heading: "The long-term fix",
        body: (
          <p>
            Ingrown hairs cannot form if there is no hair to grow in. Laser hair removal is recommended in
            dermatology guidance for recurrent pseudofolliculitis barbae because it thins and reduces the
            hair permanently, and it can be used safely on darker skin types with the right device and
            settings. Most people notice fewer bumps after two to three sessions.
          </p>
        ),
      },
    ]}
    ingredients={[
      { label: "Salicylic acid", to: "/ingredients/salicylic-acid" },
      { label: "Lactic acid", to: "/ingredients/lactic-acid" },
      { label: "Azelaic acid", to: "/ingredients/azelaic-acid" },
    ]}
    faqs={[
      {
        q: "Is laser hair removal safe on darker skin?",
        a: "Yes, with a diode or Nd:YAG laser operated at the right settings and after a patch test. We patch test every new client and use a device suitable for Fitzpatrick skin types I to V.",
      },
      {
        q: "Will the dark marks from old ingrown hairs fade?",
        a: "Usually yes over several months once new bumps stop forming. Azelaic acid and daily SPF speed this up.",
      },
      {
        q: "How many laser sessions are needed?",
        a: "Most areas need six to eight sessions spaced four to eight weeks apart for lasting reduction, with occasional top-ups afterwards.",
      },
    ]}
    cta={
      <div className="card-luxury p-6 md:p-8 bg-gradient-to-br from-secondary/5 to-primary/5">
        <h3 className="font-serif text-xl md:text-2xl mb-2">Stop ingrown hairs at the source</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Book a free laser patch test at our Windsor clinic. Every new client is assessed and patch tested
          before treatment.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild className="btn-luxury text-primary-foreground">
            <a href="https://app.cal.eu/resknclinic/laser-patch-test" target="_blank" rel="noopener noreferrer">
              Book free patch test
            </a>
          </Button>
          <Button asChild variant="outline">
            <Link to="/laser-hair-removal">About laser hair removal</Link>
          </Button>
        </div>
      </div>
    }
  />
);

export default Ingrowns;
