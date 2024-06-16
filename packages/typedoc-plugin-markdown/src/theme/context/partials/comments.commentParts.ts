import * as fs from 'fs';
import { link } from 'libs/markdown';
import { MarkdownThemeContext } from 'theme';
import { CommentDisplayPart, InlineTagDisplayPart } from 'typedoc';

export function commentParts(
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
