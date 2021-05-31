import { SignatureReflection } from 'typedoc';
import { ArrayType, ReferenceType } from 'typedoc/dist/lib/models/types';

import MarkdownTheme from '../../theme';
import { escape } from './escape';

export function typeAndParent(this: ArrayType | ReferenceType) {
  if (this) {
    if ('elementType' in this) {
      return typeAndParent.call(this.elementType) + '[]';
    } else {
      if (this.reflection) {
        const md: string[] = [];
        if (this.reflection instanceof SignatureReflection) {
          if (this.reflection.parent?.parent?.url) {
            md.push(
              getUrl(
                this.reflection.parent.parent.name,
                this.reflection.parent.parent.url,
              ),
            );
            if (this.reflection.parent.url) {
              md.push(
                getUrl(this.reflection.parent.name, this.reflection.parent.url),
              );
            }
          }
        } else {
          if (this.reflection.parent?.url) {
            md.push(
              getUrl(this.reflection.parent.name, this.reflection.parent.url),
            );
            if (this.reflection.url) {
              md.push(getUrl(this.reflection.name, this.reflection.url));
            }
          }
        }
        return md.join('.');
      } else {
        return escape(this.toString());
      }
    }
  }
  return 'void';
}

const getUrl = (name: string, url: string) =>
  `[${name}](${MarkdownTheme.HANDLEBARS.helpers.relativeURL(url)})`;
