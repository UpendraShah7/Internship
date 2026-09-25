import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";
import { FormFieldWrapper } from "./FormFieldWrapper";

interface Option {
  label: string;
  value: string;
}

interface FormSelectProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  options: Option[];
}

export function FormSelect<T extends FieldValues>({
  name,
  control,
  label,
  options,
}: FormSelectProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormFieldWrapper label={label} error={fieldState.error?.message}>
          <select {...field}>
            <option value="">Select...</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </FormFieldWrapper>
      )}
    />
  );
}