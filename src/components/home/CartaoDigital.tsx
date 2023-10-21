import Image from 'next/image';

import imagem from '@/assets/images/cartao-digital.png';
import { ButtonCta } from '../ButtonCta';

export function CartaoDigital() {
  return (
    <section className="mt-20 mb-20 px-4" id="cartao-digital">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
          <figure className="flex-[50%] lg:flex lg:justify-center px-8 lg:px-4">
            <Image
              src={imagem}
              width={636}
              height={597}
              alt="Smartphone exibindo o cartão digital e logotipos de parceiros"
            />
          </figure>
          <div className="flex-[50%] flex flex-col gap-8 mt-6 lg:mt-0">
            <h2 className="text-2xl lg:text-[3.25rem] leading-none text-primary-600 font-extrabold">
              O cartão digital
              <br />
              MedGold
              <span className="block text-xl lg:text-[2.25rem] mt-2 lg:mt-6 leading-none">
                permite descontos em uma grande rede nacional de parceiros
              </span>
            </h2>
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
