'use client';
import * as z from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components';
import { ChevronsRight } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { FocusEvent, useState } from 'react';

const formSchema = z.object({
  nome: z
    .string()
    .trim()
    .nonempty({ message: 'É obrigatório informar o nome.' })
    .min(10, { message: 'Campo não pode possuir menos de 10 caracteres.' })
    .max(120, { message: 'Campo não pode possuir mais de 120 caracteres.' }),
  cpf: z
    .string()
    .length(14, { message: 'CPF inválido.' })
    .transform((value) => {
      return value.replace(/\D/g, '');
    }),
  email: z
    .string()
    .trim()
    .nonempty({ message: 'Campo obrigatório.' })
    .email({ message: 'Endereço de e-mail inválido.' }),
  telefone: z
    .string()
    .trim()
    .nonempty({ message: 'Campo obrigatório' })
    .transform((value) => {
      return value.replace(/\D/g, '');
    }),
  profissao: z
    .string()
    .trim()
    .nonempty({ message: 'Campo obrigatório' })
    .min(6, { message: 'Campo não pode possuir menos de 6 caracteres.' }),
  nascimento: z
    .string()
    .nonempty({ message: 'Campo obrigatório' })
    .length(10, { message: 'Data inválida' })
    .transform((val) => {
      if (val.length === 10) {
        const [d, m, Y] = val.split('/');

        return `${Y}-${m}-${d}`;
      }
    }),
  sexo: z.string().nonempty({ message: 'Campo obrigatório' }),
  cep: z.string().nonempty({ message: 'Campo obrigatório' }),
  logradouro: z.string().nonempty({ message: 'Campo obrigatório' }),
  numero: z.string().nonempty({ message: 'Campo obrigatório' }),
  complemento: z
    .string()
    .min(3, { message: 'Campo não pode possuir menos de 3 caracteres.' })
    .optional()
    .or(z.literal('')),
  bairro: z.string().nonempty({ message: 'Campo obrigatório' }),
  municipio: z.string().nonempty({ message: 'Campo obrigatório' }),
  uf: z.string().nonempty({ message: 'Campo obrigatório' }),
});

type FormData = z.infer<typeof formSchema>;

interface FormProps {
  changeCurrentStep: (step: number) => void;
}

export function FormDadosPessoais({ changeCurrentStep }: FormProps) {
  const [isCepLoading, setIsCepLoading] = useState(false);

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: async () => {
      const data = localStorage.getItem('medgold.dadosPessoais');
      if (data) {
        const dadosPessoais = JSON.parse(data);

        return {
          ...dadosPessoais,
          nascimento: format(parseISO(dadosPessoais.nascimento), 'dd/MM/yyyy'),
        };
      }

      return {};
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    setValue,
  } = methods;

  async function submitForm(data: FormData) {
    localStorage.setItem('medgold.dadosPessoais', JSON.stringify(data));

    changeCurrentStep(2);
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
                <Form.TextInput
                  label="Nascimento"
                  name="nascimento"
                  error={errors.nascimento}
                />
              </Form.Control>
              <Form.Control className="col-span-12 md:col-span-4 xl:col-span-4">
                <Form.TextInput label="Sexo" name="sexo" error={errors.sexo} />
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
