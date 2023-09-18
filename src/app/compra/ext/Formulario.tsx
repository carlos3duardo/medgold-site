import { FormDadosPessoais } from './FormDadosPessoais';
import { FormSteps } from './FormSteps';

type FormStep = {
  id: number;
  nome: string;
  descricao: string;
};

export function Formulario() {
  const formSteps: FormStep[] = [
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
  return (
    <div className="py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-[280px]">
            <FormSteps steps={formSteps} currentStep={1} />
          </div>
          <div>
            <FormDadosPessoais />
          </div>
        </div>
      </div>
    </div>
  );
}
