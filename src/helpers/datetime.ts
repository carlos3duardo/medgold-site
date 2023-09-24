export function dateBr(date: string) {
  if (!date) {
    return '';
  }

  if (!date.length) {
    return '';
  }

  return new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'UTC',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour12: false,
  }).format(new Date(date));
}

export function dateTimeBr(date: string) {
  if (!date) {
    return '';
  }

  if (!date.length) {
    return '';
  }

  return new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'UTC',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  }).format(new Date(date));
}
