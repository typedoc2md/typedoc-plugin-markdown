import * as Handlebars from 'handlebars';
import { PageEvent, ParameterReflection, ReflectionKind } from 'typedoc';
import { MarkdownTheme } from '../../theme';
import { escapeChars, getDisplayName } from '../../utils';

export default function (theme: MarkdownTheme) {
  Handlebars.registerHelper(
    'reflectionTitle',
    function (this: PageEvent<any>, shouldEscape = true) {
      const title: string[] = [''];
      if (this.model?.kind && this.url !== this.project.url) {
        title.push(`${ReflectionKind.singularString(this.model.kind)}: `);
      }
      if (this.url === this.project.url) {
        title.push(theme.indexTitle || getDisplayName(this.model));
      } else {
        title.push(
          shouldEscape ? escapeChars(this.model.name) : this.model.name,
        );
        if (this.model.typeParameters) {
          const typeParameters = this.model.typeParameters
            .map((typeParameter: ParameterReflection) => typeParameter.name)
            .join(', ');
          title.push(
            `${shouldEscape ? '\\<' : '<'}${typeParameters}${
              shouldEscape ? '\\>' : '>'
            }`,
          );
        }
      }
      return title.join('');
    },
  );
}
