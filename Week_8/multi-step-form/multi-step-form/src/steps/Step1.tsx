import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { step1Schema, type Step1Data } from '../schemas/stepSchema';
import { useFormStore } from '../store/useFormStore';
import { FormTextField } from '../shared/components/form';

export function Step1() {
  const { data, setData, nextStep } = useFormStore();

  const { control, handleSubmit } = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: { name: data.name ?? '', email: data.email ?? '' },
  });

  const onNext = (values: Step1Data) => {
    setData(values);
    nextStep();
  };

  return (
    <form className="multi-step-form" onSubmit={handleSubmit(onNext)}>
      <FormTextField name="name" control={control} label="Name" />
      <FormTextField name="email" control={control} label="Email" />
      <div className="button-row single-button">
        <button type="submit">Next</button>
      </div>
    </form>
  );
}
