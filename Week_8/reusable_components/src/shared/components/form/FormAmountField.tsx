import type { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import type { FieldValues, Path } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  currency?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "name">;

export function FormAmountField<T extends FieldValues>({
  name,
  label,
  currency = "Rs.",
  ...rest
}: Props<T>) {
  const { register } = useFormContext<T>();

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <span>{currency}</span>
        <input
          id={name}
          type="number"
          min={0}
          step="0.01"
          {...register(name, { valueAsNumber: true })}
          {...rest}
        />
      </div>
    </div>
  );
}