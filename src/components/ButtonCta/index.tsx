import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
}

export function ButtonCta({ href, children }: ButtonProps) {
  return (
    <Link href={href}>
      <button className="py-3 px-5 rounded-md text-secondary-800 text-lg font-bold uppercase bg-secondary-400 hover:bg-secondary-500 transition duration-200">
        {children}
      </button>
    </Link>
  );
}
