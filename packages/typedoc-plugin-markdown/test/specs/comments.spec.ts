import * as Handlebars from 'handlebars';
import { ProjectReflection } from 'typedoc';

describe(`Comments:`, () => {
  let project: ProjectReflection;
  let partial: Handlebars.TemplateDelegate;
  beforeAll(async () => {
    project = await global.bootstrap(['comments.ts'], {
      includes: './test/stubs/inc',
      media: './test/stubs/media',
    });
    partial = global.getPartial('comment');
  });

  test(`should build @link references'`, () => {
    expect(
      global.compileTemplate(
        partial,
        project.getChildByName('commentWithDocLinks'),
      ),
    ).toMatchSnapshot();
  });

  test(`should convert symbols brackets to symbol links'`, () => {
    expect(
      global.compileTemplate(
        partial,
        project.getChildByName('commentsWithSymbolLinks'),
      ),
    ).toMatchSnapshot();
  });

  test(`should convert comments with fenced block'`, () => {
    expect(
      global.compileTemplate(
        partial,
        project.getChildByName('commentsWithFencedBlock'),
      ),
    ).toMatchSnapshot();
  });

  test(`should convert comments with tags'`, () => {
    expect(
      global.compileTemplate(
        partial,
        project.getChildByName('commentsWithTags'),
      ),
    ).toMatchSnapshot();
  });

  test(`should allow html in comments'`, () => {
    expect(
      global.compileTemplate(
        partial,
        project.getChildByName('commentsWithHTML'),
      ),
    ).toMatchSnapshot();
  });
});
