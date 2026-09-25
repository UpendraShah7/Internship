import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { fullFormSchema, type FullFormData } from '../schemas/formSchema';
import { step3Schema, type Step3Data } from '../schemas/stepSchema';
import { useFormStore } from '../store/useFormStore';
import { FormTextField } from '../shared/components/form';

interface Step3Props {
  title?: string;
  signalParent?: (state: { isValid: boolean; goto?: number }) => void;
  onPrevious?: () => void;
  onComplete?: (values: FullFormData) => void;
}

export function Step3({ signalParent, onPrevious, onComplete }: Step3Props) {
  const { data, setData } = useFormStore();

  const { control, watch, formState, handleSubmit } = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    mode: 'onChange',
    defaultValues: {
      cardNumber: data.cardNumber ?? '',
      expiry: data.expiry ?? '',
    },
  });

  useEffect(() => {
    signalParent?.({ isValid: formState.isValid });
  }, [formState.isValid, signalParent]);

  useEffect(() => {
    const subscription = watch((values) => setData(values));
    return () => subscription.unsubscribe();
  }, [watch, setData]);

  const onFinish = handleSubmit((values) => {
    const finalPayload = fullFormSchema.parse({ ...data, ...values });
    onComplete?.(finalPayload);
  });

  return (
    <form>
      <FormTextField name="cardNumber" control={control} label="Card Number" />
      <FormTextField name="expiry" control={control} label="Expiry (MM/YY)" />
      <div className="button-row">
        <button type="button" className="secondary" onClick={onPrevious}>
          Back
        </button>
        <button type="button" onClick={onFinish} disabled={!formState.isValid}>
          Submit
        </button>
      </div>
    </form>
  );
}
