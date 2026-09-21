import type { SelectHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import type { FieldValues, Path } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  options: { label: string; value: string | number }[];
  placeholder?: string;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "name">;

export function FormSelect<T extends FieldValues>({
  name,
  label,
  options,
  placeholder = "Select...",
  ...rest
}: Props<T>) {
  const { register } = useFormContext<T>();

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select id={name} {...register(name)} {...rest}>
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}