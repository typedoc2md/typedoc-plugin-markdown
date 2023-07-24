import * as Handlebars from 'handlebars';
import { PageEvent, ParameterReflection, ReflectionKind } from 'typedoc';
import { MarkdownTheme } from '../../theme';
import { escapeChars, getDisplayName } from '../../utils';

export default function (theme: MarkdownTheme) {
  Handlebars.registerHelper(
    'reflectionTitle',
    function (this: PageEvent<any>, shouldEscape = true) {
      const titleTemplate = theme.getOption('titleTemplate') as string;
      if (this.url === this.project.url) {
        return theme.indexTitle || getDisplayName(this.model);
      } else {
        const title: string[] = [''];
        title.push(
          shouldEscape ? escapeChars(this.model.name) : this.model.name,
        );
        if (this.model.typeParameters) {
          const typeParameters = this.model.typeParameters
            .map((typeParameter: ParameterReflection) => typeParameter.name)
            .join(', ');
          title.push(`<${typeParameters}${shouldEscape ? '\\>' : '>'}`);
        }
        return this.model.kind
          ? titleTemplate
              .replace('{title}', title.join(''))
              .replace('{kind}', ReflectionKind.singularString(this.model.kind))
          : title.join('');
      }
    },
  );
}
