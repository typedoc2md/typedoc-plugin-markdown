import * as Handlebars from 'handlebars';
export function safeText(text: string) {
  return new Handlebars.SafeString(text);
}
