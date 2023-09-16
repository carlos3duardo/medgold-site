import Image from 'next/image';

import imagem from '@/assets/images/cartao-digital.png';
import { ButtonCta } from '../ButtonCta';

export function CartaoDigital() {
  return (
    <section className="mt-20 mb-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
          <figure className="flex-[50%] lg:flex lg:justify-center">
            <Image
              src={imagem}
              width={636}
              height={597}
              alt="Smartphone exibindo o cartão digital e logotipos de parceiros"
            />
          </figure>
          <div className="flex-[50%] flex flex-col gap-8">
            <h2 className="text-[3.25rem] leading-tight text-primary-600 font-extrabold">
              O cartão digital
              <br />
              MedGold
              <span className="block text-[2.25rem] mt-6">
                permite descontos em uma grande rede nacional de parceiros
              </span>
            </h2>
            <p>
              <ButtonCta href="#planos">Quero contratar agora!</ButtonCta>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
