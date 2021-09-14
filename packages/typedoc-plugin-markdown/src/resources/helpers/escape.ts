import * as Handlebars from 'handlebars';

export default function () {
  Handlebars.registerHelper('escape', function (str: string) {
    return str
      .replace(/>/g, '\\>')
      .replace(/_/g, '\\_')
      .replace(/`/g, '\\`')
      .replace(/\|/g, '\\|');
  });
}
