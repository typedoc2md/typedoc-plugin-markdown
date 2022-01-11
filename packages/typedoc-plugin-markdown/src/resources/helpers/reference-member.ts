import * as Handlebars from 'handlebars';
import { ReferenceReflection } from 'typedoc';
import { MarkdownThemeContext } from '../../theme-context';

export default function (context: MarkdownThemeContext) {
  Handlebars.registerHelper(
    'referenceMember',
    function (this: ReferenceReflection) {
      const referenced = this.tryGetTargetReflectionDeep();

      if (!referenced) {
        return `Re-exports ${this.name}`;
      }

      if (this.name === referenced.name) {
        return `Re-exports [${referenced.name}](${context.urlTo(referenced)})`;
      }

      return `Renames and re-exports [${referenced.name}](${context.urlTo(
        referenced,
      )})`;
    },
  );
}
