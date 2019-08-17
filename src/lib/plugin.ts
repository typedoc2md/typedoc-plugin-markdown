import * as path from 'path';
import { Application, DeclarationReflection, ProjectReflection } from 'typedoc';
import { Converter } from 'typedoc/dist/lib/converter';
import { Component, ConverterComponent } from 'typedoc/dist/lib/converter/components';
import { Reflection } from 'typedoc/dist/lib/models/reflections/abstract';
import { PageEvent, RendererEvent } from 'typedoc/dist/lib/output/events';
import { Renderer } from 'typedoc/dist/lib/output/renderer';
import { Options } from 'typedoc/dist/lib/utils/options';

import { MarkdownTheme } from './theme/theme';
import { BitbucketTheme } from './theme/theme.bitbucket';
import { DocusaurusTheme } from './theme/theme.docusaurus';
import { GitbookTheme } from './theme/theme.gitbook';
import { VuePressTheme } from './theme/theme.vuepress';

type ThemeInstance = MarkdownTheme | DocusaurusTheme | VuePressTheme | BitbucketTheme | GitbookTheme;

@Component({ name: 'markdown' })
export class MarkdownPlugin extends ConverterComponent {
  static theme: ThemeInstance;
  static disableOutputCheck: boolean;
  static application: Application;
  static reflection: Reflection;
  static location: string;
  static page: PageEvent;
  static settings: {
    platform?: 'gitbook' | 'ducusaurus' | 'bitbucket' | 'vuepress';
    hideSources?: boolean;
    hideBreadcrumbs?: boolean;
    hideIndexes?: boolean;
    hideProjectTitle?: boolean;
    namedAnchors?: boolean;
    readme?: string;
    includes?: string;
    media?: string;
    mode?: number;
    mdHideSources?: boolean;
    mdSourceRepo?: string;
  };
  static project: ProjectReflection;

  initialize() {
    this.listenTo(this.owner, {
      [Converter.EVENT_RESOLVE_BEGIN]: this.onBegin,
    });
    this.listenTo(this.application.renderer, {
      [PageEvent.BEGIN]: this.onPageBegin,
      [PageEvent.END]: this.onPageEnd,
      [RendererEvent.BEGIN]: this.onRenderBegin,
    });
  }

  onBegin() {
    MarkdownPlugin.application = this.application;
    MarkdownPlugin.settings = this.application.options.getRawValues();
    MarkdownPlugin.setTheme(this.application.renderer, this.application.options);
  }

  onRenderBegin(renderer: RendererEvent) {
    if (MarkdownPlugin.theme) {
      MarkdownPlugin.project = renderer.project;
    }
  }

  onPageBegin(page: PageEvent) {
    if (MarkdownPlugin.theme) {
      MarkdownPlugin.reflection = page.model instanceof DeclarationReflection ? page.model : undefined;
      MarkdownPlugin.location = page.model.url ? page.model.url : '';
    }
  }

  onPageEnd(page: PageEvent) {
    if (MarkdownPlugin.theme) {
      page.contents = page.contents ? MarkdownPlugin.formatContents(page.contents) : '';
    }
  }

  static setTheme(renderer: Renderer, options: Options) {
    const themeName = options.getValue('theme');
    const themePath = path.join(__dirname, './theme/');
    const media = options.getValue('media');
    const platform = options.getValue('platform') || options.getValue('mdEngine');
    const theme = themeName === 'markdown' ? this.getTheme(platform, renderer, themePath, options) : null;
    if (theme) {
      if (
        media &&
        (theme instanceof DocusaurusTheme || theme instanceof GitbookTheme || theme instanceof VuePressTheme)
      ) {
        MarkdownPlugin.application.logger.warn(
          `[typedoc-markdown-plugin] media option is currently not supported in ${platform} theme`,
        );
        options.setValue('media', null);
      }
      renderer.theme = renderer.addComponent('theme', theme);
      MarkdownPlugin.theme = theme;
    }
  }

  static getTheme(platform: string, renderer: Renderer, themePath: string, options: any): ThemeInstance {
    if (platform) {
      if (platform === 'gitbook') {
        return new GitbookTheme(renderer, themePath, options);
      }
      if (platform === 'docusaurus') {
        return new DocusaurusTheme(renderer, themePath, options);
      }
      if (platform === 'bitbucket') {
        return new BitbucketTheme(renderer, themePath, options);
      }
      if (platform === 'vuepress') {
        return new VuePressTheme(renderer, themePath, options);
      }
    }
    return new MarkdownTheme(renderer, themePath, options);
  }

  static formatContents(contents: string) {
    return contents
      .replace(/[\r\n]{3,}/g, '\n\n')
      .replace(/!spaces/g, '')
      .trim();
  }
}
