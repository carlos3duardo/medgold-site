import { FormInput } from '@/components/Form/FormInput';
import { Banner } from './ext/Banner';

export default function Compra() {
  return (
    <>
      <Banner />
      <div className="relative mt-[20rem]">
        <div className="container mx-auto">
          <div className="bg-white p-8 rounded-t-xl">
            <div className="header mb-6 pb-6 border-b border-slate-300 text-center">
              <h1 className="text-4xl text-primary-600 font-extrabold mb-4">
                A telemedicina está a um clique de distância
              </h1>
              <h2 className="text-2xl text-secondary-600 font-semibold">
                Preencha seus dados pessoais e finalize a sua compra!
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-[280px]">
                <ul>
                  <li>Dados pessoais</li>
                  <li>Endereço</li>
                  <li>Dependentes</li>
                </ul>
              </div>
              <div className="flex-1">
                <form action="/">
                  <fieldset className="grid grid-cols-12 gap-8">
                    <div
                      role="group"
                      className="col-span-12 mb:col-span-8 xl:col-span-8"
                    >
                      <FormInput name="nome" label="Nome" />
                    </div>
                    <div
                      role="group"
                      className="col-span-12 md:col-span-4 xl:col-span-4"
                    >
                      <FormInput name="cpf" label="CPF" />
                    </div>
                    <div
                      role="group"
                      className="col-span-12 mb:col-span-8 xl:col-span-8"
                    >
                      <FormInput name="email" label="E-mail" />
                    </div>
                    <div
                      role="group"
                      className="col-span-12 mb:col-span-4 xl:col-span-4"
                    >
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
