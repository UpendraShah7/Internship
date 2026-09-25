import { useState } from 'react';
import { type FullFormData } from './schemas/formSchema';
import { Step1 } from './steps/Step1';
import { Step2 } from './steps/Step2';
import { Step3 } from './steps/Step3';
import { useFormStore } from './store/useFormStore';

export function MultiStepForm() {
  const [activeStep, setActiveStep] = useState(0);
  const resetForm = useFormStore((state) => state.reset);

  const handleComplete = (values: FullFormData) => {
    console.log('Final submission:', values);
    resetForm();
    setActiveStep(0);
  };

  if (activeStep === 0) {
    return <Step1 onNext={() => setActiveStep(1)} />;
  }

  if (activeStep === 1) {
    return (
      <Step2
        onNext={() => setActiveStep(2)}
        onPrevious={() => setActiveStep(0)}
      />
    );
  }

  return (
    <Step3 onPrevious={() => setActiveStep(1)} onComplete={handleComplete} />
  );
}
