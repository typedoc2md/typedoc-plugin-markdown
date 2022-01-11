import * as Handlebars from 'handlebars';
import { PageEvent, ParameterReflection } from 'typedoc';
import { escapeChars } from '../../utils';
import { MarkdownThemeContext } from '../../theme-context';

export default function (context: MarkdownThemeContext) {
  Handlebars.registerHelper(
    'reflectionTitle',
    function (this: PageEvent<any>, shouldEscape = true) {
      const title: string[] = [''];
      if (
        this.model &&
        this.model.kindString &&
        this.url !== this.project.url
      ) {
        title.push(`${this.model.kindString}: `);
      }
      if (this.url === this.project.url) {
        title.push(context.options.indexTitle || this.project.name);
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
