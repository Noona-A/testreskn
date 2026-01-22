import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

interface MedicalQuestionFieldProps {
  id: string;
  question: string;
  value: { answer: boolean; details?: string };
  onChange: (value: { answer: boolean; details?: string }) => void;
  detailsLabel?: string;
  showWarning?: boolean;
  warningMessage?: string;
  className?: string;
}

const MedicalQuestionField: React.FC<MedicalQuestionFieldProps> = ({
  id,
  question,
  value,
  onChange,
  detailsLabel = 'If yes, please provide details:',
  showWarning = false,
  warningMessage,
  className,
}) => {
  return (
    <div className={cn("space-y-3 p-4 bg-muted/30 rounded-lg", className)}>
      <Label className="text-sm font-medium text-foreground leading-relaxed">
        {question}
      </Label>
      
      <RadioGroup
        value={value.answer ? 'yes' : 'no'}
        onValueChange={(val) => onChange({ 
          answer: val === 'yes', 
          details: val === 'yes' ? value.details : undefined 
        })}
        className="flex gap-6"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="no" id={`${id}-no`} />
          <Label htmlFor={`${id}-no`} className="font-normal cursor-pointer">No</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="yes" id={`${id}-yes`} />
          <Label htmlFor={`${id}-yes`} className="font-normal cursor-pointer">Yes</Label>
        </div>
      </RadioGroup>

      {value.answer && (
        <div className="space-y-2 pt-2">
          <Label htmlFor={`${id}-details`} className="text-sm text-muted-foreground">
            {detailsLabel}
          </Label>
          <Textarea
            id={`${id}-details`}
            value={value.details || ''}
            onChange={(e) => onChange({ ...value, details: e.target.value })}
            placeholder="Please provide details..."
            className="min-h-[60px]"
          />
        </div>
      )}

      {showWarning && value.answer && warningMessage && (
        <div className="bg-destructive/10 border border-destructive/30 rounded-md p-3 mt-2">
          <p className="text-sm text-destructive font-medium">
            ⚠️ {warningMessage}
          </p>
        </div>
      )}
    </div>
  );
};

export default MedicalQuestionField;
