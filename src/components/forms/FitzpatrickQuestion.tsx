import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { FitzpatrickQuestion as FitzpatrickQuestionType } from '@/lib/fitzpatrickScoring';
import { cn } from '@/lib/utils';

interface FitzpatrickQuestionProps {
  question: FitzpatrickQuestionType;
  value: number | undefined;
  onChange: (score: number) => void;
  className?: string;
}

const FitzpatrickQuestionComponent: React.FC<FitzpatrickQuestionProps> = ({
  question,
  value,
  onChange,
  className,
}) => {
  return (
    <div className={cn("space-y-3 p-4 bg-muted/30 rounded-lg", className)}>
      <Label className="text-sm font-medium text-foreground leading-relaxed">
        {question.question}
      </Label>
      
      <RadioGroup
        value={value !== undefined ? String(value) : undefined}
        onValueChange={(val) => onChange(Number(val))}
        className="space-y-2"
      >
        {question.options.map((option, index) => (
          <div key={index} className="flex items-center space-x-3">
            <RadioGroupItem 
              value={String(option.score)} 
              id={`${question.id}-${index}`} 
            />
            <Label 
              htmlFor={`${question.id}-${index}`} 
              className="font-normal cursor-pointer text-sm leading-relaxed"
            >
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FitzpatrickQuestionComponent;
