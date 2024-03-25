import { MarkdownThemeRenderContext } from '@theme/render-context';
import { Options } from 'typedoc';

export function getPackagesMeta(
  this: MarkdownThemeRenderContext,
  key: string,
): { description?: string; options: Options } {
  return this.packagesMetaData[key];
}
