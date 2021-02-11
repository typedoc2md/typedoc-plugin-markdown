import * as Handlebars from 'handlebars';
import { DeclarationHierarchy } from 'typedoc';
import { PageEvent } from 'typedoc/dist/lib/output/events';

export function ifShowTypeHierarchy(
  this: PageEvent,
  options: Handlebars.HelperOptions,
) {
  const typeHierarchy = this.model?.typeHierarchy as DeclarationHierarchy;
  return typeHierarchy && typeHierarchy.next
    ? options.fn(this)
    : options.inverse(this);
}
