'use client';
import { ComponentProps, ReactNode } from 'react';

type FieldsetProps = ComponentProps<'fieldset'> & {
  children: ReactNode;
};

export function FormFieldset({ children, ...rest }: FieldsetProps) {
  return (
    <fieldset className="grid grid-cols-12 gap-8" {...rest}>
      {children}
    </fieldset>
  );
}
