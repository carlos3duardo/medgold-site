'use client';
import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type FieldsetProps = ComponentProps<'fieldset'> & {
  children: ReactNode;
};

export function FormFieldset({ children, className, ...rest }: FieldsetProps) {
  return (
    <fieldset
      className={twMerge('grid grid-cols-12 gap-8', className)}
      {...rest}
    >
      {children}
    </fieldset>
  );
}
