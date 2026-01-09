import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft } from "lucide-react";
import { determineProfile, QuizAnswers } from "@/lib/quizScoring";

const questions = [
  { 
    id: "oiliness", 
    question: "How does your skin feel by midday?", 
    options: ["Very oily", "Slightly shiny in T-zone", "Comfortable", "Tight or dry"] 
  },
  { 
    id: "breakouts", 
    question: "How often do you experience breakouts?", 
    options: ["Frequently", "Sometimes", "Rarely", "Never"] 
  },
  { 
    id: "sensitivity", 
    question: "Does your skin react to new products?", 
    options: ["Yes, often", "Sometimes", "Rarely", "Never"] 
  },
  { 
    id: "redness", 
    question: "Do you experience persistent redness?", 
    options: ["Yes, significantly", "Some areas", "Occasionally", "No"] 
  },
  { 
    id: "pigmentation", 
    question: "Do you have dark spots or uneven tone?", 
    options: ["Yes, noticeably", "A few spots", "Minor", "No"] 
  },
  { 
    id: "ingrowns", 
    question: "Do you get ingrown hairs from shaving/waxing?", 
    options: ["Frequently", "Sometimes", "Rarely", "Never"] 
  },
  { 
    id: "goal", 
    question: "What's your main skin goal?", 
    options: ["Clear skin", "Even tone", "Calm sensitivity", "Smooth texture", "Anti-ageing"] 
  },
  { 
    id: "routine", 
    question: "How consistent is your skincare routine?", 
    options: ["Very consistent", "Mostly", "Sometimes", "What routine?"] 
  },
];

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = useCallback((optionIndex: number) => {
    if (isTransitioning) return;
    
    const newAnswers = { ...answers, [questions[step].id]: optionIndex };
    setAnswers(newAnswers);
    
    if (step < questions.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setStep(step + 1);
        setIsTransitioning(false);
      }, 200);
    } else {
      // Convert to QuizAnswers format
      const quizAnswers: QuizAnswers = {
        oiliness: newAnswers.oiliness ?? 2,
        breakouts: newAnswers.breakouts ?? 2,
        sensitivity: newAnswers.sensitivity ?? 2,
        redness: newAnswers.redness ?? 2,
        pigmentation: newAnswers.pigmentation ?? 2,
        ingrowns: newAnswers.ingrowns ?? 2,
        goal: newAnswers.goal ?? 0,
        routine: newAnswers.routine ?? 2,
      };
      
      const profile = determineProfile(quizAnswers);
      navigate(`/quiz/results?profile=${profile.key}`);
    }
  }, [answers, step, isTransitioning, navigate]);

  const handleBack = useCallback(() => {
    if (step > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setStep(step - 1);
        setIsTransitioning(false);
      }, 200);
    }
  }, [step, isTransitioning]);

  const progress = ((step + 1) / questions.length) * 100;
  const current = questions[step];

  return (
    <div className="pt-24 pb-16 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Progress Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">
              Question {step + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round(progress)}% complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <div 
          className={`card-luxury p-8 md:p-10 transition-all duration-200 ${
            isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
          }`}
        >
          <h1 className="font-serif text-2xl md:text-3xl mb-8 text-center">
            {current.question}
          </h1>
          
          <div className="space-y-3">
            {current.options.map((option, i) => {
              const isSelected = answers[current.id] === i;
              return (
                <Button
                  key={i}
                  variant="outline"
                  className={`w-full justify-start text-left h-auto py-4 px-6 transition-all duration-200 ${
                    isSelected 
                      ? 'border-primary bg-accent text-foreground' 
                      : 'hover:border-primary/50 hover:bg-accent/50'
                  }`}
                  onClick={() => handleAnswer(i)}
                >
                  <span className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isSelected ? 'border-primary bg-primary' : 'border-muted-foreground/30'
                    }`}>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-primary-foreground" />
                      )}
                    </span>
                    <span className="text-base">{option}</span>
                  </span>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Back Button */}
        {step > 0 && (
          <Button 
            variant="ghost" 
            className="mt-6 text-muted-foreground hover:text-foreground" 
            onClick={handleBack}
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back
          </Button>
        )}

        {/* Quiz Note */}
        <p className="text-xs text-center text-muted-foreground mt-8">
          Your answers help us understand your skin better. This quiz provides cosmetic guidance only.
        </p>
      </div>
    </div>
  );
};

export default Quiz;
