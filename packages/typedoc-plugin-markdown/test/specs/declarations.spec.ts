import { ProjectReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../src/theme-context';

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
      context.partials.declarationMember(
        project.getChildByName('stringConstWithDefaultValue') as any,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile a let with default value`, () => {
    expect(
      context.partials.declarationMember(
        project.getChildByName('stringLetWithDefaultValue') as any,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile an undefined declaration`, () => {
    expect(
      context.partials.declarationMember(
        project.getChildByName('undefinedNumberDeclaration') as any,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile object literal declaration`, () => {
    expect(
      context.partials.declarationMember(
        project.getChildByName('objectLiteralDeclaration') as any,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile object literal cast as a const`, () => {
    expect(
      context.partials.declarationMember(
        project.getChildByName('objectLiteralAsConstDeclaration') as any,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile type literal declaration`, () => {
    expect(
      context.partials.declarationMember(
        project.getChildByName('typeLiteralDeclaration') as any,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile declaration with double underscores in name and value`, () => {
    expect(
      context.partials.declarationMember(
        project.getChildByName('__DOUBLE_UNDERSCORES_DECLARATION__') as any,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile any function type`, () => {
    expect(
      context.partials.declarationMember(
        project.getChildByName('AnyFunctionType') as any,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile function declaration`, () => {
    expect(
      context.partials.declarationMember(
        project.getChildByName('functionDeclaration') as any,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile indexable declaration`, () => {
    expect(
      context.partials.declarationMember(
        project.getChildByName('indexableDeclaration') as any,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile enum declaration`, () => {
    expect(
      context.partials.declarationMember(
        (project.getChildByName('EnumDeclarations') as any).children[0],
      ),
    ).toMatchSnapshot();
  });

  test(`should compile enum declaration with defaults`, () => {
    expect(
      context.partials.declarationMember(
        (project.getChildByName('EnumDeclarationsWithDefaults') as any)
          .children[0],
      ),
    ).toMatchSnapshot();
  });

  test(`should compile declaration with accessors`, () => {
    expect(
      context.partials.declarationMember(
        project.getChildByName('getterAndSetter') as any,
      ),
    ).toMatchSnapshot();
  });
});
