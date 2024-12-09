import { RemarkPlugin } from '../types/remark-plugin.js';

export function getDefaultPlugins(defaultPluginsFlag: {
  gfm: boolean;
  frontmatter: boolean;
  mdx: boolean;
}) {
  const defaultPlugins: RemarkPlugin[] = [];

  if (defaultPluginsFlag.frontmatter) {
    defaultPlugins.push(['remark-frontmatter', ['yaml']]);
  }

  if (defaultPluginsFlag.gfm) {
    defaultPlugins.push('remark-gfm');
  }

  if (defaultPluginsFlag.mdx) {
    defaultPlugins.push('remark-mdx');
  }

  return defaultPlugins;
}
