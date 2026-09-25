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

export function Step2() {
  const { data, setData, nextStep, prevStep } = useFormStore();

  const { control, handleSubmit } = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: { address: data.address ?? '', city: data.city ?? '' },
  });

  const onNext = (values: Step2Data) => {
    setData(values);
    nextStep();
  };

  return (
    <form className="multi-step-form" onSubmit={handleSubmit(onNext)}>
      <FormTextField name="address" control={control} label="Address" />
      <FormSelect
        name="city"
        control={control}
        label="City"
        options={cityOptions}
      />
      <div className="button-row">
        <button type="button" className="secondary" onClick={prevStep}>
          Back
        </button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
}
