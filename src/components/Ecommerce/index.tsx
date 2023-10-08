'use client';
import { useContext, useEffect, useState } from 'react';
import { ShoppingContext } from '@/contexts';
import { AdicionarTitular } from './steps/AdicionarTitular';
import { AdicionarDependentes } from './steps/AdicionarDependentes';
import { ConfirmarDados } from './steps/ConfirmarDados';
import { Pagamento } from './steps/Pagamento';
import { Sucesso } from './steps/Sucesso';

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
  const { etapa, ofertaId } = useContext(ShoppingContext);

  useEffect(() => {
    if (!ofertaId) {
      location.href = '/?noplan';
    }

    setEtapaAtual(etapa);
  }, [ofertaId, etapa]);

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

  if (etapaAtual === 4) {
    return (
      <>
        <Titulo descricao="Pagamento" />
        <Pagamento />
      </>
    );
  }

  if (etapaAtual === 5) {
    return (
      <>
        <Sucesso />
      </>
    );
  }

  return <>{etapaAtual}</>;
}
