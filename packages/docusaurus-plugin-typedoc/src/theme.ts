import { Reflection, ReflectionType, SomeType } from 'typedoc';
import {
  MarkdownPageEvent,
  MarkdownTheme,
  MarkdownThemeRenderContext,
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

class DocusuaurusThemeThemeRenderContext extends MarkdownThemeRenderContext {
  // adds space around type arguments as docusaurus generates broken links without it in certain use-cases (see https://github.com/facebook/docusaurus/issues/9518)
  override typeArguments = (typeArguments: SomeType[]) => {
    return `\\< ${typeArguments
      .map((typeArgument) =>
        typeArgument instanceof ReflectionType
          ? this.reflectionType(typeArgument)
          : this.someType(typeArgument),
      )
      .join(', ')} \\>`;
  };
}
