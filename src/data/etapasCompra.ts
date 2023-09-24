export type EtapaProps = {
  id: number;
  nome: string;
  descricao: string;
};

export const etapasCompra: EtapaProps[] = [
  {
    id: 1,
    nome: 'Passo 1',
    descricao: 'Dados pessoais',
  },
  {
    id: 2,
    nome: 'Passo 2',
    descricao: 'Incluir Dependentes',
  },
  {
    id: 3,
    nome: 'Passo 3',
    descricao: 'Confirmar dados',
  },
  {
    id: 4,
    nome: 'Passo 4',
    descricao: 'Pagamento',
  },
];
