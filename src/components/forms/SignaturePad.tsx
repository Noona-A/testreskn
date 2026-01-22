import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SignaturePadProps {
  className?: string;
  onSignatureChange?: (hasSignature: boolean) => void;
}

export interface SignaturePadRef {
  clear: () => void;
  isEmpty: () => boolean;
  getSignatureDataUrl: () => string | null;
}

const SignaturePad = forwardRef<SignaturePadRef, SignaturePadProps>(
  ({ className, onSignatureChange }, ref) => {
    const signatureRef = useRef<SignatureCanvas>(null);

    useImperativeHandle(ref, () => ({
      clear: () => {
        signatureRef.current?.clear();
        onSignatureChange?.(false);
      },
      isEmpty: () => signatureRef.current?.isEmpty() ?? true,
      getSignatureDataUrl: () => {
        if (signatureRef.current?.isEmpty()) return null;
        return signatureRef.current?.getTrimmedCanvas().toDataURL('image/png') ?? null;
      },
    }));

    const handleClear = () => {
      signatureRef.current?.clear();
      onSignatureChange?.(false);
    };

    const handleEnd = () => {
      const isEmpty = signatureRef.current?.isEmpty() ?? true;
      onSignatureChange?.(!isEmpty);
    };

    return (
      <div className={cn("space-y-3", className)}>
        <div className="border-2 border-dashed border-border rounded-lg bg-white overflow-hidden">
          <SignatureCanvas
            ref={signatureRef}
            penColor="black"
            canvasProps={{
              className: 'w-full h-40 touch-none',
              style: { width: '100%', height: '160px' }
            }}
            onEnd={handleEnd}
          />
        </div>
        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleClear}
          >
            Clear Signature
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleClear}
          >
            Re-sign
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Draw your signature above using your mouse or finger (on touch devices)
        </p>
      </div>
    );
  }
);

SignaturePad.displayName = 'SignaturePad';

export default SignaturePad;
