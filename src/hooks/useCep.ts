import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export type EnderecoProps = {
  cep: string;
  logradouro: string;
  bairro: string;
  municipio: string;
  estado: string;
};

export function useCep(cep: string) {
  const { isLoading, error, data } = useQuery({
    queryKey: ['queryCompromissos', cep],
    queryFn: async (): Promise<EnderecoProps | null> => {
      try {
        const response = await axios.get(
          `https://brasilapi.com.br/api/cep/v2/${cep}`,
        );

        const endereco = response.data;

        return {
          cep: endereco.cep,
          logradouro: endereco.street,
          bairro: endereco.neighborhood,
          municipio: endereco.city,
          estado: endereco.state,
        };
      } catch (err) {
        console.log(err);
        return null;
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
  });

  return { isLoading, data, error };
}
