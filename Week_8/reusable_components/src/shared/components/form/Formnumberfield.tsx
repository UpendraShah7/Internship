import type { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import type { FieldValues, Path } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "name">;

export function FormNumberField<T extends FieldValues>({ name, label, ...rest }: Props<T>) {
  const { register } = useFormContext<T>();

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} type="number" {...register(name, { valueAsNumber: true })} {...rest} />
    </div>
  );
}