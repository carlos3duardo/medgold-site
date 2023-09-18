import { FormInput } from '@/components/Form/FormInput';
import { FormSubmit } from '@/components/Form/FormSubmit';
import { ChevronsRight } from 'lucide-react';

export function FormDadosPessoais() {
  return (
    <div>
      <form action="/">
        <fieldset className="grid grid-cols-12 gap-8">
          <div role="group" className="col-span-12 mb:col-span-8 xl:col-span-8">
            <FormInput name="nome" label="Nome" />
          </div>
          <div role="group" className="col-span-12 md:col-span-4 xl:col-span-4">
            <FormInput name="cpf" label="CPF" />
          </div>
          <div role="group" className="col-span-12 mb:col-span-8 xl:col-span-8">
            <FormInput name="email" label="E-mail" />
          </div>
          <div role="group" className="col-span-12 mb:col-span-4 xl:col-span-4">
            <FormInput name="telefone" label="Telefone" />
          </div>

          <div role="group" className="col-span-4">
            <FormInput name="profissao" label="Profissão" />
          </div>

          <div role="group" className="col-span-4">
            <FormInput name="nascimento" label="Nascimento" />
          </div>

          <div role="group" className="col-span-4">
            <FormInput name="sexo" label="Sexo" />
          </div>
        </fieldset>

        <fieldset className="grid grid-cols-12 gap-8 [&:not(first-child)]:border-t [&:not(first-child)]:border-slate-300 [&:not(first-child)]:mt-8 [&:not(first-child)]:pt-8">
          <div role="group" className="col-span-3">
            <FormInput name="cep" label="CEP" />
          </div>
          <div role="group" className="col-span-9">
            <FormInput name="endereco" label="Endereço" />
          </div>
          <div role="group" className="col-span-3">
            <FormInput name="numero" label="Número" />
          </div>
          <div role="group" className="col-span-4">
            <FormInput name="complemento" label="Complemento" />
          </div>
          <div role="group" className="col-span-5">
            <FormInput name="bairro" label="Bairro" />
          </div>
          <div role="group" className="col-span-7">
            <FormInput name="municipio" label="Cidade" />
          </div>
          <div role="group" className="col-span-5">
            <FormInput name="uf" label="Estado" />
          </div>
        </fieldset>
        <fieldset className="mt-8">
          <FormSubmit>
            Prosseguir <ChevronsRight />
          </FormSubmit>
        </fieldset>
      </form>
    </div>
  );
}
