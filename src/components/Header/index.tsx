import logo from '@/assets/images/header-logo-medgold.png';
import Image from 'next/image';

type NavItem = {
  href: string;
  label: string;
};

export function Header() {
  const menu = [
    {
      href: '#o-que-e',
      label: 'O que é',
    },
    {
      href: '#beneficios',
      label: 'Benefícios',
    },
    {
      href: '#como',
      label: 'Como',
    },
    {
      href: '#cartao-digital',
      label: 'Cartão Digital',
    },
    {
      href: '#contrate',
      label: 'Contrate agora',
    },
  ] as NavItem[];
  return (
    <header className="fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-10">
          <figure>
            <Image
              src={logo}
              width={184}
              height={54}
              alt="Logotipo MedGold"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </figure>
          <div role="navigation" className="flex gap-2 items-center">
            {menu.map((item) => (
              <a
                key={item.href}
                className="relative py-2 px-3 font-semibold text-sm text-white uppercase transition z-[1] hover:text-primary-600 after:content-[''] after:opacity-25 after:block after:h-[1px] after:absolute after:bottom-0 after:left-[1rem] after:right-[1rem] after:bg-white after:transition-all after:origin-bottom after:z-[-1] hover:after:right-0 hover:after:left-0 hover:after:h-full hover:after:rounded-sm hover:after:opacity-100"
                href={item.href}
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
