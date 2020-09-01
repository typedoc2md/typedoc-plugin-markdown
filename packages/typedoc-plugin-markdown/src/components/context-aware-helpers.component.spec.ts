import * as Handlebars from 'handlebars';

import { TestApp } from '../../test/utils';

describe(`[component] ContextAwareHelpersComponent`, () => {
  let testApp: TestApp;
  beforeAll(() => {
    testApp = new TestApp(['comments', 'classes']);
    testApp.bootstrap();
  });

  describe(`'comment' helper`, () => {
    test(`should build @link references'`, () => {
      expect(
        Handlebars.helpers.comment.call(
          testApp.project.findReflectionByName('commentWithDocLinks').comment
            .text,
        ),
      ).toMatchSnapshot();
    });

    test(`should convert symbols brackets to symbol links'`, () => {
      expect(
        Handlebars.helpers.comment.call(
          testApp.project.findReflectionByName('commentsWithSymbolLinks')
            .comment.text,
        ),
      ).toMatchSnapshot();
    });

    test(`should convert comments with includes'`, () => {
      expect(
        Handlebars.helpers.comment.call(
          testApp.project.findReflectionByName('commentsWithIncludes').comment
            .text,
        ),
      ).toMatchSnapshot();
    });
  });
});
