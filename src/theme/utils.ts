import { ThemeService } from './service';

export function compilePartial(partialName: string, data: {}) {
  const template = ThemeService.getResources().partials.getResource(partialName).getTemplate();
  return template(data);
}

export function compileTemplate(templateName: string, data: {}) {
  const template = ThemeService.getResources().templates.getResource(templateName).getTemplate();
  return template(data);
}

export function getAnchorRef(ref: string) {
  return ref.replace(/_|\/|\.| /g, '-').replace(/"/g, '').replace(/ /g, '-').toLowerCase();
}
