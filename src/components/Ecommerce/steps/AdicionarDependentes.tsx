import { useContext, useEffect, useState } from 'react';
import { DependentesFormulario } from './ext/DependentesFormulario';
import { DependentesHeader } from './ext/DependentesHeader';
import { DependentesTabela } from './ext/DependentesTabela';
import { ShoppingContext } from '@/contexts';

export function AdicionarDependentes() {
  const [exibirTabela, setExibirTabela] = useState(false);
  const [exibirFormulario, setExibirFormulario] = useState(false);

  const { ofertaId, ofertas } = useContext(ShoppingContext);

  useEffect(() => {
    if (ofertaId && ofertas) {
      const oferta = ofertas.find((item) => item.id === ofertaId);

      if (oferta) {
        setExibirTabela(!!oferta.dependentes);
        setExibirFormulario(!!oferta.dependentes);
      }
    }
  }, [ofertaId, ofertas]);

  return (
    <div>
      <DependentesHeader />
      {exibirTabela && <DependentesTabela />}
      {exibirFormulario && <DependentesFormulario />}
    </div>
  );
}
