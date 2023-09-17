type PlanoProps = {
  id: string;
  nome: string;
  descricao: string;
  thumbnail: string;
  dependentes: number;
  valor: number;
};

export const planos: PlanoProps[] = [
  {
    id: '3a3688dd-2146-43ac-bd32-2e3745b5ab55',
    nome: 'Individual',
    descricao:
      'Com acesso a todos os benefícios do clube de descontos e mais telemedicina.',
    thumbnail: '/images/planos/plano-01-individual.png',
    dependentes: 0,
    valor: 14.9,
  },
  {
    id: '5836b1ab-be76-4c70-b0c6-5282ea252895',
    nome: 'Família 1',
    descricao:
      'O titular e até 3 dependentes têm benefícios e mais telemedicina inclusa para todos.',
    thumbnail: '/images/planos/plano-02-familia-4-usuarios.png',
    dependentes: 3,
    valor: 29.9,
  },
  {
    id: 'a2503be6-35de-482a-a047-90cab06ab711',
    nome: 'Família 2',
    descricao:
      'O titular e até 4 dependentes têm benefícios e mais telemedicina inclusa para todos.',
    thumbnail: '/images/planos/plano-03-familia-5-usuarios.png',
    dependentes: 4,
    valor: 35.8,
  },
  {
    id: '5ac87fdd-1277-4a3d-a1da-427f8df23175',
    nome: 'Família 3',
    descricao:
      'O titular e até 5 dependentes têm benefícios e mais telemedicina inclusa para todos.',
    thumbnail: '/images/planos/plano-04-familia-6-usuarios.png',
    dependentes: 5,
    valor: 41.7,
  },
  {
    id: 'aae807ed-6010-4954-8bc7-a6f342ef9ba2',
    nome: 'Motorista App',
    descricao:
      'Com acesso a todos os benefícios do clube de descontos e mais telemedicina, exclusivo para motoristas de aplicativo.',
    thumbnail: '/images/planos/plano-05-motorista-app.png',
    dependentes: 0,
    valor: 10.9,
  },
];
