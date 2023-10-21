import iconeEconomia from '@/assets/images/ponto-positivo-economia.png';
import iconeBeneficios from '@/assets/images/ponto-positivo-parceiros.png';

import Image, { StaticImageData } from 'next/image';
import { ButtonCta } from '../ButtonCta';

type PontoPositivoProps = {
  icone: StaticImageData;
  titulo: string;
  descricao: string;
};

export function PontosPositivos() {
  const beneficios = [
    {
      icone: iconeEconomia,
      titulo: 'Mais economia para você',
      descricao:
        'Use quantas vezes quiser, sem pagar mais por isso. É mais economia para você e sua família.',
    },
    {
      icone: iconeBeneficios,
      titulo: 'Mais de 200 benefícios em saúde e lazer',
      descricao:
        'Acesse medgold.com.br e obtenha descontos em laboratórios, cinemas, restaurantes, lojas de departamentos e outros.',
    },
  ] as PontoPositivoProps[];

  return (
    <section className="pt-20 pb-20 bg-white text-primary-600">
      <div className="container mx-auto flex flex-col gap-12">
        <h2 className="text-[3.25rem] leading-tight font-extrabold text-center">
          Pontos positivos MedGold
        </h2>

        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full mx-auto">
          {beneficios.map((item) => (
            <li
              key={item.descricao}
              className="bg-primary-600 text-white p-8 rounded-lg flex gap-8 items-center"
            >
              <Image
                src={item.icone}
                width={96}
                height={96}
                alt={`Icone representando o benefício ${item.descricao}`}
              />
              <div className="text-lg font-bold leading-tight">
                <h3 className="text-xl">{item.titulo}</h3>
                <p className="font-medium text-primary-200">{item.descricao}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="text-center">
          <a href="#contrate">
            <ButtonCta>Quero contratar agora</ButtonCta>
          </a>
        </div>
      </div>
    </section>
  );
}
