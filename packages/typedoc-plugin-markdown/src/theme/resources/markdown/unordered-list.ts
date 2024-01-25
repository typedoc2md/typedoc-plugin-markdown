export function unorderedList<T>(items: T[]) {
  return items.map((item) => `- ${item}`).join('\n');
}
