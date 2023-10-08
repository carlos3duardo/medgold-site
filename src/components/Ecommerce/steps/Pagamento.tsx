'use client';
import {
  useState,
  FocusEvent,
  useCallback,
  MouseEvent,
  useContext,
} from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreditCard, ShoppingCart, UserSquare } from 'lucide-react';
import { Form, CartaoDeCredito } from '@/components';
import { isCPF } from 'brazilian-values';
import { ShoppingContext } from '@/contexts';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  portador: z.string().nonempty('O nome do portador é obrigatório'),
  numero: z.string().nonempty('O número do cartão é obrigatório'),
  validade: z.string().nonempty('A validade do cartão é obrigatória'),
  cvv: z.string().nonempty('Campo obrigatório'),
  portadorNome: z
    .string()
    .nonempty('O nome completo é obrigatório.')
    .min(10, {
      message: 'O nome completo não pode ter menos de 10 caracteres.',
    })
    .max(120, {
      message: 'O nome completo não pode possuir mais de 120 caracteres',
    }),
  portadorCpf: z
    .string()
    .refine(
      (value) => {
        return isCPF(value);
      },
      { message: 'CPF inválido.' },
    )
    .transform((val) => {
      return val.replace(/\D/g, '');
    }),
  portadorEmail: z
    .string()
    .trim()
    .nonempty({ message: 'Campo obrigatório.' })
    .email({ message: 'Endereço de e-mail inválido.' }),
  portadorTelefone: z
    .string()
    .trim()
    .nonempty({ message: 'Campo obrigatório' })
    .transform((value) => {
      return value.replace(/\D/g, '');
    }),
  portadorCep: z
    .string()
    .nonempty({ message: 'Campo obrigatório' })
    .length(8, { message: 'CEP Inválido.' })
    .transform((value) => {
      return value.replace(/\D/g, '');
    }),
  portadorLogradouro: z.string().nonempty({ message: 'Campo obrigatório' }),
  portadorNumero: z.string().nonempty({ message: 'Campo obrigatório' }),
  portadorComplemento: z
    .string()
    .min(3, { message: 'Campo não pode possuir menos de 3 caracteres.' })
    .optional()
    .or(z.literal('')),
  portadorBairro: z.string().nonempty({ message: 'Campo obrigatório' }),
  portadorMunicipio: z.string().nonempty({ message: 'Campo obrigatório' }),
  portadorUf: z.string().nonempty({ message: 'Campo obrigatório' }),
});

type FormData = z.infer<typeof formSchema>;

