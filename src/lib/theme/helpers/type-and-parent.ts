import * as Handlebars from 'handlebars';
import { SignatureReflection } from 'typedoc';
import { ArrayType, ReferenceType } from 'typedoc/dist/lib/models/types';

export function typeAndParent(this: ArrayType | ReferenceType) {
  if (this instanceof ReferenceType && this.reflection) {
    const md = [];
    if (this.reflection instanceof SignatureReflection) {
      if (this.reflection.parent.parent.url) {
        md.push(
          `[${this.reflection.parent.parent.name}](${Handlebars.helpers.relativeURL.call(
            this,
            this.reflection.parent.parent.url,
          )})`,
        );
      } else {
        md.push(this.reflection.parent.parent.name);
      }
    } else {
      if (this.reflection.parent.url) {
        md.push(
          `[${this.reflection.parent.name}](${Handlebars.helpers.relativeURL.call(this, this.reflection.parent.url)})`,
        );
      } else {
        md.push(this.reflection.parent.name);
      }
      if (this.reflection.url) {
        md.push(`[${this.reflection.name}](${Handlebars.helpers.relativeURL.call(this, this.reflection.url)})`);
      } else {
        md.push(this.reflection.name);
      }
    }
    return md.join('.');
  }
  return 'void';
}
