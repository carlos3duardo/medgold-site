'use client';
import Image from 'next/image';
import logo from '@/assets/images/header-logo-medgold.png';
import { menu } from './menu';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [solidBg, setSolidBg] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;

    setSolidBg(position > 240);

    console.info({ position });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      data-solid-background={solidBg}
      className="fixed top-0 left-0 w-full z-10 transition-all duration-[600ms] data-[solid-background=true]:bg-white data-[solid-background=true]:shadow-md"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-10">
          <figure>
            <Link href="/">
              <Image
                src={logo}
                width={184}
                height={54}
                alt="Logotipo MedGold"
                data-solid-background={solidBg}
                className="brightness-0 invert data-[solid-background=true]:brightness-100 data-[solid-background=true]:invert-0"
              />
            </Link>
          </figure>
          <div role="navigation" className="flex gap-2 items-center">
            {menu.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-solid-background={solidBg}
                className="relative py-2 px-3 font-semibold text-sm text-white uppercase transition z-[1] hover:text-primary-600 after:content-[''] after:opacity-25 after:block after:h-[1px] after:absolute after:bottom-0 after:left-[1rem] after:right-[1rem] after:bg-white after:transition-all after:origin-bottom after:z-[-1] hover:after:right-0 hover:after:left-0 hover:after:h-full hover:after:rounded-sm hover:after:opacity-100 data-[solid-background=true]:text-primary-600 data-[solid-background=true]:after:bg-primary-600 data-[solid-background=true]:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
