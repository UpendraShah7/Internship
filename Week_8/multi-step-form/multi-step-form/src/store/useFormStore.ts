import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type FullFormData } from "../schemas/formSchema";

interface FormStoreState {
  data: Partial<FullFormData>;
  step: number;
  setData: (values: Partial<FullFormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
}

export const useFormStore = create<FormStoreState>()(
  persist(
    (set) => ({
      data: {},
      step: 0,
      setData: (values) =>
        set((state) => ({ data: { ...state.data, ...values } })),
      nextStep: () => set((state) => ({ step: state.step + 1 })),
      prevStep: () => set((state) => ({ step: state.step - 1 })),
      reset: () => set({ data: {}, step: 0 }),
    }),
    { name: "multi-step-form-storage" }
  )
);