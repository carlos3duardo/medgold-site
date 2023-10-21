'use client';
import { ReactNode, createContext, useEffect, useState } from 'react';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { TitularFormType } from '@/models/Titular';
import axios from 'axios';
import { ApiTypes } from '@/types/api';
import { useSearchParams } from 'next/navigation';

type DependenteProps = {
  id: string;
  nome: string;
  email: string;
  nascimento: string;
  cpf: string;
};

export type OfertaProps = {
  id: string;
  nome: string;
  descricao: string;
  dependentes: number;
  valor: number;
  imageUrl: string;
};

interface ShoppingContextProps {
  etapa: number;
  atualizarEtapa: (etapa: number) => void;
  ofertas: OfertaProps[] | undefined;
  ofertaId: string | undefined;
  atualizarOfertaId: (ofertaId: string) => void;
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
  const searchParams = useSearchParams();

  const [token, setToken] = useState<string | undefined>(() => {
    return getCookie('medgold:token');
  });

  const [ofertas, setOfertas] = useState<OfertaProps[]>([]);

  // Autenticando-se na API da MedGold

  useEffect(() => {
    if (!token) {
      axios
        .post('/auth')
        .then((response) => {
          setToken(response.data.access_token);
          setCookie('medgold:token', response.data.access_token, {
            maxAge: 60 * 60 * 24 * 7, // 7 dias
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [token]);

  // Consultando as ofertas mais recentes

  useEffect(() => {
    if (token) {
      const endpoint = `${process.env.NEXT_PUBLIC_MEDGOLD_API_URL}/ecommerce/oferta`;

      axios
        .get(endpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setOfertas(
            response.data.data.map((oferta: ApiTypes['Oferta']) => {
              return {
                id: oferta.codigo,
                nome: oferta.nome,
                descricao: oferta.descricao,
                dependentes: oferta.dependentes,
                valor: oferta.valor,
                imageUrl: oferta.imagem.url,
              };
            }),
          );
        });
    }
  }, [token]);

  useEffect(() => {
    const afiliadoId = searchParams.get('afiliadoId');

    if (afiliadoId) {
      setCookie('medgold:afiliadoId', afiliadoId);
    }
  }, []);

  const [etapa, setEtapa] = useState(() => {
    const data = getCookie('medgold:etapaCompra');

    if (data) {
      return parseInt(data);
    }

    return 1;
  });

  const [ofertaId, setOfertaId] = useState<string | undefined>(() => {
    const ofertaId = getCookie('medgold:ofertaId');

    return ofertaId || undefined;
  });

  const [titular, setTitular] = useState<TitularFormType>(() => {
    const data = getCookie('medgold:titular');

    if (data) {
      return JSON.parse(data);
    }

    return undefined;
  });

  const [dependentes, setDependentes] = useState<DependenteProps[]>(() => {
    const data = getCookie('medgold:dependentes');

    if (data) {
      return JSON.parse(data);
    }

    return [];
  });

  async function atualizarEtapa(etapaId: number) {
    setCookie('medgold:etapaCompra', etapaId.toString(), {
      maxAge: 60 * 60 * 24 * 7, // 7 dias
    });
    setEtapa(etapaId);
  }

  async function atualizarOfertaId(ofertaId: string) {
    setCookie('medgold:ofertaId', ofertaId, {
      maxAge: 60 * 60 * 24 * 7, // 7 dias
    });

    setOfertaId(ofertaId);
  }

  async function atualizarTitular(titular: TitularFormType) {
    setCookie('medgold:titular', JSON.stringify(titular), {
      maxAge: 60 * 60 * 24 * 7, // 7 dias
    });
    setTitular(titular);
  }

  async function adicionarDependente(dependente: DependenteProps) {
    const novaLista = [...dependentes, dependente];

    setDependentes(novaLista);

    setCookie('medgold:dependentes', JSON.stringify(novaLista), {
      maxAge: 60 * 60 * 24 * 7, // 7 dias
    });
  }

  async function removerDependente(dependenteId: string) {
    const novaLista = dependentes.filter((dep) => dependenteId !== dep.id);

    setDependentes(novaLista);

    setCookie('medgold:dependentes', JSON.stringify(novaLista), {
      maxAge: 60 * 60 * 24 * 7, // 7 dias
    });
  }

  async function limparDados() {
    deleteCookie('medgold:etapaCompra');
    deleteCookie('medgold:ofertaId');
    deleteCookie('medgold:titular');
    deleteCookie('medgold:dependentes');
    deleteCookie('medgold:afiliadoId');
  }

  return (
    <ShoppingContext.Provider
      value={{
        etapa,
        atualizarEtapa,
        titular,
        atualizarTitular,
        ofertas,
        ofertaId,
        atualizarOfertaId,
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
