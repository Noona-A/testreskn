import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

/**
 * Privacy notice. Drafted to reflect what the site actually does (booking via Cal,
 * contact and consent forms via EmailJS, Google Analytics, affiliate links).
 * TODO(Nori): review wording before relying on it and add the ICO registration
 * reference if the clinic holds one.
 */
const Privacy = () => (
  <>
    <SEO
      title="Privacy Policy | ReSKN Clinic"
      description="How ReSKN Clinic collects, uses and protects your personal and health information when you book, complete a form, or browse this website."
      canonical="/privacy"
    />
    <div className="pt-16 pb-16">
      <div className="container mx-auto px-4 max-w-3xl prose-sm">
        <h1 className="font-serif text-4xl mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated 20 September 2026</p>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-foreground mb-2">Who we are</h2>
            <p>
              ReSKN Clinic ("we", "us") operates resknclinic.co.uk and provides skin consultations and laser hair
              removal from 16 Dower Park, Windsor, SL4 4BQ. We are the data controller for the personal information
              described in this notice. Contact: hello@resknclinic.co.uk.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-2">What we collect and why</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-foreground">Bookings.</strong> Name, email, phone number and appointment
                details, collected through our booking provider (Cal.com, EU hosted) so we can deliver and manage your
                appointment. Lawful basis: contract.
              </li>
              <li>
                <strong className="text-foreground">Medical consent and skin assessment forms.</strong> Health
                information you provide before treatment, including medical history, medication and skin type. This is
                special category data and is needed to treat you safely. Lawful basis: provision of health care (UK GDPR
                Article 9(2)(h)) and your explicit consent.
              </li>
              <li>
                <strong className="text-foreground">Contact form and email.</strong> The details you send us so we can
                reply. Lawful basis: legitimate interests.
              </li>
              <li>
                <strong className="text-foreground">Skin quiz.</strong> Your answers are processed in your browser to
                show a result. They are not stored by us unless you go on to book.
              </li>
              <li>
                <strong className="text-foreground">Website analytics.</strong> We use Google Analytics 4 to understand
                how the site is used. It sets cookies and collects device and usage data in pseudonymised form. Lawful
                basis: consent, which you can withdraw through your browser settings.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-2">Who we share it with</h2>
            <p>
              Service providers who process data on our behalf: Cal.com (bookings), EmailJS (form delivery), Google
              (analytics) and GitHub Pages (website hosting). We do not sell your data. Clinical records are shared with
              other healthcare professionals only where you ask us to or where the law requires it.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-2">Affiliate links and advertising</h2>
            <p>
              Some product links on our guides are affiliate links and are labelled. If you buy through one, the
              retailer may pay us a commission and may set its own cookies. If advertising is shown on this site it is
              served by Google AdSense, which may use cookies to personalise ads. You can opt out at{" "}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                adssettings.google.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-2">How long we keep it</h2>
            <p>
              Clinical records, including consent forms and laser treatment records, are kept for eight years after your
              last treatment in line with UK healthcare record-keeping guidance. Enquiries that do not lead to a booking
              are deleted within 12 months. Analytics data is retained by Google for 14 months.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-2">Your rights</h2>
            <p>
              You can ask for a copy of your data, ask us to correct or delete it, object to processing, or withdraw
              consent at any time by emailing hello@resknclinic.co.uk. You can also complain to the Information
              Commissioner's Office at ico.org.uk.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-2">Security</h2>
            <p>
              Forms are transmitted over HTTPS. Clinical records are stored in access-controlled systems. Our website is
              static and holds no database of visitors.
            </p>
          </section>

          <p className="text-sm">
            See also our <Link to="/terms" className="text-primary underline">Terms of Service</Link>.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default Privacy;
