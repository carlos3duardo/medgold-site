'use client';
import { ReactNode, createContext, useState } from 'react';

export type FormLayout = 'grid' | 'horizontal';

interface FormContextProps {
  isSubmitting: boolean;
  formIsSubmitting: (state: boolean) => void;
}

export const FormContext = createContext({} as FormContextProps);

interface FormProviderProps {
  children: ReactNode;
}

export function FormProvider({ children }: FormProviderProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function formIsSubmitting(state: boolean) {
    setIsSubmitting(state);
  }

  return (
    <FormContext.Provider
      value={{
        isSubmitting,
        formIsSubmitting,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
