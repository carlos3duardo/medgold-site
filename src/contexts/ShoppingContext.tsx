'use client';
import { ReactNode, createContext, useState } from 'react';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { planos, PlanoProps } from '@/data';
import { TitularFormType } from '@/models/Titular';

// type TitularProps = {
//   nome: string;
//   cpf: string;
//   email: string;
//   telefone: string;
//   profissao: string;
//   nascimento?: string | undefined;
//   sexo: string;
//   cep: string;
//   logradouro: string;
//   numero: string;
//   complemento?: string | undefined;
//   bairro: string;
//   municipio: string;
//   uf: string;
// };

type DependenteProps = {
  id: string;
  nome: string;
  email: string;
  nascimento: string;
  cpf: string;
};

interface ShoppingContextProps {
  etapa: number;
  atualizarEtapa: (etapa: number) => void;
  plano: PlanoProps | undefined;
  atualizarPlano: (planoId: string) => void;
  titular: TitularFormType;
  atualizarTitular: (titular: TitularFormType) => void;
  dependentes: DependenteProps[];
  adicionarDependente: (dependente: DependenteProps) => void;
  removerDependente: (id: string) => void;
  limparDados: () => void;
}

export const ShoppingContext = createContext({} as ShoppingContextProps);

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export function ShoppingProvider({ children }: ShoppingCartProviderProps) {
  const [etapa, setEtapa] = useState(() => {
    const data = getCookie('@medgold.etapaCompra');

    if (data) {
      return parseInt(data);
    }

    return 1;
  });

  const [plano, setPlano] = useState<PlanoProps | undefined>(() => {
    const data = getCookie('@medgold.plano');

    if (data) {
      return JSON.parse(data);
    }

    return undefined;
  });

  const [titular, setTitular] = useState<TitularFormType>(() => {
    const data = getCookie('@medgold.titular');

    if (data) {
      return JSON.parse(data);
    }

    return undefined;
  });

  const [dependentes, setDependentes] = useState<DependenteProps[]>(() => {
    const data = getCookie('@medgold.dependentes');

    if (data) {
      return JSON.parse(data);
    }

    return [];
  });

  async function atualizarEtapa(etapaId: number) {
    setCookie('@medgold.etapaCompra', etapaId.toString(), {
      maxAge: 60 * 60 * 24 * 7, // 7 dias
    });
    setEtapa(etapaId);
  }

  async function atualizarPlano(planoId: string) {
    const planoSelecionado = planos.find((item) => item.id === planoId);

    setCookie('@medgold.plano', JSON.stringify(planoSelecionado), {
      maxAge: 60 * 60 * 24 * 7, // 7 dias
    });
    setPlano(planoSelecionado);
  }

  async function atualizarTitular(titular: TitularFormType) {
    setCookie('@medgold.titular', JSON.stringify(titular), {
      maxAge: 60 * 60 * 24 * 7, // 7 dias
    });
    setTitular(titular);
  }

  async function adicionarDependente(dependente: DependenteProps) {
    const novaLista = [...dependentes, dependente];

    setDependentes(novaLista);

    setCookie('@medgold.dependentes', JSON.stringify(novaLista), {
      maxAge: 60 * 60 * 24 * 7, // 7 dias
    });
  }

  async function removerDependente(dependenteId: string) {
    const novaLista = dependentes.filter((dep) => dependenteId !== dep.id);

    setDependentes(novaLista);

    setCookie('@medgold.dependentes', JSON.stringify(novaLista), {
      maxAge: 60 * 60 * 24 * 7, // 7 dias
    });
  }

  async function limparDados() {
    deleteCookie('@medgold.etapaCompra');
    deleteCookie('@medgold.plano');
    deleteCookie('@medgold.titular');
    deleteCookie('@medgold.dependentes');
  }

  return (
    <ShoppingContext.Provider
      value={{
        etapa,
        atualizarEtapa,
        titular,
        atualizarTitular,
        plano,
        atualizarPlano,
        dependentes,
        adicionarDependente,
        removerDependente,
        limparDados,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}
