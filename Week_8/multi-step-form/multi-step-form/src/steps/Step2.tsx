import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { step2Schema, type Step2Data } from '../schemas/stepSchema';
import { useFormStore } from '../store/useFormStore';
import { FormTextField, FormSelect } from '../shared/components/form';

const cityOptions = [
  { label: 'Kathmandu', value: 'kathmandu' },
  { label: 'Bhaktapur', value: 'bhaktapur' },
  { label: 'Lalitpur', value: 'lalitpur' },
];

interface Step2Props {
  title?: string;
  signalParent?: (state: { isValid: boolean; goto?: number }) => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

export function Step2({ signalParent, onNext, onPrevious }: Step2Props) {
  const { data, setData } = useFormStore();

  const { control, watch, formState } = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    mode: 'onChange',
    defaultValues: { address: data.address ?? '', city: data.city ?? '' },
  });

  useEffect(() => {
    signalParent?.({ isValid: formState.isValid, goto: 2 });
  }, [formState.isValid, signalParent]);

  useEffect(() => {
    const subscription = watch((values) => setData(values));
    return () => subscription.unsubscribe();
  }, [watch, setData]);

  return (
    <form>
      <FormTextField name="address" control={control} label="Address" />
      <FormSelect
        name="city"
        control={control}
        label="City"
        options={cityOptions}
      />
      <div className="button-row">
        <button type="button" className="secondary" onClick={onPrevious}>
          Back
        </button>
        <button type="button" onClick={onNext} disabled={!formState.isValid}>
          Next
        </button>
      </div>
    </form>
  );
}
