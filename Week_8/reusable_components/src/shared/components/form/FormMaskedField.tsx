import type { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import type { FieldValues, Path } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  mask: string; // "#" = one digit, other characters stay as they are
} & Omit<InputHTMLAttributes<HTMLInputElement>, "name">;

function applyMask(value: string, mask: string) {
  const digits = value.replace(/\D/g, "");
  let result = "";
  let i = 0;
  for (const char of mask) {
    if (i >= digits.length) break;
    result += char === "#" ? digits[i++] : char;
  }
  return result;
}

export function FormMaskedField<T extends FieldValues>({
  name,
  label,
  mask,
  ...rest
}: Props<T>) {
  const { register } = useFormContext<T>();
  const field = register(name);

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        placeholder={mask.replace(/#/g, "_")}
        maxLength={mask.length}
        {...rest}
        {...field}
        onChange={(e) => {
          e.target.value = applyMask(e.target.value, mask);
          field.onChange(e);
        }}
      />
    </div>
  );
}