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
