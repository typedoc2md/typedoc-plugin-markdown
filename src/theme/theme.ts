/**
 * Theme definition
 */

/**
 * Typedoc imports
 */
import {
  DeclarationReflection,
  ParameterReflection,
  ProjectReflection,
} from 'typedoc/dist/lib/models/reflections/index';
import { UrlMapping } from 'typedoc/dist/lib/output/models/UrlMapping';
import { Renderer } from 'typedoc/dist/lib/output/renderer';
import { DefaultTheme } from 'typedoc/dist/lib/output/themes/DefaultTheme';

/**
 * Other libs
 */
import * as fs from 'fs';
import * as Handlebars from 'handlebars';
import * as path from 'path';

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

  private static templateToString(template: string) {
    return fs.readFileSync(path.join(__dirname, `/${template}`)).toString();
  }

  private static compileTemplate(template: string, data: {}): string {
    const source = MarkdownTheme.templateToString(template);
    const md: HandlebarsTemplateDelegate = Handlebars.compile(source);
    return md(data);
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

    // define handlebars helpers
    Handlebars.registerHelper('safeText', (text: string) => {
      return new Handlebars.SafeString(text);
    });

    Handlebars.registerHelper('compileIndex', (member: DeclarationReflection) => {
      let md = '';
      if (member.kindString !== 'Interface') {
        md = MarkdownTheme.compileTemplate('partials/index.hbs', member);
      }
      return new Handlebars.SafeString(md);
    });

    Handlebars.registerHelper('compileMember', (member: DeclarationReflection) => {

      // console.log(member.kindString);

      let md = '';
      switch (member.kindString) {

        case 'External module':
          md = MarkdownTheme.compileTemplate('templates/reflection.hbs', { model: member });
          break;

        case 'Class':
          md = MarkdownTheme.compileTemplate('templates/reflection.hbs', { model: member });
          break;

        default:
          const templateRef = member.kindString.replace(' ', '').toLowerCase();
          md = MarkdownTheme.compileTemplate(`partials/member.${templateRef}.hbs`, member);

      }

      return new Handlebars.SafeString(md);
    });

    Handlebars.registerHelper('getComment', (comment: string) => {
      let newComment: string = '';
      if (comment) {
        newComment = comment.replace('\n', '');
      }

      return newComment;
    });

  }

  public isOutputDirectory(path: string): boolean {
    return true;
  }

  public getUrls(project: ProjectReflection): UrlMapping[] {
    const urls: UrlMapping[] = [];
    const entryPoint = this.getEntryPoint(project);
    const additionalContext = { displayReadme: this.application.options.getValue('readme') !== 'none' };
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
