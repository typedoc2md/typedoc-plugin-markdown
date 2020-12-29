import * as Handlebars from 'handlebars';

import { TestApp } from '../test-app';

describe(`Comments:`, () => {
  let testApp: TestApp;
  let partial: Handlebars.TemplateDelegate;
  beforeAll(async () => {
    testApp = new TestApp(['comments.ts']);
    await testApp.bootstrap({
      includes: './test/stubs/inc',
      media: './test/stubs/media',
    });
    partial = TestApp.getPartial('comment');
  });

  test(`should build @link references'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('commentWithDocLinks'),
      ),
    ).toMatchSnapshot();
  });

  test(`should convert symbols brackets to symbol links'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('commentsWithSymbolLinks'),
      ),
    ).toMatchSnapshot();
  });

  test(`should convert comments with fenced block'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('commentsWithFencedBlock'),
      ),
    ).toMatchSnapshot();
  });

  test(`should convert comments with includes'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('commentsWithIncludes'),
      ),
    ).toMatchSnapshot();
  });

  test(`should convert comments with tags'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('commentsWithTags'),
      ),
    ).toMatchSnapshot();
  });

  test(`should allow html in comments'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('commentsWithHTML'),
      ),
    ).toMatchSnapshot();
  });
});
