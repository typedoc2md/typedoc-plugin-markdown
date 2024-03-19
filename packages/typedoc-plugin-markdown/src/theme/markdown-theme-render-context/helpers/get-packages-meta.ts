import { PackagesMeta } from '@plugin/app/renderer';
import { MarkdownThemeRenderContext } from 'theme';

export function getPackagesMeta(
  this: MarkdownThemeRenderContext,
  key: string,
): PackagesMeta {
  return this.packagesMeta[key];
}
