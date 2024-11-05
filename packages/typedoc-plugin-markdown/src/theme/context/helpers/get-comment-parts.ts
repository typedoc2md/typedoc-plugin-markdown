import { link } from '@plugin/libs/markdown/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import * as fs from 'fs';
import { CommentDisplayPart, InlineTagDisplayPart } from 'typedoc';

export function getCommentParts(
  this: MarkdownThemeContext,
  model: CommentDisplayPart[],
): string {
  const md: string[] = [];
  for (const part of model) {
    switch (part.kind) {
      case 'text':
        md.push(part.text);
        break;
      case 'code':
        md.push(part.text);
        break;
      case 'inline-tag':
        switch (part.tag) {
          case '@label':
          case '@inheritdoc':
            break;
          case '@link':
          case '@linkcode':
          case '@linkplain': {
            if (part.target) {
              const url = getUrl(part);
              const wrap = part.tag === '@linkcode' ? '`' : '';
              md.push(
                url
                  ? `${link(`${wrap}${part.text}${wrap}`, this.getRelativeUrl(url))}`
                  : part.text,
              );
            } else {
              md.push(part.text);
            }
            break;
          }
          default:
            md.push(`{${part.tag} ${part.text}}`);
            break;
        }
        break;
      case 'relative-link':
        switch (typeof part.target) {
          case 'number': {
            const refl = this.page.project.files.resolve(
              part.target,
              this.page.model.project,
            );
            let url: string | undefined;
            if (typeof refl === 'object' && refl.url) {
              url = this.getRelativeUrl(refl.url);
            } else {
              const fileName = this.page.project.files.getName(part.target);
              if (fileName) {
                url = this.getRelativeUrl(`_media/${fileName}`);
              }
            }

            if (url) {
              md.push(url);
              break;
            }
          }
          // fall through
          case 'undefined':
            md.push(part.text);
            break;
        }
        break;
      default:
        md.push('');
    }
  }
  return md.join('');
}

function getUrl(part: InlineTagDisplayPart) {
  if ((part.target as any).url) {
    return (part.target as any).url;
  }

  if ((part.target as any)?.parent?.url) {
    return (part.target as any)?.parent?.url;
  }

  return typeof part.target === 'string' ? part.target : '';
}

export function isFile(file: string) {
  try {
    return fs.statSync(file).isFile();
  } catch {
    return false;
  }
}
