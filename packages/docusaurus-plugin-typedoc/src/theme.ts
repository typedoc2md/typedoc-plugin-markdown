import { Reflection, ReflectionType, SomeType } from 'typedoc';
import {
  MarkdownPageEvent,
  MarkdownTheme,
  MarkdownThemeContext,
} from 'typedoc-plugin-markdown';

export class DocusuaurusTheme extends MarkdownTheme {
  override getRenderContext(pageEvent: MarkdownPageEvent<Reflection>) {
    return new DocusuaurusThemeThemeRenderContext(
      this,
      pageEvent,
      this.application.options,
    );
  }
}

class DocusuaurusThemeThemeRenderContext extends MarkdownThemeContext {
  // adds space around type arguments as docusaurus generates broken links without it in certain use-cases (see https://github.com/facebook/docusaurus/issues/9518)
  override partials = {
    ...this.partials,
    typeArguments: (typeArguments: SomeType[]) => {
      return `\\< ${typeArguments
        .map((typeArgument) =>
          typeArgument instanceof ReflectionType
            ? this.partials.reflectionType(typeArgument)
            : this.partials.someType(typeArgument),
        )
        .join(', ')} \\>`;
    },
  };
}
