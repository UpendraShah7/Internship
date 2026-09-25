import { type ReactNode } from "react";

interface FormFieldWrapperProps {
  label?: string;
  error?: string;
  children: ReactNode;
}

export function FormFieldWrapper({ label, error, children }: FormFieldWrapperProps) {
  return (
    <div className="form-field">
      {label && <label>{label}</label>}
      {children}
      {error && <p className="form-field-error">{error}</p>}
    </div>
  );
}