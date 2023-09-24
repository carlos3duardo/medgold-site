import Image from 'next/image';

import imagem from '@/assets/images/telemedicina-o-que-e.png';

import { ButtonCta } from '../ButtonCta';

export function Telemedicina() {
  return (
    <section
      className="py-20 bg-red-100"
      style={{
        backgroundImage: 'url("images/background-sun-tornado.svg")',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <div className="container mx-auto">
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
              <ButtonCta href="#planos">Quero contratar agora!</ButtonCta>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
