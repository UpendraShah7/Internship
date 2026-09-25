// store/useFormStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type FullFormData } from "../schemas/formSchema";

interface FormStoreState {
  data: Partial<FullFormData>;
  setData: (values: Partial<FullFormData>) => void;
  reset: () => void;
}

export const useFormStore = create<FormStoreState>()(
  persist(
    (set) => ({
      data: {},
      setData: (values) =>
        set((state) => ({ data: { ...state.data, ...values } })),
      reset: () => set({ data: {} }),
    }),
    { name: "multi-step-form-storage" }
  )
);