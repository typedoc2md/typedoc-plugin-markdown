import {
  DeclarationReflection,
  ProjectReflection,
  Reflection,
  RenderTemplate,
  Renderer,
  Theme,
} from 'typedoc';
import { MarkdownPageEvent } from '../plugin/events';

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
   *
   * @param renderer The TypeDoc renderer instance the theme is attached to.
   */
  constructor(renderer: Renderer) {
    super(renderer);
  }

  /**
   * Returns a render context instance for a page.
   */
  getRenderContext(pageEvent: MarkdownPageEvent<Reflection> | null) {
    return new MarkdownThemeRenderContext(pageEvent, this.application.options);
  }

  readmeTemplate = (pageEvent: MarkdownPageEvent<ProjectReflection>) => {
    return this.getRenderContext(pageEvent).readmeTemplate(pageEvent);
  };

  projectTemplate = (pageEvent: MarkdownPageEvent<ProjectReflection>) => {
    return this.getRenderContext(pageEvent).projectTemplate(pageEvent);
  };

  reflectionTemplate = (
    pageEvent: MarkdownPageEvent<DeclarationReflection>,
  ) => {
    return this.getRenderContext(pageEvent).reflectionTemplate(pageEvent);
  };

  memberTemplate = (pageEvent: MarkdownPageEvent<DeclarationReflection>) => {
    return this.getRenderContext(pageEvent).memberTemplate(pageEvent);
  };

  /**
   * Renders a template and page model to a string.
   */
  render(
    page: MarkdownPageEvent<Reflection>,
    template: RenderTemplate<MarkdownPageEvent<Reflection>>,
  ) {
    return template(page) as string;
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
