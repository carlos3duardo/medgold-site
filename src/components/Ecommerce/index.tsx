'use client';
import { useContext, useEffect, useState } from 'react';
import { ShoppingContext } from '@/contexts';
import { AdicionarTitular } from './steps/AdicionarTitular';
import { AdicionarDependentes } from './steps/AdicionarDependentes';
import { ConfirmarDados } from './steps/ConfirmarDados';

interface TituloProps {
  descricao: string;
}

function Titulo({ descricao }: TituloProps) {
  return (
    <h1 className="text-3xl text-slate-600 font-extrabold mb-4">{descricao}</h1>
  );
}

export default function Ecommerce() {
  const [etapaAtual, setEtapaAtual] = useState(1);
  const { etapa, plano } = useContext(ShoppingContext);

  useEffect(() => {
    if (!plano) {
      location.href = '/?noplan';
    }

    setEtapaAtual(etapa);
  }, [plano, etapa]);

  if (etapaAtual === 1) {
    return (
      <>
        <Titulo descricao="Informe seus dados pessoais e de contato" />
        <AdicionarTitular />
      </>
    );
  }

  if (etapaAtual === 2) {
    return (
      <>
        <Titulo descricao="Adicione dependentes ao seu plano" />
        <AdicionarDependentes />
      </>
    );
  }

  if (etapaAtual === 3) {
    return (
      <>
        <Titulo descricao="Confirme os dados informados" />
        <ConfirmarDados />
      </>
    );
  }

  return <>{etapaAtual}</>;
}
