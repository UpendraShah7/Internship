import { useEffect, type ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { useMultiStep, type SignalParent } from 'react-multistep';

import { stepFields } from './constants/stepFields';
import type { RegistrationFormData } from './schemas/registrationSchema';

export interface RegistrationWizardStepProps {
  signalParent?: SignalParent;
  title?: ReactNode;
}

interface RegistrationStepProps extends RegistrationWizardStepProps {
  children: ReactNode;
}

const RegistrationStep = ({
  children,
  signalParent,
}: RegistrationStepProps) => {
  const { activeStep, stepCount, steps, next, previous } = useMultiStep();
  const { trigger } = useFormContext<RegistrationFormData>();

  useEffect(() => {
    signalParent?.({ isValid: true });
  }, [signalParent]);

  const goNext = async () => {
    if (await trigger(stepFields[activeStep])) next();
  };

  return (
    <>
      <div className="step-indicator" aria-label="Registration progress">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-item ${activeStep === index ? 'is-active' : ''} ${activeStep > index ? 'is-complete' : ''}`}
            aria-current={activeStep === index ? 'step' : undefined}
          >
            <span className="step-number">{index + 1}</span>
            <span>{step.title}</span>
          </div>
        ))}
      </div>

      {children}

      <div className="form-actions">
        <button
          className="button button-secondary"
          type="button"
          onClick={previous}
          disabled={activeStep === 0}
        >
          Back
        </button>

        {activeStep < stepCount - 1 ? (
          <button
            className="button button-primary"
            type="button"
            onClick={goNext}
          >
            Next
          </button>
        ) : (
          <button className="button button-primary" type="submit">
            Submit
          </button>
        )}
      </div>
    </>
  );
};

export default RegistrationStep;
