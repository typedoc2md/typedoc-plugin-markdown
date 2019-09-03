import * as Handlebars from 'handlebars';
import * as path from 'path';
import { Application } from 'typedoc';

describe(`CommentsPlugin`, () => {
  beforeAll(() => {
    const app = new Application({
      module: 'CommonJS',
      includes: './src/test/fixtures/inc/',
      media: './src/test/fixtures/media/',
      theme: 'markdown',
      plugin: path.join(__dirname, '../../dist/index'),
    });
    app.convert(app.expandInputFiles(['./src/test/examples']));
  });

  test(`should define helper'`, () => {
    const helpers = Handlebars.helpers;
    expect(helpers.comment).toBeDefined();
  });
});
