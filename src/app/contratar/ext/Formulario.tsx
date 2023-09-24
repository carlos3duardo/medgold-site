'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AdicionarDadosPessoais } from './AdicionarDadosPessoais';
import { FormSteps } from './FormSteps';
import { FormDependentes } from './FormDependentes';
import { PlanoProps } from '@/data';
import { Banner } from './Banner';

type FormStep = {
  id: number;
  nome: string;
  descricao: string;
};

export function Formulario() {
  const [plano, setPlano] = useState({} as PlanoProps);
  const [currentStep, setCurrentStep] = useState(1);

  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem('medgold.plano');
    if (data) {
      const plano = JSON.parse(data);

      setPlano(plano);
    } else {
      router.push('/?404');
    }
  }, [router]);

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

  function changeCurrentStep(step: number) {
    setCurrentStep(step);
  }

  return (
    <>
      <div className="py-12">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-[280px]">
              <FormSteps
                steps={formSteps}
                changeCurrentStep={changeCurrentStep}
                currentStep={currentStep}
              />
            </div>
            <div className="w-full">
              {currentStep === 1 ? (
                <AdicionarDadosPessoais changeCurrentStep={changeCurrentStep} />
              ) : (
                <FormDependentes
                  plano={plano}
                  changeCurrentStep={changeCurrentStep}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
