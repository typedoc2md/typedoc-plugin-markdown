/**
 * Theme definition
 */

/**
 * Typedoc imports
 */
import { DeclarationReflection, ProjectReflection, Reflection } from 'typedoc/dist/lib/models/reflections/index';
import { ReflectionKind } from 'typedoc/dist/lib/models/reflections/index';
import { ReflectionType } from 'typedoc/dist/lib/models/types/reflection';
import { UrlMapping } from 'typedoc/dist/lib/output/models/UrlMapping';
import { Renderer } from 'typedoc/dist/lib/output/renderer';
import { DefaultTheme } from 'typedoc/dist/lib/output/themes/DefaultTheme';
import { Options } from './options';
import { getAnchorRef } from './utils';

import * as fs from 'fs';
import * as path from 'path';

interface IOptions {
  includes: string;
  media: string;
  out: string;
  projectName: string;
  excludePrivate: boolean;
  mode: boolean;
  mdFlavour: string;
  mdSourcefilePrefix: string;
  mdOutFile: string;
  mdRemoveIndex: boolean;
  mdHideSources: boolean;
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
        anchorRef = anchor;
    }

    reflection.url = (container.url !== undefined ? container.url : '') + '#' + anchorRef;

    reflection.anchor = anchor;
    reflection.hasOwnDocument = false;

    reflection.traverse((child: any) => {
      if (child instanceof DeclarationReflection || Options.mdOutFile) {
        MarkdownTheme.applyAnchorUrl(child, container);
      }
    });
  }

  private options: IOptions;

  constructor(renderer: Renderer, basePath: string, options: any) {
    super(renderer, basePath);

    this.options = options;

    Options.mdFlavour = options.mdFlavour || 'github';
    Options.mdSourceRepo = options.dSourceRepo;
    Options.mdOutFile = options.mdOutFile;
    Options.includes = options.includes;
    Options.media = options.media;
    Options.excludePrivate = options.excludePrivate;
    Options.mode = options.mode;
    Options.mdHideIndexes = options.mdHideIndexes;
    Options.mdHideSources = options.mdHideSources;

    // remove uneccessary plugins
    renderer.removeComponent('marked');
    renderer.removeComponent('marked-links');
    renderer.removeComponent('assets');
    renderer.removeComponent('javascript-index');
    renderer.removeComponent('navigation');
    renderer.removeComponent('toc');
    renderer.removeComponent('pretty-print');

  }

  public isOutputDirectory(outPath: string): boolean {
    const files = fs.readdirSync(outPath);
    return fs.existsSync(path.join(outPath, 'index.md')) || (files.length === 1 && path.extname(files[0]) === '.md');
  }

  public getUrls(project: ProjectReflection): UrlMapping[] {

    const urls: UrlMapping[] = [];
    const entryPoint = this.getEntryPoint(project);

    Options.projectName = entryPoint.name;

    const additionalContext = {
      displayReadme: this.application.options.getValue('readme') !== 'none',
      hideBreadcrumbs: true,
      isIndex: true,
      isSinglePage: this.options.mdOutFile,
    };

    if (Options.mdOutFile && Options.mode === 0) {
      entryPoint.groups.forEach((group: any, i: number) => {
        if (group.kind === ReflectionKind.Interface) {
          entryPoint.groups.push(entryPoint.groups.splice(i, 1)[0]);
        }
      });
    }

    const context = Object.assign(entryPoint, additionalContext);

    if (this.options.mdOutFile) {
      urls.push(new UrlMapping(this.options.mdOutFile, context, 'reflection.hbs'));

      entryPoint.children.forEach((child: DeclarationReflection) => {
        MarkdownTheme.applyAnchorUrl(child, child.parent);
      });
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
