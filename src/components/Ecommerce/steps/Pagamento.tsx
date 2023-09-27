'use client';
import { CreditCard, ShoppingCart, UserSquare } from 'lucide-react';
import { FormProvider, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, CartaoDeCredito } from '@/components';
import { useState } from 'react';

const formSchema = z.object({
  nome: z.string().nonempty('O nome do portador é obrigatório'),
  numero: z.string().nonempty('O número do cartão é obrigatório'),
  validade: z.string().nonempty('A validade do cartão é obrigatória'),
  cvv: z.string().nonempty('Campo obrigatório'),
});

type FormData = z.infer<typeof formSchema>;

export function Pagamento() {
  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  async function submitForm(data: FormData) {
    console.log(data);
  }

  const [portador, setPortador] = useState('');
  const [numero, setNumero] = useState('');
  const [validade, setValidade] = useState('');
  const [cvv, setCvv] = useState('');

  const [cardSide, setCardSide] = useState<'front' | 'back'>('front');

  return (
    <div className="flex flex-col gap-8">
      <Form.Root>
        <FormProvider {...methods}>
          <Form.Body onSubmit={handleSubmit(submitForm)}>
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
                      name="nome"
                      uppercase
                      onChange={(evt) => setPortador(evt.target.value)}
                      autoComplete="off"
                      error={errors.nome}
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
