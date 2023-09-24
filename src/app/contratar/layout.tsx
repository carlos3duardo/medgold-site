import { ReactNode } from 'react';
import { Banner } from '@/components';
import { ShoppingSteps } from '@/components/ShoppingSteps';

export default function ShoppingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Banner />
      <div className="container mx-auto py-16">
        <div className="flex w-full gap-12">
          <div className="w-full lg:max-w-[280px]">
            <ShoppingSteps />
          </div>
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </>
  );
}
