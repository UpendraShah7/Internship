import { useFormContext } from "react-hook-form";
import type { FieldValues, Path } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  options: { label: string; value: string }[];
};

export function FormRadioGroup<T extends FieldValues>({ name, label, options }: Props<T>) {
  const { register } = useFormContext<T>();

  return (
    <div>
      <p>{label}</p>
      <div>
        {options.map((o) => (
          <label key={o.value}>
            <input type="radio" value={o.value} {...register(name)} />
            {o.label}
          </label>
        ))}
      </div>
    </div>
  );
}