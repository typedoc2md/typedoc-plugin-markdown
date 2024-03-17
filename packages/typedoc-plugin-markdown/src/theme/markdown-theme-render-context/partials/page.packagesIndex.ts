import { MarkdownThemeRenderContext } from '@plugin/theme';
import { heading, link, table } from '@plugin/theme/lib/markdown';
import {
  escapeChars,
  formatTableDescriptionCol,
  getFirstParagrph,
} from '@plugin/theme/lib/utils';
import { pipe } from '@plugin/theme/lib/utils/pipe';
import * as path from 'path';
import { ProjectReflection } from 'typedoc';

/**
 * Renders the page title.
 *
 * @category Page Partials
 */
export function packagesIndex(
  context: MarkdownThemeRenderContext,
  model: ProjectReflection,
): string {
  const md: string[] = [];

  md.push(heading(2, context.helpers.getText('label.packages')));

  if (context.options.getValue('indexFormat') === 'table') {
    const headers = ['Package', 'Version', 'Description'];
    const packageRows = model.children?.map((projectPackage) => {
      const urlTo = Boolean(projectPackage.readme)
        ? `${path.dirname(projectPackage.url || '')}/${context.options.getValue(
            'entryFileName',
          )}`
        : projectPackage.url;
      const comment = context.helpers.getDeclarationComment(projectPackage);
      return [
        `${link(
          `${escapeChars(projectPackage.name)}`,
          context.helpers.getRelativeUrl(urlTo || ''),
        )}`,
        projectPackage.packageVersion || '-',
        comment?.summary
          ? pipe(
              getFirstParagrph,
              formatTableDescriptionCol,
            )(context.partials.commentParts(comment.summary))
          : '-',
      ];
    });
    md.push(table(headers, packageRows || []));
  } else {
    const packagesList = model.children?.map((projectPackage) => {
      const urlTo = Boolean(projectPackage.readme)
        ? `${path.dirname(projectPackage.url || '')}/${context.options.getValue(
            'entryFileName',
          )}`
        : projectPackage.url;
      return urlTo
        ? `- ${link(
            `${escapeChars(projectPackage.name)}${projectPackage.packageVersion ? ` - v${projectPackage.packageVersion}` : ''}`,
            context.helpers.getRelativeUrl(urlTo),
          )}`
        : '';
    });
    md.push(packagesList?.join('\n') || '');
  }

  return md.join('\n\n');
}
