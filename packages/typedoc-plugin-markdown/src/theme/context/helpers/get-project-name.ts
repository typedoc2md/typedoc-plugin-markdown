import { MarkdownPageEvent } from '@plugin/events/index.js';
import { Reflection } from 'typedoc';

export function getProjectName(
  stringWithPlaceholders: string,
  page: MarkdownPageEvent<Reflection>,
  includeVersion = true,
) {
  return stringWithPlaceholders
    .replace('{projectName}', page.project.name)
    .replace(
      '{version}',
      includeVersion && page.project.packageVersion
        ? `v${page.project.packageVersion}`
        : '',
    )
    .replace(/\s+/g, ' ')
    .trim();
}
