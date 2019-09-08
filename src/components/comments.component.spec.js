const Handlebars = require('handlebars');
const path = require('path');
const fs = require('fs-extra');

describe(`CommentsComponent`, () => {
  let app;
  let project;
  let pluginInstance;
  const out = path.join(__dirname, 'tmp');
  beforeAll(() => {
    app = bootstrapApp({
      includes: './test/stubs/inc/',
      media: './test/stubs/media/',
      listInvalidSymbolLinks: true,
    });
    project = app.convert(app.expandInputFiles([stubsDirectory]));
    app.generateDocs(project, out);
    pluginInstance = app.renderer.getComponent('comments');
  });

  afterAll(() => {
    fs.removeSync(out);
  });

  test(`should define helper'`, () => {
    const helpers = Handlebars.helpers;
    expect(helpers.comment).toBeDefined();
  });

  test(`should convert symbols brackets to symbol links'`, () => {
    expect(
      Handlebars.helpers.comment.call(project.findReflectionByName('commentsWithSymbolLinks').comment.text),
    ).toMatchSnapshot();
  });

  test(`should set warnings if symbol not found'`, () => {
    expect(pluginInstance.warnings.length > 0).toBeTruthy();
  });

  test(`should convert comments with includes'`, () => {
    expect(
      Handlebars.helpers.comment.call(project.findReflectionByName('commentsWithIncludes').comment.text),
    ).toMatchSnapshot();
  });

  test(`should build @link references'`, () => {
    expect(
      Handlebars.helpers.comment.call(project.findReflectionByName('functionWithDocLink').signatures[0].comment.text),
    ).toMatchSnapshot();
  });
});
