'use client';
import { useContext, useEffect, useState } from 'react';
import { ShoppingContext } from '@/contexts';
import { planos, PlanoProps } from '@/data';
import { ChevronsRight, CopyCheck, Smile, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/Button';

export function DependentesHeader() {
  const { plano, atualizarEtapa, atualizarPlano } = useContext(ShoppingContext);
  const [proximoPlano, setProximoPlano] = useState<PlanoProps | undefined>(
    undefined,
  );

  useEffect(() => {
    if (plano) {
      const proximo = planos.find(
        (item) => item.dependentes > plano.dependentes,
      );

      if (proximo) {
        setProximoPlano(proximo);
      }
    }
  }, [plano]);

  if (!plano) {
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
            {plano.nome}
          </span>{' '}
          por R${' '}
          <span className="font-semibold">
            {new Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              minimumFractionDigits: 2,
            }).format(plano.valor)}
          </span>
          .
        </div>
      </div>

      {!plano.dependentes && proximoPlano && (
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
              }).format(proximoPlano.valor - plano.valor)}{' '}
              você pode adicionar +
              {proximoPlano.dependentes - plano.dependentes} dependentes no
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
              onClick={() => atualizarPlano(proximoPlano.id)}
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
