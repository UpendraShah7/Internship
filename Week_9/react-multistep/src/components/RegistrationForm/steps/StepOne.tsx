import { useFormContext } from 'react-hook-form';
import { FormTextField } from '../../../shared/component/form';
import RegistrationStep, {
  type RegistrationWizardStepProps,
} from '../RegistrationStep';
import type { RegistrationFormData } from '../schemas/registrationSchema';

const StepOne = ({ signalParent }: RegistrationWizardStepProps) => {
  const { control } = useFormContext<RegistrationFormData>();
  return (
    <RegistrationStep signalParent={signalParent}>
      <FormTextField
        name="fullName"
        control={control}
        label="Full Name"
        autoComplete="name"
      />
      <FormTextField
        name="email"
        control={control}
        label="Email"
        type="email"
        autoComplete="email"
      />
    </RegistrationStep>
  );
};

export default StepOne;
