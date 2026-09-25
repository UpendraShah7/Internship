import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { step3Schema, type Step3Data } from '../schemas/stepSchema';
import { useFormStore } from '../store/useFormStore';
import { FormTextField } from '../shared/components/form';

export function Step3() {
  const { data, prevStep, reset } = useFormStore();

  const { control, handleSubmit } = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      cardNumber: data.cardNumber ?? '',
      expiry: data.expiry ?? '',
    },
  });

  const onSubmit = (values: Step3Data) => {
    const finalPayload = { ...data, ...values };
    console.log('Final submission:', finalPayload);
    reset();
  };

  return (
    <form className="multi-step-form" onSubmit={handleSubmit(onSubmit)}>
      <FormTextField name="cardNumber" control={control} label="Card Number" />
      <FormTextField name="expiry" control={control} label="Expiry (MM/YY)" />
      <div className="button-row">
        <button type="button" className="secondary" onClick={prevStep}>
          Back
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
