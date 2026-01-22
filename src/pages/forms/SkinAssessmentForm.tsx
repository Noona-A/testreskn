import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FitzpatrickQuestionComponent from '@/components/forms/FitzpatrickQuestion';
import { fitzpatrickQuestions, calculateFitzpatrickType, FitzpatrickResult } from '@/lib/fitzpatrickScoring';
import { generateReferenceId, sendSkinAssessmentEmail } from '@/lib/emailService';
import { AlertTriangle, CheckCircle2, Loader2 } from 'lucide-react';

const SkinAssessmentForm: React.FC = () => {
  const navigate = useNavigate();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string>('');

  // Patient Details (simplified for skin assessment only)
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [ethnicBackground, setEthnicBackground] = useState('');

  // Fitzpatrick Scores
  const [fitzpatrickScores, setFitzpatrickScores] = useState<Record<string, number>>({});

  // Calculate Fitzpatrick result
  const fitzpatrickResult: FitzpatrickResult | null = useMemo(() => {
    const answeredQuestions = Object.keys(fitzpatrickScores).length;
    if (answeredQuestions === 0) return null;
    return calculateFitzpatrickType(fitzpatrickScores);
  }, [fitzpatrickScores]);

  // Validation
  const isFormValid = useMemo(() => {
    return (
      fullName.trim() !== '' &&
      email.trim() !== '' &&
      Object.keys(fitzpatrickScores).length === fitzpatrickQuestions.length
    );
  }, [fullName, email, fitzpatrickScores]);

  // Group Fitzpatrick questions by category
  const groupedFitzpatrickQuestions = useMemo(() => {
    const groups: Record<string, typeof fitzpatrickQuestions> = {};
    fitzpatrickQuestions.forEach(q => {
      if (!groups[q.category]) {
        groups[q.category] = [];
      }
      groups[q.category].push(q);
    });
    return groups;
  }, []);

  const handleSubmit = async () => {
    if (!isFormValid || !fitzpatrickResult) return;

    setIsSubmitting(true);
    setSubmissionError(null);

    const submittedAt = new Date().toLocaleString('en-GB', {
      dateStyle: 'full',
      timeStyle: 'long',
    });
    const refId = generateReferenceId('SA');

    const result = await sendSkinAssessmentEmail({
      referenceId: refId,
      submittedAt,
      fullName,
      email,
      ethnicBackground,
      fitzpatrickScores,
      fitzpatrickResult,
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
          description="Your skin assessment form has been submitted successfully."
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
                  Your skin assessment has been submitted successfully. A copy has been sent to your email address.
                </p>
                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-muted-foreground">Reference ID</p>
                  <p className="text-lg font-mono font-semibold text-foreground">{referenceId}</p>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
                  <p className="text-sm font-medium text-foreground mb-1">Your Fitzpatrick Skin Type</p>
                  <p className="text-2xl font-bold text-primary">{fitzpatrickResult?.type}</p>
                  <p className="text-sm text-muted-foreground mt-1">{fitzpatrickResult?.description}</p>
                </div>
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
        title="Skin Assessment Form | ReSKN Clinic"
        description="Complete your Fitzpatrick skin type assessment. This helps us determine safe and effective laser settings for your treatment."
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-accent to-background py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Skin Assessment Form
              </h1>
              <p className="text-muted-foreground">
                This Fitzpatrick questionnaire helps us determine your skin type to ensure safe and effective laser settings for your treatment.
              </p>
            </div>
          </div>
        </section>

        {/* Form Content */}
        <div className="container mx-auto px-4 pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto space-y-8">
            
            {/* Basic Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif">Your Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ethnicBackground">Ethnic Background (Optional)</Label>
                  <Input
                    id="ethnicBackground"
                    value={ethnicBackground}
                    onChange={(e) => setEthnicBackground(e.target.value)}
                    placeholder="Optional"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Fitzpatrick Questions by Category */}
            {Object.entries(groupedFitzpatrickQuestions).map(([category, questions]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="text-lg font-serif">{category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {questions.map((question) => (
                    <FitzpatrickQuestionComponent
                      key={question.id}
                      question={question}
                      value={fitzpatrickScores[question.id]}
                      onChange={(score) => setFitzpatrickScores({ ...fitzpatrickScores, [question.id]: score })}
                    />
                  ))}
                </CardContent>
              </Card>
            ))}

            {/* Live Results */}
            {fitzpatrickResult && (
              <Card className="border-primary/30 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-xl font-serif">Your Fitzpatrick Result</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Total Score</p>
                      <p className="text-3xl font-bold text-primary">{fitzpatrickResult.totalScore}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Skin Type</p>
                      <p className="text-3xl font-bold text-primary">{fitzpatrickResult.type}</p>
                    </div>
                    <div className="md:col-span-1 md:text-left">
                      <p className="text-sm text-muted-foreground mb-1">Description</p>
                      <p className="text-sm font-medium">{fitzpatrickResult.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

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
                  'Submit Skin Assessment'
                )}
              </Button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default SkinAssessmentForm;
