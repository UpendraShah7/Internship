import { Controller } from 'react-hook-form';
import type { Control, FieldValues, Path } from 'react-hook-form';

interface FormTextFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  type?: string;
  autoComplete?: string;
}

const FormTextField = <T extends FieldValues>({
  name,
  control,
  label,
  type = 'text',
  autoComplete,
}: FormTextFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="field-group">
          <label className="field-label" htmlFor={name}>
            {label}
          </label>
          <input
            id={name}
            className="field-control"
            {...field}
            value={field.value ?? ''}
            type={type}
            autoComplete={autoComplete}
          />
          {fieldState.error && (
            <p className="field-error" role="alert">
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default FormTextField;
