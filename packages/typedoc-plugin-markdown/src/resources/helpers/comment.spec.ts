import * as Handlebars from 'handlebars';

import { setup } from '../../../test/utils';

describe(`[helpers] comment`, () => {
  let app: any;
  let project: any;
  let helpersComponent: any;

  beforeAll(() => {
    ({ app, project } = setup(['comments', 'classes']));
    helpersComponent = app.renderer.getComponent('helpers');
  });

  test(`should build @link references'`, () => {
    expect(
      Handlebars.helpers.comment.call(
        project.findReflectionByName('commentWithDocLinks').comment.text,
      ),
    ).toMatchSnapshot();
  });

  test(`should convert symbols brackets to symbol links'`, () => {
    expect(
      Handlebars.helpers.comment.call(
        project.findReflectionByName('commentsWithSymbolLinks').comment.text,
      ),
    ).toMatchSnapshot();
  });

  test(`should set warnings if symbol not found'`, () => {
    expect(helpersComponent.warnings.length > 0).toBeTruthy();
  });

  test(`should convert comments with includes'`, () => {
    expect(
      Handlebars.helpers.comment.call(
        project.findReflectionByName('commentsWithIncludes').comment.text,
      ),
    ).toMatchSnapshot();
  });
});
