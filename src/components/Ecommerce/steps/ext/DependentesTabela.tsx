import { useCallback, useContext } from 'react';
import { ShoppingContext } from '@/contexts';
import { Trash2, Users } from 'lucide-react';
import { dateBr, maskCpf } from '@/helpers';
import { Dialog } from '@/components';

export function DependentesTabela() {
  const { dependentes, plano, removerDependente } = useContext(ShoppingContext);

  const handleRemoverDependente = useCallback(
    (dependenteId: string) => {
      Dialog.fire({
        title: 'Confirma a remoção do dependente?',
        showCancelButton: true,
        confirmButtonText: 'Excluir',
        cancelButtonText: 'Cancelar',
      }).then((res) => {
        if (res.isConfirmed) {
          removerDependente(dependenteId);
        }
      });
    },
    [removerDependente],
  );

  if (!plano || !plano.dependentes) {
    return '';
  }

  if (!dependentes.length) {
    return (
      <div className="mt-4 flex gap-2 font-medium bg-yellow-50 border border-yellow-200 text-yellow-600 p-3 rounded-md">
        <figure>
          <Users />
        </figure>
        <div>Você ainda não possui dependentes cadastrados.</div>
      </div>
    );
  }

  return (
    <table className="w-full my-8 border-separate border-spacing-y-1">
      <thead className="mb-2">
        <tr className="bg-slate-200">
          <th className="text-sm py-2 px-3 font-semibold text-slate-400 text-left bg-slate-200 rounded-l-lg pl-4">
            Nome
          </th>
          <th className="text-sm py-2 px-3 font-semibold text-slate-400 text-left bg-slate-200">
            CPF
          </th>
          <th className="text-sm py-2 px-3 font-semibold text-slate-400 text-left bg-slate-200">
            Idade
          </th>
          <th className="text-sm py-2 px-3 font-semibold text-slate-400 text-left bg-slate-200">
            E-mail
          </th>
          <th className="text-sm py-2 px-3 font-semibold text-slate-400 text-left bg-slate-200 rounded-r-lg pr-4">
            &nbsp;
          </th>
        </tr>
      </thead>
      <tbody>
        {dependentes.length ? (
          dependentes.map((dep) => (
            <tr key={dep.id}>
              <td className="text-lg py-2 px-3 font-bold text-primary-600 text-left bg-primary-200 rounded-l-lg pl-4">
                {dep.nome.toUpperCase()}
              </td>
              <td className="text-lg py-2 px-3 font-bold text-primary-600 text-left bg-primary-200">
                {maskCpf(dep.cpf)}
              </td>
              <td className="text-lg py-2 px-3 font-bold text-primary-600 text-left bg-primary-200">
                {dateBr(dep.nascimento)}
              </td>
              <td className="text-lg py-2 px-3 font-bold text-primary-600 text-left bg-primary-200">
                {dep.email}
              </td>
              <td className="text-lg py-2 px-3 font-bold text-primary-600 text-left bg-primary-200 rounded-r-lg pr-4">
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
          ))
        ) : (
          <tr>
            <td colSpan={4}>Vazio</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
