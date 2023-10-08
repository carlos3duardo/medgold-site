'use client';
import { ComponentProps, FormEvent, ReactNode } from 'react';

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
  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    if (onSubmit) {
      onSubmit(evt);
    }
  };

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