export function Pagamento() {
  const [isCepLoading, setIsCepLoading] = useState(false);
  const { titular, limparDados } = useContext(ShoppingContext);

  const router = useRouter();

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      portadorCpf: '',
      portadorCep: '',
      portadorTelefone: '',
    },
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = methods;

  async function submitForm(data: FormData) {
    const ipRequest = await fetch('https://ipv4.seeip.org/jsonip');
    const ipResponseJson = await ipRequest.json();

    await axios
      .post('/checkout', {
        ip: ipResponseJson.ip,
        cartao: {
          numero: data.numero,
          portador: data.portador,
          validade: data.validade,
          cvv,
        },
        portador: {
          nome: data.portadorNome,
          cpf: data.portadorCpf,
          email: data.portadorEmail,
          telefone: data.portadorTelefone,
          logradouro: data.portadorLogradouro,
          numero: data.portadorNumero,
          complemento: data.portadorComplemento,
          cep: data.portadorCep,
          bairro: data.portadorBairro,
          municipio: data.portadorMunicipio,
          uf: data.portadorUf,
        },
      })
      .then(() => {
        limparDados();
        router.push('/sucesso');
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const [portador, setPortador] = useState('');
  const [numero, setNumero] = useState('');
  const [validade, setValidade] = useState('');
  const [cvv, setCvv] = useState('');

  const [cardSide, setCardSide] = useState<'front' | 'back'>('front');

  const handleBuscaCep = (evt: FocusEvent<HTMLInputElement>) => {
    const cep = evt.target.value.replace(/\D/g, '');

    setIsCepLoading(true);

    fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)
      .then((res) => res.json())
      .then((res) => {
        setValue('portadorLogradouro', res.street);
        setValue('portadorBairro', res.neighborhood);
        setValue('portadorMunicipio', res.city);
        setValue('portadorUf', res.state);
      })
      .finally(() => {
        setIsCepLoading(false);
      });
  };

  const handleClickPreenchePortadorCartao = useCallback(
    (evt: MouseEvent<HTMLInputElement>) => {
      const checked = evt.currentTarget.checked;

      setValue('portadorNome', checked ? titular.nome : '');
      setValue('portadorCpf', checked ? titular.cpf : '');
      setValue('portadorEmail', checked ? titular.email : '');
      setValue('portadorTelefone', checked ? titular.telefone : '');

      setValue('portadorCep', checked ? titular.cep : '');
      setValue('portadorLogradouro', checked ? titular.logradouro : '');
      setValue('portadorNumero', checked ? titular.numero : '');
      setValue('portadorComplemento', checked ? titular.complemento : '');
      setValue('portadorBairro', checked ? titular.bairro : '');
      setValue('portadorMunicipio', checked ? titular.municipio : '');
      setValue('portadorUf', checked ? titular.uf : '');
    },
    [
      setValue,
      titular.bairro,
      titular.cep,
      titular.complemento,
      titular.cpf,
      titular.email,
      titular.logradouro,
      titular.municipio,
      titular.nome,
      titular.numero,
      titular.telefone,
      titular.uf,
    ],
  );

  return (
    <div className="flex flex-col gap-8">
      <Form.Root>
        <FormProvider {...methods}>
          <Form.Body
            onSubmit={handleSubmit(submitForm)}
            isSubmitting={isSubmitting}
            data-submitting={isSubmitting}
          >
            <section className="mt-8">
              <h2 className="flex items-center gap-2 text-2xl text-slate-600 font-extrabold mb-4 border-b border-slate-300 pb-3">
                <CreditCard strokeWidth={3} /> Dados do cartão
              </h2>
              <div className="w-full flex gap-8">
                <Form.Fieldset className="flex-1">
                  <Form.Control className="col-span-12">
                    <Form.TextInput
                      label="Nome do portador"
                      placeholder="Igual ao impresso no cartão"
                      name="portador"
                      uppercase
                      onChange={(evt) => setPortador(evt.target.value)}
                      autoComplete="off"
                      error={errors.portador}
                    />
                  </Form.Control>
                  <Form.Control className="col-span-12">
                    <Form.CartaoDeCreditoInput
                      label="Número"
                      name="numero"
                      onChange={(evt) => setNumero(evt.target.value)}
                      error={errors.numero}
                    />
                  </Form.Control>

                  <Form.Control className="col-span-6 lg:col-span-7">
                    <Form.MaskInput
                      label="Validade (mm/aa)"
                      name="validade"
                      mask="99/99"
                      onChange={(evt) => setValidade(evt.target.value)}
                      error={errors.validade}
                    />
                  </Form.Control>
                  <Form.Control className="col-span-6 lg:col-span-5">
                    <Form.TextInput
                      label="CVV"
                      name="cvv"
                      maxLength={3}
                      error={errors.cvv}
                      onChange={(evt) => setCvv(evt.target.value)}
                      onFocus={() => setCardSide('back')}
                      onBlur={() => setCardSide('front')}
                    />
                  </Form.Control>
                </Form.Fieldset>
                <figure className="flex-1">
                  <CartaoDeCredito
                    show={cardSide}
                    holder={portador}
                    number={numero}
                    expiresAt={validade}
                    cvv={cvv}
                  />
                </figure>
              </div>
            </section>
            <section className="mt-8">
              <h2 className="flex items-center gap-2 text-2xl text-slate-600 font-extrabold mb-4 border-b border-slate-300 pb-3">
                <UserSquare strokeWidth={3} /> Dados do portador
              </h2>
              <Form.Fieldset className="flex-1">
                <Form.Control className="col-span-12">
                  <Form.Checkbox
                    name="repetir-portador"
                    label="Clique aqui se o titular e o portador do cartão são a mesma pessoa."
                    onClick={(evt) => handleClickPreenchePortadorCartao(evt)}
                  />
                </Form.Control>
                <Form.Control className="col-span-12 mb:col-span-8 xl:col-span-8">
                  <Form.TextInput
                    label="Nome completo"
                    name="portadorNome"
                    uppercase
                    error={errors.portadorNome}
                  />
                </Form.Control>
                <Form.Control className="col-span-12 md:col-span-4 xl:col-span-4">
                  <Form.CpfInput
                    label="CPF"
                    name="portadorCpf"
                    error={errors.portadorCpf}
                  />
                </Form.Control>
                <Form.Control className="col-span-12 mb:col-span-8 xl:col-span-8">
                  <Form.TextInput
                    label="E-mail"
                    name="portadorEmail"
                    error={errors.portadorEmail}
                  />
                </Form.Control>
                <Form.Control className="col-span-12 mb:col-span-4 xl:col-span-4">
                  <Form.CelularInput
                    label="Celular"
                    name="portadorTelefone"
                    error={errors.portadorTelefone}
                  />
                </Form.Control>
              </Form.Fieldset>
              <Form.Separator />

              <Form.Fieldset>
                <Form.Control className="col-span-12 md:col-span-4 xl:col-span-3">
                  <Form.CepInput
                    label="CEP"
                    name="portadorCep"
                    error={errors.portadorCep}
                    onBlur={handleBuscaCep}
                    isLoading={isCepLoading}
                  />
                </Form.Control>
                <Form.Control className="col-span-9">
                  <Form.TextInput
                    label="Endereço"
                    name="portadorLogradouro"
                    error={errors.portadorLogradouro}
                  />
                </Form.Control>
                <Form.Control className="col-span-3">
                  <Form.TextInput
                    label="Número"
                    name="portadorNumero"
                    error={errors.portadorNumero}
                  />
                </Form.Control>
                <Form.Control className="col-span-4">
                  <Form.TextInput
                    label="Complemento"
                    name="portadorComplemento"
                    error={errors.portadorComplemento}
                  />
                </Form.Control>
                <Form.Control className="col-span-5">
                  <Form.TextInput
                    label="Bairro"
                    name="portadorBairro"
                    error={errors.portadorBairro}
                    readOnly
                  />
                </Form.Control>
                <Form.Control className="col-span-7">
                  <Form.TextInput
                    label="Cidade"
                    name="portadorMunicipio"
                    error={errors.portadorMunicipio}
                    readOnly
                  />
                </Form.Control>
                <Form.Control className="col-span-5">
                  <Form.TextInput
                    label="Estado"
                    name="portadorUf"
                    error={errors.portadorUf}
                    readOnly
                  />
                </Form.Control>
              </Form.Fieldset>
            </section>
            <div>
              <Form.Submit>
                <ShoppingCart strokeWidth={3} /> Confirmar
              </Form.Submit>
            </div>
          </Form.Body>
        </FormProvider>
      </Form.Root>
    </div>
  );
}
