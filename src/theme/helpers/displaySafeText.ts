import * as Handlebars from 'handlebars';
export function displaySafeText(text: string) {
  return new Handlebars.SafeString(text);
}
