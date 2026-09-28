import { useFormContext } from 'react-hook-form';
import { FormTextField } from '../../../shared/component/form';
import RegistrationStep from '../RegistrationStep';

import type { RegistrationFormData } from '../schemas/registrationSchema';
import type { RegistrationWizardStepProps } from '../RegistrationStep';

const StepTwo = ({ signalParent }: RegistrationWizardStepProps) => {
  const { control } = useFormContext<RegistrationFormData>();
  return (
    <RegistrationStep signalParent={signalParent}>
      <FormTextField
        name="address"
        control={control}
        label="Address"
        autoComplete="street-address"
      />
      <FormTextField
        name="city"
        control={control}
        label="City"
        autoComplete="address-level2"
      />
    </RegistrationStep>
  );
};

export default StepTwo;
