import { useCallback, useEffect, useState } from 'react';
import { ChevronsRight, CopyCheck, Smile, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/Button';
import { planos, PlanoProps } from '@/data';

interface FormProps {
  plano: PlanoProps;
  changeCurrentStep: (step: number) => void;
}

export function FormDependentes({ plano }: FormProps) {
  const [planoAtual, setPlanoAtual] = useState(plano);
  const [proximoPlano, setProximoPlano] = useState<PlanoProps | undefined>(
    undefined,
  );

  useEffect(() => {
    const nextPlano = planos.find(
      (item) => item.dependentes > planoAtual.dependentes,
    );

    if (nextPlano) {
      setProximoPlano(nextPlano);
    }
  }, [planoAtual.dependentes]);

  const upgradePlano = useCallback(() => {
    if (proximoPlano) {
      setPlanoAtual(proximoPlano);
      localStorage.setItem('medgold.plano', JSON.stringify(proximoPlano));
    }
  }, [proximoPlano]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 font-medium bg-primary-50 border border-primary-200 text-primary-600 p-3 rounded-md">
        <figure>
          <CopyCheck />
        </figure>
        <div>
          Você selecionou o plano{' '}
          <span className="underline underline-offset-4 font-semibold">
            {planoAtual.nome}
          </span>{' '}
          por R${' '}
          <span className="font-semibold">
            {new Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              minimumFractionDigits: 2,
            }).format(planoAtual.valor)}
          </span>
          .
        </div>
      </div>

      {!planoAtual.dependentes && proximoPlano && (
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 font-medium bg-secondary-50 border border-secondary-200 text-secondary-600 p-3 rounded-md">
            <figure>
              <Smile />
            </figure>
            <div>
              Por mais R${' '}
              {new Intl.NumberFormat('pt-BR', {
                currency: 'BRL',
                minimumFractionDigits: 2,
              }).format(proximoPlano.valor - planoAtual.valor)}{' '}
              você pode adicionar +
              {proximoPlano.dependentes - planoAtual.dependentes} dependentes no
              plano{` `}
              <span className="underline underline-offset-4 font-semibold">
                {proximoPlano.nome}
              </span>
              .
            </div>
          </div>
          <div className="flex gap-4">
            <Button color="secondary" onClick={upgradePlano}>
              <ThumbsUp /> Atualizar plano
            </Button>
            <Button color="primary">
              Prosseguir <ChevronsRight />
            </Button>
          </div>
        </div>
      )}

      {planoAtual.dependentes && <p>adicionar dependentes</p>}
    </div>
  );

  // if (planoId === '3a3s688dd-2146-43ac-bd32-2e3745b5ab55') {
  //   return (
  //     <div className="p-6 bg-slate-100 rounded-md text-lg">
  //       <div>
  //         Você selecionou o plano{' '}
  //         <span className="underline underline-offset-4 font-semibold">
  //           {plano.nome}
  //         </span>{' '}
  //         por R${' '}
  //         {new Intl.NumberFormat('pt-BR', {
  //           currency: 'BRL',
  //           minimumFractionDigits: 2,
  //         }).format(plano.valor)}
  //         .<br /> Por mais R$ 15,00 você pode adicionar até 3 dependentes no
  //         plano{' '}
  //         <span className="underline underline-offset-4 font-semibold">
  //           Família 1
  //         </span>
  //         .
  //         <div className="mt-8 flex gap-4">
  //           <Button color="secondary" onClick={handleUpgradePlano}>
  //             <ThumbsUp /> Atualizar plano
  //           </Button>
  //           <Button color="primary">
  //             Continuar <ChevronsRight />
  //           </Button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // return <div>x</div>;

  // return (
  //   <div>
  //     <div className="">
  //       {plano.id === '3a3688dd-2146-43ac-bd32-2e3745b5ab55' && (

  //       )}
  //     </div>
  //     <Form.Root>
  //       <FormProvider {...methods}>
  //         <Form.Body onSubmit={handleSubmit(submitForm)}>
  //           {fields.map((field, index) => {
  //             return (
  //               <Form.Fieldset key={field.id}>
  //                 <div className="col-span-12">
  //                   <h3 className="text-xl font-semibold text-slate-600">
  //                     Dependente {index + 1}
  //                   </h3>
  //                 </div>
  //                 <Form.Control className="col-span-12 mb:col-span-8 xl:col-span-8">
  //                   <Form.TextInput
  //                     label="Nome"
  //                     name={`dependente.${index}.nome`}
  //                     uppercase
  //                   />
  //                 </Form.Control>
  //                 <Form.Control className="col-span-12 mb:col-span-4 xl:col-span-4">
  //                   <Form.TextInput
  //                     label="Nascimento"
  //                     name={`dependente.${index}.nascimento`}
  //                     uppercase
  //                   />
  //                 </Form.Control>
  //                 <Form.Control className="col-span-12 mb:col-span-8 xl:col-span-8">
  //                   <Form.TextInput
  //                     label="E-mail"
  //                     name={`dependente.${index}.email`}
  //                     uppercase
  //                   />
  //                 </Form.Control>
  //                 <Form.Control className="col-span-12 mb:col-span-4 xl:col-span-4">
  //                   <Form.TextInput
  //                     label="CPF"
  //                     name={`dependente.${index}.cpf`}
  //                     uppercase
  //                   />
  //                 </Form.Control>
  //               </Form.Fieldset>
  //             );
  //           })}
  //         </Form.Body>
  //       </FormProvider>
  //     </Form.Root>
  //   </div>
  // );
}
