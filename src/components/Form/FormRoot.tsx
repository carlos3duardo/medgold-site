import { ReactNode } from 'react';
import { FormProvider } from './FormContext';

interface FormRootProps {
  children: ReactNode;
}

export function FormRoot({ children }: FormRootProps) {
  return <FormProvider>{children}</FormProvider>;
}
