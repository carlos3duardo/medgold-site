import Image from 'next/image';

import imagem from '@/assets/images/telemedicina-o-que-e.png';

import { ButtonCta } from '../ButtonCta';

export function Telemedicina() {
  return (
    <section className="py-20 bg-slate-50 relative" id="o-que-e">
      <div className="absolute top-0 left-0 w-full h-full">
        <ul className="circles absolute top-0 left-0 w-full h-full overflow-hidden">
          <li
            className="absolute block list-none bg-primary-600/20 animate-backgroundTelemedicina bottom-[-150px] left-[25%] w-[80px] h-[80px]"
            style={{ animationDelay: '0' }}
          />
          <li
            className="absolute block list-none bg-primary-600/20 animate-backgroundTelemedicina bottom-[-150px] left-[10%] w-[42px] h-[42px]"
            style={{ animationDelay: '2s', animationDuration: '12s' }}
          />
          <li
            className="absolute block list-none bg-primary-600/20 animate-backgroundTelemedicina bottom-[-150px] left-[70%] w-[20px] h-[20px]"
            style={{ animationDelay: '4s' }}
          />
          <li
            className="absolute block list-none bg-primary-600/20 animate-backgroundTelemedicina bottom-[-150px] left-[40%] w-[60px] h-[60px]"
            style={{ animationDelay: '4s' }}
          />
          <li
            className="absolute block list-none bg-primary-600/60 animate-backgroundTelemedicina bottom-[-150px] left-[65%] w-[20px] h-[20px]"
            style={{ animationDelay: '0s', animationDuration: '15s' }}
          />
          <li
            className="absolute block list-none bg-primary-600/40 animate-backgroundTelemedicina bottom-[-150px] left-[75%] w-[110px] h-[110px]"
            style={{ animationDelay: '3s' }}
          />
          <li
            className="absolute block list-none bg-primary-600/20 animate-backgroundTelemedicina bottom-[-150px] left-[35%] w-[150px] h-[150px]"
            style={{ animationDelay: '7s' }}
          />
          <li
            className="absolute block list-none bg-primary-600/30 animate-backgroundTelemedicina bottom-[-150px] left-[50%] w-[25px] h-[25px]"
            style={{ animationDelay: '15s', animationDuration: '45s' }}
          />
          <li
            className="absolute block list-none bg-primary-600/20 animate-backgroundTelemedicina bottom-[-150px] left-[40%] w-[60px] h-[60px]"
            style={{ animationDelay: '4s' }}
          />
          <li
            className="absolute block list-none bg-primary-600/20 animate-backgroundTelemedicina bottom-[-150px] left-[20%] w-[15px] h-[15px]"
            style={{ animationDelay: '2s', animationDuration: '35s' }}
          />
          <li
            className="absolute block list-none bg-primary-600/50 animate-backgroundTelemedicina bottom-[-150px] left-[85%] w-[150px] h-[150px]"
            style={{ animationDelay: '2s', animationDuration: '11s' }}
          />
        </ul>
      </div>
      <div className="relative container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
          <figure className="flex-[42%] lg:flex lg:justify-center">
            <Image
              src={imagem}
              width={451}
              height={666}
              alt="Smartphone com um médico na tela"
            />
          </figure>
          <div className="flex-[58%] flex flex-col gap-8">
            <h2 className="text-[3.25rem] leading-tight text-primary-600 font-extrabold uppercase">
              O que é telemedicina?
            </h2>
            <p className="text-[2.25rem] leading-tight text-primary-800 font-semibold">
              São consultas médicas à distância, feitas por vídeo, de qualquer
              lugar que tenha internet.
            </p>
            <p>
              <a href="#contrate">
                <ButtonCta>Quero contratar agora!</ButtonCta>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
