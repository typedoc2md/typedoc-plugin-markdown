import { Options, format, resolveConfig, resolveConfigFile } from 'prettier';
import {
  DeclarationReflection,
  PageEvent,
  ProjectReflection,
  Reflection,
  RenderTemplate,
  Renderer,
  Theme,
} from 'typedoc';
import { MarkdownThemeRenderContext } from './markdown-theme-render-context';
import { NavigationBuilder } from './navigation-builder';
import { UrlBuilder } from './url-builder';

/**
 * This is in-built MarkdownTheme which extends TypeDocs Theme class.
 * This follows the implementation of TypeDoc's [DefaultTheme](https://typedoc.org/api/classes/DefaultThemeRender.html).
 *
 * The {@link render } and {@link getUrls} methods is where the work happens.
 */
export class MarkdownTheme extends Theme {
  /**
   * The resolved Prettier options.
   */
  private prettierOptions: Options | null;

  /**
   *
   * @param renderer The TypeDoc renderer instance the theme is attached to.
   */
  constructor(renderer: Renderer) {
    super(renderer);
  }

  /**
   * Returns a render context instance for a page.
   */
  getRenderContext(pageEvent: PageEvent<Reflection> | null) {
    return new MarkdownThemeRenderContext(pageEvent, this.application.options);
  }

  /**
   * Returns memoized {@link prettierOptions} using Prettier APIs to resolve the config.
   */
  private getPrettierOptions() {
    if (!this.prettierOptions) {
      const prettierFile = resolveConfigFile.sync();
      this.prettierOptions = prettierFile
        ? resolveConfig.sync(prettierFile)
        : null;
    }
    return this.prettierOptions;
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

  /**
   * Renders a template and page model to a Prettier formatted markdown string.
   */
  render(
    page: PageEvent<Reflection>,
    template: RenderTemplate<PageEvent<Reflection>>,
  ): string {
    return format(template(page) as string, {
      ...this.getPrettierOptions(),
      parser: 'markdown',
    });
  }

  /**
   * Maps the models of a project to output files.
   */
  getUrls(project: ProjectReflection) {
    return new UrlBuilder(this, this.application.options).getUrls(project);
  }

  getNavigation(project: ProjectReflection) {
    return new NavigationBuilder(this.application.options).getNavigation(
      project,
    );
  }
}
