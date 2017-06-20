/**
 * Theme definition
 */

/**
 * Typedoc imports
 */
import { DeclarationReflection, ProjectReflection, Reflection } from 'typedoc/dist/lib/models/reflections/index';
import { UrlMapping } from 'typedoc/dist/lib/output/models/UrlMapping';
import { Renderer } from 'typedoc/dist/lib/output/renderer';
import { DefaultTheme } from 'typedoc/dist/lib/output/themes/DefaultTheme';
import { Options } from './options';

import * as fs from 'fs';

import * as path from 'path';

interface IOptions {
  markdownFlavour: string;
  markdownSourcefilePrefix: string;
  markdownSinglePage: boolean;
  includes: string;
  media: string;
  out: string;
  excludePrivate: boolean;
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

  public static getUrl(reflection: Reflection, relative?: Reflection, separator: string = '.'): string {

    let url = reflection.getAlias();

    if (reflection.parent && reflection.parent !== relative && !(reflection.parent instanceof ProjectReflection)) {
      url = MarkdownTheme.getUrl(reflection.parent, relative, separator) + separator + url;
    }

    return url;
  }

  private options: IOptions;

  constructor(renderer: Renderer, basePath: string, options: any) {
    super(renderer, basePath);

    this.options = options;

    Options.markdownFlavour = options.markdownFlavour || 'github';
    Options.markdownSourcefilePrefix = options.markdownSourcefilePrefix;
    Options.markdownSinglePage = options.markdownSinglePage;
    Options.includes = options.includes;
    Options.media = options.media;
    Options.excludePrivate = options.excludePrivate;

    // remove uneccessary plugins
    renderer.removeComponent('marked');
    renderer.removeComponent('marked-links');
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
      isIndex: true,
      isSinglePage: this.options.markdownSinglePage,
    };
    const context = Object.assign(entryPoint, additionalContext);
    if (this.options.markdownSinglePage) {
      Object.assign(entryPoint, additionalContext);
      urls.push(new UrlMapping('index.md', context, 'reflection.hbs'));
     } else {
      // console.log(context);
      // fs.writeFile(path.join(__dirname, 'message.txt'), context, 'utf8');
       // console.log(context);
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
