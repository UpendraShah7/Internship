import { useFormContext } from 'react-hook-form';
import { FormSelect } from '../../../shared/component/form';
import RegistrationStep, {
  type RegistrationWizardStepProps,
} from '../RegistrationStep';
import type { RegistrationFormData } from '../schemas/registrationSchema';

const StepThree = ({ signalParent }: RegistrationWizardStepProps) => {
  const { control } = useFormContext<RegistrationFormData>();
  return (
    <RegistrationStep signalParent={signalParent}>
      <FormSelect
        name="paymentMethod"
        control={control}
        label="Payment Method"
        options={[
          { label: 'Card', value: 'card' },
          { label: 'Cash on Delivery', value: 'cod' },
        ]}
      />
    </RegistrationStep>
  );
};

export default StepThree;
