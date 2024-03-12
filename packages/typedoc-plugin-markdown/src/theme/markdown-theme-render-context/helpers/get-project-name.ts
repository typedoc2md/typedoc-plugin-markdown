import { MarkdownThemeRenderContext } from '../../markdown-theme-render-context';

export function getProjectName(
  this: MarkdownThemeRenderContext,
  textContent: string,
) {
  const name = this.page.project.name;
  const version = this.page.project.packageVersion;
  return textContent
    .replace('{projectName}', name)
    .replace('{version}', version ? `v${version}` : '')
    .replace(/\s+/g, ' ')
    .trim();
}
