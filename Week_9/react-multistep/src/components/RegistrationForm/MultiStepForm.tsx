import { useState, type ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as MultiStepModule from 'react-multistep';

import { fullSchema } from './schemas/registrationSchema';
import type { RegistrationFormData } from './schemas/registrationSchema';
import {
  createRegistration,
  updateRegistration,
  type Registration,
} from './api/registrationApi';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';

const MultiStep = (
  MultiStepModule.default as unknown as {
    default: typeof MultiStepModule.default;
  }
).default;

interface MultiStepFormProps {
  onSaved: () => void;
  headerAction?: ReactNode;
  registrationId?: string;
  initialData?: Registration;
}

const MultiStepForm = ({
  onSaved,
  headerAction,
  registrationId,
  initialData,
}: MultiStepFormProps) => {
  const [submitError, setSubmitError] = useState<string | null>(null);

  const methods = useForm<RegistrationFormData>({
    resolver: zodResolver(fullSchema),
    mode: 'onTouched',
    defaultValues: initialData,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      if (registrationId) {
        await updateRegistration(registrationId, data);
      } else {
        await createRegistration(data);
      }
      setSubmitError(null);
      onSaved();
    } catch {
      setSubmitError('Failed to save registration.');
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
        {headerAction && (
          <div className="registration-form-header">{headerAction}</div>
        )}
        <MultiStep>
          <StepOne title="Personal" />
          <StepTwo title="Address" />
          <StepThree title="Payment" />
        </MultiStep>
        {submitError && <p>{submitError}</p>}
      </form>
    </FormProvider>
  );
};

export default MultiStepForm;
