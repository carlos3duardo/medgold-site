import Link from 'next/link';
import { ComponentProps, ReactNode } from 'react';

type ButtonProps = ComponentProps<'button'> & {
  href?: string;
  children: ReactNode;
};

export function ButtonCta({ href, children, ...rest }: ButtonProps) {
  if (href) {
    <Link href={href}>
      <button
        className="py-3 px-5 rounded-md text-secondary-800 text-lg font-bold uppercase bg-secondary-400 hover:bg-secondary-500 transition duration-200"
        {...rest}
      >
        {children}
      </button>
    </Link>;
  }
  return (
    <button
      className="py-3 px-5 rounded-md text-secondary-800 text-lg font-bold uppercase bg-secondary-400 hover:bg-secondary-500 transition duration-200"
      {...rest}
    >
      {children}
    </button>
  );
}
