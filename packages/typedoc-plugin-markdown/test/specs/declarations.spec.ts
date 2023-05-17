import { ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../src/render-context';

describe(`Declarations:`, () => {
  let project: ProjectReflection;
  let context: MarkdownThemeRenderContext;

  beforeAll(async () => {
    ({ project, context } = await global.bootstrap(['declarations.ts'], {
      stubPartials: ['sources'],
    }));
  });

  test(`should compile a const with default value`, () => {
    expect(
      context.declarationMember(
        project.getChildByName('stringConstWithDefaultValue') as any,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile a let with default value`, () => {
    expect(
      context.declarationMember(
        project.getChildByName('stringLetWithDefaultValue') as any,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile an undefined declaration`, () => {
    expect(
      context.declarationMember(
        project.getChildByName('undefinedNumberDeclaration') as any,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile object literal declaration`, () => {
    expect(
      context.declarationMember(
        project.getChildByName('objectLiteralDeclaration') as any,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile object literal cast as a const`, () => {
    expect(
      context.declarationMember(
        project.getChildByName('objectLiteralAsConstDeclaration') as any,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile type literal declaration`, () => {
    expect(
      context.declarationMember(
        project.getChildByName('typeLiteralDeclaration') as any,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile declaration with double underscores in name and value`, () => {
    expect(
      context.declarationMember(
        project.getChildByName('__DOUBLE_UNDERSCORES_DECLARATION__') as any,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile any function type`, () => {
    expect(
      context.declarationMember(
        project.getChildByName('AnyFunctionType') as any,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile function declaration`, () => {
    expect(
      context.declarationMember(
        project.getChildByName('functionDeclaration') as any,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile indexable declaration`, () => {
    expect(
      context.declarationMember(
        project.getChildByName('indexableDeclaration') as any,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile enum declaration`, () => {
    expect(
      context.declarationMember(
        (project.getChildByName('EnumDeclarations') as any).children[0],
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile enum declaration with defaults`, () => {
    expect(
      context.declarationMember(
        (project.getChildByName('EnumDeclarationsWithDefaults') as any)
          .children[0],
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile declaration with accessors`, () => {
    expect(
      context.declarationMember(
        project.getChildByName('getterAndSetter') as any,
        2,
      ),
    ).toMatchSnapshot();
  });
});
