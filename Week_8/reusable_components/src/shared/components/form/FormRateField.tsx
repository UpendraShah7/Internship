import type { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import type { FieldValues, Path } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "name">;

export function FormRateField<T extends FieldValues>({ name, label, ...rest }: Props<T>) {
  const { register } = useFormContext<T>();

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          id={name}
          type="number"
          min={0}
          max={100}
          step="0.01"
          {...register(name, { valueAsNumber: true })}
          {...rest}
        />
        <span>%</span>
      </div>
    </div>
  );
}