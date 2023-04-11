import * as Handlebars from 'handlebars';
import { ProjectReflection, SignatureReflection } from 'typedoc';

describe(`Generics:`, () => {
  let project: ProjectReflection;
  let partial: Handlebars.TemplateDelegate;
  let declarationPartial: Handlebars.TemplateDelegate;
  let reflectionTemplate: Handlebars.TemplateDelegate;

  beforeAll(() => {
    partial = global.getPartial('member.signature');
    declarationPartial = global.getPartial('member.declaration');
  });

  beforeEach(async () => {
    project = await global.bootstrap(['generics.ts']);
    global.stubPartials([
      'comment',
      'member.signature',
      'members',
      'member.sources',
    ]);
    global.stubHelpers(['toc', 'breadcrumbs', 'hierarchy', 'returns']);
    reflectionTemplate = global.getTemplate('reflection');
  });

  test(`should compile class with type params`, () => {
    expect(
      global.compileTemplate(reflectionTemplate, {
        model: project.getChildByName('ClassWithTypeParams'),
        project: project,
      }),
    ).toMatchSnapshot();
  });

  test(`should compile function with a simple type param'`, () => {
    expect(
      global.compileTemplate(
        partial,
        (project.getChildByName('functionWithTypeParam') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile generics with defaults'`, () => {
    expect(
      global.compileTemplate(
        declarationPartial,
        (project.getChildByName('genericsWithDefaults') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });
});
