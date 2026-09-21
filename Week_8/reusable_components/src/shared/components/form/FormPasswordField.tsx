import type { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import type { FieldValues, Path } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "name">;

export function FormPasswordField<T extends FieldValues>({ name, label, ...rest }: Props<T>) {
  const { register } = useFormContext<T>();

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} type="password" {...register(name)} {...rest} />
    </div>
  );
}