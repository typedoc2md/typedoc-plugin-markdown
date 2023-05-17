import * as prettier from 'prettier';
import {
  DeclarationReflection,
  PageEvent,
  ProjectReflection,
  Reflection,
  RenderTemplate,
  Renderer,
  Theme,
} from 'typedoc';
import { MarkdownThemeRenderContext } from './render-context';
import { NavigationBuilder } from './renderer/navigation-builder';
import { UrlBuilder } from './renderer/url-builder';

export class MarkdownTheme extends Theme {
  private _prettierOptions: prettier.Options | null;

  constructor(renderer: Renderer) {
    super(renderer);
  }

  getRenderContext(pageEvent: PageEvent<Reflection> | null) {
    return new MarkdownThemeRenderContext(pageEvent, this.application.options);
  }

  getPrettierOptions() {
    if (!this._prettierOptions) {
      const prettierFile = prettier.resolveConfigFile.sync();
      this._prettierOptions = prettierFile
        ? prettier.resolveConfig.sync(prettierFile)
        : null;
    }
    return this._prettierOptions;
  }

  readmeTemplate = (pageEvent: PageEvent<ProjectReflection>) => {
    return this.getRenderContext(pageEvent).readmeTemplate(pageEvent);
  };

  projectTemplate = (pageEvent: PageEvent<ProjectReflection>) => {
    return this.getRenderContext(pageEvent).projectTemplate(pageEvent);
  };

  reflectionTemplate = (pageEvent: PageEvent<DeclarationReflection>) => {
    return this.getRenderContext(pageEvent).reflectionTemplate(pageEvent);
  };

  memberTemplate = (pageEvent: PageEvent<DeclarationReflection>) => {
    return this.getRenderContext(pageEvent).memberTemplate(pageEvent);
  };

  render(
    page: PageEvent<Reflection>,
    template: RenderTemplate<PageEvent<Reflection>>,
  ): string {
    return prettier.format(template(page) as string, {
      ...this.getPrettierOptions(),
      parser: 'markdown',
    });
  }

  getUrls(project: ProjectReflection) {
    return new UrlBuilder(this, this.application.options).getUrls(project);
  }

  getNavigation(project: ProjectReflection) {
    return new NavigationBuilder(this.application.options).getNavigation(
      project,
    );
  }
}
