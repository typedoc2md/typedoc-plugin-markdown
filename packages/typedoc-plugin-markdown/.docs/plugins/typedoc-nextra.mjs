// @ts-check

import * as fs from 'fs';
import * as path from 'path';
import { ReflectionKind } from 'typedoc';
import { MarkdownTheme } from 'typedoc-plugin-markdown';

/**
 * Local plugin to tweak TypeDoc output for nextra docs
 *
 *  @param {import("typedoc-plugin-markdown").MarkdownApplication} app
 */
export function load(app) {
  writeMetaJsFiles(app);
  app.renderer.defineTheme('nextra', NextraTheme);
}

/**
 * Writes Nextra _meta.js files to fix-up navigation labels.
 *
 *  @param {import("typedoc-plugin-markdown").MarkdownApplication} app
 */
function writeMetaJsFiles(app) {
  app.renderer.postRenderAsyncJobs.push(async (output) => {
    /**
     *
     * @param {import("typedoc-plugin-markdown").NavigationItem[]} navigationItems
     * @param {string} outputDirectory
     * @param {Record<string,string>} defaultValue
     */
    const metaOut = { index: 'Index' };
    output.navigation?.forEach((item) => {
      metaOut[item.title] = { type: 'separator', title: item.title };
      if (item.children) {
        item.children.forEach((child) => {
          const key = path.parse(child.url || '').name;
          metaOut[key] = child.title;
        });
      }
    });

    fs.writeFileSync(
      path.join(output.outputDirectory, '_meta.js'),
      `export default ${JSON.stringify(metaOut, null, 2)}`,
    );
  });
}

export function slugifyUrl(url) {
  return url
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export class NextraTheme extends MarkdownTheme {
  getUrls(project) {
    return super.getUrls(project).map((urlMapping) => {
      if (urlMapping.model.kind === ReflectionKind.Project) {
        return urlMapping;
      }
      return {
        ...urlMapping,
        url: this.getUrl(urlMapping.model),
      };
    });
  }

  getUrl(reflection) {
    const fullname = reflection.getFullName();
    const fullnameParts = fullname.split('.');
    if (reflection.kind !== ReflectionKind.Module) {
      fullnameParts.splice(
        fullnameParts.length - 1,
        0,
        ReflectionKind.singularString(reflection.kind).split(' ')[0],
      );
    }
    const url = `${fullnameParts.join('.')}.md`;
    reflection.url = url;
    return url;
  }
}
