import { Options } from './options';

export function compilePartial(partialName: string, data: {}) {
  const template = Options.theme.resources.partials.getResource(partialName).getTemplate();
  return template(data);
}

export function compileTemplate(templateName: string, data: {}) {
  const template = Options.theme.resources.templates.getResource(templateName).getTemplate();
  return template(data);
}

export function getAnchorRef(ref: string) {
  return ref.replace(/_|\/|\.| /g, '-').replace(/"/g, '').replace(/ /g, '-').toLowerCase();
}
