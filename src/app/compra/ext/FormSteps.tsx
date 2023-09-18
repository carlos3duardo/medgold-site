import { Check } from 'lucide-react';

type FormStep = {
  id: number;
  nome: string;
  descricao: string;
};

interface FormStepProps {
  steps: FormStep[];
  currentStep: number;
}

export function FormSteps({ steps, currentStep = 1 }: FormStepProps) {
  return (
    <ul className="flex flex-col gap-4">
      {steps.map((step) => (
        <li key={step.id}>
          <div className="flex items-center gap-2">
            {currentStep === step.id ? (
              <figure className="h-12 w-12 text-xl font-bold bg-primary-600 text-white rounded-full flex items-center justify-center">
                {step.id}
              </figure>
            ) : currentStep > step.id ? (
              <figure className="h-12 w-12 text-xl font-bold bg-primary-200 text-primary-600 rounded-full flex items-center justify-center">
                <Check size={18} strokeWidth={4} />
              </figure>
            ) : (
              <figure className="h-12 w-12 text-xl font-bold bg-slate-200 text-slate-400 rounded-full flex items-center justify-center">
                {step.id}
              </figure>
            )}
            <div className="leading-none">
              <span className="text-sm text-slate-400 font-medium uppercase">
                {step.nome}
              </span>
              <br />
              <span>{step.descricao}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
