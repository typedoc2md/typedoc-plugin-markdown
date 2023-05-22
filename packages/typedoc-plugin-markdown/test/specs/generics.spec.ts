import { ProjectReflection, SignatureReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../src/theme/definition';

describe(`Generics:`, () => {
  let project: ProjectReflection;
  let context: MarkdownThemeRenderContext;

  beforeAll(async () => {
    ({ project, context } = await global.bootstrap(['generics.ts'], {
      stubPartials: [
        'breadcrumbs',
        'comment',
        'members',
        'sources',
        'toc',
        'header',
      ],
    }));
  });

  test(`should compile class with type params`, () => {
    expect(
      context.reflectionTemplate({
        model: project.getChildByName('ClassWithTypeParams'),
        project: project,
      } as any),
    ).toMatchSnapshot();
  });

  test(`should compile function with a simple type param'`, () => {
    expect(
      context.signatureMember(
        (project.getChildByName('functionWithTypeParam') as any)
          .signatures[0] as SignatureReflection,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile function with complex type params'`, () => {
    expect(
      context.signatureMember(
        (project.getChildByName('functionWithTypeParams') as any)
          .signatures[0] as SignatureReflection,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile type with nested generics'`, () => {
    expect(
      context.declarationMember(
        project.getChildByName('nestedGenerics') as any,
        2,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile generics with defaults'`, () => {
    expect(
      context.declarationMember(
        project.getChildByName('genericsWithDefaults') as any,
        2,
      ),
    ).toMatchSnapshot();
  });
});
