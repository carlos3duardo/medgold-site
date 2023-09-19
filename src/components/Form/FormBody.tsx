'use client';
import {
  ComponentProps,
  FormEvent,
  ReactNode,
  useContext,
  useEffect,
} from 'react';
import { FormContext } from './FormContext';

type FormProps = ComponentProps<'form'> & {
  method?: 'post' | 'get';
  isSubmitting?: boolean;
  children: ReactNode;
};

export function FormBody({
  method = 'post',
  onSubmit,
  isSubmitting = false,
  children,
  ...rest
}: FormProps) {
  const { formIsSubmitting } = useContext(FormContext);

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    if (onSubmit) {
      onSubmit(evt);
    }
  };

  useEffect(() => {
    formIsSubmitting(isSubmitting);
  }, [formIsSubmitting, isSubmitting]);

  return (
    <form
      method={method}
      className="w-full flex flex-col gap-4"
      onSubmit={handleSubmitForm}
      {...rest}
    >
      {children}
    </form>
  );
}
