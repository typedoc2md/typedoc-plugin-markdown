import { MarkdownPageEvent } from '@plugin/events/index.js';
import { Reflection } from 'typedoc';

export function getProjectName(
  stringWithPlaceholders: string,
  page: MarkdownPageEvent<Reflection>,
) {
  return stringWithPlaceholders
    .replace('{projectName}', page.project.name)
    .replace(
      '{version}',
      page.project.packageVersion ? `v${page.project.packageVersion}` : '',
    )
    .replace(/\s+/g, ' ')
    .trim();
}
