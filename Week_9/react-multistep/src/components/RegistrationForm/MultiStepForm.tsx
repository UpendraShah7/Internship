import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as MultiStepModule from 'react-multistep';

import { fullSchema } from './schemas/registrationSchema';
import type { RegistrationFormData } from './schemas/registrationSchema';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';

const MultiStep = (
  MultiStepModule.default as unknown as {
    default: typeof MultiStepModule.default;
  }
).default;

const MultiStepForm = () => {
  const [formKey, setFormKey] = useState(0);

  const methods = useForm<RegistrationFormData>({
    resolver: zodResolver(fullSchema),
    mode: 'onTouched',
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = (data: RegistrationFormData) => {
    console.log('Form submitted:', data);
    reset();
    setFormKey((key) => key + 1);
  };

  return (
    <FormProvider {...methods}>
      <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
        <MultiStep key={formKey}>
          <StepOne title="Personal" />
          <StepTwo title="Address" />
          <StepThree title="Payment" />
        </MultiStep>
      </form>
    </FormProvider>
  );
};

export default MultiStepForm;
