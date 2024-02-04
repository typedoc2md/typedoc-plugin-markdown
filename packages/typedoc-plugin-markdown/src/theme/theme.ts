import {
  DeclarationReflection,
  DefaultTheme,
  ProjectReflection,
  Reflection,
  ReflectionKind,
  Theme,
} from 'typedoc';
import { MarkdownPageEvent, OutputFileStrategy } from '../plugin';
import { getNavigation } from './core/navigation';
import { RenderTemplate, getUrls } from './core/urls';
import { MarkdownThemeRenderContext } from './theme-render-context';

/**
 * This is in-built MarkdownTheme which extends TypeDocs Theme class.
 * This follows the implementation of TypeDoc's {@link DefaultTheme}.
 *
 */
export class MarkdownTheme extends Theme {
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

  readmeTemplate = (page: MarkdownPageEvent<ProjectReflection>) => {
    return this.getRenderContext(page).templates.readmeTemplate(page);
  };

  projectTemplate = (page: MarkdownPageEvent<ProjectReflection>) => {
    return this.getRenderContext(page).templates.projectTemplate(page);
  };

  reflectionTemplate = (page: MarkdownPageEvent<DeclarationReflection>) => {
    return this.getRenderContext(page).templates.reflectionTemplate(page);
  };

  memberTemplate = (page: MarkdownPageEvent<DeclarationReflection>) => {
    return this.getRenderContext(page).templates.memberTemplate(page);
  };

  getRenderContext(page: MarkdownPageEvent<Reflection> | null) {
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
        this.memberTemplate,
        ReflectionKind.Function,
      );

      mappings[ReflectionKind.TypeAlias] = memberMapping(
        this.memberTemplate,
        ReflectionKind.TypeAlias,
      );

      mappings[ReflectionKind.Variable] = memberMapping(
        this.memberTemplate,
        ReflectionKind.Variable,
      );
    }

    return mappings[kind];
  }
}
