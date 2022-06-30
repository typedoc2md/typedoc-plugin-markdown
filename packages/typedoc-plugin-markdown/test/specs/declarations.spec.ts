import * as Handlebars from 'handlebars';
import { ProjectReflection } from 'typedoc';

describe(`Declarations:`, () => {
  let project: ProjectReflection;

  let template: Handlebars.TemplateDelegate;

  beforeAll(async () => {
    project = await global.bootstrap(['declarations.ts']);
    global.stubPartials(['member.sources']);
    template = global.getPartial('member.declaration');
  });

  test(`should compile a const with default value`, () => {
    expect(
      global.compileTemplate(
        template,
        project.getChildByName('stringConstWithDefaultValue'),
      ),
    ).toMatchSnapshot();
  });

  test(`should compile a let with default value`, () => {
    expect(
      global.compileTemplate(
        template,
        project.getChildByName('stringLetWithDefaultValue'),
      ),
    ).toMatchSnapshot();
  });

  test(`should compile an undefined declaration`, () => {
    expect(
      global.compileTemplate(
        template,
        project.getChildByName('undefinedNumberDeclaration'),
      ),
    ).toMatchSnapshot();
  });

  test(`should compile object literal declaration`, () => {
    expect(
      global.compileTemplate(
        template,
        project.getChildByName('objectLiteralDeclaration'),
      ),
    ).toMatchSnapshot();
  });

  test(`should compile object literal cast as a const`, () => {
    expect(
      global.compileTemplate(
        template,
        project.getChildByName('objectLiteralAsConstDeclaration'),
      ),
    ).toMatchSnapshot();
  });

  test(`should compile type literal declaration`, () => {
    expect(
      global.compileTemplate(
        template,
        project.getChildByName('typeLiteralDeclaration'),
      ),
    ).toMatchSnapshot();
  });

  test(`should compile declaration with double underscores in name and value`, () => {
    expect(
      global.compileTemplate(
        template,
        project.getChildByName('__DOUBLE_UNDERSCORES_DECLARATION__'),
      ),
    ).toMatchSnapshot();
  });

  test(`should compile any function type`, () => {
    expect(
      global.compileTemplate(
        template,
        project.getChildByName('AnyFunctionType'),
      ),
    ).toMatchSnapshot();
  });

  test(`should compile function declaration`, () => {
    expect(
      global.compileTemplate(
        template,
        project.getChildByName('functionDeclaration'),
      ),
    ).toMatchSnapshot();
  });

  test(`should compile callable declaration`, () => {
    expect(
      global.compileTemplate(
        template,
        project.getChildByName('callableDeclaration'),
      ),
    ).toMatchSnapshot();
  });

  test(`should compile indexable declaration`, () => {
    expect(
      global.compileTemplate(
        template,
        project.getChildByName('indexableDeclaration'),
      ),
    ).toMatchSnapshot();
  });

  test(`should compile enum declaration`, () => {
    expect(
      global.compileTemplate(
        template,
        (project.getChildByName('EnumDeclarations') as any).children[0],
      ),
    ).toMatchSnapshot();
  });

  test(`should compile enum declaration with defaults`, () => {
    expect(
      global.compileTemplate(
        template,
        (project.getChildByName('EnumDeclarationsWithDefaults') as any)
          .children[0],
      ),
    ).toMatchSnapshot();
  });

  test(`should compile declaration with accessors`, () => {
    expect(
      global.compileTemplate(
        template,
        project.getChildByName('getterAndSetter'),
      ),
    ).toMatchSnapshot();
  });
});
