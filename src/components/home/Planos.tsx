'use client';
import { useCallback, useContext } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ButtonCta } from '@/components/ButtonCta';
import { ShoppingContext } from '@/contexts';
import { OfertaProps } from '@/contexts/ShoppingContext';

export function Planos() {
  const router = useRouter();

  const { atualizarEtapa, atualizarOfertaId, ofertas } =
    useContext(ShoppingContext);

  const handleSelectPlano = useCallback(
    (oferta: OfertaProps) => {
      atualizarOfertaId(oferta.id);
      atualizarEtapa(1);

      router.push('/contratar');
    },
    [atualizarEtapa, atualizarOfertaId, router],
  );

  return (
    <section className="pt-20 pb-20 bg-primary-600 text-white" id="contrate">
      <div className="container mx-auto flex flex-col gap-12">
        <h2 className="text-[3.25rem] leading-tight font-extrabold text-center">
          Planos de assinatura MedGold Plus
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {ofertas ? (
            ofertas.map((oferta) => (
              <div key={oferta.id} className="flex flex-col justify-between">
                <figure className="relative w-full h-72 rounded-t-2xl overflow-hidden">
                  <Image
                    src={oferta.imageUrl}
                    fill={true}
                    sizes="(max-width: 768px) 288px, (max-width: 1200px) 288px, 288px"
                    style={{ objectFit: 'cover' }}
                    alt=""
                  />
                </figure>
                <div className="py-6 px-6 text-center bg-white text-primary-600 flex-1">
                  <h3 className="font-extrabold text-xl mb-2">{oferta.nome}</h3>
                  <p className="font-medium">{oferta.descricao}</p>
                </div>
                <div className="bg-primary-800 py-8 px-6 rounded-b-2xl overflow-hidden flex flex-col gap-6 items-center">
                  <div className="valor flex items-center justify-center gap-1">
                    <div className="self-start font-semibold text-lg leading-tight">
                      R$
                    </div>
                    <div className="font-extrabold text-4xl leading-none">
                      {new Intl.NumberFormat('pt-BR', {
                        minimumFractionDigits: 2,
                      }).format(oferta.valor)}
                    </div>
                    <div className="align-center font-semibold text-lg leading-none">
                      por
                      <br />
                      mês
                    </div>
                  </div>
                  <div>
                    <ButtonCta onClick={() => handleSelectPlano(oferta)}>
                      contratar
                    </ButtonCta>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Erro ao exibir ofertas</div>
          )}
        </div>
      </div>
    </section>
  );
}
