import * as fs from 'fs';
import * as Handlebars from 'handlebars';
import * as path from 'path';
import { DeclarationReflection, Reflection } from 'typedoc/dist/lib/models/reflections/index';

export function compileTemplate(template: string, data: {}) {
  const source = templateToString(template);
  const md: HandlebarsTemplateDelegate = Handlebars.compile(source);
  return new Handlebars.SafeString(md(data));
}

function templateToString(template: string) {
  return fs.readFileSync(path.join(__dirname, `/${template}`)).toString();
}

export function getAnchor(item: DeclarationReflection | Reflection) {

  let anchor = '';
  if (item && item.name) {
    const anchorRef = item.name.replace('"', '').replace('"', '').replace('_', '-').toLowerCase();
    const kindRef = item.kindString.toLowerCase();
    let anchorPrefix = '';

    item.flags.forEach((flag) => {
      anchorPrefix = '-' + flag.toLowerCase() + '-';
    });

    // console.log(anchorSuffix);
    switch (item.kindString) {
      case 'External module':
        anchor = `external-module-${anchorRef}-`;
        break;
      case 'Class':
        anchor = `class-${anchorRef}`;
        break;
      case 'Interface':
        anchor = `interface-${anchorRef}`;
        break;
      case 'Module':
        anchor = `module-${anchorRef}`;
        break;
      default:
        anchor = `${anchorPrefix}${anchorRef}-${kindRef}`;
    }

  }

  return `#${anchor}`;
}
