'use client';
import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type FooterProps = ComponentProps<'div'> & {
  children: ReactNode;
};

export function FormFooter({ children, className, ...rest }: FooterProps) {
  return (
    <div className={twMerge('', className)} {...rest}>
      {children}
    </div>
  );
}
