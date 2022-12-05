import { ProjectReflection, SignatureReflection } from 'typedoc';
import { MarkdownThemeRenderContext } from '../../src/theme-context';

describe(`Generics:`, () => {
  let project: ProjectReflection;
  let context: MarkdownThemeRenderContext;

  beforeAll(async () => {
    ({ project, context } = await global.bootstrap(['generics.ts'], {
      stubPartials: ['breadcrumbs', 'comment', 'members', 'sources', 'toc'],
    }));
  });

  test(`should compile class with type params`, () => {
    expect(
      context.templates.reflectionTemplate({
        model: project.getChildByName('ClassWithTypeParams'),
        project: project,
      } as any),
    ).toMatchSnapshot();
  });

  test(`should compile function with a simple type param'`, () => {
    expect(
      context.partials.signatureMember(
        (project.getChildByName('functionWithTypeParam') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile function with complex type params'`, () => {
    expect(
      context.partials.signatureMember(
        (project.getChildByName('functionWithTypeParams') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile type with nested generics'`, () => {
    expect(
      context.partials.declarationMember(
        project.getChildByName('nestedGenerics') as any,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile generics with defaults'`, () => {
    expect(
      context.partials.declarationMember(
        project.getChildByName('genericsWithDefaults') as any,
      ),
    ).toMatchSnapshot();
  });
});
