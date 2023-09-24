export function maskCpf(cpf: string) {
  if (!cpf) return '';

  if (cpf.length !== 11) {
    return cpf;
  }

  return (
    cpf.substring(0, 3) +
    '.' +
    cpf.substring(3, 6) +
    '.' +
    cpf.substring(6, 9) +
    '-' +
    cpf.substring(9, 11)
  );
}

export function maskCep(cep: string) {
  if (!cep) return '';

  if (cep.length !== 8) {
    return cep;
  }

  return (
    cep.substring(0, 2) + '.' + cep.substring(2, 5) + '-' + cep.substring(5, 8)
  );
}

export function maskCartaoCredito(numero: string) {
  if (!numero) return '';

  if (numero.length === 16) {
    return (
      numero.substring(0, 4) +
      ' ' +
      numero.substring(4, 8) +
      ' ' +
      numero.substring(8, 12) +
      ' ' +
      numero.substring(12, 16)
    );
  }

  return numero;
}

export function maskPrimeiroPagamento(periodo: string) {
  if (!periodo) return '';

  if (!Number.isInteger(periodo) && periodo.length === 6) {
    const mes = parseInt(periodo.substring(4, 6)) - 1;
    const ano = parseInt(periodo.substring(0, 4));

    const date = new Date(ano, mes, 1);

    return new Intl.DateTimeFormat('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      month: 'long',
      year: 'numeric',
    }).format(new Date(date));
  }

  return periodo + '::X';
}

export function maskTelefone(numero: string) {
  if (!numero) return '';

  if (numero.length === 10) {
    return (
      '(' +
      numero.substring(0, 2) +
      ') ' +
      numero.substring(2, 6) +
      '-' +
      numero.substring(6, 10)
    );
  }

  if (numero.length === 11) {
    return (
      '(' +
      numero.substring(0, 2) +
      ') ' +
      numero.substring(2, 7) +
      '-' +
      numero.substring(7, 11)
    );
  }

  return numero;
}
