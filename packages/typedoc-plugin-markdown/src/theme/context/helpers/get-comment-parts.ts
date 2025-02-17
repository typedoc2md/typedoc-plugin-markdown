import { backTicks, link } from '@plugin/libs/markdown/index.js';
import { escapeChars } from '@plugin/libs/utils/index.js';
import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { CommentDisplayPart, Reflection } from 'typedoc';

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
              let url: string | undefined;
              if (typeof part.target === 'string') {
                url = part.target;
              } else if ('id' in part.target) {
                if (this.router.hasUrl(part.target)) {
                  url = getReflectionUrl(this, part.target);
                }
                if (typeof url === 'undefined') {
                  let target = part.target.parent!;
                  while (!this.router.hasUrl(target)) {
                    target = target.parent!;
                  }
                  url = getReflectionUrl(this, target);
                }
              }
              const text =
                part.tag === '@linkcode'
                  ? backTicks(part.text)
                  : escapeChars(part.text);
              md.push(url ? link(text, url) : text);
            } else {
              md.push(escapeChars(part.text));
            }
            break;
          }
          default:
            md.push(escapeChars(part.text));
            break;
        }
        break;
      case 'relative-link':
        switch (typeof part.target) {
          case 'number': {
            const reflection = this.page.project.files.resolve(
              part.target,
              this.page.model.project,
            );
            let url: string | undefined;
            if (
              typeof reflection === 'object' &&
              this.router.hasUrl(reflection)
            ) {
              url = this.urlTo(reflection);
            } else {
              const fileName = this.page.project.files.getName(part.target);
              if (fileName) {
                const anchor = part.targetAnchor ? `#${part.targetAnchor}` : '';
                url = this.relativeURL(`_media/${fileName}${anchor}`);
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

export function getReflectionUrl(
  context: MarkdownThemeContext,
  reflection: Reflection,
) {
  return context.urlTo(reflection);
}
