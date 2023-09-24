import { z } from 'zod';

export const TitularFormSchema = z.object({
  nome: z
    .string()
    .trim()
    .nonempty({ message: 'É obrigatório informar o nome.' })
    .min(10, { message: 'Campo não pode possuir menos de 10 caracteres.' })
    .max(120, { message: 'Campo não pode possuir mais de 120 caracteres.' }),
  cpf: z
    .string()
    .length(14, { message: 'CPF inválido.' })
    .transform((val) => {
      return val.replace(/\D/g, '');
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
  sexo_id: z.string().nonempty({ message: 'Campo obrigatório' }),
  cep: z
    .string()
    .nonempty({ message: 'Campo obrigatório' })
    .length(10, { message: 'CEP Inválido.' }),
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

export type TitularFormType = z.infer<typeof TitularFormSchema>;
