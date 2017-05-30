/**
 * Theme definition
 */

/**
 * Typedoc imports
 */
import { DeclarationReflection, ProjectReflection } from 'typedoc/dist/lib/models/reflections/index';
import { UrlMapping } from 'typedoc/dist/lib/output/models/UrlMapping';
import { Renderer } from 'typedoc/dist/lib/output/renderer';
import { DefaultTheme } from 'typedoc/dist/lib/output/themes/DefaultTheme';

interface IOptions {
  isSinglePage: boolean;
}

export class MarkdownTheme extends DefaultTheme {

  public static buildUrls(reflection: DeclarationReflection, urls: UrlMapping[]): UrlMapping[] {
    const mapping = DefaultTheme.getMapping(reflection);
    if (mapping) {
      const url = [mapping.directory, MarkdownTheme.getUrl(reflection) + '.md'].join('/');
      urls.push(new UrlMapping(url, reflection, mapping.template));
      reflection.url = url;
      reflection.hasOwnDocument = true;
      for (const key in reflection.children) {
        if (reflection.children.hasOwnProperty(key)) {
          const child = reflection.children[key];
          if (mapping.isLeaf) {
            DefaultTheme.applyAnchorUrl(child, reflection);
          } else {
            MarkdownTheme.buildUrls(child, urls);
          }
        }
      }
    } else {
      DefaultTheme.applyAnchorUrl(reflection, reflection.parent);
    }
    return urls;
  }

  private options: IOptions;

  constructor(renderer: Renderer, basePath: string, options: IOptions) {
    super(renderer, basePath);

    this.options = options;

    // remove uneccessary plugins
    renderer.removeComponent('assets');
    renderer.removeComponent('javascript-index');
    renderer.removeComponent('navigation');
    renderer.removeComponent('toc');
    renderer.removeComponent('pretty-print');

  }

  public isOutputDirectory(path: string): boolean {
    return true;
  }

  public getUrls(project: ProjectReflection): UrlMapping[] {
    const urls: UrlMapping[] = [];
    const entryPoint = this.getEntryPoint(project);
    const additionalContext = {
      displayReadme: this.application.options.getValue('readme') !== 'none',
      hideBack: true,
    };
    const context = Object.assign(entryPoint, additionalContext);
    if (this.options.isSinglePage) {
      urls.push(new UrlMapping('index.md', context, 'reflection.hbs'));
    } else {
      urls.push(new UrlMapping('index.md', context, 'reflection.hbs'));
      if (entryPoint.children) {
        entryPoint.children.forEach((child: DeclarationReflection) => {
          MarkdownTheme.buildUrls(child, urls);
        });
      }
    }
    return urls;
  }

}
