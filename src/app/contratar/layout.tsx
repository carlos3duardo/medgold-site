import { ReactNode } from 'react';
import { Banner } from '@/components';
import { ShoppingSteps } from '@/components/ShoppingSteps';

export default function ShoppingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Banner />
      <div className="container mx-auto py-16">
        <div className="flex flex-col first-line lg:flex-row w-full gap-12">
          <div className="w-full lg:max-w-[280px] px-4 lg:px-0">
            <ShoppingSteps />
          </div>
          <div className="flex-1 px-4 lg:px-0">{children}</div>
        </div>
      </div>
    </>
  );
}
