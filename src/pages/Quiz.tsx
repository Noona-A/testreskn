import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const questions = [
  { id: "oiliness", question: "How does your skin feel by midday?", options: ["Very oily", "Slightly shiny in T-zone", "Comfortable", "Tight or dry"] },
  { id: "breakouts", question: "How often do you experience breakouts?", options: ["Frequently", "Sometimes", "Rarely", "Never"] },
  { id: "sensitivity", question: "Does your skin react to new products?", options: ["Yes, often", "Sometimes", "Rarely", "Never"] },
  { id: "redness", question: "Do you experience persistent redness?", options: ["Yes, significantly", "Some areas", "Occasionally", "No"] },
  { id: "pigmentation", question: "Do you have dark spots or uneven tone?", options: ["Yes, noticeably", "A few spots", "Minor", "No"] },
  { id: "ingrowns", question: "Do you get ingrown hairs from shaving/waxing?", options: ["Frequently", "Sometimes", "Rarely", "Never"] },
  { id: "goal", question: "What's your main skin goal?", options: ["Clear skin", "Even tone", "Calm sensitivity", "Smooth texture", "Anti-ageing"] },
  { id: "routine", question: "How consistent is your skincare routine?", options: ["Very consistent", "Mostly", "Sometimes", "What routine?"] },
];

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const navigate = useNavigate();

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = { ...answers, [questions[step].id]: optionIndex };
    setAnswers(newAnswers);
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      let profile = "combination";
      if (newAnswers.oiliness === 0 && newAnswers.breakouts <= 1) profile = "oily-acne";
      else if (newAnswers.sensitivity <= 1 || newAnswers.redness <= 1) profile = "sensitive-redness";
      else if (newAnswers.pigmentation <= 1) profile = "pigmentation";
      else if (newAnswers.oiliness >= 2 && newAnswers.breakouts >= 2) profile = "dry-dehydrated";
      
      navigate(`/quiz/results?profile=${profile}`);
    }
  };

  const progress = ((step + 1) / questions.length) * 100;
  const current = questions[step];

  return (
    <div className="pt-24 pb-16 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <Progress value={progress} className="mb-8 h-2" />
        <p className="text-sm text-muted-foreground mb-2">Question {step + 1} of {questions.length}</p>
        <h1 className="font-serif text-2xl md:text-3xl mb-8">{current.question}</h1>
        <div className="space-y-3">
          {current.options.map((option, i) => (
            <Button key={i} variant="outline" className="w-full justify-start text-left h-auto py-4 px-6" onClick={() => handleAnswer(i)}>
              {option}
            </Button>
          ))}
        </div>
        {step > 0 && (
          <Button variant="ghost" className="mt-6" onClick={() => setStep(step - 1)}>Back</Button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
