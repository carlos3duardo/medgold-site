'use client';
import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { FieldError } from 'react-hook-form';

type FormControlProps = ComponentProps<'div'> & {
  children: ReactNode;
  error?: FieldError;
};

export function FormControl({ children, className }: FormControlProps) {
  return (
    <div className={twMerge('col-span-12', className)}>
      <div role="group" className="flex flex-col">
        {children}
      </div>
    </div>
  );
}
