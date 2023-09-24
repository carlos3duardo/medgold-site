import { useContext, useEffect, useState } from 'react';
import { DependentesFormulario } from './ext/DependentesFormulario';
import { DependentesHeader } from './ext/DependentesHeader';
import { DependentesTabela } from './ext/DependentesTabela';
import { ShoppingContext } from '@/contexts';

export function AdicionarDependentes() {
  const [exibirTabela, setExibirTabela] = useState(false);
  const [exibirFormulario, setExibirFormulario] = useState(false);

  const { plano } = useContext(ShoppingContext);

  useEffect(() => {
    if (plano) {
      setExibirTabela(!!plano.dependentes);
      setExibirFormulario(!!plano.dependentes);
    }
  }, [plano]);

  return (
    <div>
      <DependentesHeader />
      {exibirTabela && <DependentesTabela />}
      {exibirFormulario && <DependentesFormulario />}
    </div>
  );
}
