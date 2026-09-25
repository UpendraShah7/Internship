import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";
import { FormFieldWrapper } from "./FormFieldWrapper";

interface FormTextFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  placeholder?: string;
}

export function FormTextField<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
}: FormTextFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormFieldWrapper label={label} error={fieldState.error?.message}>
          <input {...field} placeholder={placeholder} />
        </FormFieldWrapper>
      )}
    />
  );
}