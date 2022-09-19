export function ellipseAddress(address: string, width = 6): string {
  return `${address.slice(0, width)}...${address.slice(-width)}`;
}

export function formatMoney(value: number): string {
  return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

export function formatInteger(value: number, percent: number): number {
  return parseInt(Number(value * percent).toFixed());
}

export function truncateString(
  text: string,
  startIndex: number,
  maxLength: number
): string {
  const truncatedText =
    text.length > maxLength ? text.slice(startIndex, maxLength) : text;
  return `${truncatedText}...`;
}

export function getImgUrl(section: string, id: string, format = 'jpeg'): string {
  return `/static/exhibitions/${section}/${id}.${format}`;
}
