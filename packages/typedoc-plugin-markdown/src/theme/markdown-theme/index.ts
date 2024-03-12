import { MarkdownPageEvent } from '@plugin/app/events';
import { OutputFileStrategy, TextContentMappings } from '@plugin/app/options';
import { MarkdownRenderer } from '@plugin/app/renderer';
import { RenderTemplate } from '@plugin/theme/theme-types';
import {
  DeclarationReflection,
  DefaultTheme,
  ProjectReflection,
  Reflection,
  ReflectionKind,
  Theme,
} from 'typedoc';
import { TEXT_MAPPING_DEFAULTS } from '../../app/options/text-mappings';
import { MarkdownThemeRenderContext } from '../markdown-theme-render-context';
import { getNavigation } from './get-navigation';
import { getUrls } from './get-urls';

/**
 * This is in-built MarkdownTheme which extends TypeDocs Theme class.
 * This follows the implementation of TypeDoc's {@link DefaultTheme}.
 *
 */
export class MarkdownTheme extends Theme {
  readonly textMappings: TextContentMappings;

  constructor(renderer: MarkdownRenderer) {
    super(renderer);
    this.textMappings = {
      ...TEXT_MAPPING_DEFAULTS,
      ...(this.application.options.getValue('textContentMappings') || {}),
    };
  }

  /**
   * Renders a template and page model to a string.
   */
  render(
    page: MarkdownPageEvent<Reflection>,
    template: RenderTemplate<MarkdownPageEvent<Reflection>>,
  ) {
    try {
      return (
        template(page)
          .replace(/[\r\n]{3,}/g, '\n\n')
          .replace(/^\s+|\s+$/g, '') + '\n'
      );
    } catch (e) {
      console.log(e);
      this.application.logger.error(`Error rendering page ${page.url}.`);
      throw new Error(e);
    }
  }

  /**
   * Creates a new instance of the current theme context and calls the readme() method on the context's {@link MarkdownThemeRenderContext.templates | templates} namespace.
   *
   * @internal
   */
  readmeTemplate = (page: MarkdownPageEvent<ProjectReflection>) => {
    return this.getRenderContext(page).templates.readme(page.model);
  };

  /**
   * Creates a new instance of the current theme context and calls the project() method on the context's {@link MarkdownThemeRenderContext.templates | templates} namespace.
   *
   * @internal
   */
  projectTemplate = (page: MarkdownPageEvent<ProjectReflection>) => {
    return this.getRenderContext(page).templates.project(page.model);
  };

  /**
   * Creates a new instance of the current theme context and calls the reflection() method on the context's {@link MarkdownThemeRenderContext.templates | templates} namespace.
   *
   * @internal
   */
  reflectionTemplate = (page: MarkdownPageEvent<DeclarationReflection>) => {
    return this.getRenderContext(page).templates.reflection(page.model);
  };

  getRenderContext(page: MarkdownPageEvent<Reflection>) {
    return new MarkdownThemeRenderContext(this, page, this.application.options);
  }

  getUrls(project: ProjectReflection) {
    return getUrls(this, project);
  }

  getNavigation(project: ProjectReflection) {
    return getNavigation(this, project);
  }

  getTemplateMapping(
    kind: ReflectionKind,
    outputFileStrategyOverride?: OutputFileStrategy,
  ) {
    const outputFileStrategy =
      outputFileStrategyOverride ||
      this.application.options.getValue('outputFileStrategy');

    const directoryName = (reflectionKind: ReflectionKind) => {
      const pluralString = ReflectionKind.pluralString(reflectionKind);
      return pluralString.replace(/[\s_-]+/g, '-').toLowerCase();
    };

    const memberMapping = (
      template: (pageEvent: MarkdownPageEvent<any>) => string,
      kind: ReflectionKind,
    ) => {
      return {
        template,
        directory: directoryName(kind),
        kind: kind,
      };
    };
    const mappings = {
      [ReflectionKind.Module]: {
        template: this.reflectionTemplate,
        directory: null,
        kind: ReflectionKind.Module,
      },
      [ReflectionKind.Namespace]: {
        template: this.reflectionTemplate,
        directory: directoryName(ReflectionKind.Namespace),
        kind: ReflectionKind.Namespace,
      },
    };

    if (outputFileStrategy === OutputFileStrategy.Members) {
      mappings[ReflectionKind.Class] = memberMapping(
        this.reflectionTemplate,
        ReflectionKind.Class,
      );

      mappings[ReflectionKind.Interface] = memberMapping(
        this.reflectionTemplate,
        ReflectionKind.Interface,
      );

      mappings[ReflectionKind.Enum] = memberMapping(
        this.reflectionTemplate,
        ReflectionKind.Enum,
      );

      mappings[ReflectionKind.Function] = memberMapping(
        this.reflectionTemplate,
        ReflectionKind.Function,
      );

      mappings[ReflectionKind.TypeAlias] = memberMapping(
        this.reflectionTemplate,
        ReflectionKind.TypeAlias,
      );

      mappings[ReflectionKind.Variable] = memberMapping(
        this.reflectionTemplate,
        ReflectionKind.Variable,
      );
    }

    return mappings[kind];
  }
}
