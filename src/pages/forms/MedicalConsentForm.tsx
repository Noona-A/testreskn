import React, { useState, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SignaturePad, { SignaturePadRef } from '@/components/forms/SignaturePad';
import MedicalQuestionField from '@/components/forms/MedicalQuestionField';
import { 
  PatientDetails, 
  MedicalScreening, 
  LaserSafety, 
  TreatmentDetails, 
  ConsentData,
  SignatureData,
  generateReferenceId,
  sendMedicalConsentEmail 
} from '@/lib/emailService';
import { AlertTriangle, CheckCircle2, Loader2 } from 'lucide-react';

const TREATMENT_AREAS = [
  'Face', 'Neck', 'Underarms', 'Bikini', 'Legs', 'Arms', 'Back', 'Chest'
];

const HAIR_REMOVAL_METHODS = [
  'Shaving', 'Hair removal cream', 'Waxing', 'Epilator', 'Threading'
];

const MedicalConsentForm: React.FC = () => {
  const navigate = useNavigate();
  const signatureRef = useRef<SignaturePadRef>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string>('');
  const [hasSignature, setHasSignature] = useState(false);

  const [patientDetails, setPatientDetails] = useState<PatientDetails>({
    fullName: '',
    dateOfBirth: '',
    email: '',
    mobile: '',
    address: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
  });

  const [medicalScreening, setMedicalScreening] = useState<MedicalScreening>({
    pregnantOrBreastfeeding: { answer: false },
    diabetes: { answer: false },
    epilepsy: { answer: false },
    autoimmune: { answer: false },
    photosensitivity: { answer: false },
    keloidScarring: { answer: false },
    skinConditions: { answer: false },
    vitiligo: { answer: false },
    herpesSimplex: { answer: false },
    skinCancer: { answer: false },
    hormonalConditions: { answer: false },
    otherConditions: '',
  });

  const [medications, setMedications] = useState('');
  const [allergies, setAllergies] = useState('');

  const [laserSafety, setLaserSafety] = useState<LaserSafety>({
    isotretinoin: { answer: false },
    sunExposure: { answer: false },
    fakeTan: { answer: false },
    waxingEpilating: { answer: false },
    recentTreatments: { answer: false },
    brokenSkin: { answer: false },
    tattoos: { answer: false },
    pacemaker: { answer: false },
    anticoagulants: { answer: false },
    pigmentationChanges: { answer: false },
  });

  const [treatmentDetails, setTreatmentDetails] = useState<TreatmentDetails>({
    patchTestAreas: [],
    otherArea: '',
    previousLaser: { answer: false },
    recentHairRemoval: [],
  });

  const [consent, setConsent] = useState<ConsentData>({
    accurateInfo: false,
    understandsPatchTest: false,
    followsAftercare: false,
    understandsPostponement: false,
  });

  const [signatureTypedName, setSignatureTypedName] = useState('');
  const [signatureConsent, setSignatureConsent] = useState(false);

  // Check for safety warnings
  const hasWarnings = useMemo(() => {
    return (
      medicalScreening.pregnantOrBreastfeeding.answer ||
      laserSafety.isotretinoin.answer ||
      laserSafety.sunExposure.answer ||
      laserSafety.fakeTan.answer ||
      laserSafety.brokenSkin.answer
    );
  }, [medicalScreening, laserSafety]);

  // Validation
  const isFormValid = useMemo(() => {
    return (
      patientDetails.fullName.trim() !== '' &&
      patientDetails.dateOfBirth !== '' &&
      patientDetails.email.trim() !== '' &&
      patientDetails.mobile.trim() !== '' &&
      treatmentDetails.patchTestAreas.length > 0 &&
      consent.accurateInfo &&
      consent.understandsPatchTest &&
      consent.followsAftercare &&
      consent.understandsPostponement &&
      hasSignature &&
      signatureTypedName.trim() !== '' &&
      signatureConsent
    );
  }, [patientDetails, treatmentDetails, consent, hasSignature, signatureTypedName, signatureConsent]);

  const handleSubmit = async () => {
    if (!isFormValid) return;

    setIsSubmitting(true);
    setSubmissionError(null);

    const signatureImage = signatureRef.current?.getSignatureDataUrl() || '';
    const submittedAt = new Date().toLocaleString('en-GB', {
      dateStyle: 'full',
      timeStyle: 'long',
    });
    const refId = generateReferenceId('MC');

    const signatureData: SignatureData = {
      signatureImage,
      typedName: signatureTypedName,
      signedAt: submittedAt,
      consentConfirmed: signatureConsent,
    };

    const result = await sendMedicalConsentEmail({
      referenceId: refId,
      submittedAt,
      patientDetails,
      medicalScreening,
      medications,
      allergies,
      laserSafety,
      treatmentDetails,
      consent,
      signature: signatureData,
    });

    setIsSubmitting(false);

    if (result.success) {
      setReferenceId(refId);
      setIsSubmitted(true);
      window.scrollTo(0, 0);
    } else {
      setSubmissionError(result.error || 'Failed to submit form. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
      <>
        <SEO 
          title="Form Submitted | ReSKN Clinic"
          description="Your medical consent form has been submitted successfully."
        />
        <div className="min-h-screen bg-background">
          <div className="container mx-auto px-4 py-12 md:py-20">
            <Card className="max-w-lg mx-auto text-center">
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Thank You
                </h1>
                <p className="text-muted-foreground mb-6">
                  Your medical consent form has been submitted successfully. A copy has been sent to your email address.
                </p>
                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-muted-foreground">Reference ID</p>
                  <p className="text-lg font-mono font-semibold text-foreground">{referenceId}</p>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Please save this reference number for your records. Our team will review your submission and contact you if needed.
                </p>
                <Button onClick={() => navigate('/')} className="w-full">
                  Return to Home
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title="Medical Consent Form | ReSKN Clinic"
        description="Complete your medical consent form for laser hair removal. Required for safety screening before your treatment."
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-accent to-background py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Medical Consent Form
              </h1>
              <p className="text-muted-foreground">
                Please complete this form before your appointment. All information is kept confidential and used solely for treatment planning and safety.
              </p>
            </div>
          </div>
        </section>

        {/* Warning Banner */}
        {hasWarnings && (
          <div className="container mx-auto px-4 py-4">
            <div className="max-w-3xl mx-auto">
              <Card className="border-amber-500/50 bg-amber-50 dark:bg-amber-950/30">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-1">
                        Important Safety Notice
                      </h3>
                      <p className="text-sm text-amber-700 dark:text-amber-300">
                        Based on your responses, treatment may need to be postponed or modified. We'll review your form and contact you to discuss your options before your appointment.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Form Content */}
        <div className="container mx-auto px-4 pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto space-y-8">
            
            {/* Patient Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif">Patient Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={patientDetails.fullName}
                      onChange={(e) => setPatientDetails({ ...patientDetails, fullName: e.target.value })}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth *</Label>
                    <Input
                      id="dob"
                      type="date"
                      value={patientDetails.dateOfBirth}
                      onChange={(e) => setPatientDetails({ ...patientDetails, dateOfBirth: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={patientDetails.email}
                      onChange={(e) => setPatientDetails({ ...patientDetails, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number *</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      value={patientDetails.mobile}
                      onChange={(e) => setPatientDetails({ ...patientDetails, mobile: e.target.value })}
                      placeholder="07xxx xxxxxx"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address (Optional)</Label>
                  <Input
                    id="address"
                    value={patientDetails.address}
                    onChange={(e) => setPatientDetails({ ...patientDetails, address: e.target.value })}
                    placeholder="Your address"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyName">Emergency Contact Name (Optional)</Label>
                    <Input
                      id="emergencyName"
                      value={patientDetails.emergencyContactName}
                      onChange={(e) => setPatientDetails({ ...patientDetails, emergencyContactName: e.target.value })}
                      placeholder="Contact name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyPhone">Emergency Contact Phone (Optional)</Label>
                    <Input
                      id="emergencyPhone"
                      type="tel"
                      value={patientDetails.emergencyContactPhone}
                      onChange={(e) => setPatientDetails({ ...patientDetails, emergencyContactPhone: e.target.value })}
                      placeholder="Contact phone"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Medical Screening */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif">Medical Screening</CardTitle>
                <p className="text-sm text-muted-foreground">Please answer the following questions honestly for your safety.</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <MedicalQuestionField
                  id="pregnant"
                  question="Are you pregnant or breastfeeding?"
                  value={medicalScreening.pregnantOrBreastfeeding}
                  onChange={(val) => setMedicalScreening({ ...medicalScreening, pregnantOrBreastfeeding: val })}
                  showWarning
                  warningMessage="Laser treatment may not be suitable during pregnancy or breastfeeding. Please contact us before attending."
                />
                <MedicalQuestionField
                  id="diabetes"
                  question="Do you have diabetes?"
                  value={medicalScreening.diabetes}
                  onChange={(val) => setMedicalScreening({ ...medicalScreening, diabetes: val })}
                />
                <MedicalQuestionField
                  id="epilepsy"
                  question="Do you have epilepsy?"
                  value={medicalScreening.epilepsy}
                  onChange={(val) => setMedicalScreening({ ...medicalScreening, epilepsy: val })}
                />
                <MedicalQuestionField
                  id="autoimmune"
                  question="Do you have any autoimmune condition(s)?"
                  value={medicalScreening.autoimmune}
                  onChange={(val) => setMedicalScreening({ ...medicalScreening, autoimmune: val })}
                />
                <MedicalQuestionField
                  id="photosensitivity"
                  question="Do you have photosensitivity or light sensitivity?"
                  value={medicalScreening.photosensitivity}
                  onChange={(val) => setMedicalScreening({ ...medicalScreening, photosensitivity: val })}
                />
                <MedicalQuestionField
                  id="keloid"
                  question="Do you have a history of keloid scarring?"
                  value={medicalScreening.keloidScarring}
                  onChange={(val) => setMedicalScreening({ ...medicalScreening, keloidScarring: val })}
                />
                <MedicalQuestionField
                  id="skinConditions"
                  question="Do you have eczema, psoriasis, or dermatitis in the treatment area?"
                  value={medicalScreening.skinConditions}
                  onChange={(val) => setMedicalScreening({ ...medicalScreening, skinConditions: val })}
                />
                <MedicalQuestionField
                  id="vitiligo"
                  question="Do you have vitiligo?"
                  value={medicalScreening.vitiligo}
                  onChange={(val) => setMedicalScreening({ ...medicalScreening, vitiligo: val })}
                />
                <MedicalQuestionField
                  id="herpes"
                  question="Do you have herpes simplex (cold sores)?"
                  value={medicalScreening.herpesSimplex}
                  onChange={(val) => setMedicalScreening({ ...medicalScreening, herpesSimplex: val })}
                />
                <MedicalQuestionField
                  id="skinCancer"
                  question="Have you ever had skin cancer?"
                  value={medicalScreening.skinCancer}
                  onChange={(val) => setMedicalScreening({ ...medicalScreening, skinCancer: val })}
                />
                <MedicalQuestionField
                  id="hormonal"
                  question="Do you have any hormonal conditions (e.g., PCOS)?"
                  value={medicalScreening.hormonalConditions}
                  onChange={(val) => setMedicalScreening({ ...medicalScreening, hormonalConditions: val })}
                />
                
                <div className="space-y-2 pt-2">
                  <Label htmlFor="otherConditions">Other medical conditions we should know about:</Label>
                  <Textarea
                    id="otherConditions"
                    value={medicalScreening.otherConditions}
                    onChange={(e) => setMedicalScreening({ ...medicalScreening, otherConditions: e.target.value })}
                    placeholder="Please list any other relevant medical conditions..."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Medications & Allergies */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif">Medications & Allergies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="medications">Current medications (including topical creams, supplements):</Label>
                  <Textarea
                    id="medications"
                    value={medications}
                    onChange={(e) => setMedications(e.target.value)}
                    placeholder="List all current medications..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="allergies">Known allergies:</Label>
                  <Textarea
                    id="allergies"
                    value={allergies}
                    onChange={(e) => setAllergies(e.target.value)}
                    placeholder="List any known allergies..."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Laser Safety */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif">Laser Safety / Contraindications</CardTitle>
                <p className="text-sm text-muted-foreground">These factors may affect your suitability for laser treatment.</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <MedicalQuestionField
                  id="isotretinoin"
                  question="Have you taken isotretinoin (Roaccutane) in the last 6-12 months?"
                  value={laserSafety.isotretinoin}
                  onChange={(val) => setLaserSafety({ ...laserSafety, isotretinoin: val })}
                  detailsLabel="Please specify when you stopped taking it:"
                  showWarning
                  warningMessage="Laser treatment should be avoided for 6-12 months after stopping isotretinoin."
                />
                <MedicalQuestionField
                  id="sunExposure"
                  question="Have you had significant sun exposure or used sunbeds in the last 2-4 weeks?"
                  value={laserSafety.sunExposure}
                  onChange={(val) => setLaserSafety({ ...laserSafety, sunExposure: val })}
                  showWarning
                  warningMessage="Recent sun exposure increases the risk of adverse reactions. Treatment may need to be postponed."
                />
                <MedicalQuestionField
                  id="fakeTan"
                  question="Do you currently have fake tan on, or have used it within the last 2 weeks?"
                  value={laserSafety.fakeTan}
                  onChange={(val) => setLaserSafety({ ...laserSafety, fakeTan: val })}
                  showWarning
                  warningMessage="Fake tan must be completely removed before treatment."
                />
                <MedicalQuestionField
                  id="waxing"
                  question="Have you waxed, epilated, or threaded the treatment area in the last 4 weeks?"
                  value={laserSafety.waxingEpilating}
                  onChange={(val) => setLaserSafety({ ...laserSafety, waxingEpilating: val })}
                />
                <MedicalQuestionField
                  id="recentTreatments"
                  question="Have you had any chemical peels, microneedling, laser, or IPL treatments in the last 4 weeks?"
                  value={laserSafety.recentTreatments}
                  onChange={(val) => setLaserSafety({ ...laserSafety, recentTreatments: val })}
                />
                <MedicalQuestionField
                  id="brokenSkin"
                  question="Do you have broken skin, irritation, infection, or an active cold sore in the treatment area?"
                  value={laserSafety.brokenSkin}
                  onChange={(val) => setLaserSafety({ ...laserSafety, brokenSkin: val })}
                  showWarning
                  warningMessage="Treatment cannot be performed on broken or irritated skin."
                />
                <MedicalQuestionField
                  id="tattoos"
                  question="Do you have any tattoos or permanent makeup in the treatment area?"
                  value={laserSafety.tattoos}
                  onChange={(val) => setLaserSafety({ ...laserSafety, tattoos: val })}
                />
                <MedicalQuestionField
                  id="pacemaker"
                  question="Do you have a pacemaker or any other implanted electronic device?"
                  value={laserSafety.pacemaker}
                  onChange={(val) => setLaserSafety({ ...laserSafety, pacemaker: val })}
                />
                <MedicalQuestionField
                  id="anticoagulants"
                  question="Are you taking anticoagulants or do you have a bleeding disorder?"
                  value={laserSafety.anticoagulants}
                  onChange={(val) => setLaserSafety({ ...laserSafety, anticoagulants: val })}
                />
                <MedicalQuestionField
                  id="pigmentation"
                  question="Have you experienced pigmentation changes after previous skin treatments?"
                  value={laserSafety.pigmentationChanges}
                  onChange={(val) => setLaserSafety({ ...laserSafety, pigmentationChanges: val })}
                />
              </CardContent>
            </Card>

            {/* Treatment Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif">Treatment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Areas for treatment (select all that apply) *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {TREATMENT_AREAS.map((area) => (
                      <div key={area} className="flex items-center space-x-2">
                        <Checkbox
                          id={`area-${area}`}
                          checked={treatmentDetails.patchTestAreas.includes(area)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setTreatmentDetails({
                                ...treatmentDetails,
                                patchTestAreas: [...treatmentDetails.patchTestAreas, area],
                              });
                            } else {
                              setTreatmentDetails({
                                ...treatmentDetails,
                                patchTestAreas: treatmentDetails.patchTestAreas.filter((a) => a !== area),
                              });
                            }
                          }}
                        />
                        <Label htmlFor={`area-${area}`} className="font-normal cursor-pointer">
                          {area}
                        </Label>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2 pt-2">
                    <Label htmlFor="otherArea">Other area:</Label>
                    <Input
                      id="otherArea"
                      value={treatmentDetails.otherArea}
                      onChange={(e) => setTreatmentDetails({ ...treatmentDetails, otherArea: e.target.value })}
                      placeholder="Specify other treatment area..."
                    />
                  </div>
                </div>

                <MedicalQuestionField
                  id="previousLaser"
                  question="Have you had laser hair removal treatment before?"
                  value={treatmentDetails.previousLaser}
                  onChange={(val) => setTreatmentDetails({ ...treatmentDetails, previousLaser: val })}
                  detailsLabel="Please describe your previous treatment experience:"
                />

                {treatmentDetails.previousLaser.answer && (
                  <div className="space-y-2 pl-4 border-l-2 border-muted">
                    <Label htmlFor="adverseReactions">Did you experience any adverse reactions?</Label>
                    <Textarea
                      id="adverseReactions"
                      value={treatmentDetails.previousLaser.adverseReactions || ''}
                      onChange={(e) => setTreatmentDetails({
                        ...treatmentDetails,
                        previousLaser: { ...treatmentDetails.previousLaser, adverseReactions: e.target.value },
                      })}
                      placeholder="Describe any adverse reactions..."
                    />
                  </div>
                )}

                <div className="space-y-3">
                  <Label>Recent hair removal methods used:</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {HAIR_REMOVAL_METHODS.map((method) => (
                      <div key={method} className="flex items-center space-x-2">
                        <Checkbox
                          id={`method-${method}`}
                          checked={treatmentDetails.recentHairRemoval.includes(method)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setTreatmentDetails({
                                ...treatmentDetails,
                                recentHairRemoval: [...treatmentDetails.recentHairRemoval, method],
                              });
                            } else {
                              setTreatmentDetails({
                                ...treatmentDetails,
                                recentHairRemoval: treatmentDetails.recentHairRemoval.filter((m) => m !== method),
                              });
                            }
                          }}
                        />
                        <Label htmlFor={`method-${method}`} className="font-normal cursor-pointer">
                          {method}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Consent */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif">Consent</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent1"
                    checked={consent.accurateInfo}
                    onCheckedChange={(checked) => setConsent({ ...consent, accurateInfo: !!checked })}
                  />
                  <Label htmlFor="consent1" className="font-normal cursor-pointer leading-relaxed">
                    I confirm the information I have provided is accurate to the best of my knowledge. *
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent2"
                    checked={consent.understandsPatchTest}
                    onCheckedChange={(checked) => setConsent({ ...consent, understandsPatchTest: !!checked })}
                  />
                  <Label htmlFor="consent2" className="font-normal cursor-pointer leading-relaxed">
                    I understand a patch test is required for safety prior to laser hair removal. *
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent3"
                    checked={consent.followsAftercare}
                    onCheckedChange={(checked) => setConsent({ ...consent, followsAftercare: !!checked })}
                  />
                  <Label htmlFor="consent3" className="font-normal cursor-pointer leading-relaxed">
                    I agree to follow aftercare advice and report any adverse reactions. *
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent4"
                    checked={consent.understandsPostponement}
                    onCheckedChange={(checked) => setConsent({ ...consent, understandsPostponement: !!checked })}
                  />
                  <Label htmlFor="consent4" className="font-normal cursor-pointer leading-relaxed">
                    I understand ReSKN Clinic may advise postponement if my answers indicate it is unsafe to proceed. *
                  </Label>
                </div>

                {/* Privacy Notice */}
                <div className="bg-muted/50 rounded-lg p-4 mt-4">
                  <p className="text-xs text-muted-foreground">
                    I consent to ReSKN Clinic using the information provided for treatment planning, safety screening, and communication regarding my appointment.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Signature */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif">Electronic Signature</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signatureName">Type your full name *</Label>
                  <Input
                    id="signatureName"
                    value={signatureTypedName}
                    onChange={(e) => setSignatureTypedName(e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Draw your signature below *</Label>
                  <SignaturePad 
                    ref={signatureRef}
                    onSignatureChange={setHasSignature}
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="signatureConsent"
                    checked={signatureConsent}
                    onCheckedChange={(checked) => setSignatureConsent(!!checked)}
                  />
                  <Label htmlFor="signatureConsent" className="font-normal cursor-pointer leading-relaxed">
                    I confirm this is my electronic signature and that I consent to the above. *
                  </Label>
                </div>
              </CardContent>
            </Card>

            {/* Error Message */}
            {submissionError && (
              <Card className="border-destructive/50 bg-destructive/5">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-destructive mb-1">Submission Error</h3>
                      <p className="text-sm text-destructive/90">{submissionError}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Submit Button */}
            <div className="pt-4">
              <Button 
                onClick={handleSubmit} 
                disabled={!isFormValid || isSubmitting}
                size="lg"
                className="w-full"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Medical Consent Form'
                )}
              </Button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalConsentForm;
