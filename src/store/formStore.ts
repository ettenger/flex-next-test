import { create } from "zustand";

type FormStore = {
  form: Record<string, any>;
  update: (updates: Record<string, any>) => void;
  clear: () => void;
};

export const useFormStore = create<FormStore>((set) => ({
  form: {},
  update: (updates) =>
    set((prevState) => ({ form: { ...prevState.form, ...updates } })),
  clear: () => set({ form: {} }),
}));
