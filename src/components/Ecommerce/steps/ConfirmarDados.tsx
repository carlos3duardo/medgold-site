'use client';
import { useCallback, useContext } from 'react';
import { ShoppingContext } from '@/contexts';
import { FolderHeart, Trash2, User, Users, Wallet } from 'lucide-react';
import { dateBr, maskCep, maskCpf, maskTelefone } from '@/helpers';
import { Button } from '@/components/Button';
import Link from 'next/link';
import { Dialog } from '@/components';

export function ConfirmarDados() {
  const { plano, titular, dependentes, removerDependente } =
    useContext(ShoppingContext);

  const handleRemoverDependente = useCallback(
    (dependenteId: string) => {
      Dialog.fire({
        title: 'Confirma a remoção do dependente?',
        showCancelButton: true,
      }).then((res) => {
        if (res.isConfirmed) {
          removerDependente(dependenteId);
        }
      });
    },
    [removerDependente],
  );

  return (
    <div className="flex flex-col gap-8">
      <section className="bg-slate-100 p-8 rounded-lg">
        <h2 className="flex items-center gap-2 text-2xl text-slate-600 font-extrabold mb-4 border-b border-slate-300 pb-3">
          <FolderHeart strokeWidth={3} /> Plano selecionado
        </h2>
        {plano && (
          <div>
            <h3 className="text-xl text-slate-600 font-bold">{plano.nome}</h3>
            <p>{plano.descricao}</p>
            <p>
              Valor mensal: R${' '}
              {new Intl.NumberFormat('pt-BR', {
                minimumFractionDigits: 2,
              }).format(plano.valor)}
            </p>
          </div>
        )}
      </section>
      <section className="bg-slate-100 p-8 rounded-lg">
        <h2 className="flex items-center gap-2 text-2xl text-slate-600 font-extrabold mb-4 border-b border-slate-300 pb-3">
          <User strokeWidth={3} /> Seus dados
        </h2>
        <div className="grid grid-cols-12 gap-4 font-semibold text-lg">
          <div className="col-span-12 lg:col-span-8">
            <label className="block text-sm text-slate-400">Nome:</label>
            <span className="uppercase">{titular.nome}</span>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <label className="block text-sm text-slate-400">CPF:</label>
            <span className="uppercase">{maskCpf(titular.cpf)}</span>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <label className="block text-sm text-slate-400">E-mail:</label>
            <span className="lowercase">{titular.email}</span>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <label className="block text-sm text-slate-400">Celular:</label>
            <span className="uppercase">{maskTelefone(titular.telefone)}</span>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <label className="block text-sm text-slate-400">Profissão:</label>
            <span className="uppercase">{titular.profissao}</span>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <label className="block text-sm text-slate-400">Nascimento:</label>
            <span className="uppercase">
              {titular.nascimento ? dateBr(titular.nascimento) : ''}
            </span>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <label className="block text-sm text-slate-400">Sexo:</label>
            <span className="uppercase">{titular.sexo}</span>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <label className="block text-sm text-slate-400">Endereço:</label>
            <span className="uppercase">
              {`${titular.logradouro} ${titular.numero}`}
              {titular.complemento && `, ${titular.complemento}`}
            </span>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <label className="block text-sm text-slate-400">Bairro:</label>
            <span className="uppercase">{titular.bairro}</span>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <label className="block text-sm text-slate-400">CEP:</label>
            <span className="uppercase">{maskCep(titular.cep)}</span>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <label className="block text-sm text-slate-400">Cidade:</label>
            <span className="uppercase">{titular.municipio}</span>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <label className="block text-sm text-slate-400">Estado:</label>
            <span className="uppercase">{titular.uf}</span>
          </div>
        </div>
      </section>

      {!!dependentes.length && (
        <section className="bg-slate-100 p-8 rounded-lg">
          <h2 className="flex items-center gap-2 text-2xl text-slate-600 font-extrabold mb-4 border-b border-slate-300 pb-3">
            <Users strokeWidth={3} /> Dependentes
          </h2>

          <table className="w-full">
            <thead>
              <tr>
                <th className="text-sm text-slate-400 text-left py-1 px-2">
                  Nome
                </th>
                <th className="text-sm text-slate-400 text-left py-1 px-2">
                  Nascimento
                </th>
                <th className="text-sm text-slate-400 text-left py-1 px-2">
                  CPF
                </th>
                <th className="text-sm text-slate-400 text-left py-1 px-2">
                  E-mail
                </th>
                <th className="text-sm text-slate-400 text-left py-1 px-2">
                  &nbsp;
                </th>
              </tr>
            </thead>
            <tbody>
              {dependentes.map((dep) => (
                <tr key={dep.id}>
                  <td className="text-base font-semibold border-t border-t-slate-300">
                    {dep.nome}
                  </td>
                  <td className="text-base font-semibold border-t border-t-slate-300">
                    {dateBr(dep.nascimento)}
                  </td>
                  <td className="text-base font-semibold border-t border-t-slate-300">
                    {maskCpf(dep.cpf)}
                  </td>
                  <td className="text-base font-semibold border-t border-t-slate-300">
                    {dep.email}
                  </td>
                  <td className="text-base font-semibold border-t border-t-slate-300">
                    <div className="flex gap-1 justify-end py-1">
                      <button
                        type="button"
                        className="p-2 rounded-sm hover:bg-red-400 hover:text-white transition-colors duration-200"
                        onClick={() => handleRemoverDependente(dep.id)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {plano && plano.dependentes < dependentes.length ? (
        <section className="bg-red-100 p-8 rounded-lg flex gap-8 justify-between items-center">
          <p className="message text-red-800">
            Você adicionou mais dependentes do que o seu plano permite.
            <br />
            Provavelmente você decidiu alterrar de plano durante o processo da
            compra.
            <br />
            Refaça o procedimento da compra, selecionando o plano correto ou
            removendo os dependentes do cadastro.
          </p>
          <Link href="/#contrate">
            <Button color="danger">Voltar</Button>
          </Link>
        </section>
      ) : (
        <div>
          <Button color="primary">
            <Wallet /> Seguir para Pagamento
          </Button>
        </div>
      )}
    </div>
  );
}
