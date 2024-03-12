// @ts-check

const { MarkdownTheme } = require('./dist');
const { Reflection, ProjectReflection, ReflectionKind } = require('typedoc');
const path = require('path');

/**
 * Local plugin to tweak TypeDoc output for nextra docs
 *
 *  @param {import("./dist").MarkdownApplication} app
 */
module.exports.load = (app) => {
  /**
   *
   * Define a custom theme so we amend the urls of the output.
   */
  app.renderer.defineTheme('nextra', NextAuthDocsTheme);

  /*app.renderer.markdownHooks.on(
    'page.begin',
    () => `import { Callout } from 'nextra/components';`,
  );*/
};

/**
 *
 */
class NextAuthDocsTheme extends MarkdownTheme {
  /** @param {import("typedoc").ProjectReflection} project */

  getUrls(project) {
    return super.getUrls(project).map((urlMapping) => {
      if (urlMapping.model.kind === ReflectionKind.Project) {
        return {
          ...urlMapping,
          url: `../${urlMapping.url}`,
        };
      }
      return urlMapping;
    });
  }

  /*getUrl(reflection) {
    const fullname = reflection.getFullName();
    const fullnameParts = fullname.split('.');
    if (reflection.kind !== ReflectionKind.Module) {
      fullnameParts.splice(
        fullnameParts.length - 1,
        0,
        ReflectionKind.singularString(reflection.kind).split(' ')[0],
      );
    }
    const url = `${fullnameParts.join('.')}.mdx`;
    reflection.url = url;
    return url;
  }*/
}
