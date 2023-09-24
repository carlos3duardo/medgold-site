export function toCamelCase(str: string) {
  return str
    .split(' ')
    .map((word) => {
      if (['da', 'de', 'do', 'dos'].includes(word)) {
        return word.toLocaleLowerCase();
      }

      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}
