import { AuthContext } from '@/contexts/AuthContext';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useContext } from 'react';

type HttpResponse = {
  id: number;
  uuid: string;
  nome: string;
  descricao: string;
  dependentes: number;
  valor: number;
  imagem: {
    id: number;
    url: string;
    tamanho: number;
  };
};

export type OfertaProps = {
  id: string;
  nome: string;
  descricao: string;
  dependentes: number;
  valor: number;
  imageUrl: string;
};

export function useOfertas() {
  const { isLoading, isSuccess, isError, error, data } = useQuery({
    queryKey: ['queryOfertas', 1],
    queryFn: async (): Promise<OfertaProps[] | null> => {
      const token = getCookie('@medgold.token');

      try {
        const url = `${process.env.NEXT_PUBLIC_MEDGOLD_API_URL}/ecommerce/oferta`;

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        return response.data.data.map((oferta: HttpResponse) => {
          return {
            id: oferta.uuid,
            nome: oferta.nome,
            descricao: oferta.descricao,
            dependentes: oferta.dependentes,
            valor: oferta.valor,
            imageUrl: oferta.imagem.url,
          };
        });
      } catch (err) {
        console.log(err);
      }

      return null;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
  });

  return { isLoading, isSuccess, isError, data, error };
}
