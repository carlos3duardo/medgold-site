import icone24hs from '@/assets/images/beneficio-24hs.png';
import iconeComodidade from '@/assets/images/beneficio-comodidade.png';
import iconeDiagnostico from '@/assets/images/beneficio-diagnosticos.png';
import iconeEspecialistas from '@/assets/images/beneficio-especialistas.png';
import iconeReducaoDeCusto from '@/assets/images/beneficio-reducao-de-custos.png';
import iconeSemExposicao from '@/assets/images/beneficio-sem-exposicao.png';

import Image, { StaticImageData } from 'next/image';
import { ButtonCta } from '../ButtonCta';

type BeneficioProps = {
  icone: StaticImageData;
  descricao: string;
};

export function Beneficios() {
  const beneficios = [
    {
      icone: iconeEspecialistas,
      descricao: 'Acesso ampliado à especialistas',
    },
    {
      icone: iconeComodidade,
      descricao: 'Comodidade e conveniência para pacientes',
    },
    {
      icone: iconeReducaoDeCusto,
      descricao: 'Redução de custos',
    },
    {
      icone: iconeSemExposicao,
      descricao: 'Sem exposição a infecções',
    },
    {
      icone: iconeDiagnostico,
      descricao: 'Diagnósticos mais rápidos',
    },
    {
      icone: icone24hs,
      descricao: 'Disponível 24hrs por dia, 7 dias por semana',
    },
  ] as BeneficioProps[];

  return (
    <section className="pt-20 pb-20 bg-primary-600 text-white">
      <div className="container mx-auto flex flex-col gap-12">
        <h2 className="text-[3.25rem] leading-tight font-extrabold text-center">
          Benefícios da telemedicina
        </h2>

        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full max-w-[64rem] mx-auto">
          {beneficios.map((item) => (
            <li
              key={item.descricao}
              className="bg-white text-primary-600 p-8 rounded-lg flex flex-col items-center justify-start shadow-lg"
            >
              <Image
                src={item.icone}
                width={96}
                height={96}
                alt={`Icone representando o benefício ${item.descricao}`}
              />
              <div className="text-center mt-8 text-lg font-bold leading-tight">
                {item.descricao}
              </div>
            </li>
          ))}
        </ul>
        <div className="text-center">
          <ButtonCta href="#planos">Quero contratar agora</ButtonCta>
        </div>
      </div>
    </section>
  );
}
