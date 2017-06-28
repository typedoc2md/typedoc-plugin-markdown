import { DeclarationReflection, ProjectReflection, Reflection } from 'typedoc/dist/lib/models/reflections/index';
import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { UrlMapping } from 'typedoc/dist/lib/output/models/UrlMapping';
import { Renderer } from 'typedoc/dist/lib/output/renderer';
import { DefaultTheme } from 'typedoc/dist/lib/output/themes/DefaultTheme';
import { ThemeService } from './service';
import { getAnchorRef } from './utils';

import * as fs from 'fs';
import * as path from 'path';

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
            MarkdownTheme.applyAnchorUrl(child, reflection);
          } else {
            MarkdownTheme.buildUrls(child, urls);
          }
        }
      }
    } else {
      MarkdownTheme.applyAnchorUrl(reflection, reflection.parent);
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

  public static applyAnchorUrl(reflection: Reflection, container: Reflection) {

    const options = ThemeService.getOptions();

    let anchor = DefaultTheme.getUrl(reflection, container, '.');
    /* tslint:disable */
    if (reflection['isStatic']) {
      anchor = 'static-' + anchor;
    }
    /* tslint:enable */

    let anchorRef = '';

    switch (reflection.kind) {
      case ReflectionKind.ExternalModule:
        anchorRef = `external-module-${getAnchorRef(reflection.name)}-`;
        break;
      case ReflectionKind.Class:
        anchorRef = `class-${getAnchorRef(reflection.name)}`;
        break;
      case ReflectionKind.Interface:
        anchorRef = `interface-${getAnchorRef(reflection.name)}`;
        break;
      case ReflectionKind.Module:
        anchorRef = `module-${getAnchorRef(reflection.name)}`;
      case ReflectionKind.Enum:
        if (reflection.parent.kind === 0 || reflection.parent.kind === ReflectionKind.ExternalModule) {
          anchorRef = `module-${getAnchorRef(reflection.name)}`;
        } else {
          anchorRef = `enumeration-${getAnchorRef(reflection.name)}`;
        }
        break;
      default:

        if (options.mdFlavour === 'bitbucket') {
          let anchorPrefix = '';
          if (reflection.kind === ReflectionKind.ObjectLiteral) {
            anchorPrefix += 'object-literal-';
          }
          reflection.flags.forEach((flag) => {
            anchorPrefix += `${flag}-`;
          });

          anchorRef = `markdown-header-${getAnchorRef(anchorPrefix)}${getAnchorRef(reflection.name)}`;
        } else {
        anchorRef = anchor;
      }

    }

    reflection.url = (container.url !== undefined ? container.url : '') + '#' + anchorRef;

    reflection.anchor = anchor;
    reflection.hasOwnDocument = false;

    reflection.traverse((child: any) => {
      if (child instanceof DeclarationReflection || options.mdOutFile) {
        MarkdownTheme.applyAnchorUrl(child, container);
      }
    });
  }

  constructor(renderer: Renderer, basePath: string, options: any) {
    super(renderer, basePath);

    // remove uneccessary plugins
    renderer.removeComponent('assets');
    renderer.removeComponent('javascript-index');
    renderer.removeComponent('navigation');
    renderer.removeComponent('toc');
    renderer.removeComponent('pretty-print');

    // assign global theme service props
    ThemeService.options = options;
    ThemeService.resources = this.resources;

  }

  public isOutputDirectory(outPath: string): boolean {
    const files = fs.readdirSync(outPath);
    return fs.existsSync(path.join(outPath, 'README.md')) || (files.length === 1 && path.extname(files[0]) === '.md');
  }

  public getUrls(project: ProjectReflection): UrlMapping[] {

    const options = ThemeService.getOptions();

    const urls: UrlMapping[] = [];
    const entryPoint = this.getEntryPoint(project);

    ThemeService.projectName = entryPoint.name;

    const additionalContext = {
      displayReadme: this.application.options.getValue('readme') !== 'none',
      hideBreadcrumbs: true,
      isIndex: true,
      isSinglePage: options.mdOutFile,
    };

    if (options.mdOutFile && options.mode === 0) {
      entryPoint.groups.forEach((group: any, i: number) => {
        if (group.kind === ReflectionKind.Interface) {
          entryPoint.groups.push(entryPoint.groups.splice(i, 1)[0]);
        }
      });
    }

    const context = Object.assign(entryPoint, additionalContext);

    if (options.mdOutFile) {
      urls.push(new UrlMapping(options.mdOutFile, context, 'reflection.hbs'));

      entryPoint.children.forEach((child: DeclarationReflection) => {
        MarkdownTheme.applyAnchorUrl(child, child.parent);
      });
    } else {

      urls.push(new UrlMapping('README.md', context, 'reflection.hbs'));

      if (entryPoint.children) {
        entryPoint.children.forEach((child: DeclarationReflection) => {
          MarkdownTheme.buildUrls(child, urls);
        });
      }
    }
    return urls;
  }

}
