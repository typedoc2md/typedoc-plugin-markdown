import { DeclarationReflection } from 'typedoc';

import { MarkdownPlugin } from '../../plugin';
import { heading } from './heading';

export function memberTitle(this: DeclarationReflection) {
  const md = [heading(3)];
  if (MarkdownPlugin.settings.namedAnchors) {
    md.push(`<a id="${this.anchor}" name="${this.anchor}"></a>`);
  }
  if (this.flags) {
    md.push(this.flags.map(flag => `\`${flag}\``).join(' '));
  }
  md.push(this.name);
  return md.join(' ');
}
