import { Step1 } from './steps/Step1';
import { Step2 } from './steps/Step2';
import { Step3 } from './steps/Step3';
import { useFormStore } from './store/useFormStore';



export function MultiStepForm() {
  const step = useFormStore((s) => s.step);

  return (
    <div className="app-shell">
      <div className="form-card">
        <div className="step-header">
          <p className="eyebrow">Registration</p>
          <p className="step-indicator">Step {step + 1} / 3</p>
        </div>
        {step === 0 && <Step1 />}
        {step === 1 && <Step2 />}
        {step === 2 && <Step3 />}
      </div>
    </div>
  );
}



