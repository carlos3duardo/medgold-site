type OfertaProps = {
  id: number;
  codigo: string;
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

export type ApiTypes = {
  Oferta: OfertaProps;
};
