import * as Handlebars from 'handlebars';
import * as path from 'path';
import { Application } from 'typedoc';

describe(`CommentsPlugin`, () => {
  const out = path.join(__dirname, '..', 'test', 'out');

  const app = new Application({
    module: 'CommonJS',
    includes: './src/test/fixtures/inc/',
    media: './src/test/fixtures/media/',
    theme: 'markdown',
    plugin: path.join(__dirname, '../../dist/index'),
  });

  const project = app.convert(app.expandInputFiles(['./src/test/examples']));
  app.generateDocs(project, out);

  test(`should define helper'`, () => {
    const helpers = Handlebars.helpers;
    expect(helpers.comment).toBeDefined();
  });

  test(`should convert symbols brackets to symbol links'`, () => {
    expect(go(project.findReflectionByName('commentsWithSymbolLinks').comment.text)).toMatchSnapshot();
  });

  test(`should convert comments with includes'`, () => {
    expect(go(project.findReflectionByName('commentsWithIncludes').comment.text)).toMatchSnapshot();
  });

  function go(text: string) {
    const template = Handlebars.compile('{{{comment}}}');
    return template(text);
  }
});
