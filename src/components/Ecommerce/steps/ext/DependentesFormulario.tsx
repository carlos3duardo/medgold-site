import { useContext } from 'react';
import * as z from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronsRight, UserPlus } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { Form } from '@/components';
import { ShoppingContext } from '@/contexts';
import { Button } from '@/components/Button';
import { isCPF, isDate } from 'brazilian-values';

export function DependentesFormulario() {
  const { adicionarDependente, plano, dependentes, atualizarEtapa } =
    useContext(ShoppingContext);

  const formSchema = z.object({
    nome: z
      .string()
      .nonempty('O nome completo é obrigatório')
      .min(10, { message: 'O nome não pode conter menos de 10 caracteres.' })
      .max(120, { message: 'O nome não pode conter mais de 120 caracteres.' })
      .transform((value) => value.toUpperCase()),
    email: z
      .string()
      .nonempty({ message: 'O e-mail é um campo obrigatório' })
      .email({ message: 'Endereço de e-mail inválido' })
      .transform((value) => value.toLowerCase()),
    cpf: z
      .string()
      .nonempty({ message: 'O CPF é um campo obrigatório.' })
      .refine(
        (value) => {
          return isCPF(value);
        },
        { message: 'CPF inválido.' },
      )
      .transform((value) => {
        return value.replace(/\D/g, '');
      }),
    nascimento: z
      .string()
      .nonempty({ message: 'O nascimento é um campo obrigatório.' })
      .refine(
        (value) => {
          return isDate(value);
        },
        { message: 'Data inválida.' },
      )
      .transform((val) => {
        if (val.length === 10) {
          const [d, m, Y] = val.split('/');

          return `${Y}-${m}-${d}`;
        }
      }),
  });

  type FormData = z.infer<typeof formSchema>;

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
      email: '',
      cpf: '',
      nascimento: '',
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  async function submitForm(data: FormData) {
    adicionarDependente({
      id: uuidv4(),
      nome: data.nome,
      nascimento: data.nascimento ? data.nascimento : '',
      email: data.email,
      cpf: data.cpf,
    });

    reset();
  }

  return (
    <div>
      <h2 className="text-xl text-slate-600 font-bold my-4">
        {!dependentes || !!dependentes.length ? (
          <>Você pode adicionar até {plano?.dependentes} dependentes.</>
        ) : plano && plano.dependentes > dependentes.length ? (
          <>
            Você pode adicionar +{plano.dependentes - dependentes.length}{' '}
            {plano.dependentes - dependentes.length > 1
              ? ' dependentes'
              : 'dependente'}
            .
          </>
        ) : (
          ''
        )}
      </h2>

      {plano && plano.dependentes > dependentes.length ? (
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
                <Form.Control className="col-span-12 mb:col-span-4 xl:col-span-4">
                  <Form.DateInput
                    label="Nascimento"
                    name="nascimento"
                    error={errors.nascimento}
                  />
                </Form.Control>
                <Form.Control className="col-span-12 mb:col-span-8 xl:col-span-8">
                  <Form.TextInput
                    label="E-mail"
                    name="email"
                    lowercase
                    error={errors.email}
                  />
                </Form.Control>
                <Form.Control className="col-span-12 mb:col-span-4 xl:col-span-4">
                  <Form.CpfInput label="CPF" name="cpf" error={errors.cpf} />
                </Form.Control>
              </Form.Fieldset>
              <Form.Separator />

              <Form.Footer>
                <Form.Submit>
                  <UserPlus /> Adicionar dependente
                </Form.Submit>

                <Button
                  color="primary"
                  variant="outline"
                  onClick={() => atualizarEtapa(3)}
                >
                  Prosseguir <ChevronsRight />
                </Button>
              </Form.Footer>
            </Form.Body>
          </FormProvider>
        </Form.Root>
      ) : (
        <div>
          <Button color="primary" onClick={() => atualizarEtapa(3)}>
            Prosseguir <ChevronsRight />
          </Button>
        </div>
      )}
    </div>
  );
}
