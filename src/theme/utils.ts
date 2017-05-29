import * as fs from 'fs';
import * as Handlebars from 'handlebars';
import * as path from 'path';

export function compileTemplate(template: string, data: {}) {
  const source = templateToString(template);
  const md: HandlebarsTemplateDelegate = Handlebars.compile(source);
  return new Handlebars.SafeString(md(data));
}

function templateToString(template: string) {
  return fs.readFileSync(path.join(__dirname, `/${template}`)).toString();
}
