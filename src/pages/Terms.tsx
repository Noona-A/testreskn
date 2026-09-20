import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

/**
 * Terms of service. Drafted for the clinic's actual services.
 * TODO(Nori): confirm the cancellation window and deposit terms match the booking system.
 */
const Terms = () => (
  <>
    <SEO
      title="Terms of Service | ReSKN Clinic"
      description="Terms for using resknclinic.co.uk and booking consultations or laser hair removal with ReSKN Clinic, including cancellations, medical information and website content."
      canonical="/terms"
    />
    <div className="pt-16 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-serif text-4xl mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated 20 September 2026</p>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-foreground mb-2">Website content</h2>
            <p>
              The guides, ingredient pages and other content on this site are educational. They are written by a
              GPhC-registered pharmacist and reflect UK clinical guidance at the time of review, but they are not a
              substitute for an individual assessment. Do not start, stop or change prescribed treatment based on
              website content alone. If you have an urgent concern, contact your GP, NHS 111, or emergency services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-2">Bookings, deposits and cancellations</h2>
            <p>
              Appointments are booked through our online booking system. Some laser treatments require a deposit,
              which is redeemable against the treatment. Please give at least 24 hours' notice to cancel or reschedule.
              Late cancellations and missed appointments may forfeit the deposit or be charged in full.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-2">Medical information and suitability</h2>
            <p>
              You agree to give accurate and complete medical information in consent and assessment forms and to tell
              us about any changes, including new medication, pregnancy, or recent sun exposure. We may decline or
              postpone treatment where it is not safe to proceed. A patch test is required before laser hair removal
              for all new clients.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-2">Online consultations</h2>
            <p>
              Online consultations are delivered by video and are suitable for skincare advice and, where appropriate,
              prescribing within the clinician's scope of practice. Some conditions cannot be safely assessed remotely
              and we will tell you if an in-person review or GP referral is needed. Consultation fees are payable at
              booking and are non-refundable once the consultation has taken place.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-2">Product links</h2>
            <p>
              Products mentioned on this site are examples. Some links are affiliate links and are labelled. We are
              not responsible for the availability, pricing or performance of products sold by third parties.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-2">Intellectual property</h2>
            <p>
              Content on this site belongs to ReSKN Clinic and may not be reproduced commercially without permission.
              You may share links to our pages freely.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-2">Governing law</h2>
            <p>These terms are governed by the laws of England and Wales.</p>
          </section>

          <p className="text-sm">
            See also our <Link to="/privacy" className="text-primary underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default Terms;
