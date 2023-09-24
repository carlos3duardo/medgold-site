'use client';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components';
import { ChevronsRight } from 'lucide-react';
import { FocusEvent, useContext, useState } from 'react';
import { ShoppingContext } from '@/contexts';
import { TitularFormSchema, TitularFormType } from '@/models/Titular';
import { format, parseISO } from 'date-fns';
import { maskCep, maskCpf } from '@/helpers';

export function AdicionarTitular() {
  const { atualizarEtapa, titular, atualizarTitular } =
    useContext(ShoppingContext);

  const [isCepLoading, setIsCepLoading] = useState(false);

  const methods = useForm<TitularFormType>({
    resolver: zodResolver(TitularFormSchema),
    defaultValues: async () => {
      return {
        ...titular,
        cpf: titular && titular.cpf ? maskCpf(titular.cpf) : '',
        cep: titular && titular.cep ? maskCep(titular.cep) : '',
        nascimento:
          titular && titular.nascimento
            ? format(parseISO(titular.nascimento), 'dd/MM/yyyy')
            : '',
      };
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    setValue,
  } = methods;

  async function submitForm(data: TitularFormType) {
    atualizarTitular(data);

    atualizarEtapa(2);
  }

  const handleBuscaCep = (evt: FocusEvent<HTMLInputElement>) => {
    const cep = evt.target.value.replace(/\D/g, '');

    setIsCepLoading(true);

    fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)
      .then((res) => res.json())
      .then((res) => {
        setValue('logradouro', res.street);
        setValue('bairro', res.neighborhood);
        setValue('municipio', res.city);
        setValue('uf', res.state);
      })
      .finally(() => {
        setIsCepLoading(false);
      });
  };

  return (
    <div>
      <Form.Root>
        <FormProvider {...methods}>
          <Form.Body onSubmit={handleSubmit(submitForm)}>
            <Form.Fieldset>
              <Form.Control className="col-span-12 mb:col-span-8 xl:col-span-8">
                <Form.TextInput
                  label="Nome"
                  name="nome"
                  uppercase
                  error={errors.nome}
                />
              </Form.Control>
              <Form.Control className="col-span-12 md:col-span-4 xl:col-span-4">
                <Form.CpfInput label="CPF" name="cpf" error={errors.cpf} />
              </Form.Control>
              <Form.Control className="col-span-12 mb:col-span-8 xl:col-span-8">
                <Form.TextInput
                  label="E-mail"
                  name="email"
                  error={errors.email}
                />
              </Form.Control>
              <Form.Control className="col-span-12 mb:col-span-4 xl:col-span-4">
                <Form.CelularInput
                  label="Celular"
                  name="telefone"
                  error={errors.telefone}
                />
              </Form.Control>
              <Form.Control className="col-span-12 md:col-span-4 xl:col-span-4">
                <Form.TextInput
                  label="Profissão"
                  name="profissao"
                  error={errors.profissao}
                />
              </Form.Control>
              <Form.Control className="col-span-12 md:col-span-4 xl:col-span-4">
                <Form.DateInput
                  label="Nascimento"
                  name="nascimento"
                  error={errors.nascimento}
                />
              </Form.Control>
              <Form.Control className="col-span-12 md:col-span-4 xl:col-span-4">
                <Form.Select
                  label="Sexo"
                  name="sexo_id"
                  placeholder="Selecione"
                  error={errors.sexo_id}
                  options={[
                    {
                      value: '1',
                      label: 'Feminino',
                    },
                    {
                      value: '2',
                      label: 'Masculino',
                    },
                    {
                      value: '3',
                      label: 'Não binário',
                    },
                    {
                      value: '4',
                      label: 'Prefiro não dizer',
                    },
                    {
                      value: '5',
                      label: 'Outro',
                    },
                  ]}
                />
              </Form.Control>
            </Form.Fieldset>

            <Form.Separator />

            <Form.Fieldset>
              <Form.Control className="col-span-12 md:col-span-4 xl:col-span-3">
                <Form.CepInput
                  label="CEP"
                  name="cep"
                  error={errors.cep}
                  onBlur={handleBuscaCep}
                  isLoading={isCepLoading}
                />
              </Form.Control>
              <Form.Control className="col-span-9">
                <Form.TextInput
                  label="Endereço"
                  name="logradouro"
                  error={errors.logradouro}
                />
              </Form.Control>
              <Form.Control className="col-span-3">
                <Form.TextInput
                  label="Número"
                  name="numero"
                  error={errors.numero}
                />
              </Form.Control>
              <Form.Control className="col-span-4">
                <Form.TextInput
                  label="Complemento"
                  name="complemento"
                  error={errors.complemento}
                />
              </Form.Control>
              <Form.Control className="col-span-5">
                <Form.TextInput
                  label="Bairro"
                  name="bairro"
                  error={errors.bairro}
                  readOnly
                />
              </Form.Control>
              <Form.Control className="col-span-7">
                <Form.TextInput
                  label="Cidade"
                  name="municipio"
                  error={errors.municipio}
                  readOnly
                />
              </Form.Control>
              <Form.Control className="col-span-5">
                <Form.TextInput
                  label="Estado"
                  name="uf"
                  error={errors.uf}
                  readOnly
                />
              </Form.Control>
            </Form.Fieldset>

            <Form.Separator />

            <Form.Footer>
              <Form.Submit>
                Prosseguir <ChevronsRight />
              </Form.Submit>
            </Form.Footer>
          </Form.Body>
        </FormProvider>
      </Form.Root>
    </div>
  );
}
