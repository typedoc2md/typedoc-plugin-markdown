import * as Handlebars from 'handlebars';
import { PageEvent, ParameterReflection, ReflectionKind } from 'typedoc';
import { escapeChars } from '../../utils';
import { MarkdownTheme } from '../../theme';

export default function (theme: MarkdownTheme) {
  Handlebars.registerHelper(
    'reflectionTitle',
    function (this: PageEvent<any>, shouldEscape = true) {
      const title: string[] = [''];
      if (this.model?.kind && this.url !== this.project.url) {
        title.push(`${ReflectionKind.singularString(this.model.kind)}: `);
      }
      if (this.url === this.project.url) {
        title.push(theme.indexTitle || this.project.name);
      } else {
        title.push(
          shouldEscape ? escapeChars(this.model.name) : this.model.name,
        );
        if (this.model.typeParameters) {
          const typeParameters = this.model.typeParameters
            .map((typeParameter: ParameterReflection) => typeParameter.name)
            .join(', ');
          title.push(`<${typeParameters}${shouldEscape ? '\\>' : '>'}`);
        }
      }
      return title.join('');
    },
  );
}
