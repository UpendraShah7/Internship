import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { step1Schema, type Step1Data } from '../schemas/stepSchema';
import { useFormStore } from '../store/useFormStore';
import { FormTextField } from '../shared/components/form';

interface Step1Props {
  title?: string;
  signalParent?: (state: { isValid: boolean; goto?: number }) => void;
  onNext?: () => void;
}

export function Step1({ signalParent, onNext }: Step1Props) {
  const { data, setData } = useFormStore();

  const { control, watch, formState } = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    mode: 'onChange',
    defaultValues: { name: data.name ?? '', email: data.email ?? '' },
  });

  useEffect(() => {
    signalParent?.({ isValid: formState.isValid, goto: 1 });
  }, [formState.isValid, signalParent]);

  useEffect(() => {
    const subscription = watch((values) => setData(values));
    return () => subscription.unsubscribe(); 
  }, [watch, setData]);

  return (
    <form>
      <FormTextField name="name" control={control} label="Name" />
      <FormTextField name="email" control={control} label="Email" />
      <div className="button-row">
        <button type="button" onClick={onNext} disabled={!formState.isValid}>
          Next
        </button>
      </div>
    </form>
  );
}
