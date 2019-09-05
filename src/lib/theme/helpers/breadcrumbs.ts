import * as Handlebars from 'handlebars';
import { ProjectReflection, Reflection } from 'typedoc';
import { PageEvent } from 'typedoc/dist/lib/output/events';

export function breadcrumbs(this: PageEvent) {
  return breadcrumb(this.model, this.project, []);
}

function breadcrumb(model: Reflection, project: ProjectReflection, md: string[]) {
  if (model && model.parent) {
    breadcrumb(model.parent, project, md);
    if (model.url) {
      md.push(`[${model.name}](${Handlebars.helpers.relativeURL.call(this, model.url)})`);
    } else {
      md.push(model.url);
    }
  } else {
    md.push(`[Globals](${Handlebars.helpers.relativeURL.call(this, project.url)})`);
  }
  return md.join(' › ');
}
