import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const PrescriptionAcne = () => (
  <div className="pt-16 pb-16">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="font-serif text-4xl mb-6">Prescription Acne Pathway</h1>
      <p className="text-xl text-muted-foreground mb-4">20 minutes • £35</p>
      <p className="text-muted-foreground mb-8">Clinician assessment for prescription-strength treatments when over-the-counter options aren't enough.</p>
      
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex gap-3">
        <AlertTriangle className="text-amber-600 flex-shrink-0" />
        <div className="text-sm text-amber-800">
          <p className="font-medium mb-1">Important Information</p>
          <p>Antibiotics are prescribed for limited periods following stewardship guidelines. Regular follow-ups ensure treatment effectiveness and safety.</p>
        </div>
      </div>

      <Button asChild className="btn-luxury text-primary-foreground">
        <a href="https://app.cal.eu/resknclinic/prescription-acne-assessment" target="_blank" rel="noopener noreferrer">Book Assessment</a>
      </Button>
    </div>
  </div>
);

export default PrescriptionAcne;
