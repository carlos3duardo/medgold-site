import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type FormSeparatorProps = ComponentProps<'div'>;

export function FormSeparator({ className, ...rest }: FormSeparatorProps) {
  return (
    <div
      className={twMerge('h-[1px] bg-slate-300 mt-4 mb-4', className)}
      {...rest}
    />
  );
}
