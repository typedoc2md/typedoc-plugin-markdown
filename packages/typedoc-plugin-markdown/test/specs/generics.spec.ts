import * as Handlebars from 'handlebars';
import { SignatureReflection } from 'typedoc';

import { TestApp } from '../test-app';

describe(`Generics:`, () => {
  let testApp: TestApp;
  let partial: Handlebars.TemplateDelegate;
  let declarationPartial: Handlebars.TemplateDelegate;
  let reflectionTemplate: Handlebars.TemplateDelegate;

  beforeAll(() => {
    partial = TestApp.getPartial('member.signature');
    declarationPartial = TestApp.getPartial('member.declaration');
  });

  beforeEach(async () => {
    testApp = new TestApp(['generics.ts']);
    await testApp.bootstrap();
    TestApp.stubPartials([
      'comment',
      'member.signature',
      'members',
      'member.sources',
    ]);
    TestApp.stubHelpers(['toc', 'breadcrumbs', 'hierarchy', 'returns']);
    reflectionTemplate = TestApp.getTemplate('reflection');
  });

  test(`should compile class with type params`, () => {
    expect(
      TestApp.compileTemplate(reflectionTemplate, {
        model: testApp.findReflection('ClassWithTypeParams'),
        project: testApp.project,
      }),
    ).toMatchSnapshot();
  });

  test(`should compile function with a simple type param'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('functionWithTypeParam')
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile function with complex type params'`, () => {
    expect(
      TestApp.compileTemplate(
        partial,
        testApp.findReflection('functionWithTypeParams')
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile type with nested generics'`, () => {
    expect(
      TestApp.compileTemplate(
        declarationPartial,
        testApp.findReflection('nestedGenerics'),
      ),
    ).toMatchSnapshot();
  });

  test(`should compile generics with defaults'`, () => {
    expect(
      TestApp.compileTemplate(
        declarationPartial,
        testApp.findReflection('genericsWithDefaults')
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });
});
