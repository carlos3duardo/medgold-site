'use client';
import { useContext, useEffect, useState } from 'react';
import { ShoppingContext } from '@/contexts';
import { etapasCompra as etapas } from '@/data';
import { Check } from 'lucide-react';

interface EtapaProps {
  id: number;
  nome: string;
  descricao: string;
  etapaAtual: number;
  atualizaEtapa: (etapa: number) => void;
}

function Etapa({ id, nome, descricao, etapaAtual, atualizaEtapa }: EtapaProps) {
  return (
    <button
      type="button"
      data-etapa-atual={etapaAtual === id}
      data-concluido={etapaAtual > id}
      className="flex items-center gap-3 p-2 bg-slate-100 hover:shadow-lg transition-shadow text-slate-600 rounded-full data-[etapa-atual=true]:bg-primary-600 data-[etapa-atual=true]:text-white"
      onClick={() => atualizaEtapa(id)}
    >
      <figure
        data-etapa-atual={etapaAtual === id}
        data-concluido={etapaAtual > id}
        className="h-12 w-12 text-xl font-bold bg-slate-200 text-slate-400 rounded-full flex items-center justify-center data-[etapa-atual=true]:bg-white data-[etapa-atual=true]:text-primary-600 data-[concluido=true]:bg-primary-600 data-[concluido=true]:text-white"
      >
        {etapaAtual > id ? <Check /> : id}
      </figure>
      <div className="text-left font-semibold uppercase pr-2">
        <span className="block text-primary-300 text-xs">{nome}</span>
        {descricao}
      </div>
    </button>
  );
}

export function ShoppingSteps() {
  const [step, setStep] = useState(1);

  const { etapa: etapaAtual, atualizarEtapa } = useContext(ShoppingContext);

  useEffect(() => {
    setStep(etapaAtual);
  }, [etapaAtual]);

  return (
    <div role="list" className="flex flex-col gap-4">
      {etapas.map((etapa) => (
        <Etapa
          key={etapa.id}
          id={etapa.id}
          nome={etapa.nome}
          descricao={etapa.descricao}
          etapaAtual={step}
          atualizaEtapa={() => atualizarEtapa(etapa.id)}
        />
      ))}
    </div>
  );
}
