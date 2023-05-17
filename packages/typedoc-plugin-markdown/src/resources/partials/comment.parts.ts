import { CommentDisplayPart } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../render-context';

export function commentParts(
  context: MarkdownThemeRenderContext,
  parts: CommentDisplayPart[],
): string {
  const md: string[] = [];
  for (const part of parts) {
    switch (part.kind) {
      case 'text':
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
              const url =
                typeof part.target === 'string'
                  ? part.target
                  : context.relativeURL((part.target as any).url);
              const wrap = part.tag === '@linkcode' ? '`' : '';
              md.push(url ? `[${wrap}${part.text}${wrap}](${url})` : part.text);
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
