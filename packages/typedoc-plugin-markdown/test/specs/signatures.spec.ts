import * as Handlebars from 'handlebars';
import { ProjectReflection, SignatureReflection } from 'typedoc';

describe(`Signatures:`, () => {
  let project: ProjectReflection;
  let partial: Handlebars.TemplateDelegate;

  beforeAll(async () => {
    project = await global.bootstrap(['signatures.ts']);
    global.stubPartials(['member.sources']);
    partial = global.getPartial('member.signature');
  });

  test(`should compile callable signature'`, () => {
    expect(
      global.compileTemplate(
        partial,
        (project.getChildByName('CallableSignature') as any).signatures[0],
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with a flag'`, () => {
    expect(
      global.compileTemplate(
        partial,
        (project.getChildByName('privateFunction') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with params'`, () => {
    expect(
      global.compileTemplate(
        partial,
        (project.getChildByName('functionWithParameters') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile function that returns an object'`, () => {
    expect(
      global.compileTemplate(
        partial,
        (project.getChildByName('functionReturningAnObject') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile a promise that returns an object'`, () => {
    expect(
      global.compileTemplate(
        partial,
        (project.getChildByName('promiseReturningAnObject') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile a promise that returns a symbol'`, () => {
    expect(
      global.compileTemplate(
        partial,
        (project.getChildByName('promiseReturningASymbol') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile function that returns a function'`, () => {
    expect(
      global.compileTemplate(
        partial,
        (project.getChildByName('functionReturningAFunction') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with rest params'`, () => {
    expect(
      global.compileTemplate(
        partial,
        (project.getChildByName('functionWithRest') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with optional params'`, () => {
    expect(
      global.compileTemplate(
        partial,
        (project.getChildByName('functionWithOptionalParam') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with union types'`, () => {
    expect(
      global.compileTemplate(
        partial,
        (project.getChildByName('functionWithUnionTypes') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with default values'`, () => {
    expect(
      global.compileTemplate(
        partial,
        (project.getChildByName('functionWithDefaults') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile signature with @return comments'`, () => {
    expect(
      global.compileTemplate(
        partial,
        (project.getChildByName('commentsInReturn') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile named parameters'`, () => {
    expect(
      global.compileTemplate(
        partial,
        (project.getChildByName('functionWithNamedParams') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile named parameters with comments'`, () => {
    expect(
      global.compileTemplate(
        partial,
        (project.getChildByName('functionWithNamedParamsAndComments') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile pipes in params and comments'`, () => {
    expect(
      global.compileTemplate(
        partial,
        (project.getChildByName('functionWithPipesInParamsAndComments') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile function with reference type'`, () => {
    expect(
      global.compileTemplate(
        partial,
        (project.getChildByName('functionWithReferenceType') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile function with nested typen params'`, () => {
    expect(
      global.compileTemplate(
        partial,
        (project.getChildByName('functionWithNestedParams') as any)
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });

  test(`should compile class with constructor'`, () => {
    expect(
      global.compileTemplate(
        partial,
        (project.getChildByName('ClassWithConstructor') as any).children[0]
          .signatures[0] as SignatureReflection,
      ),
    ).toMatchSnapshot();
  });
});
