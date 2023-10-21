import { ButtonCta } from '@/components/ButtonCta';
import Image from 'next/image';

import imgPasso1 from '@/assets/images/como-se-cadastrar-passo-1.png';
import imgPasso2 from '@/assets/images/como-se-cadastrar-passo-2.png';
import imgPasso3 from '@/assets/images/como-se-cadastrar-passo-3.png';

export function ComoSeCadastrar() {
  return (
    <section className="pt-20 pb-20 bg-primary-600 text-white" id="como">
      <div className="container mx-auto flex flex-col gap-12">
        <h2 className="text-2xl lg:text-[3.25rem] leading-tight font-extrabold text-center">
          Como se cadastrar
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center gap-4">
            <figure>
              <Image src={imgPasso1} width={432} height={263} alt="Passo 1" />
            </figure>
            <div className="text-center text-xl font-bold px-4">
              Clique no botão <br />
              &quot;
              <span className="text-secondary-400">quero contratar agora</span>
              &quot;
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <figure>
              <Image src={imgPasso2} width={432} height={263} alt="Passo 2" />
            </figure>
            <div className="text-center text-xl font-bold px-4">
              Escolha o plano para você ou para toda família
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <figure>
              <Image src={imgPasso3} width={432} height={263} alt="Passo 3" />
            </figure>
            <div className="text-center text-xl font-bold px-4">
              Preencha seus dados e garanta mais saúde
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="#contrate">
            <ButtonCta>Quero contratar agora</ButtonCta>
          </a>
        </div>
      </div>
    </section>
  );
}
