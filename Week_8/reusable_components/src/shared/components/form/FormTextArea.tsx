import type { TextareaHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import type { FieldValues, Path } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name">;

export function FormTextarea<T extends FieldValues>({ name, label, ...rest }: Props<T>) {
  const { register } = useFormContext<T>();

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} rows={4} {...register(name)} {...rest} />
    </div>
  );
}