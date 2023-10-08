'use client';
import { useContext, useEffect, useState } from 'react';
import { ShoppingContext } from '@/contexts';
import { ChevronsRight, CopyCheck, Smile, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/Button';
import { OfertaProps } from '@/contexts/ShoppingContext';

export function DependentesHeader() {
  const { ofertaId, ofertas, atualizarEtapa, atualizarOfertaId } =
    useContext(ShoppingContext);
  const [oferta, setOferta] = useState<OfertaProps | undefined>(undefined);

  const [proximoPlano, setProximoPlano] = useState<OfertaProps | undefined>(
    undefined,
  );

  useEffect(() => {
    if (ofertaId && ofertas) {
      const oferta = ofertas.find((item) => item.id === ofertaId);

      if (oferta) {
        setOferta(oferta);
        const proximo = ofertas.find(
          (item) => item.dependentes > oferta.dependentes,
        );

        if (proximo) {
          setProximoPlano(proximo);
        }
      }
    }
  }, [ofertaId, ofertas]);

  if (!oferta) {
    return <div>nenhum plano selecionado...</div>;
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 font-medium bg-primary-50 border border-primary-200 text-primary-600 p-3 rounded-md">
        <figure>
          <CopyCheck />
        </figure>
        <div>
          Você selecionou o plano{' '}
          <span className="underline underline-offset-4 font-semibold">
            {oferta.nome}
          </span>{' '}
          por R${' '}
          <span className="font-semibold">
            {new Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              minimumFractionDigits: 2,
            }).format(oferta.valor)}
          </span>
          .
        </div>
      </div>

      {!oferta.dependentes && proximoPlano && (
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 font-medium bg-secondary-50 border border-secondary-200 text-secondary-600 p-3 rounded-md">
            <figure>
              <Smile />
            </figure>
            <div>
              Por mais R${' '}
              {new Intl.NumberFormat('pt-BR', {
                currency: 'BRL',
                minimumFractionDigits: 2,
              }).format(proximoPlano.valor - oferta.valor)}{' '}
              você pode adicionar +
              {proximoPlano.dependentes - oferta.dependentes} dependentes no
              plano{` `}
              <span className="underline underline-offset-4 font-semibold">
                {proximoPlano.nome}
              </span>
              .
            </div>
          </div>
          <div className="flex gap-4">
            <Button
              color="secondary"
              onClick={() => atualizarOfertaId(proximoPlano.id)}
            >
              <ThumbsUp /> Atualizar plano
            </Button>
            <Button color="primary" onClick={() => atualizarEtapa(3)}>
              Prosseguir <ChevronsRight />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
