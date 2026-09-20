import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Video, ChevronRight } from "lucide-react";

export const ONLINE_CONSULT_URL = "https://app.cal.eu/resknclinic/online-skin-consultation";

interface ConsultCTAProps {
  heading?: string;
  body?: string;
  className?: string;
}

/** Inline call to action for the online consultation, the site's primary revenue action. */
const ConsultCTA = ({
  heading = "Want a plan built for your skin?",
  body = "A 30 minute online video consultation with a GPhC-registered pharmacist. Evidence-based advice with no product pushing. £45.",
  className = "",
}: ConsultCTAProps) => (
  <div className={`card-luxury p-6 md:p-8 bg-gradient-to-br from-secondary/5 to-primary/5 ${className}`}>
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
      <div className="flex-1">
        <h3 className="font-serif text-xl md:text-2xl mb-2">{heading}</h3>
        <p className="text-sm text-muted-foreground">{body}</p>
      </div>
      <Button asChild className="btn-luxury text-primary-foreground whitespace-nowrap">
        <Link to="/booking">
          <Video className="w-4 h-4 mr-2" aria-hidden="true" />
          Book online consultation
          <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
        </Link>
      </Button>
    </div>
  </div>
);

/** Thin sticky bar on phones so booking is always one tap away on long guides. */
export const StickyConsultBar = () => (
  <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 backdrop-blur px-4 py-2 flex items-center justify-between gap-3">
    <span className="text-xs text-muted-foreground leading-tight">Online consultation, 30 min, £45</span>
    <Button asChild size="sm" className="btn-luxury text-primary-foreground">
      <Link to="/booking">Book now</Link>
    </Button>
  </div>
);

export default ConsultCTA;
